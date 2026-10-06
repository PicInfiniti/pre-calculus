import "../assets/sass/lesson.sass";
import katex from "katex";
import "katex/dist/katex.min.css";
import {renderMathDropdown, initMathDropdown} from "./math-dropdown";
import {
  initLessonChrome,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const math = (tex, display = false) =>
  `<span class="natural-math">${katex.renderToString(tex, {throwOnError:true, strict:"ignore", displayMode:display})}</span>`;
const frac = (top, bottom) => String.raw`\frac{${top}}{${bottom}}`;
const money = (value) => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD",
}).format(value);
const fixed = (value, digits = 3) => Number(value.toFixed(digits)).toString().replaceAll("-", "−");

const formulaChoices = {
  "symmetry-a": [String.raw`a=2`,String.raw`a=1`,String.raw`a=\pi`],
  "composition-inner": [String.raw`e^{3x-2}`,String.raw`3x-2`,String.raw`e^x`],
  "check-interest": [String.raw`1800e^{12}`,String.raw`1800e^{0.12}`,String.raw`1800(1.04)^3`],
  "check-minimum": [String.raw`\pi\text{ at }x=0`,String.raw`2\pi\text{ at }x=0`,String.raw`\text{No minimum}`],
};

document.querySelector("#app").innerHTML = `
  ${renderLessonHeader("4.2")}
  <main class="natural-lesson">
    <section class="lesson-hero lesson-hero--natural">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 4.2</span> The natural exponential function</p>
        <h1>One special base.<br><em>Endless growth.</em></h1>
        <p class="lesson-hero__lede">Make the compounding periods ever shorter, and a new number emerges. That number, ${math(String.raw`e`)}, gives us a natural way to describe growth that happens continuously.</p>
        <div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#discover-e">Find the number</a><span>About 30 minutes · interactive</span></div>
      </div>
      <div class="natural-hero-art" aria-hidden="true" data-reveal>
        <div class="natural-hero-art__sheet">
          <span class="tool-label">A number approached, never finished</span>
          <div class="natural-hero-art__formula">${math(String.raw`(1 + ${frac("1", "m")})^{m}`)}</div>
          <div class="natural-hero-art__steps"><span>2</span><i>→</i><span>2.5937</span><i>→</i><span>2.7048</span><i>→</i><strong>e</strong></div>
          <p>As <var>m</var> grows without bound, the values close in on <strong>2.71828…</strong></p>
        </div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span><p>Explain how a sequence approaches ${math(String.raw`e`)}</p></li>
        <li><span>02</span><p>Read the graph and limits of ${math(String.raw`e^{x}`)}</p></li>
        <li><span>03</span><p>Compare periodic and continuous compounding</p></li>
        <li><span>04</span><p>Analyze composition and even symmetry</p></li>
      </ol>
    </section>

    <section class="lesson-section" id="discover-e">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Discover the constant</p>
        <h2>Increase the count.<br>Watch the answer settle.</h2>
        <p>Each factor ${math(String.raw`1 + ${frac("1", "m")}`)} gets closer to 1, but we multiply ${math(String.raw`m`)} copies together. The product increases toward a fixed value. We call that limit ${math(String.raw`e`)}.</p>
      </div>
      <div class="natural-limit-lab" data-reveal>
        <div class="natural-limit-lab__control">
          <p class="tool-label">Limit microscope</p>
          <div class="natural-limit-lab__definition">${math(String.raw`e = \lim_{m\to\infty} (1 + ${frac("1", "m")})^{m}`, true)}</div>
          <label for="limit-m">Number of factors <var>m</var></label>
          <input id="limit-m" type="number" min="1" max="10000000" step="1" value="10" inputmode="numeric" />
          <p class="natural-limit-lab__hint">Enter a whole number from 1 to 10,000,000, or choose a row.</p>
          <div class="natural-limit-lab__result" aria-live="polite"><span>Current value</span><strong id="limit-value"></strong><p id="limit-gap"></p></div>
          <p class="natural-limit-lab__note">${math(String.raw`e`)} is irrational: no terminating or repeating decimal gives its exact value. The decimal 2.71828… is an approximation.</p>
        </div>
        <div class="natural-limit-lab__table-wrap">
          <table class="natural-limit-table"><caption>Follow the sequence toward ${math(String.raw`e`)}</caption><thead><tr><th scope="col">Factors <var>m</var></th><th scope="col">${math(String.raw`(1 + ${frac("1", "m")})^{m}`)}</th><th scope="col">Distance below ${math(String.raw`e`)}</th></tr></thead><tbody id="limit-rows"></tbody></table>
          <div class="natural-limit-lab__ruler" aria-hidden="true"><span>2</span><div><i id="limit-marker"></i><b>e ≈ 2.71828</b></div><span>2.72</span></div>
          <p class="natural-limit-lab__table-note">The sequence approaches ${math(String.raw`e`)} from below; finite values are not exactly ${math(String.raw`e`)}.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="natural-graph">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> A function with base e</p>
        <h2>It rises forever.<br>It stays above zero.</h2>
        <p>The natural exponential function ${math(String.raw`f(x) = e^{x}`)} behaves like every growth curve from Section 4.1. Its exact anchor is ${math(String.raw`(0, 1)`)}; negative inputs produce positive fractions, not negative outputs.</p>
      </div>
      <div class="natural-graph-lab" data-reveal>
        <div class="natural-graph-lab__plot"><div class="natural-graph-lab__heading"><span class="tool-label">The curve and a moving point</span><strong>${math(String.raw`f(x) = e^{x}`)}</strong></div><svg id="natural-chart" viewBox="0 0 680 430" role="img" aria-label="Graph of e to the x with a movable point and horizontal asymptote"></svg></div>
        <div class="natural-graph-lab__controls">
          <label for="natural-x">Inspect an input <output id="natural-x-value">0</output></label>
          <input id="natural-x" type="range" min="-3" max="2" step="0.25" value="0" />
          <div class="natural-graph-lab__value" aria-live="polite"><span>Point on the curve</span><strong id="natural-point"></strong><p id="natural-point-note"></p></div>
          <div class="natural-graph-lab__facts"><div><span>Domain</span><strong>${math(String.raw`(-\infty,\infty)`)}</strong></div><div><span>Range</span><strong>${math(String.raw`(0,\infty)`)}</strong></div><div><span><var>x</var>-intercept</span><strong>None</strong></div><div><span><var>y</var>-intercept</span><strong>${math("(0,1)")}</strong></div><div><span>Horizontal asymptote</span><strong>${math("y=0")}</strong></div><div><span>Vertical asymptote</span><strong>None</strong></div></div>
        </div>
      </div>
      <div class="natural-limits" data-reveal><div><span>Far left</span><strong>${math(String.raw`e^{x} \to  0^{+}\quad\text{as }x \to  -\infty `)}</strong><p>The curve approaches the x-axis but never touches it.</p></div><div><span>Far right</span><strong>${math(String.raw`e^{x} \to  \infty\quad\text{as }x \to  \infty `)}</strong><p>There is no upper bound.</p></div></div>
    </section>

    <section class="lesson-section lesson-section--soft" id="continuous-interest">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Continuous compounding</p>
        <h2>What if there is<br>no last interval?</h2>
        <p>For principal ${math(String.raw`P`)}, annual rate ${math(String.raw`r`)} written as a decimal, and time ${math(String.raw`t`)} years, periodic compounding is ${math(String.raw`A_{n} = P(1 + ${frac("r", "n")})^{nt}`)}. As the number of periods per year grows without bound, the balance approaches ${math(String.raw`Pe^{rt}`)}.</p>
      </div>
      <div class="natural-derivation" data-reveal><div><span>Periodic model</span><strong>${math(String.raw`A_{n} = P(1 + ${frac("r", "n")})^{nt}`)}</strong></div><i aria-hidden="true">→</i><div><span>Let ${math(String.raw`m = n/r`)}</span><strong>${math(String.raw`A_{n} = P(1 + ${frac("1", "m")})^{mrt}`)}</strong></div><i aria-hidden="true">→</i><div><span>As ${math(String.raw`n \to  \infty `)}</span><strong>${math(String.raw`A(t) = Pe^{rt}`)}</strong></div></div>
      <p class="natural-derivation-note">The middle substitution assumes a positive rate. At a zero rate, both models simply remain at ${math(String.raw`P`)}.</p>
      <div class="natural-interest-lab" data-reveal>
        <div class="natural-interest-lab__controls"><p class="tool-label">Compounding comparison</p><label for="continuous-principal">Starting deposit <output id="continuous-principal-value"></output></label><input id="continuous-principal" type="range" min="1000" max="10000" step="250" value="2500" /><label for="continuous-rate">Annual rate <output id="continuous-rate-value"></output></label><input id="continuous-rate" type="range" min="1" max="12" step="0.25" value="6" /><label for="continuous-years">Time <output id="continuous-years-value"></output></label><input id="continuous-years" type="range" min="1" max="20" step="1" value="5" /><label for="continuous-frequency">Highlighted frequency</label><select id="continuous-frequency"><option value="1">Annually</option><option value="4">Quarterly</option><option value="12" selected>Monthly</option><option value="365">Daily</option><option value="continuous">Continuously</option></select></div>
        <div class="natural-interest-lab__results"><div class="natural-interest-lab__headline"><span id="continuous-label">Monthly balance</span><strong id="continuous-balance" aria-live="polite"></strong><p id="continuous-substitution"></p></div><div id="continuous-bars" class="natural-interest-bars" aria-label="Balance by compounding frequency"></div><p class="natural-interest-lab__difference" id="continuous-difference"></p></div>
      </div>
    </section>

    <section class="lesson-section" id="function-thinking">
      <div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>04</span> Work with the function</p><h2>Look inside.<br>Then compare both sides.</h2><p>Exponential expressions can be built by composition. Pairs such as ${math(String.raw`e^{x} + e^{-x}`)} have mirror symmetry, which tells us where their minimum occurs.</p></div>
      <div class="natural-thinking-grid" data-reveal>
        <article class="natural-composition"><p class="tool-label">Composition workshop</p><h3>Unpack ${math(String.raw`F(x) = e^{3x - 2}`)}</h3><p>Which inner function feeds the exponential outer function?</p>${renderMathDropdown("composition-inner","Choose the inner function",formulaChoices["composition-inner"],math,{placeholder:"Choose the input…"})}<button id="composition-check" type="button">Check composition</button><p id="composition-feedback" class="answer-feedback" aria-live="polite"></p><div class="natural-composition__answer">${math(String.raw`g(x) = 3x - 2`)} <span>→</span> ${math(String.raw`f(u) = e^{u}`)} <span>→</span> ${math(String.raw`(f \circ  g)(x) = e^{3x - 2}`)}</div></article>
        <article class="natural-symmetry"><p class="tool-label">Even-function mirror</p><h3>${math(String.raw`h(x) = a(e^{x} + e^{-x})`)}</h3>${renderMathDropdown("symmetry-a","Positive coefficient",formulaChoices["symmetry-a"],math)}<svg id="symmetry-chart" viewBox="0 0 500 300" role="img" aria-label="Even exponential curve with two mirrored points"></svg><label for="symmetry-x">Mirror distance from zero <output id="symmetry-distance">1</output></label><input id="symmetry-x" type="range" min="0" max="2" step="0.25" value="1" /><div class="natural-symmetry__reading" id="symmetry-reading" aria-live="polite"></div></article>
      </div>
      <div class="natural-minimum" data-reveal><div><span>Why it is even</span><strong>${math(String.raw`h(-x) = a(e^{-x} + e^{x}) = h(x)`)}</strong></div><div><span>Why its minimum is exact</span><strong>${math(String.raw`e^{x} + e^{-x} \ge  2`)}</strong><p>The two positive terms multiply to 1, so their sum is at least 2. Equality occurs at ${math(String.raw`x = 0`)}; the minimum is ${math(String.raw`2a`)} for ${math(String.raw`a > 0`)}.</p></div></div>
    </section>

    <section class="lesson-section lesson-section--ink" id="readiness"><div class="lesson-section__intro" data-reveal><p class="lesson-kicker lesson-kicker--gold"><span>05</span> Check your understanding</p><h2>Explain the pattern,<br>not just the number.</h2><p>Use the limit, graph, and function structure to justify each answer.</p></div><div class="natural-checks">
      <article class="natural-check" data-reveal><span>The limit</span><h3>Does ${math(String.raw`(1 + ${frac("1", "m")})^{m}`)} ever equal ${math(String.raw`e`)} for a finite positive integer ${math(String.raw`m`)}?</h3><select id="check-limit" aria-label="Does a finite sequence value equal e"><option value="">Choose…</option><option value="yes">Yes, at a sufficiently large m</option><option value="correct">No, it approaches e from below</option></select><button type="button" id="check-limit-button">Check limit</button><p class="answer-feedback" id="feedback-limit" aria-live="polite"></p></article>
      <article class="natural-check" data-reveal><span>Graph behavior</span><h3>As ${math(String.raw`x \to  -\infty `)}, what happens to ${math(String.raw`e^{x}`)}?</h3><select id="check-graph" aria-label="Left-end behavior of e to the x"><option value="">Choose…</option><option value="negative">It becomes negative</option><option value="correct">It approaches zero from above</option><option value="infinite">It grows without bound</option></select><button type="button" id="check-graph-button">Check graph</button><p class="answer-feedback" id="feedback-graph" aria-live="polite"></p></article>
      <article class="natural-check" data-reveal><span>Continuous model</span><h3>Which formula models $1,800 at 4% continuously compounded for 3 years?</h3>${renderMathDropdown("check-interest","Your answer",formulaChoices["check-interest"],math,{placeholder:"Select an answer"})}<button type="button" id="check-interest-button">Check model</button><p class="answer-feedback" id="feedback-interest" aria-live="polite"></p></article>
      <article class="natural-check" data-reveal><span>Symmetry and minimum</span><h3>For ${math(String.raw`\pi (e^{x} + e^{-x})`)}, what is the exact minimum?</h3>${renderMathDropdown("check-minimum","Your answer",formulaChoices["check-minimum"],math,{placeholder:"Select an answer"})}<button type="button" id="check-minimum-button">Check minimum</button><p class="answer-feedback" id="feedback-minimum" aria-live="polite"></p></article>
    </div><aside class="ready-banner ready-banner--natural" data-reveal><span>You are natural-exponential-ready when</span><p>You can explain the limit defining e, trace ${math("e^x")} on both ends, compare interest models, and use symmetry to find an exact minimum.</p><a href="#discover-e">Explore the limit again <span aria-hidden="true">↑</span></a></aside></section>
  </main>
  ${renderLessonFooter({previous: {href: "pages/sections/4-1.html", label: "Section 4.1 · Exponential functions"}, next: {href: "pages/sections/4-3.html", label: "Section 4.3 · Logarithmic functions"}})}
`;

const limitInput = document.querySelector("#limit-m");
const limitSamples = [1, 10, 50, 100, 10000, 100000];
const sequenceValue = (m) => Math.exp(m * Math.log1p(1 / m));
const limitRows = document.querySelector("#limit-rows");
limitRows.innerHTML = limitSamples.map((sample) => `<tr data-limit-m="${sample}"><th scope="row"><button type="button" aria-label="Try ${sample.toLocaleString()} factors">${sample.toLocaleString()}</button></th><td>${sequenceValue(sample).toFixed(9)}</td><td>${(Math.E - sequenceValue(sample)).toFixed(9)}</td></tr>`).join("");
limitRows.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-limit-m]");
  if (!row || !limitRows.contains(row)) return;
  limitInput.value = row.dataset.limitM;
  renderLimit();
});
function renderLimit() {
  const m = Number(limitInput.value);
  const valid = Number.isSafeInteger(m) && m >= 1 && m <= 10000000;
  document.querySelector("#limit-value").textContent = valid ? sequenceValue(m).toFixed(9) : "—";
  document.querySelector("#limit-gap").textContent = valid
    ? `${(Math.E - sequenceValue(m)).toFixed(9)} below e ≈ ${Math.E.toFixed(9)}`
    : "Choose a whole number from 1 to 10,000,000.";
  limitRows.querySelectorAll("tr[data-limit-m]").forEach((row) => {
    const selected = Number(row.dataset.limitM) === m;
    row.classList.toggle("is-current", selected);
    row.querySelector("button").setAttribute("aria-pressed", String(selected));
  });
  const marker = document.querySelector("#limit-marker");
  marker.style.left = `${valid ? 100 * (sequenceValue(m) - 2) / (2.72 - 2) : 0}%`;
  marker.hidden = !valid;
}
limitInput.addEventListener("input", renderLimit);
renderLimit();

function drawNaturalGraph() {
  const svg = document.querySelector("#natural-chart");
  const left = 55; const right = 635; const top = 25; const bottom = 365;
  const xMin = -3.5; const xMax = 2.25; const yMax = 8;
  const toX = (x) => left + (x - xMin) * (right - left) / (xMax - xMin);
  const toY = (y) => bottom - y * (bottom - top) / yMax;
  const x = Number(document.querySelector("#natural-x").value);
  let path = "";
  for (let index = 0; index <= 300; index += 1) {
    const input = xMin + index * (xMax - xMin) / 300;
    const output = Math.exp(input);
    if (output > yMax) break;
    path += `${index ? "L" : "M"}${toX(input).toFixed(2)} ${toY(output).toFixed(2)}`;
  }
  svg.innerHTML = `<defs><clipPath id="natural-plot-clip"><rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}"/></clipPath></defs>
    ${[-3, -2, -1, 0, 1, 2].map((tick) => `<line class="natural-chart__grid" x1="${toX(tick)}" x2="${toX(tick)}" y1="${top}" y2="${bottom}"/><text class="natural-chart__label" x="${toX(tick)}" y="${bottom + 23}" text-anchor="middle">${fixed(tick)}</text>`).join("")}
    ${[1, 2, 3, 4, 5, 6, 7, 8].map((tick) => `<line class="natural-chart__grid" x1="${left}" x2="${right}" y1="${toY(tick)}" y2="${toY(tick)}"/><text class="natural-chart__label" x="${toX(0) - 10}" y="${toY(tick) + 4}" text-anchor="end">${tick}</text>`).join("")}
    <line class="natural-chart__axis" x1="${toX(0)}" x2="${toX(0)}" y1="${top}" y2="${bottom}"/><line class="natural-chart__axis" x1="${left}" x2="${right}" y1="${bottom}" y2="${bottom}"/>
    <path class="natural-chart__curve" d="${path}" clip-path="url(#natural-plot-clip)"/><line class="natural-chart__guide" x1="${toX(x)}" x2="${toX(x)}" y1="${toY(Math.exp(x))}" y2="${bottom}"/><circle class="natural-chart__anchor" cx="${toX(0)}" cy="${toY(1)}" r="5"/><circle class="natural-chart__point" cx="${toX(x)}" cy="${toY(Math.exp(x))}" r="8"/><text class="natural-chart__label" x="${right + 10}" y="${bottom + 4}">x</text><text class="natural-chart__label" x="${toX(0)}" y="${top - 8}" text-anchor="middle">y</text>`;
  document.querySelector("#natural-x-value").textContent = fixed(x, 2);
  document.querySelector("#natural-point").innerHTML = math(String.raw`(${fixed(x, 2)}, ${fixed(Math.exp(x), 4)})`);
  document.querySelector("#natural-point-note").textContent = x === 0 ? "At x = 0, e⁰ = 1 exactly." : x < 0 ? "The output is positive and less than 1." : "The output is greater than 1 and keeps increasing.";
}
document.querySelector("#natural-x").addEventListener("input", drawNaturalGraph);
drawNaturalGraph();

const frequencyOptions = [{ value: "1", name: "Annually" }, { value: "4", name: "Quarterly" }, { value: "12", name: "Monthly" }, { value: "365", name: "Daily" }, { value: "continuous", name: "Continuously" }];
function renderContinuousInterest() {
  const principal = Number(document.querySelector("#continuous-principal").value);
  const percent = Number(document.querySelector("#continuous-rate").value);
  const rate = percent / 100;
  const years = Number(document.querySelector("#continuous-years").value);
  const selected = document.querySelector("#continuous-frequency").value;
  const continuous = principal * Math.exp(rate * years);
  const balance = (frequency) => frequency === "continuous" ? continuous : principal * Math.exp(Number(frequency) * years * Math.log1p(rate / Number(frequency)));
  const current = balance(selected);
  document.querySelector("#continuous-principal-value").textContent = money(principal);
  document.querySelector("#continuous-rate-value").textContent = `${fixed(percent, 2)}%`;
  document.querySelector("#continuous-years-value").textContent = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#continuous-label").textContent = `${frequencyOptions.find((item) => item.value === selected).name} balance`;
  document.querySelector("#continuous-balance").textContent = money(current);
  document.querySelector("#continuous-substitution").innerHTML = selected === "continuous"
    ? math(String.raw`A = ${principal}e^{${fixed(rate * years, 4)}}`)
    : math(String.raw`A = ${principal}(1 + ${frac(fixed(rate, 4), selected)})^{${Number(selected) * years}}`);
  document.querySelector("#continuous-bars").innerHTML = frequencyOptions.map((item) => `<div class="natural-interest-bars__row${item.value === selected ? " is-current" : ""}"><span>${item.name}</span><div class="natural-interest-bars__track"><i style="width:${(100 * (balance(item.value) - principal) / (continuous - principal)).toFixed(3)}%"></i></div><strong>${money(balance(item.value))}</strong></div>`).join("");
  document.querySelector("#continuous-difference").textContent = selected === "continuous"
    ? "This is the limiting balance for positive interest. No finite compounding frequency exceeds it."
    : `Continuously compounding would add ${money(continuous - current)} more over the same time.`;
}
["continuous-principal", "continuous-rate", "continuous-years"].forEach((id) => document.querySelector(`#${id}`).addEventListener("input", renderContinuousInterest));
document.querySelector("#continuous-frequency").addEventListener("change", renderContinuousInterest);
renderContinuousInterest();

document.querySelector("#composition-check").addEventListener("click", () => {
  const value = document.querySelector("#composition-inner").dataset.value;
  if(value === "") {setFeedback(document.querySelector("#composition-feedback"), false, "Choose an inner function before checking.");return;}
  const correct = value === "1";
  setFeedback(document.querySelector("#composition-feedback"), correct, correct
    ? "Correct. First compute 3x − 2; then use that result as the exponent in eᵘ."
    : "The inner function is the expression inside the exponent: 3x − 2. The outer function raises e to its input.");
});

let symmetryA = 2;
function drawSymmetry() {
  const svg = document.querySelector("#symmetry-chart");
  const left = 34; const right = 474; const top = 17; const bottom = 252;
  const toX = (x) => left + (x + 2.25) * (right - left) / 4.5;
  const yMax = 10 * symmetryA;
  const toY = (y) => bottom - y * (bottom - top) / yMax;
  const x = Number(document.querySelector("#symmetry-x").value);
  const value = symmetryA * (Math.exp(x) + Math.exp(-x));
  let path = "";
  for (let index = 0; index <= 240; index += 1) {
    const input = -2.25 + index * 4.5 / 240;
    path += `${index ? "L" : "M"}${toX(input).toFixed(2)} ${toY(symmetryA * (Math.exp(input) + Math.exp(-input))).toFixed(2)}`;
  }
  svg.innerHTML = `${[-2, -1, 0, 1, 2].map((tick) => `<line class="natural-chart__grid" x1="${toX(tick)}" x2="${toX(tick)}" y1="${top}" y2="${bottom}"/><text class="natural-chart__label" x="${toX(tick)}" y="${bottom + 20}" text-anchor="middle">${fixed(tick)}</text>`).join("")}<line class="natural-chart__axis" x1="${toX(0)}" x2="${toX(0)}" y1="${top}" y2="${bottom}"/><line class="natural-chart__axis" x1="${left}" x2="${right}" y1="${bottom}" y2="${bottom}"/><path class="natural-symmetry__curve" d="${path}"/><line class="natural-symmetry__pair" x1="${toX(-x)}" x2="${toX(x)}" y1="${toY(value)}" y2="${toY(value)}"/><circle class="natural-symmetry__point" cx="${toX(-x)}" cy="${toY(value)}" r="7"/><circle class="natural-symmetry__point" cx="${toX(x)}" cy="${toY(value)}" r="7"/><circle class="natural-symmetry__minimum" cx="${toX(0)}" cy="${toY(2 * symmetryA)}" r="6"/>`;
  document.querySelector("#symmetry-distance").textContent = fixed(x, 2);
  document.querySelector("#symmetry-reading").innerHTML = `<strong>${math(String.raw`h(-${fixed(x, 2)}) = h(${fixed(x, 2)}) \approx  ${fixed(value, 4)}`)}</strong><span>Both points have the same height. Minimum: ${symmetryA === Math.PI ? math(String.raw`2\pi `) : fixed(2 * symmetryA)} at ${math(String.raw`x = 0`)}.</span>`;
}
document.querySelector("#symmetry-a").addEventListener("change", () => {
  symmetryA = [2,1,Math.PI][Number(document.querySelector("#symmetry-a").dataset.value)];
  drawSymmetry();
});
document.querySelector("#symmetry-x").addEventListener("input", drawSymmetry);
drawSymmetry();

const checkExplanations = {
  limit: "Every finite value is below e; the limit is reached only as m grows without bound.",
  graph: "Since eˣ is always positive, its left tail approaches 0 from above.",
  interest: "Use Peʳᵗ with r = 0.04 and t = 3, so rt = 0.12.",
  minimum: "The expression is even, and eˣ + e⁻ˣ is at least 2, with equality at x = 0.",
};
Object.entries(checkExplanations).forEach(([name, explanation]) => {
  document.querySelector(`#check-${name}-button`).addEventListener("click", () => {
    const picker = document.querySelector(`#check-${name}`);
    const answer = picker.dataset.value ?? picker.value;
    if(answer === "") {setFeedback(document.querySelector(`#feedback-${name}`), false, "Choose an answer before checking.");return;}
    const correct = answer === (formulaChoices[`check-${name}`] ? "1" : "correct");
    setFeedback(document.querySelector(`#feedback-${name}`), correct, `${correct ? "Correct. " : "Try again. "}${explanation}`);
  });
});

Object.entries(formulaChoices).forEach(([id,items])=>initMathDropdown(id,items,math));
initLessonChrome();
