import "../assets/sass/lesson.sass";
import { initLessonChrome, renderLessonFooter, renderLessonHeader, setFeedback } from "./shared";

import {renderMathDropdown, initMathDropdown} from "./math-dropdown";
import katex from "katex";
import "katex/dist/katex.min.css";

const m = (expression) => {
  const symbols = { "−": "-", "∞": "\\infty ", "π": "\\pi ", "ℝ": "\\mathbb{R}", "⇔": "\\iff ", "⇒": "\\Rightarrow ", "→": "\\to ", "≥": "\\ge ", "≤": "\\le ", "≠": "\\ne ", "∩": "\\cap ", "½": "\\frac{1}{2}", "¼": "\\frac{1}{4}", "⅕": "\\frac{1}{5}", "⅔": "\\frac{2}{3}", "²": "^{2}" };
  const tex = expression.replaceAll("log₅","log_{5}").replaceAll("eˣ","e^{x}").replace(/[−∞πℝ⇔⇒→≥≤≠∩½¼⅕⅔²]/g, symbol => symbols[symbol])
    .replace(/√\(([^()]*)\)/g, "\\sqrt{$1}")
    .replace(/√(\d+|[a-z])/g, "\\sqrt{$1}")
    .replace(/\b(log|ln)(?=\b|_)/g, "\\$1");
  return `<span class="log-math">${katex.renderToString(tex, { throwOnError: true, strict: "ignore" })}</span>`;
};
const question = (text) => {
  const match = text.match(/^((?:For |The inverse of ))?(.*?)( means…| equals…| has domain…| is…|\. Find x\.|, which pair is correct\?)$/);
  return match ? `${match[1] || ""}${m(match[2])}${match[3]}` : m(text);
};
const f = (top, bottom) => `\\dfrac{${top}}{${bottom}}`;
const log = (base, input) => base === "e" ? `ln(${input})` : `log_{${base}}(${input})`;
const fmt = (x, n = 3) => Number(x.toFixed(n)).toString().replaceAll("-", "−");
const $ = (id) => document.getElementById(id);
const intro = (n, title, copy) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> Logarithmic functions</p><h2>${title}</h2><p>${copy}</p></div>`;
const slider = (id, title, min, max, step, value) => `<label for="${id}">${title} <output id="${id}-value"></output></label><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}">`;
const baseOptions = `<option value="2">2</option><option value="3">3</option><option value="10">10 · common log</option><option value="e" selected>e · natural log</option><option value="0.5">½ · decreasing</option>`;

const domainKeys = ["quadratic","mixed","nested"];
const domainFormulas = ["ln(x − x^{2})","√(x − 2) − log_{5}(10 − x)","log(log(5x))"];
const practiceMath = tex => tex.startsWith("Domain ")
  ? `<span class="log-answer-pair">Domain ${m(tex.slice(7).split("; asymptote ")[0])}; asymptote ${m(tex.split("; asymptote ")[1])}</span>`
  : m(tex);
const evaluations = [
  ["log_{2}(32)", "5", "Ask: 2 to what power gives 32? Since 2⁵ = 32, the answer is 5."],
  ["log_{8}(8^{17})", "17", "The logarithm undoes the matching exponential. The exponent is 17."],
  ["log_{3/2}(1)", "0", "Every valid base raised to zero is 1."],
  ["log_{49}(7)", "½", "49¹ᐟ² = 7. A logarithm can be a fraction."],
  ["log_{9}(√3)", "¼", "9 = 3² and √3 = 3¹ᐟ². Solve 2y = ½ to get y = ¼."],
  ["e^{ln(√3)}", "√3", "The inverse operations cancel because √3 is positive."],
  ["10^{log(13)}", "13", "An unmarked log has base 10, so these operations undo each other."],
  ["log_{4}(4^{2π + 1})", "2π + 1", "log₄(4ʸ) = y for every real exponent y."],
];
const inverseCases = [
  { name: "Shifted exponential", formula: "5^{3x − 1} + 4", steps: [
    ["Swap x and y", "x = 5^{3y − 1} + 4", "The original function is strictly increasing, so it has an inverse."],
    ["Undo the outside shift", "x − 4 = 5^{3y − 1}", "The left side must be positive: x > 4."],
    ["Take log base 5", "log_{5}(x − 4) = 3y − 1", "Use the base that matches the exponential."],
    ["Isolate y", `f^{−1}(x) = ${f("log_{5}(x − 4) + 1", "3")}`, "Inverse domain: (4, ∞). Inverse range: ℝ. The original range becomes the inverse domain."],
  ]},
  { name: "Reflected logarithm", formula: "log(5 − x) − 3", steps: [
    ["Swap x and y", "x = log(5 − y) − 3", "The original input must satisfy 5 − x > 0, so its domain is (−∞, 5)."],
    ["Undo the outside shift", "x + 3 = log(5 − y)", "An unmarked log has base 10."],
    ["Convert to exponential form", "10^{x + 3} = 5 − y", "Raising 10 to each side undoes the common logarithm."],
    ["Isolate y", "g^{−1}(x) = 5 − 10^{x + 3}", "Inverse domain: ℝ. Inverse range: (−∞, 5)."],
  ]},
  { name: "Exponential fraction", formula: f("e^{x}", "2e + e^{x}"), steps: [
    ["Swap x and y", `x = ${f("e^{y}", "2e + e^{y}")}`, "The numerator is positive and smaller than the denominator. Original range: (0, 1)."],
    ["Clear the denominator", "2ex + xe^{y} = e^{y}", "Multiply both sides by 2e + eʸ."],
    ["Collect and factor", "2ex = e^{y}(1 − x)", "Subtract xeʸ. Factor eʸ out of the right side."],
    ["Isolate the exponential", `e^{y} = ${f("2ex", "1 − x")}`, "We need 2ex/(1 − x) > 0. Only 0 < x < 1 works."],
    ["Apply the inverse operation", `f^{−1}(x) = ln(${f("2ex", "1 − x")})`, "Inverse domain: (0, 1). Inverse range: ℝ. Neither endpoint is included."],
  ]},
  { name: "Nested logarithms", formula: "log(log(5x))", steps: [
    ["Check the original domain", "log(5x) > 0 ⇔ 5x > 1 ⇔ x > ⅕", "The outer log needs a positive input. Merely requiring 5x > 0 is not enough."],
    ["Swap x and y", "x = log(log(5y))", "Undo the outer operation first."],
    ["Undo the outer log", "10^{x} = log(5y)", "One logarithm remains."],
    ["Undo the inner log", "10^{10^{x}} = 5y", "The entire value 10ˣ is the exponent of the second power of 10."],
    ["Isolate y", `f^{−1}(x) = ${f("10^{10^{x}}", "5")}`, "Original domain: (⅕, ∞). Inverse domain: ℝ. Inverse range: (⅕, ∞)."],
  ]},
];
const checks = [
  ["Translate", "log_{5}(1/125) = −3 means…", ["5^{−3} = 1/125", "(1/125)^{−3} = 5", "5^{1/125} = −3"], 0, "Keep the base 5. The logarithm's output −3 becomes the exponent."],
  ["Translate the exponent", "3^{2x} = 10 means…", ["log_{3}(10) = 2x", "log_{10}(3) = 2x", "log_{3}(2x) = 10"], 0, "The whole exponent 2x becomes the logarithm's output."],
  ["Negative exponent", "0.1 = 10^{−4x} means…", ["log(0.1) = −4x", "log(−4x) = 0.1", "log(10) = −4x"], 0, "Use base 10 and input 0.1. The exponent stays −4x."],
  ["Fractional exponent", "log_{8}(4) = ⅔ means…", ["4^{⅔} = 8", "8^{⅔} = 4", "8^{4} = ⅔"], 1, "8⅔ = (∛8)² = 2² = 4."],
  ["Solve for an input", "ln(x) = −1. Find x.", ["−e", "1/e", "−1"], 1, "Convert to x = e⁻¹ = 1/e. Logarithm inputs stay positive."],
  ["Solve for a base", "log_{x}(6) = ½. Find x.", ["3", "√6", "36"], 2, "x¹ᐟ² = 6, so x = 36. It satisfies x > 0 and x ≠ 1."],
  ["Natural log", "ln(1/e) equals…", ["−1", "1", "e"], 0, "e⁻¹ = 1/e, so the logarithm is −1."],
  ["Graph passport", "For g(x) = ln(x + 5), which pair is correct?", ["Domain [−5, ∞); asymptote y = −5", "Domain (−5, ∞); asymptote x = −5", "Domain ℝ; asymptote x = 5"], 1, "Require x + 5 > 0. The curve approaches the excluded boundary x = −5 from the right."],
  ["Intersection of restrictions", "√(x − 2) − log₅(10 − x) has domain…", ["(2, 10)", "[2, 10]", "[2, 10)"], 2, "The radical allows x = 2; the logarithm excludes x = 10. Both rules must hold."],
  ["Nested input", "log(log(5x)) has domain…", ["(0, ∞)", "(⅕, ∞)", "[⅕, ∞)"], 1, "The outer input log(5x) must be greater than zero, which requires 5x > 1."],
  ["Inverse range swap", "The inverse of eˣ/(2e + eˣ) has domain…", ["ℝ", "(0, ∞)", "(0, 1)"], 2, "The original fraction stays strictly between zero and one. Its range is the inverse domain."],
  ["Inverse order", "The inverse of log(log(5x)) is…", ["10^{2x}/5", "10^{10^{x}}/5", "log(10^{x}/5)"], 1, "Undo each logarithm with a power of 10, then divide by 5."],
];

document.querySelector("#app").innerHTML = `${renderLessonHeader("4.3")}
<main class="log-lesson">
<section class="lesson-hero lesson-hero--logs"><div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 4.3</span> Logarithmic functions</p><h1>The answer is<br><em>an exponent.</em></h1><p class="lesson-hero__lede">An exponential tells you the result. A logarithm asks which power made it. Learn to reverse the process, reflect the graph, and work backward through layered functions.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#translation">Decode a logarithm</a><span>About 45 minutes · interactive</span></div></div><div class="log-hero-art" data-reveal><p class="tool-label">One relationship. Two readings.</p><div class="log-hero-equation">${m(String.raw`\textcolor{#60419b}{2}^{\textcolor{#c5442d}{3}} = \textcolor{#246240}{8}`)}</div><span class="log-hero-swap" aria-hidden="true">↕</span><div class="log-hero-equation">${m(String.raw`log_{\textcolor{#60419b}{2}}(\textcolor{#246240}{8}) = \textcolor{#c5442d}{3}`)}</div><p>“What power of 2 gives 8?”</p><div class="log-roles"><span class="log-role--base">2<br><small>base</small></span><span class="log-role--input">8<br><small>input</small></span><span class="log-role--exponent">3<br><small>exponent</small></span></div></div></section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Translate and evaluate logarithms</p></li><li><span>02</span><p>Sketch logarithmic graphs and read limits</p></li><li><span>03</span><p>Combine all domain restrictions</p></li><li><span>04</span><p>Find inverses, including layered functions</p></li></ol></section>
<section class="lesson-section" id="translation">${intro("01", "Keep the base.<br>Find the power.", `${m('y = log_{a}(x) ⇔ a^{y} = x')}. The base must satisfy ${m('a > 0, a ≠ 1')}, and the input must be positive. The output can be any real number.`)}
<div class="log-lab" data-reveal><div class="log-controls"><p class="tool-label">Exponent translator</p><label for="translate-base">Base a</label><select id="translate-base">${baseOptions}</select>${slider("translate-power", "Exponent y", -3, 3, 0.25, 2)}<p>Move through negative, zero, and fractional powers. A negative logarithm means a negative exponent; it does not mean a negative input.</p></div><div class="log-result" aria-live="polite" id="translation-result"></div></div>
<div class="log-card-grid log-card-grid--three" data-reveal><article class="log-card"><p class="tool-label">Common logarithm</p><h3>${m('log(x) = log_{10}(x)')}</h3><p>No written base means 10. For example, log(1000) = 3.</p></article><article class="log-card"><p class="tool-label">Natural logarithm</p><h3>${m('ln(x) = log_{e}(x)')}</h3><p>The base is e ≈ 2.71828. For example, ln(e⁻¹) = −1.</p></article><article class="log-card"><p class="tool-label">Write a number as a log</p><h3>${m('3 = log_{a}(a^{3})')}</h3><p>Choose the base, then raise it to 3: 3 = log₂(8) = log(1000).</p></article></div>
</section>
<section class="lesson-section lesson-section--soft" id="evaluate">${intro("02", "Undo the operation.<br>Keep the input legal.", `Since logarithms and exponentials are inverses, ${m('a^{log_{a}(x)} = x')} for ${m('x > 0')}, and ${m('log_{a}(a^{y}) = y')} for every real ${m('y')}. Also ${m('log_{a}(1) = 0')} and ${m('log_{a}(a) = 1')}.`)}
<div class="log-card-grid"><article class="log-card"><p class="tool-label">Exact-value workshop</p><div class="log-expression-picker" id="eval-case"><span class="log-expression-label" id="eval-label">Choose an expression</span><button type="button" class="log-expression-trigger" id="eval-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="eval-options" aria-labelledby="eval-label eval-selected"><span id="eval-selected">${m(evaluations[0][0])}</span><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button><div class="log-expression-menu" id="eval-options" role="listbox" aria-labelledby="eval-label" hidden>${evaluations.map((v,i)=>`<div class="log-expression-option" id="eval-option-${i}" role="option" data-eval-option="${i}" aria-selected="${i===0}">${m(v[0])}<span class="log-expression-check" aria-hidden="true">✓</span></div>`).join("")}</div></div><div class="log-equation" id="eval-expression"></div><button class="log-button" id="eval-reveal">Show the reasoning</button><div class="log-note" id="eval-answer" hidden></div></article><article class="log-card log-missing-piece"><p class="tool-label">Solve the missing piece</p><h3>${m('log_{x}(6) = ½')}</h3><p>The unknown is the base. Translate first:</p><div class="log-equation">${m('x^{½} = 6 ⇒ √x = 6 ⇒ x = 36')}</div><p>Check the base: 36 is positive and is not 1.</p><h3>${m('ln(x) = −1 ⇒ x = e^{−1} = 1/e')}</h3><p>Here the unknown is the input. Exponentiation recovers it.</p></article></div></section>
<section class="lesson-section" id="reflection">${intro("03", "Swap the coordinates.<br>See the inverse.", "Each exponential is strictly monotone and passes the horizontal-line test. Its inverse is a logarithm. Reflection across y = x swaps domain and range, intercepts, and horizontal and vertical asymptotes.")}
<div class="log-lab" data-reveal><div class="log-controls"><p class="tool-label">Inverse mirror</p><label for="mirror-base">Choose a base</label><select id="mirror-base">${baseOptions}</select>${slider("mirror-t", "Exponent t", -2, 2, 0.1, 1)}<label class="log-toggle"><input type="checkbox" id="mirror-show" checked> Show the exponential partner</label><div class="log-note" id="mirror-reading" aria-live="polite"></div><p><span class="log-key log-key--coral"></span> Logarithm <span class="log-key log-key--violet"></span> Exponential</p></div><div class="log-plot"><svg id="mirror-chart" viewBox="0 0 560 560" role="img" aria-label="Logarithm and exponential reflected across y equals x"></svg></div></div>
<div class="log-facts" id="parent-facts" aria-live="polite"></div></section>
<section class="lesson-section lesson-section--soft" id="transform">${intro("04", "Move the boundary.<br>Read the whole graph.", `${m('g(x) = A log_{a}(x − h) + k')}. The input rule ${m('x − h > 0')} puts the graph to the right of ${m('x = h')}. The anchor ${m('(1, 0)')} moves to ${m('(h + 1, k)')}.`)}
<div class="log-lab" data-reveal><div class="log-controls"><p class="tool-label">Logarithm drafting studio</p><label for="graph-base">Base a</label><select id="graph-base">${baseOptions}</select>${slider("graph-h", "Horizontal shift h", -5, 3, 0.5, -5)}${slider("graph-k", "Vertical shift k", -3, 3, 0.5, 0)}<label for="graph-a">Vertical multiplier A</label><select id="graph-a"><option value="1">1</option><option value="-1">−1 · reflect</option><option value="2">2 · stretch</option><option value="-2">−2 · reflect and stretch</option></select><button class="log-button" id="graph-reset">Return to ln(x + 5)</button><div class="log-note" id="graph-formula" aria-live="polite"></div></div><div class="log-plot"><svg id="transform-chart" viewBox="0 0 700 470" role="img" aria-label="Transformed logarithmic graph with vertical asymptote and anchor point"></svg><p>Dashed line: vertical asymptote. Gold point: transformed anchor. Coral curve: g(x).</p></div></div><div class="log-facts" id="graph-facts" aria-live="polite"></div><div class="log-note" id="graph-limits" aria-live="polite"></div>
</section>
<section class="lesson-section" id="domain">${intro("05", "Every operation<br>gets a gate.", "A logarithm requires a strictly positive input. A square root allows zero. For combined functions, keep only inputs that pass every gate. Open endpoints mean excluded; filled endpoints mean included.")}
<div class="log-lab log-lab--dropdown" data-reveal><div class="log-controls"><p class="tool-label">Domain gate explorer</p>${renderMathDropdown("domain-case","Choose a function",domainFormulas,m)}<label for="domain-x">Test an input x</label><input id="domain-x" type="number" step="0.1" value="0.5"><div class="log-presets" id="domain-presets"></div><div class="log-note" id="domain-status" aria-live="polite"></div></div><div class="log-result"><div id="domain-work"></div><svg id="domain-line" viewBox="0 0 660 145" role="img" aria-label="Number line showing the domain and tested input"></svg></div></div>
</section>
<section class="lesson-section lesson-section--soft" id="inverses">${intro("06", "Peel off the layers.<br>In reverse order.", "Switch x and y, then undo the outside operation first. Use a matching logarithm to undo an exponential, or exponentiate to undo a logarithm. Finish by checking the domain: the inverse accepts exactly the original range.")}
<div class="log-lab log-lab--dropdown" data-reveal><div class="log-controls"><p class="tool-label">Inverse-function workshop</p>${renderMathDropdown("inverse-case","Choose a function",inverseCases.map(c=>c.formula),m)}<div class="log-equation" id="inverse-original"></div><p>Predict the next algebraic move before advancing.</p><div class="log-step-buttons"><button class="log-button" id="inverse-back">← Back</button><button class="log-button" id="inverse-next">Next step →</button></div><p id="inverse-progress" aria-live="polite"></p></div><div class="log-result" id="inverse-step" aria-live="polite"></div></div><div class="log-note"><strong>Why domains matter:</strong> ${m('ln(2ex/(1 − x))')} requires its whole input to be positive. For ${m('x < 0')} the numerator is negative and denominator positive; for ${m('x > 1')} the numerator is positive and denominator negative. Only ${m('0 < x < 1')} survives.</div>
</section>
<section class="lesson-section" id="model">${intro("07", "A ratio becomes<br>an elapsed time.", `In a carbon-decay model, age in years is ${m('T = −8267 ln(r)')}, where ${m('r = D/D_{0}')} is the fraction of the original carbon-14 remaining. Convert a percentage to a decimal before taking its logarithm.`)}
<div class="log-lab" data-reveal><div class="log-controls"><p class="tool-label">Decay clock</p>${slider("carbon", "Carbon remaining (%)", 1, 100, 1, 73)}<p>In this model, 0 &lt; r ≤ 1. Less remaining carbon gives a larger age. Exactly zero cannot be entered into a logarithm.</p></div><div class="log-result" id="carbon-result" aria-live="polite"></div></div></section>
<section class="lesson-section lesson-section--ink" id="readiness">${intro("08", "Translate. Check.<br>Explain your answer.", "Try these without opening the worked reasoning. After checking, use the explanation to identify the operation or restriction that decides the answer.")}
<p class="log-score" id="check-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="log-check-grid">${checks.map((q,i)=>`<article class="log-check"><p class="tool-label">${q[0]}</p><h3>${question(q[1])}</h3>${renderMathDropdown(`check-${i}`,"Your answer",q[2],practiceMath,{placeholder:"Select an answer"})}<button class="log-button" data-check="${i}">Check answer</button><p class="answer-feedback" id="feedback-${i}" aria-live="polite"></p></article>`).join("")}</div></section>
</main>${renderLessonFooter({previous:{href:"pages/sections/4-2.html",label:"Section 4.2 · The natural exponential function"},next:{href:"pages/sections/4-4.html",label:"Section 4.4 · Laws of logarithms"}})}`;

function base(id) { return $(id).value === "e" ? Math.E : Number($(id).value); }
function listen(ids, fn) { ids.forEach(id => $(id).addEventListener($(id).tagName === "SELECT" || $(id).type === "checkbox" ? "change" : "input", fn)); fn(); }
function fact(label, value) { return `<div><span>${label}</span><strong>${value}</strong></div>`; }
listen(["translate-base", "translate-power"], () => {
  const b = base("translate-base"), y = Number($("translate-power").value), x = b ** y, name = $("translate-base").value;
  $("translate-power-value").textContent = fmt(y);
  $("translation-result").innerHTML = `<p class="tool-label">Exponential form</p><div class="log-equation">${m(`${name}^{${fmt(y)}} = ${fmt(x, 5)}`)}</div><p class="log-between">↕ Same base, input, and exponent</p><p class="tool-label">Logarithmic form</p><div class="log-equation">${m(`${log(name,fmt(x,5))} = ${fmt(y)}`)}</div><p>The logarithm asks: “What power of ${name} gives ${fmt(x,5)}?” ${Number.isInteger(y) && name !== "e" ? "" : "Displayed input decimals are rounded."}</p>`;
});
let evaluationIndex = 0;
let activeEvaluation = 0;
const evaluationOptions = [...document.querySelectorAll('[data-eval-option]')];
function renderEvaluation() {
  const q = evaluations[evaluationIndex];
  $("eval-selected").innerHTML = m(q[0]);
  $("eval-expression").innerHTML = m(q[0]);
  $("eval-answer").hidden = true;
  $("eval-reveal").textContent = "Show the reasoning";
  evaluationOptions.forEach((option, i) => option.setAttribute("aria-selected", String(i === evaluationIndex)));
}
function setActiveEvaluation(index) {
  activeEvaluation = index;
  evaluationOptions.forEach((option, i) => option.classList.toggle("is-active", i === index));
  $("eval-trigger").setAttribute("aria-activedescendant", `eval-option-${index}`);
  evaluationOptions[index].scrollIntoView({ block: "nearest", behavior: "instant" });
}
function openEvaluation() {
  $("eval-options").hidden = false;
  $("eval-trigger").setAttribute("aria-expanded", "true");
  setActiveEvaluation(evaluationIndex);
}
function closeEvaluation() {
  $("eval-options").hidden = true;
  $("eval-trigger").setAttribute("aria-expanded", "false");
  $("eval-trigger").removeAttribute("aria-activedescendant");
}
function chooseEvaluation(index, restoreFocus = true) {
  evaluationIndex = index;
  renderEvaluation();
  closeEvaluation();
  if (restoreFocus) $("eval-trigger").focus({ preventScroll: true });
}
$("eval-trigger").addEventListener("click", () => {
  if ($("eval-options").hidden) openEvaluation(); else closeEvaluation();
});
$("eval-trigger").addEventListener("keydown", event => {
  const isOpen = !$("eval-options").hidden;
  if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    if (!isOpen) openEvaluation();
    if (event.key === "Home") setActiveEvaluation(0);
    else if (event.key === "End") setActiveEvaluation(evaluations.length - 1);
    else if (isOpen) setActiveEvaluation(Math.max(0, Math.min(evaluations.length - 1, activeEvaluation + (event.key === "ArrowDown" ? 1 : -1))));
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (isOpen) chooseEvaluation(activeEvaluation); else openEvaluation();
  } else if (event.key === "Escape" && isOpen) {
    event.preventDefault();
    event.stopPropagation();
    closeEvaluation();
  } else if (event.key === "Tab" && isOpen) {
    chooseEvaluation(activeEvaluation, false);
  }
});
$("eval-trigger").addEventListener("blur", closeEvaluation);
$("eval-options").addEventListener("pointerdown", event => event.preventDefault());
$("eval-options").addEventListener("click", event => {
  const option = event.target.closest('[data-eval-option]');
  if (option) chooseEvaluation(Number(option.dataset.evalOption));
});
document.addEventListener("pointerdown", event => {
  if (!$("eval-case").contains(event.target)) closeEvaluation();
});
renderEvaluation();
$("eval-reveal").addEventListener("click", () => {
  const q = evaluations[evaluationIndex];
  $("eval-answer").hidden = !$("eval-answer").hidden;
  $("eval-answer").innerHTML = `<strong>${m(q[0] + " = " + q[1])}</strong><p>${q[2]}</p>`;
  $("eval-reveal").textContent = $("eval-answer").hidden ? "Show the reasoning" : "Hide the reasoning";
});

// Graph windows use the same physical scale on both axes in the inverse mirror.
function plot(svg, bounds, width, height) {
  const pad={l:48,r:24,t:24,b:42}; const [xmin,xmax,ymin,ymax]=bounds;
  const X=x=>pad.l+(x-xmin)*(width-pad.l-pad.r)/(xmax-xmin), Y=y=>height-pad.b-(y-ymin)*(height-pad.t-pad.b)/(ymax-ymin);
  let grid="";
  for(let x=Math.ceil(xmin);x<=xmax;x++) grid+=`<line class="log-grid" x1="${X(x)}" x2="${X(x)}" y1="${pad.t}" y2="${height-pad.b}"/><text class="log-tick" x="${X(x)}" y="${height-17}" text-anchor="middle">${fmt(x)}</text>`;
  for(let y=Math.ceil(ymin);y<=ymax;y++) grid+=`<line class="log-grid" x1="${pad.l}" x2="${width-pad.r}" y1="${Y(y)}" y2="${Y(y)}"/><text class="log-tick" x="${pad.l-10}" y="${Y(y)+4}" text-anchor="end">${fmt(y)}</text>`;
  const clipId=svg.id+"-clip";
  svg.innerHTML=`<defs><clipPath id="${clipId}"><rect x="${pad.l}" y="${pad.t}" width="${width-pad.l-pad.r}" height="${height-pad.t-pad.b}"/></clipPath></defs>${grid}<g clip-path="url(#${clipId})">${xmin<=0&&xmax>=0?`<line class="log-axis" x1="${X(0)}" x2="${X(0)}" y1="${pad.t}" y2="${height-pad.b}"/>`:""}${ymin<=0&&ymax>=0?`<line class="log-axis" x1="${pad.l}" x2="${width-pad.r}" y1="${Y(0)}" y2="${Y(0)}"/>`:""}</g><text class="log-tick" x="${width-13}" y="${height-17}">x</text><text class="log-tick" x="18" y="17">y</text>`;
  const path = (fn, min, max, color) => {
    let d = "";
    for (let i = 0; i <= 900; i++) {
      const x = min + (max - min) * i / 900;
      const y = fn(x);
      if (!Number.isFinite(y)) continue;
      const clippedY = Math.max(ymin - 1, Math.min(ymax + 1, y));
      d += `${d ? "L" : "M"}${X(x).toFixed(2)},${Y(clippedY).toFixed(2)} `;
    }
    return `<path class="log-curve" style="stroke:${color}" d="${d}"/>`;
  };
  const dot=(x,y,color="var(--gold)")=>`<circle cx="${X(x)}" cy="${Y(y)}" r="6" fill="${color}" stroke="var(--ink)" stroke-width="2"/>`;
  const add=content=>svg.insertAdjacentHTML("beforeend",`<g clip-path="url(#${clipId})">${content}</g>`);
  return {X,Y,path,dot,add};
}
listen(["mirror-base","mirror-t","mirror-show"],()=>{
  const b=base("mirror-base"), name=$("mirror-base").value, t=Number($("mirror-t").value), v=b**t;
  // 488 by 494 pixels: adjust vertical bounds so units have exactly equal scale.
  const p=plot($("mirror-chart"),[-3,8,-3,8+11*6/488],560,560);
  p.add(`<line class="log-dashed" x1="${p.X(-3)}" y1="${p.Y(-3)}" x2="${p.X(8)}" y2="${p.Y(8)}"/>${p.path(x=>Math.log(x)/Math.log(b),0.00001,8,"var(--coral)")}${p.dot(v,t)}`);
  if($("mirror-show").checked) p.add(`${p.path(x=>b**x,-3,8,"var(--violet)")}${v <= 8 ? `<line class="log-dashed" x1="${p.X(t)}" y1="${p.Y(v)}" x2="${p.X(v)}" y2="${p.Y(t)}"/>` : ""}${p.dot(t,v,"var(--violet)")}`);
  $("mirror-t-value").textContent=fmt(t);
  $("mirror-reading").innerHTML=`<strong>Exponential: (${fmt(t)}, ${fmt(v)})<br>Logarithm: (${fmt(v)}, ${fmt(t)})</strong><p>Swap coordinates across the dashed line y = x.${v>8?" This selected point lies beyond the graph window.":""}</p>`;
  $("parent-facts").innerHTML=[fact("Logarithm domain","(0, ∞)"),fact("Range","(−∞, ∞)"),fact("x-intercept","(1, 0)"),fact("y-intercept","None"),fact("Vertical asymptote","x = 0"),fact("Horizontal asymptote","None"),fact("As x → 0⁺",b>1?"y → −∞":"y → ∞"),fact("As x → ∞",b>1?"y → ∞":"y → −∞")].join("");
  $("mirror-chart").setAttribute("aria-label",`Logarithm base ${name}, ${b>1?"increasing":"decreasing"}, reflected across y equals x with its exponential partner${$("mirror-show").checked?" shown":" hidden"}.`);
});
listen(["graph-base","graph-h","graph-k","graph-a"],renderTransform);
function renderTransform(){
  const b=base("graph-base"), name=$("graph-base").value, h=Number($("graph-h").value), k=Number($("graph-k").value), a=Number($("graph-a").value), inc=a/Math.log(b)>0;
  const inner=h===0?"x":`x ${h<0?"+":"−"} ${fmt(Math.abs(h))}`, formula=`g(x) = ${a===1?"":a===-1?"−":fmt(a)}${log(name,inner)}${k===0?"":` ${k<0?"−":"+"} ${fmt(Math.abs(k))}`}`;
  $("graph-h-value").textContent=fmt(h);$("graph-k-value").textContent=fmt(k); $("graph-formula").innerHTML=m(formula);
  const p=plot($("transform-chart"),[-7,9,-7,7],700,470);
  p.add(`<line class="log-dashed" style="stroke:var(--violet)" x1="${p.X(h)}" x2="${p.X(h)}" y1="${p.Y(-7)}" y2="${p.Y(7)}"/>${p.path(x=>a*Math.log(x-h)/Math.log(b)+k,h+0.00001,9,"var(--coral)")}${p.dot(h+1,k)}`);
  const xi=h+b**(-k/a), yi=h<0?a*Math.log(-h)/Math.log(b)+k:null;
  $("graph-facts").innerHTML=[fact("Domain",`(${fmt(h)}, ∞)`),fact("Range","(−∞, ∞)"),fact("Vertical asymptote",`x = ${fmt(h)}`),fact("Horizontal asymptote","None"),fact("x-intercept",`(${fmt(xi)}, 0)`),fact("y-intercept",yi===null?"None":`(0, ${fmt(yi)})`),fact("Anchor",`(${fmt(h+1)}, ${fmt(k)})`),fact("Direction",inc?"Increasing":"Decreasing")].join("");
  $("graph-limits").innerHTML=`<strong>As x → ${fmt(h)}⁺, g(x) → ${inc?"−∞":"∞"}. As x → ∞, g(x) → ${inc?"∞":"−∞"}.</strong><p>${h===-5&&k===0&&a===1&&name==="e"?"For ln(x + 5): shift ln(x) left 5 units. Exact intercepts are (−4, 0) and (0, ln 5). ":""}Solve the x-intercept by setting ${m("g(x) = 0")}: ${m("x = h + a^{−k/A}")}, where a is the selected base. Displayed noninteger coordinates are approximations.</p>`;
}
$("graph-reset").addEventListener("click",()=> {$("graph-base").value="e";$("graph-h").value=-5;$("graph-k").value=0;$("graph-a").value=1;renderTransform();});

const domains={
  quadratic:{bounds:[-1,2],lo:0,hi:1,closed:false,presets:[0,0.5,1],work:`<h3>${m('ln(x − x²)')}</h3><ol><li>Require ${m('x − x² > 0')}.</li><li>Factor: ${m('x(1 − x) > 0')}.</li><li>The factors have the same sign only between 0 and 1.</li></ol><div class="log-equation">Domain: (0, 1)</div><p>At either endpoint the log input is zero. Outside, it is negative.</p>`,gates:x=>[[`Log input x − x² = ${fmt(x-x*x)}`,x-x*x>0]]},
  mixed:{bounds:[0,12],lo:2,hi:10,closed:true,presets:[2,6,10],work:`<h3>${m('√(x − 2) − log_{5}(10 − x)')}</h3><ol><li>Radical: ${m('x − 2 ≥ 0 ⇒ x ≥ 2')}.</li><li>Logarithm: ${m('10 − x > 0 ⇒ x < 10')}.</li><li>Intersect the restrictions: ${m('[2, ∞) ∩ (−∞, 10)')}.</li></ol><div class="log-equation">Domain: [2, 10)</div>`,gates:x=>[[`Radicand x − 2 = ${fmt(x-2)}`,x>=2],[`Log input 10 − x = ${fmt(10-x)}`,x<10]]},
  nested:{bounds:[-0.1,0.6],lo:0.2,hi:Infinity,closed:false,presets:[0,0.2,0.3],work:`<h3>${m('log(log(5x))')}</h3><ol><li>Inner log: ${m('5x > 0')}.</li><li>Outer log: ${m('log(5x) > 0')}.</li><li>Base 10 is increasing: ${m('5x > 1 ⇒ x > ⅕')}.</li></ol><div class="log-equation">Domain: (⅕, ∞)</div><p>At x = ⅕, the inner log is 0, so the outer log is undefined.</p>`,gates:x=>[[`Inner log input 5x = ${fmt(5*x)}`,x>0],[x>0?`Outer log input log(5x) = ${fmt(Math.log10(5*x))}`:"Outer input cannot be computed",x>0.2]]},
};
function domainPreset(){const d=domains[domainKeys[Number($("domain-case").dataset.value)]];$("domain-x").value=d.presets[1];$("domain-presets").innerHTML=d.presets.map(x=>`<button class="log-button" data-domain-x="${x}">Try ${fmt(x)}</button>`).join("");$("domain-presets").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{$("domain-x").value=btn.dataset.domainX;renderDomain();}));renderDomain();}
function renderDomain(){
 const d=domains[domainKeys[Number($("domain-case").dataset.value)]],x=$("domain-x").valueAsNumber; $("domain-work").innerHTML=d.work;
 const valid=Number.isFinite(x),gates=valid?d.gates(x):[];
 $("domain-status").innerHTML=valid?`${gates.map(([name,ok])=>`<p class="${ok?"log-pass":"log-fail"}">${ok?"✓":"×"} ${name}: ${ok?"passes":"fails"}</p>`).join("")}<strong>${gates.every(v=>v[1])?"Accepted: the function is defined.":"Rejected: at least one operation is undefined."}</strong>`:"Enter a finite number to test the gates.";
 const [l,r]=d.bounds, X=v=>45+(v-l)*570/(r-l), end=Number.isFinite(d.hi)?d.hi:r;
 $("domain-line").innerHTML=`<line class="log-axis" x1="30" x2="635" y1="65" y2="65"/><line stroke="var(--green)" stroke-width="9" x1="${X(d.lo)}" x2="${X(end)}" y1="65" y2="65"/><circle cx="${X(d.lo)}" cy="65" r="7" fill="${d.closed?"var(--green)":"var(--white)"}" stroke="var(--ink)" stroke-width="2"/><text class="log-tick" x="${X(d.lo)}" y="98" text-anchor="middle">${fmt(d.lo)}</text>${Number.isFinite(d.hi)?`<circle cx="${X(d.hi)}" cy="65" r="7" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/><text class="log-tick" x="${X(d.hi)}" y="98" text-anchor="middle">${fmt(d.hi)}</text>`:`<path d="M ${X(end)-12} 53 L ${X(end)} 65 L ${X(end)-12} 77" fill="none" stroke="var(--green)" stroke-width="4"/>`}${valid&&x>=l&&x<=r?`<path d="M ${X(x)-7} 30 L ${X(x)} 42 L ${X(x)+7} 30 Z" fill="var(--coral)"/><text class="log-tick" x="${X(x)}" y="22" text-anchor="middle">x = ${fmt(x)}</text>`:""}<text class="log-tick" x="330" y="130" text-anchor="middle">${valid&&(x<l||x>r)?"Test input is outside the displayed window":"Green: allowed inputs · coral marker: your test input"}</text>`;
}
initMathDropdown("domain-case",domainFormulas,m);
$("domain-case").addEventListener("change",domainPreset);$("domain-x").addEventListener("input",renderDomain);domainPreset();
initMathDropdown("inverse-case",inverseCases.map(c=>c.formula),m);
let inverseIndex=0;
function renderInverse(){const c=inverseCases[Number($("inverse-case").dataset.value)],step=c.steps[inverseIndex];$("inverse-original").innerHTML=m((Number($("inverse-case").dataset.value) === 1 ? "g(x) = " : "f(x) = ")+c.formula);$("inverse-step").innerHTML=`<p class="tool-label">${step[0]}</p><div class="log-equation">${m(step[1])}</div><p>${step[2]}</p>`;$("inverse-progress").textContent=`Step ${inverseIndex+1} of ${c.steps.length}`;$("inverse-back").disabled=inverseIndex===0;$("inverse-next").disabled=inverseIndex===c.steps.length-1;}
$("inverse-case").addEventListener("change",()=>{inverseIndex=0;renderInverse();});$("inverse-back").addEventListener("click",()=>{inverseIndex--;renderInverse();});$("inverse-next").addEventListener("click",()=>{inverseIndex++;renderInverse();});renderInverse();
listen(["carbon"],()=>{const percent=Number($("carbon").value),r=percent/100,t=-8267*Math.log(r);$("carbon-value").textContent=percent+"%";$("carbon-result").innerHTML=`<p class="tool-label">Modeled age</p><div class="log-equation">${Math.round(t).toLocaleString("en-US")} years</div><p>${m(`T = −8267 ln(${fmt(r)}) ≈ ${fmt(t,1)}`)}</p><div class="log-carbon-track"><i style="width:${percent}%"></i></div><p>${percent}% remaining means r = ${fmt(r)}, not ${percent}. ${percent===100?"ln(1) = 0, so the modeled age is zero.":"Since ln(r) is negative, multiplying by −8267 gives a positive age."}</p>`;});
checks.forEach((q,i)=>initMathDropdown(`check-${i}`,q[2],practiceMath));
const solved=new Set();
document.querySelectorAll("[data-check]").forEach(btn=>btn.addEventListener("click",()=>{const i=Number(btn.dataset.check),q=checks[i],selected=$("check-"+i).dataset.value;if(selected===""){setFeedback($("feedback-"+i),false,"Choose an answer before checking.");return;}const correct=Number(selected)===q[3];if(correct)solved.add(i);setFeedback($("feedback-"+i),correct,(correct?"Correct. ":"Try again. ")+q[4]);$("check-score").textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?" · Ready to move on!":""}`;}));
initLessonChrome();
