# pisscanceroff.org — GitHub Pages site

Static, no build step. Everything in this folder is what gets served.

## Deploy
1. Create a repo (e.g. `pisscanceroff`). Copy the contents of this `site/` folder to the repo root (or keep them in a `docs/` folder).
2. Commit and push.
3. Repo → Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` (or `/docs`). Save.
4. The site is live at `https://<user>.github.io/<repo>/` in about a minute.
5. Custom domain: add a `CNAME` file containing `pisscanceroff.org`, then point the domain's DNS at GitHub Pages (A records 185.199.108.153 / .109 / .110 / .111 and a `www` CNAME to `<user>.github.io`). Tick "Enforce HTTPS" once the certificate is issued.

## Edit content
- `js/data.js` — raised amount, goal, step count, charity line, Venmo, email, training updates. This is the only file you need to touch for routine updates.
- `assets/photos/` — drop `hero.jpg` and `shirt.jpg` (see README there).
- Copy text lives in `js/sections.jsx` (The cause, The run) and `js/hero.jsx` (headline).

## Structure
```
site/
  index.html            page shell, responsive (matchMedia at 720px)
  .nojekyll             tells GitHub Pages to serve files as-is
  CNAME                 (add this) custom domain
  css/styles.css        fonts, color/type/spacing tokens, base styles
  js/pco-components.js  Button, ProgressBar, BigNumber, UpdateItem, Badge, Input, Nav, Footer
  js/hero.jsx           hero section
  js/sections.jsx       cause, run, updates, donate modal, mobile sticky bar
  js/data.js            editable numbers and updates
  assets/fonts/         Oswald (OFL). Inter loads from Google Fonts.
  assets/logo/          all logo variants + favicon
  assets/photos/        your real photos
```

## Notes
- React, ReactDOM and Babel load from unpkg (CDN). JSX is compiled in the browser; fine for a one-page site.
- Donate buttons open a mock amount picker. Wire the "Give" button to your charity's donation URL and the Venmo button to `https://venmo.com/<handle>` in `js/sections.jsx` (`DonateModal`).
