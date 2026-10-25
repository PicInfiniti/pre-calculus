import "../assets/sass/lesson.sass";
import katex from "katex";
import "katex/dist/katex.min.css";
import { renderMathDropdown, initMathDropdown } from "./math-dropdown";
import { initLessonChrome, renderLessonHeader, renderLessonFooter, setFeedback } from "./shared";

const $ = (id) => document.getElementById(id);
const M = (tex) => `<span class="laws-math">${katex.renderToString(tex, { throwOnError: true, strict: "ignore" })}</span>`;
const equation = (tex) => `<div class="laws-equation">${M(tex)}</div>`;
const fmt = (n, digits = 4) => Number(n.toFixed(digits)).toString();
const degrees = (radians) => radians * 180 / Math.PI;
const intro = (n, topic, title, text) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> ${topic}</p><h2>${title}</h2><p>${text}</p></div>`;
const numberInput = (id, label, value, step = "any") => `<label for="${id}">${label}</label><input type="number" id="${id}" value="${value}" step="${step}">`;
const slider = (id, label, min, max, step, value) => `<label for="${id}">${label}<output id="${id}-value"></output></label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">`;
const graph = (id, label) => `<svg id="${id}" viewBox="0 0 600 420" role="img" aria-label="${label}"></svg>`;
const functionSelect = (id) => `<label for="${id}">Function</label><select id="${id}"><option value="cos">Cosine / arccos</option><option value="sin">Sine / arcsin</option><option value="tan">Tangent / arctan</option></select>`;
const functions = {
  cos: { inverse: Math.acos, forward: Math.cos, tex: "\\arccos", domain: "[-1,1]", range: "[0,\\pi]", lo: 0, hi: Math.PI },
  sin: { inverse: Math.asin, forward: Math.sin, tex: "\\arcsin", domain: "[-1,1]", range: "[-\\pi/2,\\pi/2]", lo: -Math.PI/2, hi: Math.PI/2 },
  tan: { inverse: Math.atan, forward: Math.tan, tex: "\\arctan", domain: "\\mathbb R", range: "(-\\pi/2,\\pi/2)", lo: -Math.PI/2, hi: Math.PI/2 },
};

const examples = [
  { tex: String.raw`\arccos(-1/2)`, steps: [
    [String.raw`\theta=\arccos(-1/2)\ \Longrightarrow\ \cos\theta=-1/2`, "Ask for an angle, rather than another ratio."],
    [String.raw`0\le\theta\le\pi`, "Cosine's inverse returns its answer in the upper half of the circle."],
    [String.raw`\theta=2\pi/3`, "The reference angle is π/3. Negative cosine selects Quadrant II."],
  ] },
  { tex: String.raw`\arcsin(\sin(7\pi/6))`, steps: [
    [String.raw`\sin(7\pi/6)=-1/2`, "Evaluate the inner function first. The original angle is in Quadrant III."],
    [String.raw`-\pi/2\le\arcsin(-1/2)\le\pi/2`, "The answer must belong to the principal range of arcsine."],
    [String.raw`\arcsin(-1/2)=-\pi/6`, "The result has the same sine as 7π/6, but is a different angle."],
  ] },
  { tex: String.raw`\arctan(\tan(-5\pi/4))`, steps: [
    [String.raw`-5\pi/4+\pi=-\pi/4`, "Tangent repeats every π. Add a period to reach the principal interval."],
    [String.raw`\tan(-5\pi/4)=\tan(-\pi/4)=-1`, "The inner tangent is negative."],
    [String.raw`\arctan(-1)=-\pi/4`, "This angle lies strictly between −π/2 and π/2."],
  ] },
  { tex: String.raw`\sin(\arccos(5/13))`, steps: [
    [String.raw`\theta=\arccos(5/13),\quad\cos\theta=5/13`, "Positive cosine in the arccos range places θ in Quadrant I."],
    [String.raw`\text{adjacent}=5,\quad\text{hypotenuse}=13`, "Build a right triangle with the stated ratio."],
    [String.raw`\text{opposite}=\sqrt{13^2-5^2}=12`, "The opposite side is positive in this quadrant."],
    [String.raw`\sin\theta=12/13`, "Read opposite over hypotenuse. No rounded angle is needed."],
  ] },
  { tex: String.raw`\sin(\arctan(24/7))`, steps: [
    [String.raw`\theta=\arctan(24/7),\quad\tan\theta=24/7`, "A positive arctangent is an acute angle."],
    [String.raw`\text{opposite}=24,\quad\text{adjacent}=7`, "Choose sides in the ratio given by tangent."],
    [String.raw`\text{hypotenuse}=\sqrt{24^2+7^2}=25`, "Use the Pythagorean theorem before reading sine."],
    [String.raw`\sin\theta=24/25`, "Keep the result exact."],
  ] },
  { tex: String.raw`\cos(\arcsin(2x))`, steps: [
    [String.raw`-1\le2x\le1\ \Longrightarrow\ -1/2\le x\le1/2`, "First determine where the original inverse function is defined."],
    [String.raw`\theta=\arcsin(2x),\quad\sin\theta=2x`, "The angle is in [−π/2, π/2]. Its cosine is nonnegative."],
    [String.raw`\cos^2\theta=1-\sin^2\theta=1-4x^2`, "Use the Pythagorean identity."],
    [String.raw`\cos(\arcsin(2x))=\sqrt{1-4x^2}`, "Choose the nonnegative root, including zero at the endpoints. The domain remains [−1/2, 1/2]."],
  ] },
];
const checks = [
  ["An inverse returns an angle", String.raw`\arccos(1/2)`, [String.raw`\pi/3`, String.raw`5\pi/3`, "2"], 0, "Cosine is 1/2 at π/3, and π/3 lies in [0, π]."],
  ["Negative input", String.raw`\arcsin(-1/2)`, [String.raw`7\pi/6`, String.raw`-\pi/6`, String.raw`-5\pi/6`], 1, "Arcsine selects the angle in [−π/2, π/2]."],
  ["Domain gate", String.raw`\arccos(6)`, ["0", String.raw`6\pi`, String.raw`\text{No real value}`], 2, "A real cosine cannot equal 6. Arccos only accepts inputs from −1 to 1."],
  ["No automatic cancellation", String.raw`\arccos(\cos(7\pi/6))`, [String.raw`7\pi/6`, String.raw`5\pi/6`, String.raw`-\pi/6`], 1, "The inner cosine is −√3/2. The angle in [0, π] with that cosine is 5π/6."],
  ["Tangent's principal branch", String.raw`\arctan(\tan(2\pi/3))`, [String.raw`2\pi/3`, String.raw`\pi/3`, String.raw`-\pi/3`], 2, "Subtract π to reach the interval (−π/2, π/2)."],
  ["Read the missing side", String.raw`\sin(\arccos(5/13))`, [String.raw`12/13`, String.raw`5/13`, String.raw`13/12`], 0, "The 5–12–13 triangle gives sine = 12/13."],
  ["Choose the root", String.raw`\cos(\arcsin(2x))`, [String.raw`-\sqrt{1-4x^2}`, String.raw`\sqrt{1-4x^2}`, String.raw`1-2x`], 1, "Cosine is nonnegative throughout the range of arcsine. Require −1/2 ≤ x ≤ 1/2."],
  ["Open endpoints", String.raw`\text{Range of arctan}`, [String.raw`[-\pi/2,\pi/2]`, String.raw`[0,\pi]`, String.raw`(-\pi/2,\pi/2)`], 2, "Tangent is undefined at ±π/2, so arctangent never reaches those angles."],
  ["Model an angle", String.raw`\text{Height }h,\ \text{rope length }L`, [String.raw`\theta=\arcsin(h/L)`, String.raw`\theta=\arccos(h/L)`, String.raw`\theta=\arctan(L/h)`], 0, "Height is opposite the ground angle; the rope is the hypotenuse. For a nondegenerate triangle, 0 < h < L."],
  ["Inverse notation", String.raw`\sin^{-1}(x)`, [String.raw`1/\sin(x)`, String.raw`\arcsin(x)`, String.raw`-\sin(x)`], 1, "The superscript −1 denotes the inverse function here. The reciprocal is csc(x)."],
];

document.querySelector("#app").innerHTML = `${renderLessonHeader("6.4")}
<main class="laws-lesson inverse-lesson">
<section class="lesson-hero lesson-hero--inverse">
  <div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 6.4</span> Inverse trigonometric functions and right triangles</p><h1>Know the ratio.<br><em>Find the angle.</em></h1><p class="lesson-hero__lede">Many angles share a trig value. An inverse function chooses one. Learn where that answer lives, when compositions undo each other, and how a measured triangle gives you an angle.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#principal">Explore the inverse</a><span>About 40 minutes · interactive</span></div></div>
  <div class="inverse-trig-hero-art" data-reveal><p class="tool-label">A ratio goes in. An angle comes out.</p>${graph("inverse-hero-chart", "A right triangle with opposite side 3, adjacent side 4, and hypotenuse 5")}${equation(String.raw`\tan\theta=\frac34\quad\Longrightarrow\quad\theta=\arctan\!\frac34`)}<p>θ ≈ 36.87° ≈ 0.6435 radians</p></div>
</section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Use domains and principal ranges</p></li><li><span>02</span><p>Evaluate inverse-trig compositions</p></li><li><span>03</span><p>Recover exact ratios with a triangle</p></li><li><span>04</span><p>Solve triangles and angle models</p></li></ol></section>
<section class="lesson-section" id="principal">${intro("01", "Choose one answer", "A repeating curve.<br>A single branch.", "A horizontal line can meet a full trig graph many times. Restrict the original function to a one-to-one interval, then reverse its input and output. That interval becomes the inverse function’s principal range.")}
<div class="inverse-passports">${Object.entries(functions).map(([key, f]) => `<article><h3>${M(`${f.tex}(x)`)}</h3><p>Input domain</p>${equation(f.domain)}<p>Output range in radians</p>${equation(f.range)}<small>${key === "tan" ? "The endpoints are excluded." : "Both endpoints are included."}</small></article>`).join("")}</div>
<aside class="laws-note">${M(String.raw`\sin^{-1}(x)=\arcsin(x)`)} means an inverse function. The reciprocal is ${M(String.raw`1/\sin(x)=\csc(x)`)}. A calculator’s degree/radian mode changes the units of the returned angle.</aside>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Principal-angle explorer</p>${functionSelect("inverse-kind")}${numberInput("inverse-input", "Known trig value u", 0.5, 0.1)}<label for="inverse-units">Angle units</label><select id="inverse-units"><option value="radians">Radians</option><option value="degrees">Degrees</option></select><label for="inverse-view">Graph view</label><select id="inverse-view"><option value="forward">Original function and restricted branch</option><option value="inverse">Inverse function</option></select><div class="general-presets">${[-1, 0, 0.5, 1, 2].map(v => `<button type="button" data-inverse-input="${v}">Try ${v}</button>`).join("")}</div><div id="inverse-reading" class="laws-note" aria-live="polite"></div></div><div class="inverse-plot">${graph("inverse-branch-chart", "Trig graph highlighting the principal branch")}<p id="inverse-graph-caption" class="general-caption">Horizontal axis: angle θ in radians. Vertical axis: trig value u. Violet marks the one-to-one branch; the gold line is the selected value. The inverse reads from u back to θ.</p></div></div></section>
<section class="lesson-section lesson-section--soft" id="composition">${intro("02", "Check the order", "Same trig value.<br>Possibly a new angle.", `${M(String.raw`\sin(\arcsin u)=u`)} for ${M('-1\\le u\\le1')}. In the other order, ${M(String.raw`\arcsin(\sin\theta)`)} returns θ only when θ is in the principal range. Outside it, find the principal angle with the same sine.`)}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Composition and branch studio</p>${functionSelect("fold-kind")}${slider("fold-angle", "Original angle (degrees)", -720, 720, 1, 210)}<div class="general-presets">${[90, 135, 210, -225, 120].map(v => `<button type="button" data-fold-angle="${v}">${v}°</button>`).join("")}</div><div id="fold-reading" class="laws-note" aria-live="polite"></div></div><div class="inverse-plot">${graph("fold-chart", "Original angle and principal angle on a circle")}<p class="general-caption">Coral: original terminal ray. Violet: returned principal ray. The rays can differ while their selected trig values agree. This diagram uses equal units on both axes.</p></div></div></section>
<section class="lesson-section" id="exact">${intro("03", "Work exactly", "Name the angle.<br>Recover the side.", "Use a principal range to determine the sign. Then use a familiar angle, a right triangle, or the Pythagorean identity. Keep fractions and radicals until the final answer.")}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Guided exact-value workshop</p>${renderMathDropdown("inverse-example", "Choose an expression", examples.map(e => e.tex), M)}<p>For a composition, read from the inside out. An inverse angle does not have to be a special angle to give an exact side ratio.</p></div><div class="laws-result"><div id="exact-step" class="trig-step" aria-live="polite"></div><p id="exact-progress" class="laws-progress"></p><div class="laws-step-buttons"><button type="button" class="laws-button" id="exact-back">← Previous step</button><button type="button" class="laws-button" id="exact-next">Next step →</button></div></div></div></section>
<section class="lesson-section lesson-section--soft" id="triangles">${intro("04", "Solve a triangle", "Two measured sides.<br>One missing angle.", "Label opposite and adjacent relative to θ. Choose the inverse whose ratio uses the two known sides. A right triangle has two acute angles that add to 90°.")}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Right-triangle solver</p><label for="triangle-known">Known sides, relative to θ</label><select id="triangle-known"><option value="ah">Adjacent and hypotenuse → arccos</option><option value="oh">Opposite and hypotenuse → arcsin</option><option value="oa">Opposite and adjacent → arctan</option></select>${numberInput("triangle-first", "Adjacent side a", 8)}${numberInput("triangle-second", "Hypotenuse h", 9)}<div id="triangle-reading" class="laws-note" aria-live="polite"></div></div><div class="inverse-plot">${graph("triangle-chart", "Right triangle with recovered sides and angles")}<p class="general-caption">The right angle is at C; θ is at A. Side lengths use one common unit. The diagram preserves the side proportions.</p></div></div></section>
<section class="lesson-section" id="models">${intro("05", "Model an angle", "Read the geometry.<br>Choose the ratio.", "A shadow supplies a horizontal leg. A taut rope supplies a hypotenuse. Write the angle as a function of the measured height before putting numbers into a calculator.")}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Height-to-angle laboratory</p><label for="model-kind">Context</label><select id="model-kind"><option value="shadow">Tree and shadow</option><option value="rope">Tethered balloon</option></select>${numberInput("model-height", "Vertical height", 96)}${numberInput("model-length", "Shadow length", 120)}<div id="model-reading" class="laws-note" aria-live="polite"></div></div><div class="inverse-plot">${graph("model-chart", "Height and ground angle in a right-triangle model")}<p id="model-caption" class="general-caption"></p></div></div></section>
<section class="lesson-section lesson-section--soft" id="shifted">${intro("06", "Invert a transformed function", "Restrict first.<br>Then reverse the algebra.", `For ${M(String.raw`f(x)=5-3\sin(x+1)`)}, use the standard sine branch by requiring ${M(String.raw`-\pi/2\le x+1\le\pi/2`)}. This choice makes f one-to-one.`)}
<div class="laws-card-grid"><article class="laws-card"><p class="tool-label">Forward domain and range</p>${equation(String.raw`-1-\pi/2\le x\le-1+\pi/2`)}${equation(String.raw`2\le f(x)\le8`)}<p>The vertical reflection makes f decreasing on this interval.</p></article><article class="laws-card"><p class="tool-label">Swap and solve</p>${equation(String.raw`x=5-3\sin(y+1)`)}${equation(String.raw`\sin(y+1)=(5-x)/3`)}${equation(String.raw`f^{-1}(x)=\arcsin((5-x)/3)-1`)}<p>The inverse domain is [2, 8]; its range is [−1−π/2, −1+π/2].</p></article></div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Reverse-value check</p>${slider("shift-input", "Input u to the inverse", 2, 8, 0.1, 5)}<p>The slider enters the inverse’s domain. Watch the forward function recover u.</p></div><div class="laws-result" id="shift-reading" aria-live="polite"></div></div></section>
<section class="lesson-section lesson-section--ink" id="readiness">${intro("07", "Practice", "Choose the branch.<br>Explain the answer.", "Check the input domain, use the correct principal range, and distinguish an angle from a ratio.")}<p class="laws-score" id="inverse-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="laws-check-grid">${checks.map((q, i) => `<article class="laws-check"><p class="tool-label">${q[0]}</p><h3>${M(q[1])}</h3>${renderMathDropdown(`inverse-practice-${i}`, "Your answer", q[2], M, { placeholder: "Select an answer" })}<button type="button" class="laws-button" data-inverse-check="${i}">Check answer</button><p class="answer-feedback" id="inverse-feedback-${i}" aria-live="polite"></p></article>`).join("")}</div></section>
</main>${renderLessonFooter({ previous: { href: "pages/sections/6-3.html", label: "Section 6.3 · Trigonometric functions of angles" }, next: { href: "pages/sections/5-1.html", label: "Section 5.1 · The unit circle" } })}`;

function triangleScene(svg, opposite, adjacent, hypotenuse, theta) {
  const scale = 300 / Math.max(opposite, adjacent);
  const x = 80, y = 320, right = x + adjacent * scale, top = y - opposite * scale;
  const label = (px, py, text, anchor = "middle") => `<text x="${px}" y="${py}" text-anchor="${anchor}" class="inverse-svg-label">${text}</text>`;
  svg.innerHTML = `<path d="M${x} ${y}H${right}V${top}Z" fill="rgba(169,147,239,.08)" stroke="var(--ink)" stroke-width="3"/><path d="M${right-12} ${y}V${y-12}H${right}" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M${x+38} ${y} A38 38 0 0 0 ${x+38*Math.cos(theta)} ${y-38*Math.sin(theta)}" fill="none" stroke="var(--violet)" stroke-width="3"/>${label(x+57, y-12, "θ")}${label((x+right)/2, y+36, `a = ${fmt(adjacent, 3)}`)}${label(right+18, (y+top)/2, `o = ${fmt(opposite, 3)}`, "start")}${label((x+right)/2-18, (y+top)/2-18, `h = ${fmt(hypotenuse, 3)}`)}${label(x-20,y+10,"A")}${label(right,top-12,"B")}${label(right+16,y+16,"C")}`;
  svg.setAttribute("aria-label", `Right triangle: opposite ${fmt(opposite)}, adjacent ${fmt(adjacent)}, hypotenuse ${fmt(hypotenuse)}, angle ${fmt(degrees(theta))} degrees.`);
}
triangleScene($("inverse-hero-chart"), 3, 4, 5, Math.atan(3/4));

const piTicks = [
  [-Math.PI, "−π"], [-Math.PI/2, "−π/2"], [0, "0"],
  [Math.PI/2, "π/2"], [Math.PI, "π"], [3*Math.PI/2, "3π/2"], [2*Math.PI, "2π"],
];
const numericTicks = (min, max, step = 1) => Array.from(
  { length: Math.round((max-min)/step)+1 },
  (_, i) => { const value=min+i*step; return [value, fmt(value)]; },
);

// Use the previous lesson's light grid, numbered axes, and muted tick labels.
function coordinateGrid(X, Y, xTicks, yTicks, { left=55, right=545, top=25, bottom=350, xLabel="x", yLabel="y", soft=false } = {}) {
  const label = (x, y, text, anchor="middle") => `<text x="${x}" y="${y}" text-anchor="${anchor}" class="inverse-svg-label inverse-grid-tick" fill="#73808a">${text}</text>`;
  let art = `<g class="inverse-coordinate-grid${soft ? " inverse-soft-grid" : ""}" aria-hidden="true">`;
  let lines = "", labels = "";
  for (const [value, text] of xTicks) {
    lines += `<path d="M${X(value)} ${top}V${bottom}" stroke="var(--line)" stroke-width="1"/>`;
    if (value !== 0) labels += label(X(value), Y(0)+25, text);
  }
  for (const [value, text] of yTicks) {
    lines += `<path d="M${left} ${Y(value)}H${right}" stroke="var(--line)" stroke-width="1"/>`;
    if (value !== 0) labels += label(X(0)-12, Y(value)+6, text, "end");
  }
  if (soft) {
    let minor = "";
    for (let i=1;i<xTicks.length;i++) minor += `<path d="M${X((xTicks[i-1][0]+xTicks[i][0])/2)} ${top}V${bottom}"/>`;
    for (let i=1;i<yTicks.length;i++) minor += `<path d="M${left} ${Y((yTicks[i-1][0]+yTicks[i][0])/2)}H${right}"/>`;
    const stops = '<stop offset="0" stop-color="black"/><stop offset="12%" stop-color="white"/><stop offset="88%" stop-color="white"/><stop offset="100%" stop-color="black"/>';
    art += `<defs><linearGradient id="inverse-grid-fade-x">${stops}</linearGradient><linearGradient id="inverse-grid-fade-y" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient><mask id="inverse-grid-mask-x"><rect x="${left}" y="${top}" width="${right-left}" height="${bottom-top}" fill="url(#inverse-grid-fade-x)"/></mask><mask id="inverse-grid-mask-y"><rect x="${left}" y="${top}" width="${right-left}" height="${bottom-top}" fill="url(#inverse-grid-fade-y)"/></mask></defs>`;
    art += `<g mask="url(#inverse-grid-mask-x)"><g mask="url(#inverse-grid-mask-y)"><g class="inverse-grid-minor">${minor}</g><g class="inverse-grid-major">${lines}</g></g></g>`;
  } else art += lines;
  art += `<path d="M${left} ${Y(0)}H${right}M${X(0)} ${top}V${bottom}" stroke="var(--ink)" stroke-width="1.5" fill="none"/>`;
  art += labels + label(X(0)-12, Y(0)+25, "0", "end");
  art += `<text x="${right+15}" y="${Y(0)+7}" class="inverse-svg-label">${xLabel}</text><text x="${X(0)+15}" y="${top-10}" class="inverse-svg-label">${yLabel}</text>`;
  return art + "</g>";
}

function renderInverseGraph(kind, f, u, valid) {
  $("inverse-branch-chart").setAttribute("aria-label", `Graph of arc${kind}: trig value on the horizontal axis and principal angle in radians on the vertical axis.`);
  const extent = kind === "tan" ? 4 : 1.5;
  const X = v => 55 + (v + extent) * 490 / (2 * extent);
  const Y = angle => 350 - (angle + Math.PI) * 325 / (2 * Math.PI);
  let art = coordinateGrid(X, Y, numericTicks(-extent, extent, kind === "tan" ? 1 : 0.5), piTicks.filter(([angle]) => angle<=Math.PI), { xLabel:"u", yLabel:"θ", soft:true });
  if (kind === "tan") {
    for (const angle of [-Math.PI/2, Math.PI/2]) art += `<path d="M55 ${Y(angle)}H545" stroke="var(--coral)" stroke-dasharray="6 4"/>`;
  }
  const bound = kind === "tan" ? extent : 1;
  let path = "";
  for (let i=0;i<=400;i++) {
    const value=-bound+2*bound*i/400;
    path += `${i?"L":"M"}${X(value)},${Y(f.inverse(value))} `;
  }
  art += `<path d="${path}" fill="none" stroke="var(--violet)" stroke-width="4"/>`;
  if (kind !== "tan") for (const value of [-1,1]) art += `<circle cx="${X(value)}" cy="${Y(f.inverse(value))}" r="5" fill="var(--violet)"/>`;
  if (valid && Math.abs(u)<=extent) art += `<path d="M${X(u)} ${Y(0)}V${Y(f.inverse(u))}" stroke="var(--gold)" stroke-width="2" stroke-dasharray="6 4"/><circle cx="${X(u)}" cy="${Y(f.inverse(u))}" r="7" fill="var(--coral)"/>`;
  $("inverse-branch-chart").innerHTML=art;
  $("inverse-graph-caption").textContent = "Horizontal axis: trig value u. Vertical axis: principal angle θ in radians. Violet is the inverse function. " + (kind === "tan" ? "The dashed lines at ±π/2 are horizontal asymptotes; the curve never reaches them. The window shows −4 ≤ u ≤ 4." : "Filled endpoints include u = −1 and u = 1.") + (valid && Math.abs(u)>extent ? " Your input is outside the displayed window." : "");
}

function renderBranch() {
  const kind = $("inverse-kind").value, f = functions[kind], u = $("inverse-input").valueAsNumber;
  const valid = Number.isFinite(u) && (kind === "tan" || Math.abs(u) <= 1);
  if (!valid) $("inverse-reading").textContent = Number.isFinite(u) ? "No real angle: sine and cosine values must lie between −1 and 1." : "Enter a finite trig value.";
  else {
    const theta = f.inverse(u), inDegrees = $("inverse-units").value === "degrees";
    $("inverse-reading").innerHTML = equation(`${f.tex}(${u})\\approx${fmt(inDegrees ? degrees(theta) : theta, 6)}${inDegrees ? "^\\circ" : "\\ \\text{rad}"}`) + `<p>Principal range: ${M(f.range)} radians. Check: ${kind}(θ) ≈ ${fmt(f.forward(theta), 6)}.</p>`;
  }
  if ($("inverse-view").value === "inverse") {
    renderInverseGraph(kind, f, u, valid);
    return;
  }
  $("inverse-branch-chart").setAttribute("aria-label", `${kind} graph with its one-to-one principal branch highlighted.`);
  $("inverse-graph-caption").textContent = "Horizontal axis: angle θ in radians. Vertical axis: trig value u. Violet marks the one-to-one branch; the gold line is the selected value. The inverse reads from u back to θ.";
  const gridUnit = 490/6;
  const X = t => 55 + (t + Math.PI) * 490 / (3*Math.PI), Y = v => 200 - v*gridUnit;
  let art = `<defs><clipPath id="inverse-branch-clip"><rect x="55" y="25" width="490" height="350"/></clipPath></defs>${coordinateGrid(X, Y, piTicks, numericTicks(-2,2), { bottom:375, xLabel:"θ", yLabel:"u", soft:true })}`;
  const curve = (lo, hi, color, width) => {
    let paths = "", d = "", last = null;
    for (let i=0; i<=600; i++) {
      const t = lo+(hi-lo)*i/600, v = f.forward(t);
      if (!Number.isFinite(v) || Math.abs(v)>3 || (last !== null && Math.abs(v-last)>1)) { paths += d ? `<path d="${d}"/>` : ""; d=""; last=null; continue; }
      d += `${d ? "L" : "M"}${X(t)},${Y(v)} `; last=v;
    }
    return `<g stroke="${color}" stroke-width="${width}" fill="none">${paths}${d ? `<path d="${d}"/>` : ""}</g>`;
  };
  art += `<g clip-path="url(#inverse-branch-clip)">${curve(-Math.PI, 2*Math.PI, "#c4c2ce", 2)}${curve(f.lo, f.hi, "var(--violet)", 5)}`;
  if (valid) art += `<path d="M55 ${Y(u)}H545" stroke="var(--gold)" stroke-width="2" stroke-dasharray="6 4"/><circle cx="${X(f.inverse(u))}" cy="${Y(u)}" r="7" fill="var(--coral)"/>`;
  art += "</g>";
  if (kind !== "tan") for (const t of [f.lo, f.hi]) art += `<circle cx="${X(t)}" cy="${Y(f.forward(t))}" r="5" fill="var(--violet)"/>`;
  $("inverse-branch-chart").innerHTML = art;
}
["inverse-kind", "inverse-input", "inverse-units", "inverse-view"].forEach(id => $(id).addEventListener($(id).tagName === "SELECT" ? "change" : "input", renderBranch));
document.querySelectorAll("[data-inverse-input]").forEach(button => button.addEventListener("click", () => { $("inverse-input").value = button.dataset.inverseInput; renderBranch(); }));
renderBranch();

function renderFold() {
  const kind = $("fold-kind").value, f = functions[kind], angle = Number($("fold-angle").value), theta = angle*Math.PI/180;
  $("fold-angle-value").textContent = `${angle}°`;
  const undefinedTangent = kind === "tan" && Math.abs(Math.cos(theta)) < 1e-12;
  let phi;
  if (undefinedTangent) $("fold-reading").textContent = "The inner tangent is undefined at odd multiples of 90°. There is no real composition value here.";
  else {
    const value = f.forward(theta); phi = f.inverse(kind === "tan" ? value : Math.max(-1, Math.min(1, value)));
    $("fold-reading").innerHTML = equation(`${f.tex}(\\${kind}(${angle}^\\circ))\\approx${fmt(degrees(phi))}^\\circ`) + `<p>Inner value ≈ ${fmt(value, 6)}. Principal angle ≈ ${fmt(phi, 6)} radians.</p><strong>${Math.abs(phi-theta)<1e-9 ? "The original angle is in the principal range: it is returned unchanged." : "The inverse selects a different angle in its principal range."}</strong>`;
  }
  const ray = (a, color, width, length) => `<path d="M300 210L${300+length*Math.cos(a)} ${210-length*Math.sin(a)}" stroke="${color}" stroke-width="${width}"/>`;
  const grid = coordinateGrid(x=>300+x*40, y=>210-y*40, numericTicks(-5,5), numericTicks(-4,4), { left:80, right:520, top:30, bottom:390 });
  $("fold-chart").innerHTML = `${grid}<circle cx="300" cy="210" r="160" fill="none" stroke="var(--line)" stroke-width="2"/>${ray(theta, "var(--coral)", 6, 160)}${undefinedTangent ? "" : ray(phi, "var(--violet)", 3, 160)}`;
}
$("fold-kind").addEventListener("change", renderFold); $("fold-angle").addEventListener("input", renderFold);
document.querySelectorAll("[data-fold-angle]").forEach(button => button.addEventListener("click", () => { $("fold-angle").value=button.dataset.foldAngle; renderFold(); })); renderFold();

initMathDropdown("inverse-example", examples.map(e => e.tex), M);
let exampleStep = 0;
function renderExample() {
  const steps = examples[Number($("inverse-example").dataset.value)].steps;
  const [tex, text] = steps[exampleStep];
  $("exact-step").innerHTML = `<p class="tool-label">Move ${exampleStep+1}</p>${equation(tex)}<p>${text}</p>`;
  $("exact-progress").textContent = `Step ${exampleStep+1} of ${steps.length}`;
  $("exact-back").disabled = exampleStep===0; $("exact-next").disabled = exampleStep===steps.length-1;
}
$("inverse-example").addEventListener("change", () => { exampleStep=0; renderExample(); });
$("exact-back").addEventListener("click", () => { if (exampleStep>0) exampleStep--; renderExample(); });
$("exact-next").addEventListener("click", () => { const steps=examples[Number($("inverse-example").dataset.value)].steps; if (exampleStep<steps.length-1) exampleStep++; renderExample(); }); renderExample();

function renderTriangle() {
  const mode = $("triangle-known").value, first = $("triangle-first").valueAsNumber, second = $("triangle-second").valueAsNumber;
  const labels = mode === "ah" ? ["Adjacent side a", "Hypotenuse h"] : mode === "oh" ? ["Opposite side o", "Hypotenuse h"] : ["Opposite side o", "Adjacent side a"];
  document.querySelector('[for="triangle-first"]').textContent=labels[0]; document.querySelector('[for="triangle-second"]').textContent=labels[1];
  const invalid = ![first, second].every(n => Number.isFinite(n) && n >= 0.001 && n <= 1000000) || (mode !== "oa" && first >= second);
  if (invalid) { $("triangle-reading").textContent="Use positive lengths from 0.001 to 1,000,000. The hypotenuse must be longer than either leg; equal lengths give a degenerate triangle."; $("triangle-chart").innerHTML=""; return; }
  let o, a, h, theta;
  if (mode === "oa") { o=first; a=second; h=Math.hypot(o,a); theta=Math.atan2(o,a); }
  else { h=second; const missing=Math.sqrt(h-first)*Math.sqrt(h+first); o=mode==="oh"?first:missing; a=mode==="ah"?first:missing; theta=mode==="ah"?Math.acos(a/h):Math.asin(o/h); }
  const inverse = mode==="ah"?"arccos":mode==="oh"?"arcsin":"arctan";
  $("triangle-reading").innerHTML=equation(`\\theta=\\${inverse}(${first}/${second})\\approx${degrees(theta).toFixed(1)}^\\circ`) + `<p>θ ≈ ${fmt(theta,6)} radians. Other acute angle ≈ ${(90-degrees(theta)).toFixed(1)}°.</p><p>Opposite ≈ ${fmt(o)} · adjacent ≈ ${fmt(a)} · hypotenuse ≈ ${fmt(h)}. Angle answers above are rounded to one decimal place; calculations use the unrounded values.</p>`;
  triangleScene($("triangle-chart"),o,a,h,theta);
}
["triangle-known", "triangle-first", "triangle-second"].forEach(id => $(id).addEventListener($(id).tagName==="SELECT"?"change":"input", renderTriangle)); renderTriangle();

function renderModel() {
  const rope=$("model-kind").value==="rope", h=$("model-height").valueAsNumber, length=$("model-length").valueAsNumber;
  document.querySelector('[for="model-length"]').textContent=rope?"Rope length":"Shadow length";
  $("model-caption").textContent=rope?"Assume a taut straight rope anchored at ground level and a vertical balloon height. All lengths use the same unit.":"Assume level ground, a vertical tree, and a shadow ending on the ground. All lengths use the same unit.";
  if (![h,length].every(n => Number.isFinite(n) && n>=0.001 && n<=1000000) || (rope && h>=length)) { $("model-reading").textContent="Enter positive lengths from 0.001 to 1,000,000. A balloon's height must be less than the rope length for a nondegenerate triangle."; $("model-chart").innerHTML=""; return; }
  const a=rope?Math.sqrt(length-h)*Math.sqrt(length+h):length, hyp=rope?length:Math.hypot(h,a), theta=rope?Math.asin(h/length):Math.atan2(h,length);
  $("model-reading").innerHTML=equation(rope?String.raw`\theta(h)=\arcsin(h/L),\quad0<h<L`:String.raw`\theta(h)=\arctan(h/d),\quad h>0,\ d>0`) + equation(`\\theta\\approx${degrees(theta).toFixed(1)}^\\circ`) + `<p>${rope?"Rope length L":"Shadow length d"} = ${length}; height h = ${h}. The angle is ${fmt(theta,6)} radians. For a fixed ${rope?"rope length":"shadow length"}, increasing the height increases the angle.</p>`;
  triangleScene($("model-chart"),h,a,hyp,theta);
}
$("model-kind").addEventListener("change", () => { const rope=$("model-kind").value==="rope"; $("model-height").value=rope?500:96; $("model-length").value=rope?680:120; renderModel(); });
["model-height","model-length"].forEach(id => $(id).addEventListener("input",renderModel)); renderModel();
function renderShift() {
  const u=Number($("shift-input").value), x=Math.asin((5-u)/3)-1, recovered=5-3*Math.sin(x+1);
  $("shift-input-value").textContent=fmt(u);
  $("shift-reading").innerHTML=equation(`f^{-1}(${u})=\\arcsin((5-${u})/3)-1\\approx${fmt(x,6)}`) + equation(`f(f^{-1}(${u}))\\approx${fmt(recovered,6)}`) + `<p>The inverse output ${fmt(x,6)} lies in the restricted forward domain. All angles here are in radians.</p>`;
}
$("shift-input").addEventListener("input",renderShift); renderShift();
checks.forEach((q,i) => initMathDropdown(`inverse-practice-${i}`,q[2],M));
const solved=new Set();
document.querySelectorAll("[data-inverse-check]").forEach(button => button.addEventListener("click", () => {
  const i=Number(button.dataset.inverseCheck), choice=$("inverse-practice-"+i).dataset.value;
  if (choice==="") { setFeedback($("inverse-feedback-"+i),false,"Choose an answer first."); return; }
  const correct=Number(choice)===checks[i][3]; if (correct) solved.add(i);
  setFeedback($("inverse-feedback-"+i),correct,(correct?"Correct. ":"Try again. ")+checks[i][4]);
  $("inverse-score").textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?" · Ready to move on!":""}`;
}));
initLessonChrome();
