# om-nad-demo (Ocean Magics) - Agency Edition

This is a production-ready React + Vite + Tailwind demo for "Ocean Magics". It includes light & dark mode, premium hamburger with slide drawer, full-width hero with parallax, section backgrounds, Framer Motion animations, and CDN-hosted demo images (Unsplash).

## Deploy to Vercel via Bitbucket (no local machine required)

1. Create a Bitbucket repo named `om-nad-demo`.
2. Upload the unzipped project files to the repo using Bitbucket's web UI.
3. Go to https://vercel.com → Import Project → select Bitbucket repo.
4. Vercel will detect Vite. Confirm build command `npm run build` and output `dist`.
5. Deploy and the site will be available at `https://<your-project>.vercel.app`.

## Local dev (optional)
```
npm install
npm run dev
```

## Notes
- Dark mode enabled via CSS class `.dark` on <html>.
- Images load from Unsplash CDN; replace in `src/config.js` if needed.
