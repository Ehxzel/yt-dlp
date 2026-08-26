# Personal photos

Drop your real photographs into this folder using the exact filenames below.
Once a file is here, the matching placeholder in `index.html` gets swapped
for a real `<img>` tag.

## Expected files

- `abraham-hero.jpg` &middot; used in the Home section (hero), portrait crop, 4:5 ratio
- `abraham-about.jpg` &middot; used in the About section, portrait crop, 4:5 ratio

You can reuse the same photo for both if you only have one for now, just
save it twice under both filenames.

## Notes

- Crop to a 4:5 portrait ratio before uploading (taller than it is wide).
  A square or landscape photo will get cropped oddly by the card shape.
- `.jpg`, `.jpeg`, `.png` or `.webp` all work, just tell Claude which
  extension you used if it's not `.jpg` so the file path can be updated to
  match.
- Keep the file size reasonable (under ~500KB) so the page stays fast,
  export at roughly 900px on the long edge, that's plenty for the card size
  on screen.
- Once uploaded, ask Claude to wire it in, both `photo-card` spots
  (`index.html`) currently render a stylized "Aa" monogram placeholder and
  will be swapped for the real photo.
