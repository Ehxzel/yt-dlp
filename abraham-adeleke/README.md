# Abraham Adeleke | Business Growth Strategist

A premium, single-page brand site plus dedicated case-study pages. Static HTML/CSS/JS, no build step required.

## Structure

```
abraham-adeleke/
  index.html                        # single-page site: hero, about, results, testimonials, how-i-work, contact
  styles.css                        # full design system, shared by every page
  script.js                         # nav, scroll reveal, staircase and transit-line stagger
  results/
    daniel-araromi.html             # case study, real data
    giovanne-schachere.html         # case study, real data
    christopher-clarke.html         # case study, real data
```

## Preview locally

```
cd abraham-adeleke
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Design system

Colors are CSS custom properties at the top of `styles.css`:

```css
--black:         #080A09
--surface:       #0D100F
--surface-warm:  #123b2b   /* diagonal gradient used in monogram cards */
--green:         #1A9965
--green-bright:  #3FCE94   /* italic accent text, glow highlights */
--white:         #FFFFFF
--border:        #242826
--muted:         #929895
```

Typography: **Geist** (400 to 800) for everything, **Instrument Serif Italic** for the one-word accent that closes each section's headline (`.accent` class). Both load from Google Fonts.

The glow effect (soft white-to-green radial gradient) appears in exactly two places by design: behind the hero photo, and behind the Contact business card. It is the visual bookend of the page, not a repeated decoration.

## Replacing the photo placeholders

Two placeholders are reserved at their exact aspect ratio (4:5): the hero photo (`.hero__visual .photo-card`) and the About photo (`.about__visual .photo-card`). To swap in the real photographs, replace the `.photo-card__mono` div inside each with an `<img>` (or set it as a `background-image`), keeping the `photo-card` wrapper's classes so the border, radius and caption bar stay intact.

## Adding real visual evidence to the case studies

Each case-study page has a `.cs-evidence__frame` placeholder in the sidebar, labelled "Visual evidence." Replace it with an `<img>` once the real screenshots are cropped (client name, browser chrome, and anything outside the relevant chart or message should be cropped out first). The three real screenshots referenced during content gathering:

- Daniel Araromi: LinkedIn analytics, content performance Oct 20 to Dec 20
- Giovanne Schachere: LinkedIn follower growth notification and competitor leaderboard
- Christopher Clarke: brand visual assets (Google Drive folder shared separately)

## Adding Daniel's testimonial

The testimonials ledger on the home page holds Daniel Araromi's slot with a dimmed `[Testimonial pending]` placeholder (`.ledger__row--pending`). Once his quote is available, replace the placeholder paragraph and remove the `ledger__row--pending` / `ledger__quote--pending` classes and the dimmed monogram style.

## Booking link

"Work With Me" and "Book a Call" both point to the Calendly link:
`https://calendly.com/adelekeabrahamamw8087/30min`

## Animation notes

- Scroll reveal (`.reveal` class) fades and lifts elements into view, respects `prefers-reduced-motion`.
- Results section sparklines draw themselves in via `stroke-dashoffset` when their card scrolls into view.
- The How I Work staircase (4 steps) and the Growth System transit line (6 stations) reveal in sequence, staggered, not all at once. Handled in `script.js`.
- The transit line switches to a vertical rail below 640px. It is separate markup (`.growth-line__track--mobile`), not a CSS transform of the horizontal one, because the horizontal labels do not fit narrow viewports.
