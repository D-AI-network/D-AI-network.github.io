# Darwin AI Research — Academic Website

This is a static academic website designed for GitHub Pages.

## Design

The layout intentionally combines:
- a left profile / CV / contact rail,
- compact research interests,
- news,
- education / research experience,
- publication cards with images,
- Selected / All publication filtering,
- TL;DR summaries and expandable abstracts.

No framework is required.

## Files

```text
index.html
assets/
  css/
    style.css
  js/
    site.js
  img/
    erst.svg
    bprnet.svg
    specnet.svg
    popfield.svg
```

## What to edit first

### 1. Profile links

Edit `index.html`.

Replace the `href="#"` values for:
- CV
- Google Scholar
- LinkedIn

GitHub is already set to:
`https://github.com/D-AI-network`

### 2. Profile photo

Put your photo at:

```text
assets/img/profile.jpg
```

Then replace:

```html
<div class="portrait-placeholder">GH</div>
```

with:

```html
<img class="portrait" src="assets/img/profile.jpg" alt="Giseong Hong">
```

### 3. News and publications

Edit:

```text
assets/js/site.js
```

All news and publication data are kept there.

### 4. Publication images

Replace the SVG files in:

```text
assets/img/
```

with your actual method figures if desired.

You can keep the same filenames or update the `image:` paths in `site.js`.

## GitHub Pages deployment

If your GitHub username is:

```text
D-AI-network
```

the user-site repository should be named:

```text
D-AI-network.github.io
```

Upload the *contents* of this folder to the repository root so that `index.html`
is directly visible in the root.

Then:

```text
Repository
→ Settings
→ Pages
→ Deploy from a branch
→ main
→ /(root)
→ Save
```

The default address will be:

```text
https://d-ai-network.github.io/
```

## Local preview

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

and visit:

```text
http://localhost:8000
```
