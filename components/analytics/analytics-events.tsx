"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getPagePath, trackEvent } from "@/lib/analytics";

const scrollMilestones = [25, 50, 75, 100];

function getWhatsAppAnchor(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return null;
  }

  return target.closest("a[href*='wa.me'], a[href*='whatsapp.com']") as HTMLAnchorElement | null;
}

export function AnalyticsEvents() {
  const pathname = usePathname();
  const trackedScrollMilestones = useRef<Set<number>>(new Set());
  const ticking = useRef(false);

  useEffect(() => {
    trackedScrollMilestones.current.clear();
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const anchor = getWhatsAppAnchor(event.target);
      if (!anchor) return;

      const label = anchor.textContent?.trim() || anchor.getAttribute("aria-label") || "whatsapp_click";
      trackEvent("whatsapp_click", {
        page_path: getPagePath(),
        link_url: anchor.href,
        link_text: label,
      });
    }

    const start = window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(cb, 1));
    const stop = window.cancelIdleCallback ?? window.clearTimeout;
    const idleId = start(() => {
      document.addEventListener("click", handleClick, { passive: true });
    });

    return () => {
      stop(idleId);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    function readScrollDepth() {
      ticking.current = false;

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) {
        return;
      }

      const progress = Math.min(100, Math.round((window.scrollY / documentHeight) * 100));

      for (const milestone of scrollMilestones) {
        if (progress >= milestone && !trackedScrollMilestones.current.has(milestone)) {
          trackedScrollMilestones.current.add(milestone);
          trackEvent("scroll_depth", {
            page_path: getPagePath(),
            scroll_percent: milestone,
          });
        }
      }
    }

    function handleScroll() {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      window.requestAnimationFrame(readScrollDepth);
    }

    readScrollDepth();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
