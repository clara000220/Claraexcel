# Clara Tan Chai Fang — Portfolio Website

Single-page static site for **Clara Tan Chai Fang**, HRDC-accredited Microsoft Excel, Power BI &amp; AI corporate trainer based in Kuala Lumpur, Malaysia.

Built as plain HTML / CSS / vanilla JavaScript — no build step, no framework. Designed to be hosted on **GitHub Pages**.

## Brand palette

| Token | Hex | Use |
|---|---|---|
| Navy | `#1B2A4E` | Primary, headers, hero, footer |
| Gold | `#D4A24C` | CTAs, accents, dividers |
| Cream | `#FAF7EF` | Page background |

Typography: Inter (UI) + Playfair Display (headings).

## Project structure

```
.
├── index.html              Single-page site
├── assets/
│   ├── css/styles.css      All styles
│   ├── js/main.js          Mobile menu, fade-in, year stamp
│   └── img/
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

- [ ] Replace the placeholder client names in the "Companies" section with Clara's confirmed list.
- [ ] Add real client logos to `assets/img/logos/` (only after written permission).
- [ ] Replace placeholder testimonial quotes with real, attributed quotes.
- [ ] Update the email address in the Contact section (currently `claratan@example.com`).
- [ ] Add a LinkedIn profile URL if Clara wants it linked.
- [ ] (Optional) Register a custom domain and add a `CNAME` file at repo root.

## Contact

- **WhatsApp:** [+60 11-1300 3886](https://wa.me/601113003886)
- **Location:** Kuala Lumpur, Malaysia
