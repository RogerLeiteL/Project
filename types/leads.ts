export type LeadPayload = {
  name: string;
  phone?: string;
  email?: string;
  device: string;
  message: string;
  status?: string;
  submittedAt?: string;
  pagePath?: string;
  source?: string;
};
