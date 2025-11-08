# Web App

This folder contains the Dancing Kitties single-page web app served by Cloudflare Wrangler.

How to run locally from the repository root:

1. Install dependencies at the repo root if needed:

   npm install

2. Start the dev server from the repo root:

   npm run dev:web-app

This runs `wrangler dev --config ./web-app/wrangler.jsonc` which serves `web-app/public/index.html` at http://localhost:8787/.
