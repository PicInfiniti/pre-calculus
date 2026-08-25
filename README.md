# MATH 1280 · Precalculus

A growing collection of course notes, worked examples, and practice for **MATH 1280 — Fall 2026**.

The project follows the assigned sections of *Precalculus: Mathematics for Calculus*, eighth edition, by James Stewart, Lothar Redlin, and Saleem Watson. The home page is the course map; every lesson added later will live on its own page.

## Course map

| Learning arc | Textbook sections |
| --- | --- |
| Systems and the coordinate plane | 9.1, 9.2, 1.9 |
| Functions | 2.1, 2.2, 2.3, 2.6, 2.7, 2.8 |
| Polynomial and rational functions | 3.1, 3.2, 3.6, 3.7 |
| Exponential and logarithmic functions | 4.1–4.5 |
| Right-triangle trigonometry | 6.1–6.4 |
| Unit-circle trigonometry | 5.1–5.5 |
| Analytic trigonometry | 7.1–7.5 |

That is **32 sections** across eight chapters, organized into seven connected learning arcs. The order reflects the Fall 2026 tentative calendar and may evolve with the course.

## Textbook

**Stewart, James; Redlin, Lothar; Watson, Saleem.** *Precalculus: Mathematics for Calculus*. 8th ed., Cengage, 2024.

- Print ISBN: `978-0-357-75363-7`
- [Publisher page and table of contents](https://www.cengage.ca/c/precalculus-mathematics-for-calculus-8e-stewart-redlin-watson/9780357753637/)

This repository is an independent learning resource. The textbook and its cover artwork are owned by their respective publisher and rights holders; no textbook content is redistributed here.

## Current status

- [x] Responsive course home page
- [x] Complete Fall 2026 section roadmap
- [x] Multi-page Vite foundation
- [ ] Individual section pages
- [ ] Worked examples and practice sets
- [ ] Progress and answer-checking tools

## Development

Requirements:

- Node.js `20.19+` or `22.12+`
- npm

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```text
.
├── index.html                  # Course home entry
├── pages/
│   └── sections/              # One HTML entry per section (added over time)
├── public/                     # Static files and CNAME
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   └── sass/
│   ├── core/App.js            # Home page content and course map
│   └── main.js                # Home page bootstrap
├── vite.config.js              # Vite multi-page inputs
└── package.json
```

## Adding a section page

Each textbook section should remain a standalone page so it can be opened, linked, and studied independently.

Use this convention:

```text
pages/sections/9-1.html
src/sections/9-1.js
```

Then add its HTML file as a named input in `vite.config.js`:

```js
input: {
  home: fileURLToPath(new URL("./index.html", import.meta.url)),
  section91: fileURLToPath(
    new URL("./pages/sections/9-1.html", import.meta.url),
  ),
}
```

A lesson page should follow the shared study rhythm:

1. **Understand** — the central concept, vocabulary, and visual model.
2. **Work it out** — clear examples with important algebra steps visible.
3. **Practice** — focused problems with answers or feedback.

## Deployment

The project builds to `dist/` and can be published to GitHub Pages:

```bash
npm run deploy
```

The custom domain is configured through `public/CNAME`.

## License

Project source code is available under the licenses included in this repository. Third-party names, textbook content, and artwork remain the property of their respective owners.
