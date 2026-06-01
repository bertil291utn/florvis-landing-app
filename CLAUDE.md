# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3010
npm run build    # Production build
npm run lint     # ESLint
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

- `NEXT_PUBLIC_APP_URL` — URL to the Florvis web app (used in CTA buttons)
- `NEXT_PUBLIC_APK_URL` — Direct APK download URL (currently commented out in UI)
- `NEXT_PUBLIC_APK_URL_VERSION` — APK version string (currently commented out in UI)
- `NEXT_PUBLIC_REVALIDATE_TIME` — ISR revalidation time in seconds (set as `revalidate` export in `app/page.tsx`)

## Architecture

Single-page Next.js 13 landing app (App Router). The entire page renders in `app/page.tsx` as a vertical stack of sections.

**Section order** (top to bottom):
`Navbar` → `Hero` → `Features` → `Dashboard` → `BeforeAfter` → `DownloadCTA` → `Testimonials` → `Footer`

Each section is a standalone component under `components/sections/`. Layout chrome (nav, footer) lives in `components/layout/`.

**Styling conventions** — use the utility classes defined in `globals.css` rather than repeating Tailwind combos:
- `.section-padding` — vertical section padding
- `.container-custom` — centered, padded container
- `.btn-primary` / `.btn-secondary` — CTA button styles
- `.feature-card` / `.dashboard-card` — card variants
- `.animate-on-scroll` + `.visible` — scroll-triggered fade-in (pair with `useIntersectionObserver`)

**Brand colors** (defined in `tailwind.config.ts`, not CSS vars):
- `primary` → `#1f1d3e` (dark navy)
- `secondary` → `#dc84a4` (rose pink)

**UI primitives** — `components/ui/` contains shadcn/ui components. Do not edit these manually; use the shadcn CLI if new primitives are needed.

**APK download flow** — the Android download buttons are currently commented out in `Hero.tsx` and `DownloadCTA.tsx`, replaced by a "Probar sistema" link pointing to `NEXT_PUBLIC_APP_URL`. The commented code is preserved for when the APK link is re-enabled.

**Scroll animations** — `hooks/use-intersection-observer.ts` provides an `IntersectionObserver` hook. Sections add `.visible` to elements with `.animate-on-scroll` when they enter the viewport.
