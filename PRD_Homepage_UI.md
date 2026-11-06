# TickIoT Marketing Website: Homepage UI PRD

| | |
|---|---|
| **Product** | TickIoT marketing website |
| **Scope** | Navigation, Hero, Product Categories grid ("Everything you need to deploy anywhere.") |
| **Version / Status** | 1.0 / Draft for review |
| **Stack** | React 19 + Vite 8, plain CSS (`src/index.css`), no UI library |

---

## 1. Purpose and goals

Present TickIoT as a complete connectivity provider (hardware, software, integration), not a product catalogue. A visitor should understand what TickIoT does in the first screen and be able to reach any product category within one click.

- **G1.** Hero communicates the value proposition and offers two clear actions.
- **G2.** Navigation reaches any product, solution or resource in two interactions or fewer.
- **G3.** The grid shows all six product categories at once, with detail on demand (hover or tap).

**Out of scope here:** sections below the grid, product detail pages, quote form, backend, CMS.

---

## 2. Design system

### 2.1 Theme
Hybrid: a **dark navy header and hero** that introduces the brand, then a **white page body** for content. Accent blue is the single action colour. Style is enterprise-clean, with large type, generous spacing, rounded corners and soft glass effects.

### 2.2 Colour

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0d1b2e` | Body text, headings on white |
| `--muted` | `#5b6b80` | Secondary text |
| `--line` | `#e3e9f1` | Borders, dividers |
| `--tint` | `#f4f7fb` | Light surfaces |
| `--accent` | `#0a84ff` | Primary buttons, links, eyebrow |
| `--accent-dark` | `#0670dc` | Primary button hover |
| `--accent-2` | `#00b89c` | Logo gradient end |
| Hero navy | `#001f42` | Hero base, solid header (96% opacity) |
| On-dark highlight | `#6cb6ff` / `#8cc8ff` | Logo "IoT", active-menu underline, "Explore" link on glass |
| Headline gradient | `#0a84ff` → `#8a3ffc` | Highlighted words in the grid heading |
| Grid panel | `#eef1fa` + blue radial glows | Background behind the cards |
| Card fallback | `#06306b` | Shown until an image loads |

### 2.3 Typography
Fonts (Google Fonts): **Space Grotesk** 500/600/700 for headings and logo, **Inter** 400/500/600 for body and UI.

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero H1 | Space Grotesk | `clamp(40px, min(6vw, 9vh), 76px)` | 700 | line-height 1.08, tracking -0.035em, max 18ch |
| Hero lead | Inter | `clamp(17px, 2vw, 20px)` | 400 | white 82%, max 52ch |
| Section eyebrow | Inter | 12.5px | 600 | UPPERCASE, tracking .16em, accent colour |
| Section H2 (grid) | Space Grotesk | `clamp(30px, 4vw, 50px)` | 700 | centred, line-height 1.12 |
| Nav items | Inter | 15px | 500 | white 85%, 100% on hover |
| Mega-menu rows | Inter | 15.5px | 500 | |
| Mega-menu panel heading | Space Grotesk | 14px | 600 | UPPERCASE, muted |
| Buttons | Inter | 15px (large 16px) | 600 | |
| Logo | Space Grotesk | 24px | 600 | "Tick" + bold "IoT" |
| Card name (large card) | Space Grotesk | `clamp(22px, 2vw, 28px)` | 600 | |
| Card name (small cards) | Space Grotesk | 17px | 600 | |
| Card subtitle | Inter | 14px (13px small cards) | 400 | 90% opacity |
| Card hover description | Inter | 14.5px | 400 | line-height 1.5 |

### 2.4 Layout, shape and effects
- **Container:** `min(1200px, 100% - 40px)`, centred.
- **Radius:** buttons 10px, grid cards 20px, grid panel 30px.
- **Buttons:** primary (solid accent), ghost (translucent white with blur on the hero). Large size 14px/26px padding.
- **Glass:** `rgba(0,31,66,.5)` with `blur(16px) saturate(1.3)` and a 1px inner top highlight.
- **Motion:** 0.2 to 0.35s for hover, 0.5 to 0.8s for card reveals, easing `cubic-bezier(.2,.7,.2,1)`. Motion is removed when the user prefers reduced motion.

---

## 3. Navigation

**Structure (fixed order):** Logo (left), centred menu, **Request a Quote** button (right). Layout is a 3-column grid `1fr auto 1fr`, height 72px.

| Menu | Content |
|---|---|
| Products | Two-pane mega-menu: 5G Connectivity, Cellular Voice, Public Safety, Antennas, Power & Outdoor, Software (each lists its models), plus *All products* and *Custom products* |
| Solutions | Public Safety, Education, Transportation, Smart Cities, Utilities, Enterprise (each: Overview, Recommended products, Case studies) |
| Services | Managed Connectivity, UCaaS, PhoneMDM, Installation & Support |
| OEM / ODM | Custom Hardware Design, Manufacturing, Private Label |
| Resources | Datasheets, Case Studies, Certifications, Technical Support |
| Company | About, Partners, Contact, Request a Quote |

**Behaviour**
1. **Header states.** At the top of the page the header is **transparent** over the hero image. It turns **solid navy with blur** when the page is scrolled more than 8px, a menu is open, or the mobile menu is open.
2. **Mega-menu.** Opens on hover, focus or click, as a full-width solid navy panel (`#001f42`, same as the header) under the header, with white text. The left list has chevrons and highlights the active row with a faint white tint; the right-hand panel heading is light blue (`#6cb6ff`); hovering a row swaps the right-hand links. The first row with sub-links is selected on open. External links show an arrow icon. Closes when the pointer leaves the header.
3. **Menus without sub-panels** (Services, OEM / ODM, Resources, Company) show the list only.
4. **Mobile (≤ 960px).** The menu collapses behind a burger button; the CTA button is hidden; menu items stack and open inline.

---

## 4. Hero

**Purpose:** state the value proposition and route the visitor to products or an expert.

- **Size:** full-bleed, `min-height: clamp(600px, 100vh, 840px)`; 72px top padding so content clears the header. On ≤ 720px the minimum height is 560px.
- **Background:** `/img/hero.jpg` (optimised copy of the supplied 2:1 render), `cover`, anchored right so the router sits on the right and the left stays clear for text. Overlays: a top fade for the nav (50% navy to 0 over 150px), a left fade (50% to 0 by 60% width) for text contrast, and a bottom fade into navy. On ≤ 720px a uniform navy overlay (55% to 82%) replaces the left fade.
- **Content (left-aligned, in the container):**
  - H1: **"Connectivity built for the real world."**
  - Lead: "Enterprise-grade cellular hardware, software and integrated solutions for vehicles, public safety, remote sites and connected operations."
  - Primary CTA **Explore Products** (scrolls to the grid); secondary CTA **Talk to an Expert** (scrolls to the quote section).
- **Animation:** none. The hero is static.

---

## 5. Product categories grid

**Purpose:** show the six product categories as a visual overview with detail on demand.

**Section:** white background, 90px top and 100px bottom padding. Centred eyebrow **"Product categories"** and H2 **"Everything you need to deploy anywhere."** (the words "deploy anywhere." use the blue-to-purple gradient).

**Grid:** one panel (`#eef1fa`, radius 30px, 16px padding, blue glows behind the gaps) containing a **12-column CSS grid**, 16px gap, rows 224px.

| # | Card | Position (desktop) | Image |
|---|---|---|---|
| 1 | 5G Connectivity: Routers & gateways | columns 1-8, rows 1-2 (large) | `img/routers.jpg` |
| 2 | Cellular Voice: Phones & POTS gateways | columns 9-12, row 1 | `img/deskphone.jpg` |
| 3 | Antennas: 5G, Wi-Fi, GNSS | columns 9-12, row 2 | `img/antenna.jpg` |
| 4 | Public Safety: Call boxes & retrofit kits | columns 1-4, row 3 | `img/emergency-box.jpg` |
| 5 | Power & Outdoor: Solar, UPS, enclosures | columns 5-8, row 3 | `img/solar.jpg` |
| 6 | Software: PhoneMDM | columns 9-12, row 3 | `img/phonemdm.jpg` |

**Card rules**
- **Image:** 16:9 renders (source 1672×941, optimised to 1600px JPEG, about 120-190KB). The cards are about 16:9 (large 1.68:1, small 1.70:1), so the image fills edge to edge with `object-fit: cover`. New images must keep the subject centred and use 16:9.
- **Label:** plain white text (no pill or card) with a soft dark text-shadow. Name above subtitle, in a narrow column (max 30-34% of card width) placed in a clear area of the image: bottom-left for cards 1, 3 and 6, top-left for cards 2, 4 and 5.
- **Hover / keyboard focus:** card lifts 4px with a deeper shadow, the image zooms to 1.05, and a **frosted-glass description panel slides up from the bottom** inside the card showing the description and an **Explore →** link.
- **Touch (no hover):** first tap opens the description; a second tap follows the link.
- **Copy per card:** name, subtitle and description are held in `src/data/content.js` (`categories`); the array order is the grid order.

**Responsive**

| Breakpoint | Behaviour |
|---|---|
| > 1080px | Layout as in the table, rows 224px |
| ≤ 1080px | Card 1 spans the full row (2 rows tall); cards 2-6 sit two per row; rows 200px |
| ≤ 720px | Single column; card 1 stays 2 rows tall; rows 190px; panel padding and gap 10px, radius 22px; section padding 64px |

---

## 6. Accessibility and performance
- Colour contrast: white text on navy and on the dark image areas; accent blue (`#0a84ff`) is used for large or bold text and controls only.
- All menu items, cards and buttons are keyboard reachable; focus ring is a 2px accent outline. Card descriptions also appear on keyboard focus.
- Decorative images use empty `alt`; the hero background is `aria-hidden`.
- `prefers-reduced-motion` disables animations and transitions.
- Images: lazy-loaded below the fold, hero at about 140KB, cards about 120-190KB each. Fonts use `display=swap`.

---

## 7. Acceptance criteria

| ID | Criteria |
|---|---|
| AC-1 | Header is transparent at the top of the page and solid navy after scrolling or opening a menu. |
| AC-2 | Menu is centred between logo and CTA; Products opens the two-pane mega-menu. |
| AC-3 | Hero shows the H1, lead and both CTAs without overlapping the router image at 1440px wide. |
| AC-4 | "Explore Products" scrolls to the product grid. |
| AC-5 | Grid renders six cards in the layout of section 5; images fill the cards with no letterboxing. |
| AC-6 | Hovering or focusing a card shows the glass description; tapping does so on touch devices. |
| AC-7 | Layout holds at > 1080px, 1080px and 720px as in the responsive table, with no horizontal scrolling. |

---

## 8. Open items
1. **Branding in product renders.** The router, antenna and solar pole images show "QikCell" printed on the product. Replace or re-render with TickIoT branding before launch.
2. **Placeholder links.** Menu items, card "Explore" links and the quote section are not yet linked to real pages.
3. **Copy approval.** Hero text, card descriptions and menu sub-links (especially Solutions) are draft and need business sign-off.
4. **Assets.** The original supplied images are about 1.5MB each and are PNG data with a `.jpg` extension; the site uses the optimised copies in `public/img/`. Regenerate them if images change.
5. **Logo.** A text logo with a placeholder mark is in use; replace with the approved logo file.
