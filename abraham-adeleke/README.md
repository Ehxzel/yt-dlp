# Abraham Adeleke — Business Growth Strategist

A premium, single-page brand site. Static HTML/CSS/JS, no build step required.

## Structure

- `index.html` — all page content and section markup
- `styles.css` — full design system (colors, type, layout, responsive rules)
- `script.js` — sticky header state, mobile menu, scroll-reveal animation

## Preview locally

```
cd abraham-adeleke
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Replacing the photo placeholders

Two placeholders are reserved with the exact aspect ratio the final photographs
should use:

- Hero section (`.photo-frame--hero`, 4:5) — labelled "Abraham Photo"
- About section (`.photo-frame--about`, 4:5) — labelled "Abraham About Photo"

To swap in the real photographs, replace each `.photo-frame` block in
`index.html` with an `<img>` tag (or set it as a `background-image`), keeping
the same `aspect-ratio` and `border-radius` from `styles.css` so the layout
does not shift.

## Adding real Results / Testimonials content

The five result cards under `#results` and the three testimonial cards each
carry placeholder copy ("Reserved for...") ready to be replaced with real
client names, outcomes and quotes as they become available. The "Visual
Evidence" boxes are placeholders for result screenshots or metrics graphics.

## Brand tokens

Colors are defined as CSS custom properties at the top of `styles.css`:

```css
--black:  #080A09
--green:  #1A9965
--white:  #FFFFFF
--surface: #0D100F
--border: #242826
--muted:  #929895
```
