# Nyatike Youth Connect — Modernization Audit

## 1. Audit metadata

- Repository: https://github.com/devcavin/nyatike-youth-connect
- Deployment: https://nyatike-youth-connect.vercel.app/ (**not inspected**: unreachable from the audit sandbox; see Limitations)
- Audit date: 2026-10-18
- Inspected artifact: `nyatike-youth-connect-main.zip`, as uploaded by the product owner (extracted to a scratch directory; the upload itself was not modified)
- Branch and commit: **Unknown.** The archive contains no `.git` directory. The `-main` suffix suggests a GitHub branch archive of `main`, but that is an inference, not evidence.
- Working-tree status: **Cannot be established.** Without `.git`, uncommitted local changes, untracked files, and stash state cannot be detected. If the owner has local changes not in this archive, they are not reflected here and must not be overwritten by any later work.
- Audit status: **Phase Zero complete, pending owner review.** Sections 3–9 are filled from inspected evidence; open items are listed in sections 6, 10 and the Limitations list.
- Implementation status: Not approved. No application source was changed. Only this file was edited.

### Evidence legend

- **[S]** verified in source code
- **[R]** reproduced at runtime (Chromium 1194 via Playwright 1.56, against `vite preview` of the production build, viewports 375×800 and 1280×800, light and dark themes)
- **[B]** observed in a command result (build, lint, audit, Lighthouse)
- **[H]** hypothesis, not yet verified
- **[D]** decision needed from the product owner

### Limitations of this inspection

1. No Git metadata (above).
2. The deployed site could not be reached (sandbox network allowlist). Repository-versus-deployment drift is **unassessed**.
3. Google Fonts are blocked in the sandbox, so font rendering, font-loading cost, and the one console error / failed request seen in every run are sandbox artifacts, not product findings.
4. Lighthouse ran locally against `vite preview` (not Vercel, not CDN). Mobile numbers use Lighthouse's simulated throttling. Treat as a baseline for relative comparison only.
5. Only Chromium was used. No Firefox/Safari, no real devices, no screen reader. Keyboard checks were scripted (Tab order and computed styles), not a full manual pass.
6. Contrast ratios were computed from the declared OKLCH tokens, converted to sRGB. Hero contrast was computed against near-black only (slide 1's artwork); the photographic slides 2–4 were not measured.

## 2. Executive summary

**State.** A small React 19 + Vite 6 + Tailwind 4 single-page app with four routed pages (Home, About, Services, Blogs), no backend, no forms, no data fetching, no authentication, and no tests. The lint and production build both pass. Lighthouse baseline is good for performance (mobile 96 / desktop 99) and weaker for accessibility (80 / 87) and SEO (83).

**Strongest foundations.** A semantic CSS-variable token system already exists in `src/index.css` with light and dark themes; the build is fast and light (87 KB gzip JS); no horizontal overflow at 375 px or 1280 px on any route; no secrets or unsafe HTML rendering found.

**Highest-impact verified defects.**

1. **Primary calls to action do nothing.** All hero and bottom CTA buttons on Home only `console.log`; none navigates. Three of their intended targets (`/community`, `/register`, `/contact`) have no route. [S][R]
2. **Hidden hero slides block the visible one.** All four slides are stacked and only fade; the last slide sits on top and receives the clicks and focus. [R]
3. **The hero headline and subtext are nearly invisible** (about 1.2:1 and 2.0:1 on slide 1) because global unlayered element styles override Tailwind color utilities. [R][B]
4. **The "Contact Us" nav link points to `/contavt`**, which renders an empty page, as does every unrouted URL (no 404). [S][R]
5. **Root cause of many visual defects: `tailwind.config.js` is not loaded by Tailwind v4.** Semantic classes such as `bg-background`, `border-border` and `text-text-primary` generate no CSS. The fixed navbar, mobile menu, About modal, testimonial cards and value bullets all render with no background. [B][R]
6. **Unverifiable and internally inconsistent public claims**: statistics, testimonials, leader biographies/achievements/contact details, a company timeline. Home says 2,500+ members; About says 500+. [S]

**Most important risks.** Publishing unverified claims about a youth organization (product integrity); accessibility failures (contrast, unnamed controls, autoplay without pause); a widespread styling system that silently drops classes; 32 production-dependency advisories, most of which come from three unused packages.

**Recommended first milestone.** Milestone B: make the existing interactive elements truthful and working (routing, hero, modal, 404) and wire the existing tokens into Tailwind v4. Nothing there needs new features. It does need four owner decisions (section 10).

## 3. Repository and technology baseline

| Area | Finding | Evidence or limitation |
|---|---|---|
| Framework and runtime | React 19.2.0 (JSX, no TypeScript), Node 22.22.2 / npm 10.9.7 used for the audit | `package.json`, lockfile [S] |
| Build tool | Vite 6.4.1 with `@vitejs/plugin-react` and `@tailwindcss/vite`; scripts: `dev`, `build`, `lint`, `preview` | `vite.config.js`, `package.json` [S] |
| Routing | `react-router-dom` 7.9.4, `BrowserRouter`; 4 routes: `/`, `/about`, `/services`, `/blogs`; no catch-all | `src/AppRoutes.jsx` [S] |
| Styling system | Tailwind 4.1.14 + hand-written CSS in `src/index.css` (~16 KB) and `src/App.css`; CSS custom properties for tokens; `[data-theme="dark"]` theming | [S] |
| UI dependencies | Used: `react-icons`, `lucide-react`, `react-router(-dom)`. **Unused:** `framer-motion`, `swiper`, `react-multi-carousel` (zero imports) | import grep [S] |
| Data sources and APIs | None. No `fetch`, XHR, env vars, or integrations. All content is hard-coded in components | grep [S] |
| Authentication and persistence | None. Only `sessionStorage` key `isDarkMode` for theme | [S] |
| Forms | None in the routed app. (`ComponentShowcase.jsx` has a demo input but is not imported anywhere) | [S] |
| Tests and static checks | No test runner, no tests, no type-check. ESLint 9 flat config present | [S] |
| Deployment and CI | `vercel.json` rewrites everything to `/index.html`. No CI workflows in the archive | [S] |
| Git baseline | Unknown (no `.git` in archive) | Limitation 1 |
| Lint | `npx eslint .` exit 0, no output | [B] |
| Build | `npx vite build` succeeded in 5.05 s: JS 285.07 kB (87.40 kB gzip), CSS 53.14 kB (9.53 kB gzip), images ≈ 0.9 MB | [B] |

Environment variables: none used. Secrets: none found in source (grep for key/secret/token/password/`import.meta.env`/`process.env`/`dangerouslySetInnerHTML`/`innerHTML`/`eval` returned nothing). [S]

## 4. Brand and design audit

### Brand identity (effective values)

| Token | Declared | Effective (light) | Effective (dark) | Notes |
|---|---|---|---|---|
| Primary | `--color-primary: blue-600` | `oklch(.546 .245 262.881)` ≈ `#155dfc` | blue-400 ≈ `#51a2ff` | Confirmed in rendered DOM [R] |
| Secondary | declared **twice**: green-600, then green-500 | **green-500** `oklch(.723 .219 149.579)` ≈ `#00c950` (the first declaration is dead) | green-400 ≈ `#05df72` | Confirmed in rendered DOM [R] |
| Accent | declared **twice**: blue-400, then `var(--color-primary-light)` | **blue-500** ≈ `#2b7fff` | `primary-light` = blue-200 | Second declaration wins [S] |
| Neutrals | gray-50…900 (OKLCH) | text gray-700 `#364153`, heading gray-900 `#101828`, surface gray-50 | bg gray-900, surface gray-800, text gray-100 | [S] |

- **Brand assets.** `src/assets/logo.png` (900×600) is a **monochrome black/white** seal with a lion; it contains no blue or green. It is byte-identical to `public/favico.png`. `homebg1.png` (first hero slide) is the same seal in **deep blue on black**. [B]
- **Where blue/green come from.** The CSS tokens, `ComponentShowcase.jsx` ("blue, green, and white color palette"), and hard-coded Tailwind classes across pages. **Confidence: medium.** The palette is consistently used in code, but no brand specification or logo color confirms the exact hues. [D-03]
- **Hard-coded palette leakage.** Pages use `blue-*`, `green-*`, plus **purple, orange, pink** (About timeline, programs, testimonials; Home feature color map) that are not tokens and are not in the declared brand. [S]
- **Light and dark theme.** Both themes render; tokens redefine primary/secondary/surface/text/border. `--color-text-muted` is the same gray-500 in both themes. [S][R]

### Contrast of declared and hard-coded pairs (computed)

| Pair | Ratio | Result |
|---|---|---|
| Body gray-700 on white | 10.31 | pass |
| Primary blue-600 text / white-on-blue-600 button | 5.26 | pass |
| Muted gray-500 on white / on surface gray-50 | 4.84 / 4.63 | pass (marginal) |
| Dark: body gray-100 on gray-900 | 16.13 | pass |
| Dark: primary blue-400 on gray-900; gray-900 on blue-400 / green-400 | 6.73 / 6.73 / 10.00 | pass |
| **Effective secondary green-500 as text on white** | **2.22** | **fail** |
| **White on green-500 (`.btn-secondary`: `--color-button-text` white on `--color-secondary`)** | **2.22** | **fail** |
| White or text on green-600 (About CTA button, Home "Get in Touch", Services/Blogs text) | 3.22 | fails normal text; passes only large text / UI |
| White on green-700 | 4.94 | pass (candidate accessible variant) |
| Dark: muted gray-500 on gray-900 / on gray-800 | 3.67 / 3.04 | fail for normal text |
| Border gray-200 on white; border gray-700 on gray-900 (non-text 3:1) | 1.24 / 1.72 | decorative borders; fail if borders are the only boundary of a control |
| About: gray-700 icon strokes on blue-600 circles | 1.96 | fail (see F-12) |
| Hero h1 gray-900 / p gray-700 over slide-1 near-black | 1.18 / 2.04 | fail (see F-03) |

### Design consistency (findings with specifics are in section 9)

- **Typography.** `index.css` imports five Google font families in a blocking `@import` (DM Sans, Inter, Poppins, Sora, Urbanist). Only Inter (`--font-primary`) and Poppins (`--font-secondary`) are applied; Sora/DM Sans/Urbanist are not referenced by any component. [S]
- **Navigation.** Fixed navbar and mobile menu have no background (F-07). Active-route styling is defined (`.active` in `App.css`) but never applied. [S][R]
- **Footer.** Column headings render as lowercase "company"/"contact" because the class is a typo (`mb-4capitalize`). Seven of the ten footer links go to `/`. [S][R]
- **Buttons.** Three unrelated button systems coexist: global `.btn-*` classes, inline Tailwind gradients on Home, and plain `bg-blue-600` on Services/About. Hover effects use `scale-105` on layout-affecting buttons. [S]
- **Dead and risky CSS.** Many unused rules (`.hero-image` block with `!important` white-forcing, `.carousel-container`, `.testimonials-swiper`, `.animate-marquee`, `.glass-effect`, `.btn-professional`, `.gradient-text`, `.loading-shimmer`) plus duplicate `.btn-outline`/`.btn-ghost` definitions and duplicate `scroll-behavior`. `.theme-*` utilities use `!important`. [S]
- **Imagery.** Hero slides 3 and 4 are portrait 720×1280 used with `object-cover` in a landscape hero [S]; the visual crop was **not** inspected [H]. Leader photos are distorted on cards (F-11).
- **Reduced motion.** No `prefers-reduced-motion` handling anywhere. [S][R]

## 5. Routes and interaction inventory

### Routes

| Route | Source | Intended behavior | Observed | Status |
|---|---|---|---|---|
| `/` | `Pages/Home.jsx` | Hero carousel, stats, features, CTA | Renders; 4 `<h1>` in DOM; CTAs inert (F-01, F-02) | Renders, key actions broken |
| `/about` | `Pages/About.jsx` + `Subpages/Management.jsx` | Story, mission, programs, team modal | Renders; modal has no surface (F-06) | Renders, defects |
| `/services` | `Pages/Services.jsx` | Four services, CTA | Renders; 5 buttons do nothing | Renders, controls inert |
| `/blogs` | `Pages/Blogs.jsx` | Blog list | One post; "Read More" → `/` | Renders, link wrong |
| `/contavt` (nav "Contact Us") | `Layouts/Navbar.jsx` | Contact page (presumed) | No route; empty content | **Broken** |
| `/contact`, `/community`, `/register` | Referenced by Home/About buttons | Unknown; **no pages exist** | Empty content, console warning "No routes matched" | **Missing targets** [D-01] |
| any other URL | — | 404 | Nav + footer around empty main; no 404 content or heading | **Missing** |

### Interactions

| Interaction | Source | Intended | Observed | Verified | Status |
|---|---|---|---|---|---|
| Hero "Get Started" / "Explore Programs" / "Join Our Community" / "Learn More" (4 slides) | `Home.jsx` `HomeData.buttonUrl` | Go to `/services`, `/about`, `/community`, `/about` | `console.log("Navigating to: …")` only; URL unchanged. Clicking the visible slide's button actually triggers slide 4's handler | S + R | Broken |
| Hero second "Learn More" (each slide) | `Home.jsx` | Go to `/about` | Logs only | S + R | Broken |
| Bottom CTA "Join Our Community" / "Get in Touch" | `Home.jsx` | `/register`, `/contact` | Logs only; targets don't exist | S + R | Broken |
| Slide indicators | `Home.jsx` | Switch slide | Works (but buttons are 12 px, see F-10) | R | Works |
| Carousel autoplay | `Home.jsx` | Advance every 6 s | Advances; no pause; continues under reduced-motion | S + R | Defect |
| Nav links | `Navbar.jsx` | Client-side navigation | Plain `<a href>`: **full page reload** every time | R | Works, inefficient |
| Nav "Contact Us" | `Navbar.jsx` | Contact | `/contavt` typo, empty page | S + R | Broken |
| Theme toggle (desktop, mobile) | `Navbar.jsx`, `ThemeProvider.jsx` | Light/dark | Works; persists per browser session only | S + R | Works |
| Mobile menu | `Navbar.jsx` | Open/close nav | Opens; button has no accessible name or `aria-expanded`; no background (F-07) | R | Defect |
| Footer WhatsApp / Facebook / LinkedIn | `Footer.jsx` | Social/contact links | `href="/"` | S + R | Placeholder |
| Footer Instagram | `Footer.jsx` | Instagram | `https://instagram.com/nyatikeyouthconnect`, same tab | S | Plausible real link (not verified) |
| Footer Terms / Privacy / Contact Us / WhatsApp | `Footer.jsx` | Policy/contact pages | `href="/"` | S + R | Placeholder |
| Footer "Developed By Cavin" | `Footer.jsx` | Developer portfolio | External link, `rel="noreferrer"` | S | Works (not requested to follow) |
| Services "Learn More" ×4, "Get Started" | `Services.jsx` | Unknown | No handler; no effect | S + R | Inert |
| Blogs "Read More →" | `Blogs.jsx` | Open post | `href="/"`; no blog-detail route | S + R | Wrong target |
| About "Join the Community" | `About.jsx` | `/community` | Link to nonexistent route; `<button>` inside `<a>` (invalid nesting) | S | Broken |
| About "See our Services" | `About.jsx` | `/services` | Works; `<button>` inside `<a>` | S | Works, invalid HTML |
| Leader card → modal | `Management.jsx` | Open bio | Opens; closes with Esc, backdrop click, ✕ | R | Works, defects (F-06) |
| Modal mailto/tel/social links | `Management.jsx` | Contact leader | Placeholder-looking values (F-05) | S | Unverified |

## 6. Content and product integrity

None of the following can be treated as accurate merely because it is in source. All need an owner decision [D-04].

| Item | Location | Problem | Recommended action |
|---|---|---|---|
| Stats: 2,500+ members, 150+ projects, 89% "Success Stories", 25+ partners | `Home.jsx` | Unsourced. **Contradicts About** (500+ youth, 50+ projects, 15+ partners) | Owner supplies real figures with dates, or remove |
| "Join thousands of young innovators…" | `Home.jsx` | Same unsourced scale claim | Rewrite to what is true |
| Impact numbers (500+, 50+, 15+, "4 Years of Impact") | `About.jsx` | Unsourced; timeline starts 2020, so "4 years" is also date-dependent | Verify or remove |
| Timeline 2020–2024 (3 volunteers, partnerships with local schools, "regional recognition") | `About.jsx` | Unsourced | Verify |
| Two testimonials ("Sarah M.", "John K.") | `About.jsx` | Possibly invented; avatar initial "A" for "Sarah" suggests placeholder | Real, consented quotes or remove |
| Leader bios, "8 years experience", awards ("Regional Youth Leadership Award 2023"), metrics ("+300% participation", "75% retention", "1000+ youth") | `Management.jsx` | Unsourced; includes personal claims about named people | Owner/individuals confirm or remove |
| Leader contact details: `maurice@nyc-community.org`, phones `+254 700 123 456` / `234 567` / `345 678`, LinkedIn/Twitter/Facebook handles | `Management.jsx` | Sequential phone numbers and uniform handle pattern look like **placeholders**; they are rendered as live `mailto:`/`tel:`/social links | Replace with verified contacts or remove |
| Programs and schedule ("Every Sarturday, 08:00 PM", "Contact management", "Always Open") | `About.jsx` | Typo; vague/unverified availability | Verify schedule; fix text |
| Blog post "Youth Seminar 2025 Recap" (reuses a hero image) | `Blogs.jsx` | Excerpt truncated with "…", no article behind it | Confirm the event; link or hide "Read More" |
| Services list; "Hackathons", "Mentorship Programs" | `Services.jsx` | Program availability/eligibility not stated | Verify offerings |
| Contact/registration flows | Home, About, Footer | **No real flow exists**; copy implies one | [D-01] |

## 7. Accessibility and responsive risks

Lighthouse 12.8.2 (local, Chromium): mobile accessibility **80**, desktop **87**. Failing audits: `color-contrast`, `link-name` (both), `button-name` and `target-size` (mobile also `button-name`; desktop `target-size`). These are automated; they do not establish WCAG conformance.

| WCAG area | Finding | Evidence |
|---|---|---|
| 1.4.3 / 1.4.11 contrast | Hero text, About icon strokes, secondary green, muted dark text, dark/light borders (section 4) | computed [B], runtime [R] |
| 2.2.2 pause/stop/hide | Hero auto-advances every 6 s with no pause control; **ignores `prefers-reduced-motion`** (slide opacity changed after 6.8 s with reduce emulated) | [R] |
| 2.1.1 / 2.4.3 / 2.4.7 focus | Hidden slides' 8 buttons stay in tab order at opacity 0, so focus lands on invisible controls; hero buttons use `focus:outline-none`, computed outline `none` (ring visibility not conclusively verified [H]); no skip link; modal does not move or trap focus | [R] |
| 1.3.1 / 2.4.6 headings | 4 `<h1>` in Home DOM (one per slide); About uses `h4` for timeline items; card titles skip levels | [R][S] |
| 4.1.2 name/role/value | Unnamed: nav logo link, 4 footer social links, mobile hamburger (no label, no `aria-expanded`), modal close ✕ and 5 modal icon links; carousel indicator labels fine; theme toggle named but has no pressed state; modal has no `role="dialog"`/`aria-modal` | [R] |
| 2.5.8 target size (AA, 24 px min) | Carousel dots 12×12 px; footer social icons and some links small; Lighthouse `target-size` fails. Theme toggle 36×36, hamburger 40×40 (pass) | [R][B] |
| 1.4.1 / non-color | Active route not indicated | [S] |
| 3.1 language | `lang="en"` present | [R] |
| Landmarks | One `main`, one `nav`, one `footer` | [R] |
| 1.4.10 reflow | No horizontal overflow at 375 px on any route; mobile menu and routes lay out | [R] |
| Images | All `<img>` have `alt`; hero images use `alt=""` (decorative) | [R] |

Responsive: fixed navbar and mobile menu overlay content with no backing surface (F-07). Not assessed: 200% zoom, text-spacing overrides, landscape phones, real devices.

## 8. Performance and reliability baseline

| Check | Baseline result | Method and conditions |
|---|---|---|
| Production build | Pass, 5.05 s, 1,704 modules | `npx vite build` [B] |
| Lint | Pass, exit 0, no warnings | `npx eslint .` [B] |
| Type check | Not available (JavaScript project) | — |
| Tests | None exist | — |
| Initial load (mobile, simulated) | Perf **96**; FCP 1.7 s; LCP 2.4 s; TBT 110 ms; CLS 0; Speed Index 1.7 s | Lighthouse 12.8.2, local preview [B] |
| Initial load (desktop) | Perf **99**; FCP 0.4 s; LCP 0.9 s; TBT 0; CLS 0 | same [B] |
| Page weight | 755 KiB transferred (Lighthouse) | [B] |
| JavaScript | 285 kB (87.4 kB gzip) single bundle, no code splitting | build output [B] |
| CSS | 53 kB (9.5 kB gzip) | build output [B] |
| Images | Hero 96–156 kB each; `leader3.jpeg` 252 kB (840×1120) displayed at 180×200; `logo.png` 105 kB (900×600) displayed ~100 px wide; `public/favico.ico` 432 kB (256×256) | file inspection [S]; no WebP/AVIF, no responsive sources |
| Fonts | Blocking `@import` of 5 families; only 2 used; real impact unmeasured | [S]; sandbox blocks Google Fonts [Limitation 3] |
| Console and network | Only the sandbox font failure; React Router "No routes matched" warnings on unrouted URLs | [R] |
| Lighthouse other | Best practices 96; SEO 83 (no meta description; `robots.txt` request returns the SPA HTML locally; deployment behavior unverified) | [B] |
| `npm audit` (production deps) | 32 advisories: 1 low, 6 moderate, 23 high, **2 critical** | [B]; see F-15 for interpretation |

## 9. Prioritized findings

Severity: P0 critical, P1 high, P2 medium, P3 low. Confidence: H/M/L.

### P1

**F-01 — Primary CTAs on Home do not navigate.** Confidence H. [S][R]
Evidence: `navigateRequiredPage` only calls `console.log`; 10 buttons (8 hero, 2 bottom) affected; clicking leaves the URL unchanged. Intended targets: `/services`, `/about`, `/community`, `/register`, `/contact`.
Impact: the homepage cannot move visitors anywhere except via the nav.
Files: `Home.jsx`.
Action: render real `Link`s to **existing** routes; for nonexistent targets see D-01. No invented destinations.
Dependencies/risk: D-01; low regression risk.
Acceptance: every CTA is an anchor with a valid `href`; each navigates client-side; none logs; no button without a handler remains.

**F-02 — Inactive hero slides are still interactive and sit on top of the active one.** Confidence H. [R]
Evidence: slides are `absolute inset-0` with opacity fades; `elementFromPoint` over slide 1's button returned slide 4's button; 8 buttons exist in the tab order; no `aria-hidden`/`inert`.
Impact: wrong handler fires, focus lands on invisible controls, screen readers read all four slides and four `h1`s.
Files: `Home.jsx`.
Action: mark inactive slides `inert`/`aria-hidden`/`pointer-events-none`, one `h1` total, expose a pause control.
Acceptance: only the active slide's controls are focusable/clickable; one `h1`; pause/play works; autoplay off under reduced motion.

**F-03 — Hero headline and subtext are illegible.** Confidence H. [R][B]
Evidence: computed h1 `oklch(.21 .034 264.665)`, p `oklch(.373 …)` on a dark overlay; `text-white`/`text-white/95` classes lose to the unlayered global `h1…h6 { color }` and `p { color }` rules in `index.css` (unlayered CSS beats Tailwind's layered utilities). Contrast ≈ 1.18:1 / 2.04:1 on slide 1. Slides 2–4 not measured [H: likely similar].
Impact: the first thing visitors see is unreadable. Same cause makes the bottom CTA section's `text-white`/`text-blue-100` silently ignored (it is only readable because its section has no dark background).
Files: `index.css`, `Home.jsx`.
Action: move global element color rules into `@layer base`, then verify every `text-*` utility on headings/paragraphs/links.
Risk: **medium**. Fixing layering will change colors anywhere a utility was previously (accidentally) overridden; requires a visual pass over all pages.
Acceptance: hero text ≥ 4.5:1 on every slide in both themes; no unintended color shifts on other pages (before/after screenshots).

**F-04 — Contact link and unknown URLs lead to empty pages.** Confidence H. [S][R]
Evidence: nav links `/contavt`; no route for it, `/contact`, `/community`, `/register`, or a catch-all; page renders only chrome; Router warns "No routes matched".
Impact: the only contact path is broken; mistyped or shared URLs show a blank page.
Files: `Navbar.jsx`, `AppRoutes.jsx`.
Action: add a truthful NotFound route; resolve the contact target per D-01.
Acceptance: unknown URLs render a 404 view with a link home; nav "Contact Us" reaches a real destination.

**F-05 — Unverified and contradictory public claims.** Confidence H that they are unsourced/contradictory; unknown whether they are true. [S]
Evidence and actions: section 6.
Impact: misleading statements about a real youth organization and real, named people; live `mailto:`/`tel:` links to probable placeholder contacts.
Approval: **required** [D-04].

**F-06 — About leadership modal is unreadable and not a dialog.** Confidence H. [R]
Evidence: outer and inner backgrounds computed `rgba(0,0,0,0)` in both themes, so blurred page content shows through behind the text (screenshots); no `role="dialog"`/`aria-modal`; focus stays on the trigger; no scroll lock; close button and 5 icon links unnamed; Esc and backdrop close work.
Files: `Management.jsx`.
Action: opaque token-based surface, dialog semantics, focus move/return, scroll lock, accessible names.
Acceptance: readable over any content in both themes; keyboard-only open/close with focus return; names on all controls.

**F-07 — `tailwind.config.js` is ignored by Tailwind v4; semantic utilities generate no CSS.** Confidence H. [B][R]
Evidence: Tailwind 4.1.14, no `@config` directive anywhere; built CSS contains **no** `.bg-background`, `.text-text-primary`, `.border-border`, `.bg-background/10`; legacy hand-written classes (`.bg-surface`, `.bg-primary`, `.text-primary`) exist only because they were defined by hand in `index.css`. Runtime: navbar, mobile menu, modal, About testimonial cards, and Values bullets all compute `rgba(0,0,0,0)`. The fixed navbar therefore lets scrolled content show through behind the links, and the open mobile menu overlaps page content.
Impact: missing surfaces/borders; underlies F-06 and the navbar/menu legibility problem.
Files: `tailwind.config.js` (dead), `index.css`, `Navbar.jsx`, `App.jsx`, `About.jsx`, `Management.jsx`, `ComponentShowcase.jsx`.
Action: expose the **existing** variables to Tailwind 4 with `@theme` / `@theme inline` in CSS (or load the config with `@config`), then delete or consolidate the dead config. Do not change token values.
Risk: **medium**: classes that silently did nothing will start to apply (e.g., `border-border`, `bg-surface`), changing appearance. Needs the same before/after screenshot pass as F-03. [D-02]
Acceptance: each semantic class used in source produces CSS in the built output (script-checked); navbar and menu are opaque; no `border-bg`-style dead classes remain.

### P2

**F-08 — Brand token conflicts and non-accessible secondary.** Confidence H. [S][R][B]
Duplicate `--color-secondary` and `--color-accent` (first declarations are dead); effective green-500 fails with white (2.22:1) and as text on white; hard-coded `green-600` fails normal text (3.22:1); purple/orange/pink are off-token. Action: keep blue-600/green hues, remove the duplicate declarations (keeping the **currently effective** values unless approved otherwise), add accessible variants (e.g., a green text/button variant meeting 4.5:1 such as green-700). Approval: **required** for any change to the effective secondary [D-03].
Acceptance: single declaration per token; documented token table; all text/background pairs ≥ 4.5:1 (3:1 for large text/UI) in both themes.

**F-09 — Autoplaying carousel ignores reduced-motion and has no pause.** [R] See F-02; WCAG 2.2.2.
Acceptance: pause control; autoplay disabled under `prefers-reduced-motion`; fades suppressed.

**F-10 — Navigation causes full page reloads; no active state; small hit targets.** Confidence H. [R][S]
Internal links are `<a href>`; navigation drops SPA state (verified via a window marker). Active class exists but is unused. Carousel dots are 12 px. About wraps `<button>` in `<a>` (invalid nesting). Action: `Link`/`NavLink`, 24 px+ targets, real links instead of nested buttons.
Acceptance: no reload on internal nav; active page marked with `aria-current`; targets ≥ 24 px (44 px for primary controls where practical).

**F-11 — Leader photos are distorted on cards.** Confidence H. [R]
`<img>` computed `object-fit: fill`; 853×1280 source shown at 180×200 (aspect ratio changed from 0.67 to 0.90). `leader3.jpeg` is 252 kB for a 180×200 display. Action: `object-cover`, appropriate sizes/compression.
Acceptance: no stretched faces; images served at ≤ 2× display size.

**F-12 — About icons, timeline numbers, bullets, and testimonial cards are low-contrast or invisible.** Confidence H. [R]
Mission/Vision/Values icon strokes inherit gray-700 on blue-600 (1.96:1); timeline numerals inherit gray-700 on gradients; Values bullets and testimonial cards compute transparent (F-07 root). Action: set explicit foreground tokens; fix via F-07.
Acceptance: icon and numeral contrast ≥ 3:1 / 4.5:1 as appropriate.

**F-13 — Footer is largely placeholder.** Confidence H. [S][R]
Seven of the ten footer links point to `/`; headings render lowercase because of the `mb-4capitalize` typo; social icons are unnamed; WhatsApp icon hard-codes `hover:bg-green-600`. Action: remove or hide links that have no destination until D-01 resolved; add accessible names; fix classes. Do not invent URLs.

**F-14 — Missing SEO and social metadata; favicon declaration mismatch.** Confidence H. [S][B]
No meta description, Open Graph, canonical, or per-route titles; every route shares one `<title>`; `<link rel="icon" type="image/svg+xml" href="/favico.png">` declares the wrong type; `robots.txt` returns the SPA HTML in local preview (deployment unverified [H]); 432 kB `favico.ico` unreferenced.
Action: meta description and OG tags from verified copy only; correct icon type.

**F-15 — Dependency hygiene and advisories.** Confidence H on facts; applicability M. [S][B]
- Unused: `framer-motion`, `swiper`, `react-multi-carousel`. `react-multi-carousel` pulls in the whole **`npm`** package (10.9.4) as a runtime dependency, which accounts for most advisories (`tar` critical, `glob`, `minimatch`, `pacote`, `libnpm*`…). `swiper` 11.2.10 carries a **critical** prototype-pollution advisory. None is imported, so none ships in the bundle; the risk is supply-chain/CI exposure, not runtime exposure.
- `react-router(-dom)` 7.9.4 has multiple high advisories (open redirect/XSS, framework/RSC/`__manifest` issues). Many concern framework/server modes the app does not use [H]; applicability to a client-only `BrowserRouter` app needs per-advisory confirmation; a patched 7.x is available.
- `vite` 6.4.1 advisories affect the dev server (file read/path traversal); fix available via `npm audit fix`.
- `react-router` and `react-router-dom` are both listed (v7 consolidates; app imports `react-router-dom` only). Two icon libraries (`react-icons`, `lucide-react`) plus hand-pasted inline SVGs.
- `prop-types` is imported in `Home.jsx` but **not declared** (resolved only transitively through the dev dependency `eslint-plugin-react`).
- ESLint `settings.react.version` is `'18.3'` while React is 19.
Action: after approval, remove unused packages, declare or drop `prop-types`, bump patched versions, re-run build/audit. [D-05]
Acceptance: `npm audit --omit=dev` shows no critical advisories; build and lint still pass; bundle unchanged or smaller.

**F-16 — Styling approach causes silent failures and hard-coded colors.** Confidence H. [S]
Beyond F-03/F-07: hard-coded `blue-*/green-*/gray-*` utilities override tokens (breaking dark mode on Home feature cards: `text-gray-900`, `text-gray-600`, `border-gray-200`); `.theme-*` `!important` utilities; dead hero overrides; global `p`/`a` colors. Action: tokenize, delete dead CSS, layer base styles.

### P3

- **F-17** — Typos and class errors: `/contavt`, `Sarturday`, "About US", `mb-4capitalize`, `border-bg`, `bg-background/100`, `FeatureIcon` component defined inside `Home`'s render (remounts on each 6-second slide change), `w-25`/`w-45`/`h-50` rely on Tailwind 4's spacing scale. [S]
- **F-18** — Theme persistence uses `sessionStorage` (resets per session; ignores `prefers-color-scheme`). Possibly intentional [D-06]. [S]
- **F-19** — Dead code: `ComponentShowcase.jsx` and `utility/ThemeToggle.jsx` are never imported. [S] [D-07]
- **F-20** — Documentation and process: README is one line; no CI, no tests, no `.env.example` (none needed); no `docs` beyond charter/audit. [S]
- **F-21** — Font loading: blocking CSS `@import` of five families when two are used; add `preconnect` or self-host the two used. Impact unmeasured here (Limitation 3). [S][H]
- **F-22** — Hero images 3 and 4 are portrait assets used as landscape covers; crop quality uninspected. [S][H]

## 10. Decisions and approvals

**D-01 — Contact, community, and registration destinations**
Evidence: Home/About/Footer/Nav point to `/contact`, `/contavt`, `/community`, `/register`, WhatsApp, Facebook, LinkedIn; none exists; the only verified-looking external channel is Instagram.
Options: (a) build minimal pages only for destinations the owner confirms; (b) link out to real channels (WhatsApp number/group link, email, Instagram) the owner supplies; (c) remove the CTAs/links until a flow exists.
Recommendation: (b) or (c) first (smallest, truthful), no new forms or persistence unless you approve them separately.
Impact: routes, product claims, any future data flow.
Approval: Pending. Status: Open.

**D-02 — How to wire Tailwind 4 to the existing tokens**
Evidence: F-07.
Options: (a) `@theme inline` in `index.css`, delete dead `tailwind.config.js`; (b) `@config "../tailwind.config.js"`; (c) replace semantic classes with raw `var()` usage.
Recommendation: (a). Single source of truth, v4-native, no new dependency.
Impact: some elements will gain backgrounds/borders; requires visual regression review.
Approval: Pending. Status: Open.

**D-03 — Confirm the brand palette and secondary green**
Evidence: Section 4; the logo is monochrome, the hero seal is deep blue, the blue/green palette comes from code.
Options: confirm blue-600/green as the brand; supply hex values or a brand sheet; choose which green is canonical (currently effective green-500).
Recommendation: keep current effective values; add accessible text/button variants (e.g., green-700) rather than recoloring.
Approval: Pending. Status: Open.

**D-04 — Content truth pass**
Evidence: Section 6.
Options: owner supplies verified figures, quotes (with consent), bios, contacts, schedule; or replace with neutral truthful copy; or remove sections.
Recommendation: remove or neutralize unsourced numbers, testimonials, and leader contact/achievement details in the pilot unless verified. Nothing is deleted without your say-so.
Approval: Pending. Status: Open.

**D-05 — Dependency changes**
Options: remove the three unused packages; consolidate on `react-router-dom` (or `react-router`); declare/remove `prop-types`; patch-bump `react-router`/`vite`.
Recommendation: all four, in one small isolated change after the foundation milestone, re-verified by build, lint, audit.
Approval: Pending. Status: Open.

**D-06 — Theme persistence and system preference.** Recommendation: leave behavior as is until the owner confirms intent. Approval: Pending. Status: Open (low).

**D-07 — Unused `ComponentShowcase.jsx` / `ThemeToggle.jsx`.** Recommendation: keep `ComponentShowcase` as an internal token reference only if it will be routed or documented; otherwise remove. Approval: Pending. Status: Open (low).

**D-08 — Hero carousel behavior.** Options: keep four slides with pause and reduced-motion support; reduce to a static hero with one headline. Recommendation: keep slides, fix interaction and accessibility first. Approval: Pending. Status: Open.

## 11. Implementation milestones

### Milestone A — Baseline and plan
Status: **Delivered, awaiting owner review.**
Acceptance criteria:
- Repository and working-tree state recorded: **partially**. Archive contents recorded; Git state unavailable (Limitation 1).
- Routes and important interactions inventoried: done (section 5).
- Effective brand tokens identified or uncertainty documented: done (section 4, D-03).
- Baseline checks attempted: done (lint, build, Lighthouse, scripted Chromium; no tests exist).
- Findings prioritized with evidence: done (section 9).
- Plan presented for review: this document.

### Milestone B — Critical behavior (proposed; blocked until approval of D-01, D-02, D-04 as needed)
Scope: F-01, F-02, F-03 (layering), F-04, F-06, F-07, F-10 (links only), F-13 (remove/disable placeholder links).
Order of work: (1) F-07 tokens into Tailwind per D-02, then F-03 base-layer fix, then screenshot pass; (2) routing: `Link`/`NavLink`, NotFound, fix `/contavt`, CTA destinations per D-01; (3) hero: inert inactive slides, single `h1`, pause/reduced-motion; (4) modal: opaque surface, dialog semantics, focus.
Risks: visual shifts from newly applied classes; moving base styles into a layer changes cascade. Mitigation: before/after screenshots of all four routes, both themes, 375 and 1280 px.
Acceptance criteria: approved critical defects corrected; existing intended behavior preserved; routes and interactions re-verified in Chromium; regression risks documented; lint and build pass.

### Milestone C — Design foundation
Scope: F-08, F-12, F-16; consolidate duplicate tokens; accessible secondary variants; focus-ring token; remove dead CSS and `!important` utilities; typography and spacing scale documented; self-host or trim fonts (F-21).
Dependencies: B (tokens wired), D-03.
Acceptance criteria: one declaration per token; documented token table; all text/background pairs meet WCAG 2.2 AA in both themes; no visual regressions beyond approved changes.

### Milestone D — Homepage pilot
Scope: Home using the system; verified journeys only (visitor → services/about/contact-or-chosen channel); no unverified stats or testimonials (D-04); F-22 image treatment.
Dependencies: B, C, D-01, D-04.
Acceptance criteria: verified user journeys supported; existing capabilities preserved; no fabricated claims or nonfunctional controls; responsive and keyboard checks completed in Chromium; build and lint pass; Lighthouse accessibility ≥ the baseline and the known automated failures resolved or explained.

### Milestone E — Remaining pages
Scope: About, Services, Blogs, Footer/Navbar consistency; F-11, F-13, F-14, F-10 remainder.
Dependencies: D.
Acceptance criteria: shared patterns applied; routes and integrations preserved; interactions and layouts verified at 375 and 1280 px.

### Milestone F — Final verification and handover
Scope: dependency cleanup (F-15, D-05), docs/README, final checks, report.
Acceptance criteria: checks and results recorded; performance and accessibility findings documented (including manual keyboard and zoom checks, and a screen-reader pass if available); regressions and open issues listed.

## 12. Change log

| Date | Reference | Summary | Areas affected | Tests executed and results | Outstanding | Next exact action |
|---|---|---|---|---|---|---|
| 2026-10-18 | Archive `nyatike-youth-connect-main.zip` (no Git metadata) | Phase Zero audit. **No application source changed.** Only `docs/modernization-audit.md` was rewritten. `npm ci`, `dist/`, and `node_modules/` exist only in the scratch copy used for the audit | `docs/modernization-audit.md` | `eslint .` exit 0; `vite build` OK (5.05 s); Lighthouse 12.8.2 mobile 96/80/96/83 and desktop 99/87/96/83 (perf/a11y/best-practices/SEO); scripted Chromium route, interaction, keyboard-order, modal, mobile-menu and reduced-motion checks; `npm audit` | Section 10 decisions; Git state; deployed-site comparison | Owner reviews this audit and answers D-01 to D-05 |

## 13. Current next step

1. Review sections 2, 9 and 10. Answer D-01 (contact/community/register destinations), D-02 (Tailwind wiring), D-03 (brand confirmation), D-04 (content truth pass), D-05 (dependency cleanup). D-06 to D-08 can wait.
2. Provide the repository's Git status (`git status`, current branch, `git log -1`) from your working copy so uncommitted changes can be accounted for before any edits.
3. Optionally provide a screenshot or access to the deployed site for a repository-versus-deployment comparison.
4. On approval, begin Milestone B in a dedicated branch or worktree. No commit, push, merge, or deploy without explicit authorization.

This audit is a living engineering record, not a substitute for inspecting the current code or verifying behavior.
