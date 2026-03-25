# Buutech Informática

Site institucional premium em Next.js para assistência técnica de celulares, notebooks e computadores em Caieiras - SP.

## O que este projeto já tem

- Site institucional completo com foco em conversão
- Botões de WhatsApp em pontos estratégicos
- Formulário de orçamento com abertura automática do WhatsApp
- Chatbot FAQ com triagem de lead
- Salvamento de leads via webhook para Google Sheets
- Google Analytics 4 com eventos
- Microsoft Clarity
- SEO técnico com `sitemap.xml`, `robots.txt`, Open Graph e schema `LocalBusiness`
- Layout responsivo premium para desktop e mobile

## Arquitetura escolhida

- `app/`: páginas, layout global, SEO por rota e endpoint de leads com App Router do Next.js
- `components/`: blocos reutilizáveis de interface, layout, chatbot, analytics e formulário
- `config/`: dados centrais da empresa, links e helpers de WhatsApp
- `data/`: textos editáveis, FAQ, serviços, depoimentos e conteúdos de conversão
- `lib/`: utilitários de analytics, SEO e leads
- `types/`: tipos compartilhados do projeto
- `public/`: reservado para imagens e arquivos estáticos futuros

Essa arquitetura foi escolhida para deixar conteúdo, integrações e interface bem separados. Isso facilita manutenção, futuras expansões e troca rápida de textos, contatos e IDs.

## Estrutura de arquivos

```text
.
|-- app
|   |-- api/leads/route.ts
|   |-- contato/page.tsx
|   |-- faq/page.tsx
|   |-- servicos/page.tsx
|   |-- sobre/page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- opengraph-image.tsx
|   |-- page.tsx
|   |-- robots.ts
|   `-- sitemap.ts
|-- components
|   |-- analytics/...
|   |-- chatbot/faq-chatbot.tsx
|   |-- forms/contact-form.tsx
|   |-- layout/...
|   |-- performance/client-enhancers.tsx
|   |-- sections/...
|   `-- ui/...
|-- config/site.ts
|-- data/...
|-- lib/analytics.ts
|-- lib/leads.ts
|-- lib/seo.ts
|-- types/leads.ts
|-- .env.example
|-- eslint.config.mjs
|-- next.config.mjs
|-- package.json
`-- tsconfig.json
```

## Requisitos para rodar

Você vai precisar de:

- `Node.js` instalado
- `npm` funcionando no terminal

Para conferir:

```bash
node -v
npm -v
```

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo de ambiente:

```bash
cp .env.example .env.local
```

No Windows PowerShell, se `cp` não funcionar como esperado, use:

```powershell
Copy-Item .env.example .env.local
```

3. Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador:

```text
http://localhost:3000
```

## Comandos principais

```bash
npm run dev
npm run build
npm run lint
```

## Onde editar os dados principais

### Dados da empresa

Arquivo: `config/site.ts`

Edite aqui:

- nome da empresa
- razão/nome institucional
- cidade
- bairro
- endereço
- telefone
- número do WhatsApp
- mensagem padrão do WhatsApp
- e-mail
- Instagram
- horários
- mapa do Google
- URL final do site
- IDs de analytics

Trechos mais importantes:

```ts
whatsappNumber: "5511999999999",
whatsappDisplay: "(11) 99999-9999",
whatsappMessage: "Olá! Vim pelo site da Buutech Informática e gostaria de solicitar um orçamento.",
```

```ts
siteUrl: "https://www.buutechinfo.com.br",
```

```ts
analytics: {
  gaMeasurementId: "G-XXXXXXXXXX",
  clarityProjectId: "CLARITY_PROJECT_ID",
},
```

### Textos do site

Edite estes arquivos:

- `data/services.ts`: serviços
- `data/faqs.ts`: FAQ do site e base do chatbot
- `data/testimonials.ts`: depoimentos
- `data/content.ts`: diferenciais, perguntas rápidas e textos auxiliares

## Como funciona o WhatsApp no site

Todos os botões usam o helper abaixo, centralizado em `config/site.ts`:

```ts
getWhatsAppLink(message?: string)
```

Isso significa que, ao trocar o número em `whatsappNumber`, todos os botões do site passam a usar o novo WhatsApp automaticamente.

## Variáveis de ambiente

Arquivo: `.env.local`

Atualmente o projeto usa estas variáveis:

```env
LEADS_WEBHOOK_URL=https://script.google.com/macros/s/SEU_WEBHOOK/exec
LEADS_WEBHOOK_SECRET=sua-chave-opcional
```

### O que cada uma faz

- `LEADS_WEBHOOK_URL`: URL do seu webhook do Google Apps Script
- `LEADS_WEBHOOK_SECRET`: chave opcional para proteger o envio de leads

## Google Analytics 4

O projeto já está preparado para GA4. Você só precisa criar a propriedade e colocar o ID.

### Como criar

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Clique em `Administrador`
3. Crie uma conta ou selecione uma existente
4. Crie uma nova propriedade
5. Escolha `Web`
6. Informe a URL do site
7. Copie o `Measurement ID`, que começa com `G-`

Exemplo:

```text
G-ABCD123456
```

### Onde colocar

Arquivo: `config/site.ts`

```ts
analytics: {
  gaMeasurementId: "G-ABCD123456",
  clarityProjectId: "CLARITY_PROJECT_ID",
},
```

### Eventos já implementados

- `whatsapp_click`
- `form_submit`
- `chatbot_open`
- `scroll_depth`

Você não precisa instalar mais nada para o GA4 funcionar além de informar o ID.

## Microsoft Clarity

O projeto também já está pronto para Clarity.

### Como criar

1. Acesse [Microsoft Clarity](https://clarity.microsoft.com/)
2. Faça login com sua conta Microsoft
3. Crie um novo projeto
4. Informe o domínio do site
5. Copie o `Project ID`

### Onde colocar

Arquivo: `config/site.ts`

```ts
analytics: {
  gaMeasurementId: "G-ABCD123456",
  clarityProjectId: "SEU_PROJECT_ID",
},
```

Se o valor continuar como `CLARITY_PROJECT_ID`, o script não será ativado.

## Leads no Google Sheets

O site salva leads via webhook.

Fluxo:

1. formulário ou chatbot coleta dados
2. o site envia os dados para `app/api/leads/route.ts`
3. essa rota encaminha para seu `LEADS_WEBHOOK_URL`
4. o Google Apps Script recebe os dados e grava no Google Sheets

## Formato atual do lead enviado

O backend normaliza e envia dados como estes:

```json
{
  "name": "Nome do cliente",
  "phone": "11999999999",
  "email": "cliente@exemplo.com",
  "device": "Notebook",
  "message": "Notebook não liga",
  "status": "Não",
  "submittedAt": "2026-03-25T12:00:00.000Z",
  "pagePath": "/contato",
  "source": "formulario",
  "company": "Buutech Informática | Assistência Técnica em Caieiras - SP",
  "timestamp": "2026-03-25T12:00:00.000Z",
  "secret": "sua-chave-opcional"
}
```

### Observações sobre a origem do lead

O backend normaliza assim:

- `contact_form` vira `formulario`
- `site_form` vira `formulario`
- `chatbot` continua `chatbot`

## Tutorial completo: Google Sheets + Apps Script

### 1. Criar a planilha

1. Abra o Google Sheets
2. Crie uma nova planilha
3. Dê um nome, por exemplo: `Leads Buutech Informática`

### 2. Abrir o Apps Script

1. Na planilha, clique em `Extensões`
2. Clique em `Apps Script`
3. Apague o conteúdo inicial
4. Cole o script abaixo

### 3. Script recomendado

```javascript
var FORM_SHEET_NAME = "Leads Formulario";
var CHATBOT_SHEET_NAME = "Leads Chatbot";
var WEBHOOK_SECRET = "sua-chave-opcional";

function doGet() {
  return jsonResponse({
    ok: true,
    app: "buutech-webhook"
  });
}

function doPost(e) {
  try {
    var raw = "{}";

    if (e && e.postData && e.postData.contents) {
      raw = e.postData.contents;
    }

    var body = JSON.parse(raw);
    var secret = body.secret || "";

    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      return jsonResponse({
        ok: false,
        error: "unauthorized"
      });
    }

    var source = body.source || "formulario";
    var sheetName = source === "chatbot" ? CHATBOT_SHEET_NAME : FORM_SHEET_NAME;
    var sheet = getSheet(sheetName);

    ensureHeader(sheet);

    sheet.appendRow([
      new Date(),
      body.name || "",
      body.phone || "",
      body.email || "",
      body.device || "",
      body.message || "",
      body.status || "",
      body.pagePath || "",
      source,
      body.company || "",
      body.timestamp || "",
      buildRemarketingTag(body)
    ]);

    return jsonResponse({
      ok: true,
      sheet: sheetName
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: "unexpected_error",
      message: String(error)
    });
  }
}

function getSheet(sheetName) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  return sheet;
}

function ensureHeader(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Recebido em",
    "Nome",
    "Telefone",
    "E-mail",
    "Aparelho",
    "Problema",
    "Liga?",
    "Pagina",
    "Origem",
    "Empresa",
    "Timestamp ISO",
    "Tag Remarketing"
  ]);
}

function buildRemarketingTag(data) {
  var parts = [
    data.source || "site",
    data.device || "sem-aparelho",
    data.status || "sem-status"
  ];

  return parts.join(" | ");
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 4. Publicar o Apps Script

1. Clique em `Implantar`
2. Clique em `Nova implantação`
3. Selecione `Aplicativo da Web`
4. Em acesso, use a opção adequada para permitir o recebimento do webhook
5. Conclua a implantação
6. Copie a URL gerada

### 5. Ligar no projeto

No `.env.local`, cole a URL:

```env
LEADS_WEBHOOK_URL=https://script.google.com/macros/s/SEU_WEBHOOK/exec
LEADS_WEBHOOK_SECRET=sua-chave-opcional
```

A chave em `LEADS_WEBHOOK_SECRET` deve ser igual à constante `WEBHOOK_SECRET` do Apps Script.

### 6. Testar

1. Rode o site com `npm run dev`
2. Abra a página de contato
3. Envie um lead pelo formulário
4. Verifique se ele apareceu na planilha
5. Teste o chatbot também

Se quiser que o e-mail do formulário apareça na planilha, este script já cria a coluna E-mail automaticamente.

## Como publicar na Vercel

A forma mais simples de publicar este projeto é pela Vercel.

### Passo a passo

1. Crie conta em [Vercel](https://vercel.com/)
2. Suba o projeto para GitHub, GitLab ou Bitbucket
3. Importe o repositório na Vercel
4. Configure as variáveis de ambiente:

```env
LEADS_WEBHOOK_URL=...
LEADS_WEBHOOK_SECRET=...
```

5. Faça o deploy
6. Depois do deploy, atualize em `config/site.ts`:

```ts
siteUrl: "https://seudominio.com.br",
```

7. Rode novo deploy para atualizar sitemap, canonical e Open Graph com o domínio correto

## Checklist antes de publicar

- `whatsappNumber` está com o número real
- `whatsappDisplay` está correto
- `address` está correto
- `googleMapsEmbed` está correto
- `instagramUrl` está correto
- `siteUrl` está com o domínio final
- `gaMeasurementId` foi preenchido
- `clarityProjectId` foi preenchido
- `.env.local` ou variáveis da Vercel foram configuradas
- webhook do Google Sheets foi testado
- `npm run build` passou
- `npm run lint` passou

## O que é grátis e o que pode ser pago

### Gratuito

Você pode usar sem custo inicial, em muitos casos:

- `Google Analytics 4`
- `Microsoft Clarity`
- `Google Sheets`
- `Google Apps Script`
- `Next.js`
- `React`
- `Tailwind CSS`
- hospedagem na `Vercel` no plano gratuito, se o volume for pequeno

### Pode ter custo

Os custos mais comuns são estes:

- domínio do site, como `.com.br`
- hospedagem se o tráfego crescer muito ou se precisar de plano pago na Vercel
- conta Google Workspace, se você quiser e-mail profissional do tipo `contato@seudominio.com.br`
- ferramentas extras futuras, como CRM, automação de marketing, chatbot com IA real, disparo de WhatsApp API oficial ou anúncios pagos

### Importante sobre WhatsApp

Os links atuais do site usam `wa.me`, que é gratuito.

Ou seja:
- clicar no botão e abrir conversa no WhatsApp não tem custo da API oficial
- você só teria custo se no futuro quiser usar `WhatsApp Business API` oficial com automações avançadas, atendente automatizado externo, disparos, templates oficiais ou integração com CRM

## O que você precisa para colocar tudo no ar

No mínimo:

1. número real do WhatsApp
2. endereço real
3. horário real
4. domínio do site, se quiser publicar com endereço profissional
5. conta no Google Analytics, se quiser métricas
6. conta no Microsoft Clarity, se quiser mapas de calor e gravações
7. Google Sheets + Apps Script, se quiser salvar leads automaticamente
8. conta na Vercel, se quiser publicar do jeito mais simples

## Resumo final

Se você quiser colocar o site no ar com o básico funcionando, o mínimo é:

- editar `config/site.ts`
- configurar `.env.local`
- ligar Google Sheets
- publicar na Vercel

Se quiser usar tudo o que o projeto já oferece, você também deve ligar:

- Google Analytics 4
- Microsoft Clarity

## Suporte rápido para edição

Arquivos mais importantes do projeto:

- `config/site.ts`
- `.env.local`
- `data/services.ts`
- `data/faqs.ts`
- `data/testimonials.ts`
- `data/content.ts`
- `README.md`



