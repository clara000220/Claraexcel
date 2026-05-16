# Clara Excel Academy — Website

Single-page static site for **Clara Excel Academy** — HRDC-accredited Microsoft Excel, AI and Agentic AI training by **Clara Tan Chai Fang**, based in Kuala Lumpur, Malaysia.

Tagline: **Excel · AI · Automation**.

Built as plain HTML / CSS / vanilla JavaScript — no build step, no framework. Deploys to **GitHub Pages** or **Vercel** with zero config.

## Brand palette (from the Clara Excel Academy logo)

| Token | Hex | Use |
|---|---|---|
| Brand Green | `#1FA94D` | Primary CTAs, accents, the bright "EXCEL ACADEMY" green |
| Deep Green | `#0E2F1F` | Headers, hero, footer — the dark "CLARA" wordmark green |
| Bright Green | `#4FD376` | Hover states, glow |
| White | `#FFFFFF` | Page background |

Topic accents (course tags): pink, blue, purple, teal, red, emerald.

Typography: Inter (UI) + Playfair Display (headings).

## Project structure

```
.
├── index.html              Single-page site
├── assets/
│   ├── css/styles.css      All styles
│   ├── js/main.js          Mobile menu, fade-in, year stamp
│   └── img/
│       ├── logo.png        Clara Excel Academy logo (used in nav)
│       ├── clara.jpg       Optimised headshot (~56 KB)
│       └── logos/          Drop client logo PNGs here
├── .gitignore
└── README.md
```

## Local preview

No build step required. Open `index.html` directly, or for a server-like preview:

```powershell
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Repo **Settings → Pages**.
3. Under "Build and deployment", set **Source = Deploy from a branch**, **Branch = `main` / `(root)`**, save.
4. Wait ~1 minute. Pages will publish at `https://<your-username>.github.io/<repo-name>/`.

## TODO before going public

- [ ] Save the Clara Excel Academy logo as `assets/img/logo.png` (the nav has a text fallback until then).
- [ ] Add real client logos to `assets/img/logos/` and switch the Clients section to render images instead of name tiles.
- [ ] Replace placeholder testimonial quotes with real, attributed quotes.
- [ ] Add a LinkedIn profile URL if Clara wants it linked in the footer.
- [ ] (Optional) Register a custom domain and add a `CNAME` file at repo root.

## Contact

- **WhatsApp:** [+60 11-1300 3886](https://wa.me/601113003886)
- **Location:** Kuala Lumpur, Malaysia
