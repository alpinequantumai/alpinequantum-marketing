# Alpine Quantum — Marketing Site

Static HTML/CSS/JS marketing site for Alpine Quantum.

**⚠️ Read `STATUS.md` before publishing.** This site contains fictional case studies, fictional team references, and fictional metrics that need to be removed or rewritten before going live.

---

## What's in this folder

A complete static marketing site:

- **32 HTML pages** across homepage, services, industries, case studies, blog, careers, legal
- **Shared design system** in `styles.css` (a single CSS file with all components)
- **Minimal JavaScript** in `site.js` (just nav toggles and smooth scrolling)
- **Brand assets**: logo SVG (inline in every page), favicon, hero/footer images

No build step. No bundler. No dependencies. Open `index.html` in a browser.

---

## File structure

```
alpinequantum-site/
├── README.md                                   # This file
├── STATUS.md                                   # ⚠️ Read this before publishing
├── .gitignore
│
├── index.html                                  # Homepage
├── styles.css                                  # Complete design system
├── site.js                                     # Minimal JS
├── favicon.svg / favicon.ico                   # Browser favicon
├── images/                                     # 5 image assets
│
└── pages/
    ├── about.html                              # About us
    ├── contact.html                            # Contact form
    ├── careers.html                            # Open roles + benefits
    │
    ├── services/                               # 4 service detail pages
    │   ├── artificial-intelligence.html
    │   ├── software-engineering.html
    │   ├── cloud-devops.html
    │   └── big-data-analytics.html
    │
    ├── industries/                             # 4 industry detail pages
    │   ├── financial-services.html
    │   ├── healthcare.html
    │   ├── retail.html
    │   └── manufacturing.html
    │
    ├── work/                                   # 7 case study pages + listing
    │   ├── index.html
    │   ├── collections-ai-northbank.html
    │   ├── patient-portal-atlas-health.html
    │   ├── meridian-real-time-recommendations.html
    │   ├── veridia-monolith-modernization.html
    │   ├── lumen-cloud-finops.html
    │   ├── quantum-predictive-maintenance.html
    │   └── internal-agent-framework.html
    │
    ├── insights/                               # 10 blog articles + listing
    │   ├── index.html
    │   ├── building-agentic-systems-production.html
    │   ├── the-case-for-boring-infrastructure.html
    │   ├── when-not-to-use-a-language-model.html
    │   ├── the-real-cost-of-multi-region.html
    │   ├── notes-from-a-year-of-lakehouse-deployments.html
    │   ├── hiring-senior-engineers-2026.html
    │   ├── next-decade-enterprise-software.html
    │   ├── evaluating-rag-systems.html
    │   ├── weekly-engineering-demos.html
    │   └── finops-for-engineers.html
    │
    └── legal/                                  # 2 legal pages
        ├── privacy.html
        └── terms.html
```

---

## How to preview locally

The simplest way:

```bash
cd alpinequantum-site
python3 -m http.server 8000
# Then open http://localhost:8000 in browser
```

Or just double-click `index.html` to open it in your default browser (some images may not load due to file:// protocol restrictions; the Python option above is more reliable).

---

## Design system

**Colors (CSS variables in `styles.css`):**
- `--ink: #0A0A0B` — primary text and dark backgrounds
- `--paper: #FFFFFF` — page background
- `--accent: #FF5B2E` — Quantum Orange (use sparingly for emphasis)
- `--mist: #F5F5F2` — subtle backgrounds
- `--surface-2: #FAFAF8` — alternate light backgrounds

**Typography:**
- **Inter Tight** for all text (300-800 weight available). No serifs anywhere. No italics for body text.
- **JetBrains Mono** for technical labels, code, eyebrows, metadata

**Brand treatment:**
- The word "Quantum" appears in `--accent` color + `font-weight: 600` everywhere it appears in the brand name (NOT italic)
- Logo is inline SVG (no image file) — see top of any HTML file for the markup

---

## How to deploy

This is a fully static site. Recommended host:

### Cloudflare Pages (free, ~5 min setup)

```bash
# Initialize git
cd alpinequantum-site
git init
git add .
git commit -m "Initial: marketing site"

# Push to GitHub
gh repo create alpinequantum-site --private --source=. --push

# Connect to Cloudflare Pages:
# - pages.cloudflare.com → Create a project → Connect to GitHub
# - Select the repo, accept all defaults (no build command, output dir = "/")
# - First deploy completes in ~3 minutes
```

### Alternative hosts (all free for static sites)

- **Netlify** — drag-and-drop the folder, or connect via GitHub
- **Vercel** — `vercel deploy` from inside the folder
- **GitHub Pages** — enable Pages in repo settings, branch = main, folder = root

### Custom domain

Once deployed, point `alpinequantum.com` to whichever host you chose. Cloudflare Pages handles SSL automatically.

---

## Before publishing — required reading

**Read `STATUS.md`.**

It documents the gap between what's on the site and what's true. It also lays out specific changes the founder needs to make (or approve removal of) before this site can responsibly go live.

The short version: 17 of 32 pages contain fabricated content (case studies, blog articles with placeholder author names, fictional team/office references) that needs to be removed or replaced before launch.

---

## Editing the site

Each HTML page is self-contained — open it in any text editor, change content, save, refresh browser.

- Common styling lives in `styles.css`
- Each page has page-specific styles in a `<style>` block in its `<head>`
- The site uses CSS variables extensively — change a color in `:root` and it propagates everywhere

To add a new page:
1. Copy any existing similar page as a starting template
2. Update breadcrumb, title, meta description
3. Add link from relevant nav/footer/parent pages
4. Save in the appropriate `pages/` subfolder

---

## License

Proprietary — content is for Alpine Quantum Private Limited. The design system and code patterns are free for the founder to reuse anywhere.
