# woodwoodan — Style Reference
> Kriya Kayu Solid & Furnitur Kustom Bernilai Seni (Artisanal Luxury)

**Theme:** light

woodwoodan mengusung platform katalog digital dan showcase kriya furnitur kayu solid dengan fondasi estetika artisanal luxury: hangat (earthy), organik, presisi, dan minimalis Skandinavia-Jepang (Japandi). Antarmuka dibangun di atas kanvas Organic Parchment (#F9F7F2) yang tenang dan ramah mata, permukaan kartu Card Surface (#FFFFFF) berbayangan halus, tipografi berwibawa Timber Deep Charcoal (#231F1D), serta aksen Warm Teak Ochre (#A67344) dan Soft Amber Glow (#CFA36B) yang merefleksikan kehangatan kayu jati solid, pengerjaan kriya (craftsmanship), dan detail sambungan kayu (wood joinery). Kontrol aksi mempertahankan bentuk geometrik percaya diri dengan pill-shaped controls (radius 100px), hierarki kartu 16px dan panel 32px, serta tipografi Open Runde weight 600 dengan tracking ketat -0.03em yang dipadukan dengan aksen tulisan tangan Caveat untuk kutipan ulasan klien. Warna aksen dihadirkan secara terukur dan disiplin, memastikan foto serat kayu solid dan hasil karya portofolio menjadi fokus visual utama.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Timber Deep Charcoal | `#231F1D` | `--color-charcoal` | Headings and primary body text — near-black with warm earthy undertones provides authoritative, high-contrast readability without the cold harshness of pure #000 |
| Timber Dark | `#181514` | `--color-timber-dark` | Primary action buttons (filled CTA) and header controls — deepest dark timber tone for solid, grounded button fills |
| Muted Woodsmoke | `#786F68` | `--color-woodsmoke` | Secondary body text, technical specifications (material, dimensions, finishing), helper copy, and muted descriptions |
| Ash Bark | `#9E968F` | `--color-ash` | Tertiary text, nav links, subdued metadata, placeholder text, low-priority labels |
| Sand Mist | `#E6E1DA` | `--color-sand-mist` | Hairline borders, input outlines, divider lines — warm neutral harmonizing with organic parchment rather than cold gray |
| Organic Parchment | `#F9F7F2` | `--color-parchment` | Page canvas, hero background, section backgrounds — warm organic surface replacing glaring pure white |
| Card Surface | `#FFFFFF` | `--color-card` | Card surfaces, detail modal canvas, floating panels — crisp clean contrast against parchment canvas |
| Warm Teak Ochre | `#A67344` | `--color-teak-ochre` | Primary brand accent — key CTAs, hover states, craft badges, category highlights, WhatsApp consultation action cues |
| Soft Amber Glow | `#CFA36B` | `--color-amber-glow` | Secondary accent — 5-star customer review rating stars, pre-order badges, warm highlights |
| Ochre Wash | `#F4ECE1` | `--color-ochre-wash` | Tinted surface wash — light warm teak wash for callout blocks, custom banner strips, active category filters |
| Amber Wash | `#FBF5EB` | `--color-amber-wash` | Tinted surface wash — soft amber card backgrounds for pre-order blocks and workshop highlights |
| Sage Green | `#4E7A51` | `--color-sage` | Status accent — 'Ready Stock' badge text and positive reassurance indicators |
| Soft Sage Wash | `#EBF3ED` | `--color-sage-wash` | Subtle surface tint for 'Ready Stock' badge background |
| Warm Terracotta | `#C25E43` | `--color-terracotta` | Subtle warm accent for notification dots, urgent badges, or small graphic details |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Open Runde — Primary typeface for all headings and body text — geometric sans-serif with weight 600 at display sizes (64/48/40/32/24/20px) carrying -0.03em letter-spacing for compressed confident headlines; weight 500 for body (22/16/14px) with -0.02em tracking; 11px uppercase eyebrow labels at weight 600 with +0.02em tracking · `--font-open-runde`
- **Substitute:** Inter, DM Sans, or Outfit
- **Weights:** 500, 600
- **Sizes:** 11, 12, 14, 16, 20, 22, 24, 32, 40, 48, 64
- **Line height:** 1.13-1.78
- **Letter spacing:** -0.03em at 20px+ display, -0.02em at 14-16px body, +0.02em at 11px uppercase
- **OpenType features:** `"ss01" on`
- **Role:** Primary typeface for all headings and body text — geometric sans-serif with weight 600 at display sizes (64/48/40/32/24/20px) carrying -0.03em letter-spacing for compressed confident headlines; weight 500 for body (22/16/14px) with -0.02em tracking; 11px uppercase eyebrow labels at weight 600 with +0.02em tracking

### Caveat — Handwritten signature font for testimonial attributions — creates human warmth against the geometric system at small sizes only · `--font-caveat`
- **Substitute:** Dancing Script or Kalam
- **Weights:** 600
- **Sizes:** 16, 24
- **Line height:** 1.33, 1.50
- **Role:** Handwritten signature font for testimonial attributions — creates human warmth against the geometric system at small sizes only

### SF Pro Text — Secondary system font for small uppercase labels — only used sparingly where system rendering is preferred over Open Runde · `--font-sf-pro-text`
- **Substitute:** System UI sans-serif
- **Weights:** 600
- **Sizes:** 11
- **Line height:** 1.62
- **Letter spacing:** +0.02em
- **Role:** Secondary system font for small uppercase labels — only used sparingly where system rendering is preferred over Open Runde

### Inter — Inter — detected in extracted data but not described by AI · `--font-inter`
- **Weights:** 400, 500
- **Sizes:** 16px, 32px
- **Line height:** 1, 1.25
- **Role:** Inter — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| eyebrow | 11px | 1.62 | 0.22px | `--text-eyebrow` |
| body-sm | 14px | 1.43 | -0.28px | `--text-body-sm` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| body-lg | 22px | 1.29 | — | `--text-body-lg` |
| subheading | 24px | 1.33 | -0.72px | `--text-subheading` |
| heading-sm | 32px | 1.25 | -0.96px | `--text-heading-sm` |
| heading | 40px | 1.2 | -1.2px | `--text-heading` |
| heading-lg | 48px | 1.17 | -1.44px | `--text-heading-lg` |
| display | 64px | 1.13 | -1.92px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 100px |
| cards | 16px |
| icons | 888px |
| images | 20px |
| buttons | 100px |
| largeCards | 32px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(10, 13, 20, 0.03) 0px 1px 2px 0px` | `--shadow-subtle` |
| subtle-2 | `rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.06) 0px 2px 3px -1px` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 12px

## Components

### Filled Action Button
**Role:** Primary CTA — 'Jelajahi Katalog', 'Konsultasi via WhatsApp', 'Pesan Produk'

Background #181514 (Timber Dark) or #231F1D (Timber Deep Charcoal), text #ffffff, border-radius 100px (pill), padding 8px 12px (small) or 6px 14px (nav), shadow rgb(36,38,40) 0px 0px 0px 1px + rgba(27,28,29,0.48) 0px 1px 2px 0px. Open Runde 14px/500, text #ffffff, letter-spacing -0.02em.

### Secondary Dark Button
**Role:** Compact dark action — nav-level CTAs and dense button rows

Background #231F1D (Timber Deep Charcoal), text #ffffff, border-radius 100px, padding 6px 10px or 6px 14px. Same shadow stack as primary button. Used where a slightly smaller, denser button is needed in nav or toolbar contexts.

### Outline Link Button
**Role:** Navigation links — 'Tentang', 'Katalog', 'Portofolio', 'Cara Pesan', 'Testimoni', 'Kontak'

Background #ffffff, text #231F1D, border-radius 100px, padding 8px 12px. No shadow. Functions as a ghost nav item inside the pill-shaped header container.

### Feature Card
**Role:** Standard content card for product categories, value pillars, and specifications

Background #ffffff, border-radius 16px, padding 24px, no shadow. Open Runde 24px/600 heading with -0.03em tracking in #231F1D, body text 16px/500 in #786F68. Sits flush on Organic Parchment (#F9F7F2) canvas.

### Elevated Card
**Role:** Card with subtle elevation for product previews, detail modal, and testimonial blocks

Background #ffffff, border-radius 20px, shadow rgba(0,0,0,0.05) 0px 1.78px 8px 0px + rgba(0,0,0,0.04) 0px 0.89px 2.67px 0px. No padding (content fills card). Used for the product showcase stack and the testimonial quote card.

### Large Feature Panel
**Role:** Full-width feature section with generous internal padding

Background #ffffff (or #F4ECE1 Ochre Wash), border-radius 32px, padding 96px 48px. No shadow. Used for the craftsmanship narrative, workshop showcase, and spacious editorial blocks.

### Tinted Accent Card
**Role:** Highlight block with brand-tinted background

Background rgba(166,115,68,0.12) (Ochre Wash at 12% opacity), border-radius 16px, no padding or shadow. Used for custom design banners and highlighted craftsmanship info strips.

### Product Showcase Card
**Role:** Overlapping craft showcase and catalog product preview card

Background #ffffff, border-radius 16px, shadow rgba(10,13,20,0.03) 0px 1px 2px 0px. Contains structured product layout: SKU label at 11px uppercase in #786F68, status badge in Soft Sage (#4E7A51) or Amber (#CFA36B), title in Open Runde #231F1D, wood specification in #786F68, and WhatsApp action CTA in Warm Teak Ochre (#A67344).

### Star Rating Block
**Role:** 5-star rating indicator for testimonial credibility

Five solid amber stars (#CFA36B Soft Amber Glow) centered above a quote. No border or background. Open Runde 24px/600 quote text below in #231F1D, Caveat 16px/600 attribution in #786F68.

### Craft Badge / Status Indicator
**Role:** Inline status and material indicator — 'Ready Stock', 'Pre-order', 'Solid Teak'

No background (or soft wash #EBF3ED/#FBF5EB), inline horizontal arrangement: Warm Teak Ochre #A67344 or Sage #4E7A51 circular icon or pill, followed by label text in #231F1D at 16px/500. No heavy border.

### FAQ Accordion Item
**Role:** Expandable question row in the FAQ section

Full-width row with no background, no border-radius, horizontal divider line (1px #E6E1DA Sand Mist hairline). Question text in #231F1D at 16px/500, plus icon (+) on the right in #231F1D. Vertical padding ~16px, spacing between items ~12px.

### Pill-Shaped Header Container
**Role:** Floating navigation bar wrapping logo, links, and CTAs

Background #ffffff, border-radius 100px, wrapping the entire nav row. Contains logo + nav links (outline buttons) + WhatsApp consultation CTA, all arranged inline with 8-12px gaps. Floats above the hero with subtle shadow and backdrop blur.

### Logo Mark
**Role:** woodwoodan brand logo — artisanal wordmark & craft monogram

Artisanal brand mark rendered in #231F1D (Timber Deep Charcoal). Paired with 'woodwoodan' wordmark in Open Runde 16px/600, #231F1D.

### Eyebrow Label
**Role:** Small uppercase category tag above section headings — 'Kriya Kayu Solid & Furnitur Kustom'

Open Runde 11px/600, letter-spacing +0.02em, text-transform uppercase, color #A67344 (Warm Teak Ochre). No background, no border. Sits centered above the headline as a warm ochre capsule of context.

## Do's and Don'ts

### Do
- Use Open Runde weight 600 for all headings 20px and above with -0.03em letter-spacing — the tight tracking is the signature compressed headline feel
- Set primary action buttons to #181514 (Timber Dark) or #231F1D (Timber Deep Charcoal) with white text and 100px pill radius — never use bright colored fills for primary dark CTAs
- Use #A67344 Warm Teak Ochre for craft badges, WhatsApp CTA accents, active filters, and eyebrow labels
- Apply 16px border-radius to all content cards and 32px to large feature panels — radius hierarchy is a core part of the visual rhythm
- Set page canvas to #F9F7F2 (Organic Parchment) and use #FFFFFF (Card Surface) for cards and modals to maintain warm, earthy contrast
- Use Caveat 16px/600 for testimonial attributions only — it is a signature element, not a body font
- Showcase high-resolution solid wood grain and joinery details cleanly with subtle ambient elevation

### Don't
- Don't use bright neon accents — the palette is organic, earthy Japandi (Teak Ochre, Amber Glow, Muted Woodsmoke)
- Don't use pure #000000 for text or buttons — use #231F1D for text and #181514 for button fills; warm timber tones are deliberate
- Don't apply box-shadow to flat feature cards — elevation is reserved for elevated product previews, modal surfaces, and testimonial cards
- Don't use border-radius below 10px on any interactive element — pills (100px), 16px, and 32px are the only valid radius values
- Don't use gradient backgrounds anywhere — the design is strictly flat with solid fills and subtle warm washes only
- Don't set body text below #786F68 (Muted Woodsmoke) — the neutral floor for readable text is Woodsmoke, not light grays
- Don't use more than two chromatic accent colors on a single screen — the system relies on color appearing as rare, deliberate craft punctuation

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Organic Parchment | `#F9F7F2` | Page canvas — dominant background for the entire site, hero, and alternating content sections |
| 1 | Card Surface | `#FFFFFF` | Card backgrounds, product detail modal surface, elevated feature panels with soft ambient shadow |
| 2 | Ochre Wash | `#F4ECE1` | Tinted highlight blocks for custom consultation banner, active filter pills, and feature callouts |
| 3 | Amber Wash | `#FBF5EB` | Warm amber-tinted card backgrounds for pre-order blocks and workshop highlights |

## Elevation

- **Primary Button:** `rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px`
- **Elevated Card:** `rgba(0, 0, 0, 0.05) 0px 1.78px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0.89px 2.67px 0px`
- **Product Showcase Card:** `rgba(10, 13, 20, 0.03) 0px 1px 2px 0px`

## Imagery

Imagery is authentic, high-resolution, and product-focused: photography of solid wood furniture (Perhutani Teak, Sungkai), natural live edge contours, precision mortise-and-tenon wood joinery details, and real residential/commercial installations as outlined in the PRD. The dominant visual assets are clean product catalog cards and the workshop past projects masonry gallery. Icons are simple flat geometric shapes in Warm Teak Ochre (#A67344) or Timber Deep Charcoal (#231F1D). No 3D renders, no generic illustrations, no stock AI vectors. The aesthetic is 'artisanal luxury workshop meets clean editorial craft showcase'.

## Agent Prompt Guide

## Quick Color Reference
- Text (primary): #231F1D (Timber Deep Charcoal)
- Text (secondary): #786F68 (Muted Woodsmoke)
- Text (muted): #9E968F (Ash Bark)
- Background (page): #F9F7F2 (Organic Parchment)
- Background (card): #FFFFFF (Card Surface)
- Border: #E6E1DA (Sand Mist)
- Accent (primary): #A67344 (Warm Teak Ochre)
- Accent (secondary / rating): #CFA36B (Soft Amber Glow)
- Primary action: #181514 (Timber Dark filled action)

## 5 Example Component Prompts

1. Create a Primary Action Button: #181514 background, #ffffff text, 100px pill radius, compact pill padding. Use this filled treatment for the main CTA.

2. **Feature Card**: Background #FFFFFF on #F9F7F2 canvas, border-radius 16px, padding 24px, no shadow. Heading at 24px Open Runde weight 600, #231F1D, letter-spacing -0.72px. Body at 16px Open Runde weight 500, #786F68.

3. **Craft / Status Badge**: Inline badge — Warm Teak Ochre #A67344 or Sage #4E7A51 circular icon or pill, followed by label text 'Solid Teak' or 'Ready Stock' in #231F1D at 16px/500. No background, no heavy border.

4. **Product Showcase Card**: Background #FFFFFF, border-radius 16px, shadow rgba(10,13,20,0.03) 0px 1px 2px. Header label 'SKU: WWD-TBL-01' at 11px Open Runde weight 600 uppercase in #786F68. Product title in 20px/600 #231F1D, price display in bold #231F1D, specifications in #786F68.

5. **FAQ Accordion Row**: Full-width row, no background, 1px bottom border in #E6E1DA. Question text at 16px Open Runde weight 500, #231F1D, padding 16px 0. Plus icon on right at 16px, #231F1D. Spacing between rows: 12px.

## Similar Brands

- **Karimoku / Maruni** — Japanese artisanal wooden craft philosophy paired with modern, minimal web presentation, earthy neutral tones, and emphasis on wood joinery and natural grain
- **Stripe** — Precision typography, clean card structures, pill-shaped controls, minimal shadows, and restrained functional accents
- **Linear** — Compressed geometric sans-serif headlines with tight negative letter-spacing, dark filled CTA buttons, and high-contrast typographic discipline
- **Frama / Muuto** — Scandinavian-Japandi design atelier aesthetics: warm organic parchment canvases, earthy natural ochres, and tactile craft photography
- **Vercel** — Dark grounded primary action buttons, minimal shadows, and geometric typography with tight tracking on display sizes

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors — PRD Curated Palette */
  --color-charcoal: #231F1D;
  --color-timber-dark: #181514;
  --color-woodsmoke: #786F68;
  --color-ash: #9E968F;
  --color-sand-mist: #E6E1DA;
  --color-parchment: #F9F7F2;
  --color-card: #FFFFFF;
  --color-teak-ochre: #A67344;
  --color-amber-glow: #CFA36B;
  --color-ochre-wash: #F4ECE1;
  --color-amber-wash: #FBF5EB;
  --color-sage: #4E7A51;
  --color-sage-wash: #EBF3ED;
  --color-terracotta: #C25E43;

  /* Aliases for Design System Compatibility */
  --color-ink: #231F1D;
  --color-carbon: #181514;
  --color-midnight: #181514;
  --color-smoke: #786F68;
  --color-fog: #9E968F;
  --color-mist: #E6E1DA;
  --color-paper: #FFFFFF;
  --color-snow: #F9F7F2;
  --color-concrete: #D5CEC5;
  --color-electric-blue: #A67344;
  --color-iris: #CFA36B;
  --color-magenta: #C25E43;
  --color-leaf: #4E7A51;
  --color-coral: #C25E43;
  --color-ice: #F4ECE1;
  --color-lavender: #FBF5EB;
  --color-blush: #F5ECE3;

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-open-runde: 'Open Runde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-caveat: 'Caveat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 11px;
  --leading-eyebrow: 1.62;
  --tracking-eyebrow: 0.22px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-body-lg: 22px;
  --leading-body-lg: 1.29;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.72px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.96px;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --tracking-heading: -1.2px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -1.44px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -1.92px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 96px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 32px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 888px;
  --radius-full-4: 999px;

  /* Named Radii */
  --radius-tags: 100px;
  --radius-cards: 16px;
  --radius-icons: 888px;
  --radius-images: 20px;
  --radius-buttons: 100px;
  --radius-largecards: 32px;

  /* Shadows */
  --shadow-subtle: rgba(10, 13, 20, 0.03) 0px 1px 2px 0px;
  --shadow-subtle-2: rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.06) 0px 2px 3px -1px;

  /* Surfaces */
  --surface-paper: #FFFFFF;
  --surface-snow: #F9F7F2;
  --surface-ice: #F4ECE1;
  --surface-lavender: #FBF5EB;
  --surface-parchment: #F9F7F2;
  --surface-card: #FFFFFF;
  --surface-ochre: #F4ECE1;
}
```

### Tailwind v4

```css
@theme {
  /* Colors — PRD Curated Palette */
  --color-charcoal: #231F1D;
  --color-timber-dark: #181514;
  --color-woodsmoke: #786F68;
  --color-ash: #9E968F;
  --color-sand-mist: #E6E1DA;
  --color-parchment: #F9F7F2;
  --color-card: #FFFFFF;
  --color-teak-ochre: #A67344;
  --color-amber-glow: #CFA36B;
  --color-ochre-wash: #F4ECE1;
  --color-amber-wash: #FBF5EB;
  --color-sage: #4E7A51;
  --color-sage-wash: #EBF3ED;
  --color-terracotta: #C25E43;

  /* Aliases for Design System Compatibility */
  --color-ink: #231F1D;
  --color-carbon: #181514;
  --color-midnight: #181514;
  --color-smoke: #786F68;
  --color-fog: #9E968F;
  --color-mist: #E6E1DA;
  --color-paper: #FFFFFF;
  --color-snow: #F9F7F2;
  --color-concrete: #D5CEC5;
  --color-electric-blue: #A67344;
  --color-iris: #CFA36B;
  --color-magenta: #C25E43;
  --color-leaf: #4E7A51;
  --color-coral: #C25E43;
  --color-ice: #F4ECE1;
  --color-lavender: #FBF5EB;
  --color-blush: #F5ECE3;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-open-runde: 'Open Runde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-caveat: 'Caveat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 11px;
  --leading-eyebrow: 1.62;
  --tracking-eyebrow: 0.22px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-body-lg: 22px;
  --leading-body-lg: 1.29;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.72px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.96px;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --tracking-heading: -1.2px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -1.44px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -1.92px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 32px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 888px;
  --radius-full-4: 999px;

  /* Shadows */
  --shadow-subtle: rgba(10, 13, 20, 0.03) 0px 1px 2px 0px;
  --shadow-subtle-2: rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.06) 0px 2px 3px -1px;
}
```
