# ~/portfolio.sys

A monochrome, "systems engineer" portfolio. The hero is a live **system
architecture map** (client → about → projects → contact, with skills
branching off); each node routes to a panel below. Built with **Vite +
React 19 + Tailwind v4**.

## Run it

This project targets **Node 22** (a `.nvmrc` is included).

```bash
nvm use            # switches to v22.14.0 (or: nvm install)
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the build
```

## Make it yours — edit one file

Almost everything lives in **`src/data/content.js`**:

- `profile` — name, role, tagline, location, metrics, resume link.
- `projects` — each card. `status` is `'running' | 'wip' | 'archived'`
  (drives the badge color). Set `repo` / `live` to real URLs (or leave
  `'#'` to hide the link).
- `skills` — grouped tech tags.
- `socials` — the "endpoints" list in the contact section.
- `mapNodes` — labels/subtitles for the hero diagram nodes.

### Add your photo
Drop a square-ish image at **`public/assets/profile.jpg`** (or change
`profile.photo`). Until then a placeholder with your initials shows. The
image is rendered grayscale to fit the theme.

## Reskin

All colors and fonts are CSS variables at the top of **`src/index.css`**
(`@theme` block). Change `--color-accent` to swap the single accent color;
everything else is grayscale.

## Deploy

Any static host works (the build output is `dist/`):

- **Vercel / Netlify** — import the repo, framework preset "Vite". Done.
- **GitHub Pages** — set `base: '/<repo-name>/'` in `vite.config.js`,
  then publish `dist/`.

## Structure

```
src/
  data/content.js      ← edit your content here
  components/
    Boot.jsx           boot-sequence intro overlay
    StatusBar.jsx      sticky top bar + nav + clock
    Hero.jsx           intro + live stats + system map
    SystemMap.jsx      the animated SVG architecture diagram
    About.jsx          id-card photo + bio
    Projects.jsx       service-style project cards
    Skills.jsx         config-store style tech list
    Contact.jsx        curl-style contact + endpoints
    Footer.jsx
    Section.jsx        shared titled-panel wrapper
```
