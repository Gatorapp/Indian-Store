# Bhavini — BAP Indian Clothing

A multi-page Next.js + Tailwind CSS Indian boutique website, curated for Amit Patel.

## Pages

- `/` Home — atelier intro, three category doors, weekly edit, founder note
- `/women/` — saris, lehengas, kurta sets, bridal
- `/men/` — sherwanis, bandhgalas, kurtas, groom looks
- `/kids/` — festival sets, everyday cotton, tailoring promise
- `/contact/` — appointment form, atelier addresses

## Stack

- Next.js 14 (App Router) with `output: 'export'` for static HTML/CSS/JS
- TypeScript
- Tailwind CSS 3
- Custom inline SVG logo (lotus monogram) and on-page SVG artwork — no external images

## Commands

```bash
npm install
npm run build      # produces ./out/ static export
npx serve out      # or any static host
```

## Folder structure

```
app/
  layout.tsx           # root layout: Header + Footer
  globals.css          # Tailwind + Cormorant Garamond + Inter via Google Fonts
  page.tsx             # home
  women/page.tsx
  men/page.tsx
  kids/page.tsx
  contact/page.tsx
  icon.svg             # favicon
components/
  Header.tsx           # sticky nav, mobile drawer, top utility bar
  Footer.tsx           # newsletter, links, brand mark
  Logo.tsx             # inline SVG lotus monogram
  ProductCard.tsx      # card with woven/zari/bandhani/block/kalamkari/leheriya/paisley SVG art
  CategoryHero.tsx     # arch/mandala/kite hero motifs for category pages
next.config.mjs        # output: 'export'
tailwind.config.ts     # Bhavini palette + display font
```

## Design notes

- **Palette**: ivory `#FBF6EC` background, maroon `#5A1A1A` primary, saffron/marigold `#D98E2B`/`#C0612A` accents, leaf `#3F5C3A` for kids.
- **Type**: Cormorant Garamond for display (italic for emphasis), Inter for body. Both loaded via Google Fonts.
- **Imagery**: every product/hero is a hand-crafted inline SVG (paisley grids, bandhani dots, kalamkari sketches, block stamps, zari shimmer, leheriya waves, mandala, mughal arch, kite cluster) — no external images, fully static.
- **Logo**: lotus-petal monogram in a circle with saffron centre.
