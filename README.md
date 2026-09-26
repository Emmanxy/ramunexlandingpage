# Ramunex Technologies Landing Page

Vercel-ready React + Vite landing page for Ramunex Technologies.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is written to `dist/`.

## Vercel deployment

Import the GitHub repository into Vercel and use:

- Framework Preset: Vite
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

`vercel.json` already contains the required Vite build settings.

## Optional environment variables

Copy `.env.example` to `.env.local` for local development or add the variables in Vercel Project Settings > Environment Variables.

- `VITE_CONTACT_EMAIL`
- `VITE_RAPPLY_URL`
- `VITE_RAPPLY_DESCRIPTION`

The site works without these values; missing Rapply/contact information is intentionally not invented.

## Important

Do not commit `node_modules`, `dist`, `.env`, or `.vercel`. They are excluded by `.gitignore`.
