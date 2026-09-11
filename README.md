# pisscanceroff.org — GitHub Pages site

Static, no build step. Everything in this folder is what gets served.

## Deploy
1. Create a repo (e.g. `pisscanceroff`). Copy the contents of this `site/` folder to the repo root (or keep them in a `docs/` folder).
2. Commit and push.
3. Repo → Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` (or `/docs`). Save.
4. The site is live at `https://<user>.github.io/<repo>/` in about a minute.
5. Custom domain: add a `CNAME` file containing `pisscanceroff.org`, then point the domain's DNS at GitHub Pages (A records 185.199.108.153 / .109 / .110 / .111 and a `www` CNAME to `<user>.github.io`). Tick "Enforce HTTPS" once the certificate is issued.

## Edit content
- `js/data.js` — raised amount, goal, race start instant (for the countdown), training stats (miles/steps/hours/runs), charity line, Venmo, email, Strava/Instagram links, pledge-form IDs. This is the only file you need to touch for routine updates.
- `assets/photos/` — drop `hero.jpg` and `shirt.jpg` (see README there).
- Copy text lives in `js/sections.jsx` (The overview, The why, Ways to give) and `js/hero.jsx` (headline).

## Structure
```
site/
  index.html            page shell, responsive (matchMedia at 720px)
  .nojekyll             tells GitHub Pages to serve files as-is
  CNAME                 (add this) custom domain
  css/styles.css        fonts, color/type/spacing tokens, base styles
  js/pco-components.js  Button, ProgressBar, BigNumber, UpdateItem, Badge, Input, Nav, Footer
  js/hero.jsx           hero section
  js/sections.jsx       overview, why, ways to give, training stats, donate/pledge modals, mobile sticky bar
  js/data.js            editable numbers and updates
  assets/fonts/         Oswald (OFL). Inter loads from Google Fonts.
  assets/logo/          all logo variants + favicon
  assets/photos/        your real photos
```

## Pledge form (Google Form → Sheet)
"Join the pledge" in The run section posts each pledge straight into a Google Form you own; responses land in the form's linked Sheet with a timestamp. Visitors never see Google. Config is the `pledge` block in `js/data.js`:
- `formId` — the long token in the form's public link, between `/d/e/` and `/viewform`.
- `entries.name / email / phone / amount` — the `entry.NNN` id of each question. Get them from ⋮ → "Get pre-filled link": fill every box, Get link, and read the `entry.NNN=` pairs out of the URL (in question order). Empty boxes are left out of the link.
- `entries.phone` — set `""` to hide the phone field (then email becomes required).
- In the form's Settings → Responses, keep "Collect email addresses" and "Limit to 1 response" **off** — either one forces a Google sign-in and blocks submissions from the site.
- The pledge-per-mile question is **multiple choice**, so the site sends the amount formatted like its options (`$1.00`). `amountChoices` in `data.js` must list those options exactly; an amount not in the list (e.g. the site's $5) is sent through the question's **Other** option, so keep "Other" enabled. If you ever switch that question to Short answer, set `amountChoices: []`.
- No question in the form should be marked **Required** — the site validates, and Google silently drops a submission that fails a required check.
- **Debugging:** open the site with `?pledgedebug=1` on the URL (e.g. `https://pisscanceroff.org/?pledgedebug=1`) and submit a pledge. Instead of a hidden submission, Google's response page opens in a new tab: "Your response has been recorded" means it worked; a sign-in prompt or "This is a required question" tells you which form setting is blocking it.

## Notes
- React, ReactDOM and Babel load from unpkg (CDN). JSX is compiled in the browser; fine for a one-page site.
- Donate buttons open a mock amount picker. Wire the "Give" button to your charity's donation URL and the Venmo button to `https://venmo.com/<handle>` in `js/sections.jsx` (`DonateModal`).
