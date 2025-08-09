
# DOPAMINE PHARMA — Vercel Static Site

**Build time:** 2025-08-09 00:16

## What is inside
- Bilingual (AR/EN) static site with i18n toggle
- PWA (manifest + service worker)
- Product detail pages
- `vercel.json` for caching & clean URLs
- `404.html`

## Deploy on Vercel (GUI via GitHub — simplest)
1. Create a new **empty GitHub repo** (private or public).
2. Upload the files in this folder to the repo (drag-drop on GitHub web).
3. Go to **vercel.com → Add New → Project → Import Git Repository** and select your repo.
4. Click **Deploy** (no build step needed).
5. Get your preview URL, then **Assign a custom domain** (e.g., yourdomain.org).

## Alternative: Vercel CLI (no Git)
1. Install Node.js (v18+) then `npm i -g vercel`.
2. In terminal, inside this folder run: `vercel` then `vercel --prod`.
3. You get an instant URL. Attach your domain from the Vercel dashboard.

## Domain note
- Point your `.org` domain to Vercel by adding **A** / **CNAME** per Vercel's docs, or use Vercel's nameservers.
