# Giseong Hong Academic Website Starter

A lightweight static academic portfolio designed for GitHub Pages.

## Structure

- `index.html` — main page
- `assets/css/style.css` — all styling
- `assets/js/site.js` — publications, news, and Selected/All filter
- `assets/img/` — place your profile image and paper figures here

## 1. Preview locally

The simplest way is to open `index.html` directly in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 2. Replace your links

Edit `index.html` and replace:

- CV URL
- Google Scholar URL
- GitHub URL
- LinkedIn URL
- email address

## 3. Add publication figures

Copy figures into:

```text
assets/img/
```

For example:

```text
assets/img/erst.png
assets/img/bprnet.png
assets/img/specnet.png
```

Then edit `assets/js/site.js`:

```js
image: "assets/img/erst.png"
```

## 4. Edit publications

All publication entries are inside:

```text
assets/js/site.js
```

Duplicate one object and edit:

```js
{
  title: "Paper title",
  venue: "Conference / Journal",
  year: 2027,
  selected: true,
  authors: "Author A, Author B",
  description: "One-line summary.",
  image: "assets/img/example.png",
  links: [
    {label: "Paper", url: "https://..."},
    {label: "Code", url: "https://..."},
    {label: "Project", url: "https://..."}
  ]
}
```

Set `selected: true` to display it under the Selected tab.

## 5. Publish with GitHub Pages

### Recommended repository name

Create a GitHub repository named:

```text
YOUR_GITHUB_USERNAME.github.io
```

For example, if your GitHub username is `giseonghong`:

```text
giseonghong.github.io
```

Upload all files in this folder to the root of that repository.

Then go to:

```text
GitHub repository
→ Settings
→ Pages
→ Deploy from a branch
→ main / root
```

After deployment your site will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io
```

## 6. Custom domain later

Once the website is stable, you can purchase a domain such as:

```text
giseonghong.com
```

and point it to GitHub Pages. This lets you keep the same public URL even if you later rebuild the site with another framework.

## Recommended next edits

1. Add a real profile photo.
2. Add paper overview figures.
3. Replace all `#` links.
4. Replace placeholder contact email.
5. Add your institution and degree information.
6. Add a downloadable CV PDF.
7. Add a separate project page only for major papers if needed.

This starter is intentionally framework-free: no Node.js, npm, Jekyll, or Quarto is required.
