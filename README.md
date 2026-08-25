# MATH 1280 · Precalculus

An interactive, student-focused companion for **MATH 1280**. The project turns textbook topics into visual explanations, guided examples, manipulable models, and practice with immediate feedback.

**[Open the course website](https://picinfiniti.net/pre-calculus/)** · [Section 9.1](https://picinfiniti.net/pre-calculus/pages/sections/9-1.html) · [Section 9.2](https://picinfiniti.net/pre-calculus/pages/sections/9-2.html)

## Why this project exists

Precalculus makes more sense when students can see ideas move, test a prediction, and connect algebraic steps to geometry. Each lesson is designed around a simple learning loop:

1. **Understand** the central idea through clear language and a visual model.
2. **Work it out** with deliberate examples that expose the important algebra.
3. **Explore** by changing parameters, rotating models, and comparing outcomes.
4. **Practice** with focused questions and immediate, useful feedback.

## Available lessons

### 9.1 · Systems of Linear Equations in Two Variables

- Interactive line and solution explorer
- Elimination studio with step-by-step reasoning
- Word-problem modeling tools
- Targeted practice with immediate feedback

### 9.2 · Systems of Linear Equations in Three Variables

- Interactive 3D plane explorer built with the Canvas API
- One-solution, no-solution, and infinitely-many-solutions models
- Guided elimination from three variables to one
- Free-variable and parameter-form practice

### 1.9 · The Coordinate Plane; Graphs of Equations; Circles

- Draggable distance and midpoint explorer
- Guided reverse-midpoint and triangle-median practice
- Circle construction from diameter endpoints
- Exact intercepts, completing the square, and tangent-circle practice

## Course roadmap

Every textbook section will have its own standalone page.

| Learning arc | Textbook sections | Status |
| --- | --- | --- |
| Systems of linear equations | 9.1, 9.2 | Available |
| The coordinate plane | 1.9 | Available |
| Functions | 2.1, 2.2, 2.3, 2.6, 2.7, 2.8 | Planned |
| Polynomial and rational functions | 3.1, 3.2, 3.6, 3.7 | Planned |
| Exponential and logarithmic functions | 4.1–4.5 | Planned |
| Right-triangle trigonometry | 6.1–6.4 | Planned |
| Unit-circle trigonometry | 5.1–5.5 | Planned |
| Analytic trigonometry | 7.1–7.5 | Planned |

## Built with

- [Vite](https://vite.dev/) for the multi-page build and development server
- Modern JavaScript with no UI framework
- Sass for the responsive visual system
- The native Canvas API for the draggable 3D plane model
- Accessible HTML, keyboard-friendly controls, and reduced-motion support

## Run locally

Requirements: Node.js `20.19+` or `22.12+`, and npm.

```bash
git clone https://github.com/PicInfiniti/pre-calculus.git
cd pre-calculus
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
.
├── index.html                  # Course home entry
├── pages/sections/             # One HTML entry per lesson
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Fonts, images, and Sass
│   ├── core/App.js             # Home page and course roadmap
│   ├── sections/               # Interactive lesson logic
│   └── main.js                 # Home page bootstrap
├── vite.config.js              # Multi-page Vite configuration
└── package.json
```

## Adding a lesson

Keep each textbook section independent so it can be linked and studied on its own:

```text
pages/sections/9-1.html
src/sections/section-9-1.js
```

Register the HTML file as an input in `vite.config.js`, reuse the shared lesson header and footer, and follow the understand → work → explore → practice learning loop.

## Deployment

The site is deployed from the generated `dist/` directory to the `gh-pages` branch:

```bash
npm run deploy
```

Vite uses `/pre-calculus/` as the production base path. The public deployment is available at [picinfiniti.net/pre-calculus](https://picinfiniti.net/pre-calculus/).

## Textbook and attribution

The course sequence follows:

> James Stewart, Lothar Redlin, and Saleem Watson. *Precalculus: Mathematics for Calculus*. 8th ed., Cengage, 2024. Print ISBN `978-0-357-75363-7`.

This repository is an independent learning resource. It is not affiliated with or endorsed by Cengage. The textbook title, content, and cover artwork belong to their respective publisher and rights holders; textbook content is not redistributed here.

## License

The project source is available under the [MIT License](LICENSE). Third-party names, content, and artwork remain the property of their respective owners.

---

Powered by [PicInfiniti](https://picinfiniti.net).
