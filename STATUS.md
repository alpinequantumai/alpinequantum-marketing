# Site Status — READ BEFORE PUBLISHING

**For the founder of Alpine Quantum.**

This document is the honest disclosure of what's in this site, what's true, what's fabricated, and what needs to change before any of it goes public.

---

## TL;DR

This site was built collaboratively over many sessions between Claude and the person helping you set up Alpine Quantum. The brand identity, design system, and structure are real and excellent. But significant portions of the content describe a company that doesn't yet exist — fictional clients, fabricated case studies, placeholder team members, and made-up metrics.

**You should not publish this site as-is.** Doing so creates risk in three places:

1. **DPIIT recognition risk** — false claims in public marketing can be cross-checked against your application
2. **Client trust risk** — sophisticated B2B buyers verify references; fake ones get caught
3. **Personal reputation risk** — your name on a website making fabricated claims affects your standing

The site **can** be cleaned up to a smaller, fully truthful version that's still well-designed and credible. That's the recommended path.

---

## What's REAL on this site

These elements are accurate, well-built, and can be used as-is:

| Element | Status |
|---|---|
| Brand identity (logo, colors, fonts) | ✅ Real design work, yours to use |
| Design system in `styles.css` | ✅ Production-quality, reusable |
| Page structure and visual templates | ✅ Solid foundation |
| Homepage layout (without specific claims) | ✅ Visual structure is fine |
| Services pages — capability descriptions | ⚠️ Capabilities are reasonable; "we've done this for X" claims need removal |
| Privacy policy structure | ✅ Template-correct (DPDP Act + GDPR compliant) |
| Terms of service structure | ✅ Template-correct |
| Contact page form structure | ✅ Reusable |
| Tagline "Software for the AI era" | ✅ Yours to keep |

---

## What's FABRICATED on this site

These elements describe people, clients, projects, and outcomes that don't exist. They must be removed or fundamentally rewritten before publishing.

### Fictional clients (referenced site-wide)
| Fake client | Where it appears | Action |
|---|---|---|
| North·Bank (Tier-1 financial institution) | Homepage logos, case study, service pages, industry pages | Remove all references |
| Atlas Health Network | Logos, case study, healthcare industry page | Remove all references |
| Meridian Retail Group | Logos, case study, retail industry page | Remove all references |
| Veridia Technologies | Logos, case study, services pages | Remove all references |
| Lumen Co. | Logos, case study | Remove all references |
| Quantum+ Industrial | Logos, case study, manufacturing industry page | Remove all references |

**All 6 client logos in the "trusted by enterprises worldwide" band on the work listing page are fictional.** The whole band needs to come down.

### Fabricated case studies (entire pages)

The following case study pages describe engagements that never happened, with metrics that were invented:

- `pages/work/collections-ai-northbank.html` — "3.2× revenue lift" — fictional
- `pages/work/patient-portal-atlas-health.html` — "52% reduction in onboarding time" — fictional
- `pages/work/meridian-real-time-recommendations.html` — "$24M annual revenue impact" — fictional
- `pages/work/veridia-monolith-modernization.html` — "4.5× deployment frequency" — fictional
- `pages/work/lumen-cloud-finops.html` — "38% cloud cost reduction" — fictional
- `pages/work/quantum-predictive-maintenance.html` — "37% downtime reduction across 23 plants" — fictional
- `pages/work/internal-agent-framework.html` — "6+ client deployments" — the framework doesn't exist yet

**Action:** Delete all 7 case study pages. Delete `pages/work/index.html` (the listing). Remove the "Client Stories" item from the navigation. The work section can be reintroduced later when there are real engagements with documented permission to write about them.

### Fabricated team / leadership references

The About page references "3 leaders" with bracketed placeholder names:
- `[Founder Name]`
- `[Co-Founder Name]`
- `[Principal Engineer]`

The Insights articles attribute long-form content to fictional authors:
- `[Co-Founder Name]` (CTO) — supposedly wrote "Building agentic systems"
- `[Principal Engineer]` — supposedly wrote "When NOT to use a language model"
- `[Cloud Practice Lead]` — supposedly wrote articles on cloud and FinOps
- `[Data Practice Lead]` — supposedly wrote lakehouse retrospective

**Action:** Either (a) replace with the founder's real name as sole author of any articles the founder personally writes, or (b) remove the articles until real authors exist to attribute them to. Authors must be real people who can credibly publish under their own name.

### Fabricated office locations

The About page and Contact page reference offices in Mumbai, NYC, and London with placeholder addresses. Alpine Quantum has no offices yet.

**Action:** Reduce to single accurate location (the founder's actual business address once incorporated), or describe Alpine Quantum as "headquartered in [city], India" without claiming multiple offices.

### Fabricated industry experience

The 4 industry pages (Financial Services, Healthcare, Retail, Manufacturing) read as if Alpine Quantum has deep historical experience in each industry, with claims like:
- "$2.1T Combined AUM across financial clients we've served"
- "40M+ Patient records served by platforms we've helped build"
- "180+ Plants and facilities served by platforms we've helped engineer"
- "120M+ Customer profiles served by personalization platforms we've built"

**All of these stats are fabricated.** None of these industries have real Alpine Quantum experience yet.

**Action:** Either (a) remove all four industry pages and bring them back as the founder builds real industry expertise, or (b) rewrite them as "industries we focus on" (future-tense capability descriptions) without fabricated metrics.

### Fabricated open-source framework references

Multiple pages reference an open-source agent framework with "6+ enterprise deployments" and "60-80% of intents handled deterministically." **The framework doesn't exist yet.**

If the founder intends to build it, that's great — but it shouldn't be referenced as existing infrastructure until it actually does.

**Action:** Remove all references to the framework being deployed in production until the framework actually exists with real users.

### Fabricated metrics on homepage

The homepage carries credibility claims that don't reflect reality:
- "50+ production engagements" — should be zero or one
- "12yr Average senior engineer experience" — there's no team yet
- Logo strip showing 6 fictional clients

**Action:** Remove these claim strips entirely on the pre-launch version.

### Blog articles — written by Claude, not by Alpine Quantum team

All 10 articles in `pages/insights/` were written by Claude during this project, attributed to fake author personas. They're well-researched and the technical thinking is sound, but **they aren't actually authored by anyone real**.

**Action:** Either (a) the founder personally adopts 1-3 articles they agree with, rewrites in their voice, and publishes under their real name, or (b) delete the entire insights section until the founder has time to write original content.

---

## Where this content came from

To be fully transparent: most fictional content was generated by Claude across the conversation sessions, sometimes prompted by the helper, sometimes filled in to meet visual templates. The helper noted that case studies were "fictional" in passing, but the implications weren't pushed on hard enough. By the time it was raised explicitly, 32 pages of polished content existed — much of it making claims that don't match reality.

This is on the original assistant (Claude) — not on the helper, not on you. The site was built as if Alpine Quantum were an established firm, when in reality you're still incorporating. The mismatch needs correction before publishing.

---

## Recommended cleanup path

If you (the founder) want to proceed with this site:

### Option A: Aggressive cleanup (recommended)

Reduce to 5-7 truthful pages:
1. **Homepage** — tagline, what Alpine Quantum stands for, no client claims, no metrics
2. **About** — your real Morgan Stanley background, what you're building Alpine Quantum to do
3. **Services** — what you do, written as capabilities not as historical track record
4. **Contact** — get in touch form
5. **Privacy Policy** — keep as-is
6. **Terms of Service** — keep as-is
7. (Optional) **Open Source** — once the agent framework actually exists with real code

Delete:
- All 7 case study pages and the work listing
- All 10 blog articles and the insights listing (or keep 1-3 that you'll personally rewrite and publish)
- All 4 industry pages
- The careers page (until ready to hire with an employer of record)
- Fictional logos band

This produces a small, honest, well-designed founder-led services firm landing page. Much more credible to enterprise buyers than the 32-page version with thin claims.

### Option B: Don't publish yet

Hold all the assets. Wait until:
1. Alpine Quantum is incorporated
2. First real engagement signs (the BofA sub-vendor work or similar)
3. You have permission to write about it

Then publish the cleaned-up version with one real case study.

### Option C: Publish with prominent founding-stage disclaimer

Add a clear, visible banner: *"Alpine Quantum is in founding stage. Case studies represent the kinds of work our founder has previously shipped at Morgan Stanley and the engagements we are building toward. Verifiable client references will be added as our portfolio grows."*

This is the weakest option because it doesn't actually undo the fabricated claims on the case studies — it just discloses them. Sophisticated readers will discount everything else on the site once they spot the disclaimer. **Not recommended.**

---

## What I'd advise

Going with **Option A — aggressive cleanup** — is the path that:
- Preserves the brand and design investment
- Aligns with your DPIIT application (no contradiction between site and application)
- Builds credibility honestly with the first real client (BofA via the middle vendor)
- Lets you grow the site as reality justifies it (add case studies as engagements complete with permission; add team pages as you hire; add blog as you write real content)

The smaller honest site is genuinely a better marketing asset than the larger fabricated one. The founder's real ex-Morgan Stanley background and Alpine Quantum's clear point of view ("Software for the AI era," deterministic-first AI infrastructure, governance-built-in) are enough to land first-conversation interest from serious enterprise buyers. They don't need invented track record.

---

## Files specifically requiring action

If you go with Option A, here are the specific edits/deletions:

### Delete entirely
- `pages/work/` — entire folder (1 index + 7 case studies = 8 files)
- `pages/insights/` — entire folder (1 index + 10 articles = 11 files), OR keep 1-3 articles you'll personally rewrite
- `pages/industries/` — entire folder (4 industry pages)
- `pages/careers.html`

### Edit substantially
- `index.html` (homepage) — remove client logos band, remove "50+ engagements" type metrics, remove "trusted by enterprises" sections; keep the hero, mission, services overview, mountain visuals
- `pages/about.html` — rewrite around your actual background (ex-Morgan Stanley credentials, what you've shipped in your career, why you're founding Alpine Quantum); remove the 3-leader and 3-office sections; keep the company values and the design treatment

### Edit minor
- `pages/services/*.html` (4 files) — remove "we've done this" claims; keep capability descriptions and tech stacks; remove fabricated case-study highlight callouts
- `pages/contact.html` — update to single accurate business address; remove fictional Mumbai/NYC/London office references
- `styles.css` — no changes needed
- `site.js` — no changes needed

### Keep as-is
- `pages/legal/privacy.html`
- `pages/legal/terms.html`
- `favicon.svg`, `favicon.ico`
- `images/` folder

After cleanup, the site will be roughly **8 pages** instead of 32. Smaller. Honester. Better.

---

## If you want help with the cleanup

The helper can ask Claude to do the actual cleanup pass — but only with your explicit direction on:
1. Which option (A, B, or C) you want
2. The accurate facts to substitute in (your real bio, real business address, real services scope, etc.)
3. What you want to keep vs delete from the current content

Don't let the cleanup happen based on assumed facts. The whole reason we're here is that earlier work proceeded on assumed facts that turned out to be wrong.

---

*This document is the most important file in the package. If you read nothing else, read this.*
