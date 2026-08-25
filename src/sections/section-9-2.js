import "../assets/sass/lesson.sass";
import {
  formatNumber,
  initLessonChrome,
  nearlyEqual,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");

root.innerHTML = `
  ${renderLessonHeader("9.2")}
  <main>
    <section class="lesson-hero lesson-hero--blue">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 9.2</span> Systems in several variables</p>
        <h1>Three equations.<br><em>One shared truth.</em></h1>
        <p class="lesson-hero__lede">
          In three dimensions, each linear equation is a plane. Algebraically, the strategy
          is still familiar: eliminate one variable, solve the smaller system, then climb back.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#plane-lab">Rotate the planes</a>
          <span>About 30 minutes · interactive</span>
        </div>
      </div>
      <div class="plane-hero-art" aria-hidden="true" data-reveal>
        <span class="plane-art plane-art--one"></span>
        <span class="plane-art plane-art--two"></span>
        <span class="plane-art plane-art--three"></span>
        <span class="plane-art__point"></span>
        <div class="plane-art__equation">ax + by + cz = d</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Interpret a three-variable system as planes</li>
        <li><span>02</span>Eliminate the same variable twice</li>
        <li><span>03</span>Back-substitute through triangular form</li>
        <li><span>04</span>Recognize contradictions and free variables</li>
      </ol>
    </section>

    <section class="lesson-section" id="plane-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Think in planes</p>
        <h2>The solution is what<br>all three planes share.</h2>
        <p>Drag the model to rotate it. Switch outcomes and notice what must be common to every plane.</p>
      </div>

      <div class="interactive-shell plane-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>3D plane explorer</p></div>
          <span>Drag to rotate</span>
        </div>
        <div class="plane-lab__body">
          <div class="plane-stage">
            <canvas id="plane-canvas" role="img" aria-label="Interactive three-dimensional model of three planes"></canvas>
            <div class="plane-stage__hint" aria-hidden="true">↔ drag</div>
          </div>
          <div class="plane-controls">
            <div class="plane-presets" aria-label="Plane intersection outcomes">
              <button type="button" class="is-active" data-plane-preset="point"><span class="preset-swatch preset-swatch--point"></span>One shared point</button>
              <button type="button" data-plane-preset="line"><span class="preset-swatch preset-swatch--line"></span>A shared line</button>
              <button type="button" data-plane-preset="none"><span class="preset-swatch preset-swatch--none"></span>No shared point</button>
            </div>
            <div class="plane-result" id="plane-result" aria-live="polite">
              <span>One solution</span>
              <h3>All three planes meet at one point.</h3>
              <p>Algebraically, elimination eventually produces a pivot for x, y, and z.</p>
            </div>
            <div class="plane-key"><span><i></i>Plane 1</span><span><i></i>Plane 2</span><span><i></i>Plane 3</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="elimination-studio">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> The elimination funnel</p>
        <h2>Three variables become two.<br>Then two become one.</h2>
        <p>Choose one variable and eliminate that same variable from two different equation pairs.</p>
      </div>

      <div class="funnel" data-reveal>
        <div class="funnel__stage funnel__stage--three">
          <span>Original system</span>
          <div class="numbered-system">
            <p><i class="eq-number">1</i> 3x + 2y − z = −7</p>
            <p><i class="eq-number">2</i> 6x − y + 3z = −4</p>
            <p><i class="eq-number">3</i> x + 10y − 2z = 2</p>
          </div>
        </div>
        <div class="funnel__arrow"><span>Eliminate z twice</span>↓</div>
        <div class="funnel__stage funnel__stage--two">
          <span>Two-variable system</span>
          <div class="numbered-system">
            <p>3<i class="eq-number">1</i> + <i class="eq-number">2</i> → 15x + 5y = −25</p>
            <p>2<i class="eq-number">1</i> − <i class="eq-number">3</i> → 5x − 6y = −16</p>
          </div>
        </div>
        <div class="funnel__arrow"><span>Simplify and solve</span>↓</div>
        <div class="funnel__stage funnel__stage--one">
          <span>Shared point</span>
          <strong>(x, y, z) = (−2, 1, 3)</strong>
          <p>Verify it in all three original equations.</p>
        </div>
      </div>

      <div class="elimination-rules" data-reveal>
        <article><span>1</span><div><h3>Pick a target</h3><p>Choose the variable with the friendliest coefficients.</p></div></article>
        <article><span>2</span><div><h3>Use two pairs</h3><p>Eliminate that same variable from two different pairs.</p></div></article>
        <article><span>3</span><div><h3>Keep the equations independent</h3><p>Using equivalent pairs can accidentally reproduce the same equation.</p></div></article>
      </div>
    </section>

    <section class="lesson-section" id="problem-c-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Practice the exact move</p>
        <h2>Eliminate z from<br>the practice system.</h2>
        <p>Enter the coefficients of each new two-variable equation. The multipliers are shown; you perform the combination.</p>
      </div>

      <div class="elimination-studio" data-reveal>
        <div class="studio-source">
          <div class="tool-label">Elimination practice</div>
          <div class="numbered-system numbered-system--large">
            <p><i class="eq-number">1</i> 3x − 2y + 9z = 2</p>
            <p><i class="eq-number">2</i> −2x − 5y − 4z = 3</p>
            <p><i class="eq-number">3</i> 5x − 3y + 3z = 15</p>
          </div>
          <p class="studio-tip"><strong>Keep your equation balanced:</strong> every multiplier applies to every term and to the constant.</p>
        </div>
        <div class="studio-combinations">
          <article class="combination-card">
            <span>Replace Equation 3</span>
            <h3>3<i class="eq-number">3</i> − <i class="eq-number">1</i></h3>
            <div class="coefficient-answer">
              <label><span class="sr-only">x coefficient</span><input id="c3x" type="number" />x</label>
              <span>+</span>
              <label><span class="sr-only">y coefficient</span><input id="c3y" type="number" />y</label>
              <span>=</span>
              <label><span class="sr-only">constant</span><input id="c3c" type="number" /></label>
            </div>
            <button type="button" data-check-combination="c3">Check Equation 3</button>
            <p id="feedback-c3" class="answer-feedback" aria-live="polite"></p>
          </article>
          <article class="combination-card">
            <span>Replace Equation 2</span>
            <h3>9<i class="eq-number">2</i> + 4<i class="eq-number">1</i></h3>
            <div class="coefficient-answer">
              <label><span class="sr-only">x coefficient</span><input id="c2x" type="number" />x</label>
              <span>+</span>
              <label><span class="sr-only">y coefficient</span><input id="c2y" type="number" />y</label>
              <span>=</span>
              <label><span class="sr-only">constant</span><input id="c2c" type="number" /></label>
            </div>
            <button type="button" data-check-combination="c2">Check Equation 2</button>
            <p id="feedback-c2" class="answer-feedback" aria-live="polite"></p>
          </article>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="triangular-form">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Climb back up</p>
        <h2>Triangular form is<br>a solved system in disguise.</h2>
        <p>Begin with the equation containing one variable, then substitute upward one row at a time.</p>
      </div>

      <div class="triangle-lab" data-reveal>
        <div class="triangle-system" aria-label="Triangular system">
          <div><span>2x − y + 6z = 5</span><i>three variables</i></div>
          <div><span>y + 4z = 0</span><i>two variables</i></div>
          <div><span>−2z = 1</span><i>one variable</i></div>
        </div>
        <div class="back-substitution">
          <label>Start at the bottom: z = <input id="triangle-z" type="number" step="0.5" /></label>
          <label>Substitute upward: y = <input id="triangle-y" type="number" step="0.5" /></label>
          <label>Finish at the top: x = <input id="triangle-x" type="number" step="0.5" /></label>
          <button type="button" id="check-triangle">Check all three</button>
          <p id="feedback-triangle" class="answer-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="special-cases">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Read the final row</p>
        <h2>A zero row is<br>not automatically bad.</h2>
        <p>The right side determines whether a zero row means freedom or contradiction.</p>
      </div>

      <div class="zero-row-grid" data-reveal>
        <article class="zero-card zero-card--free"><span>0 = 0</span><h3>True for every value</h3><p>The row was redundant. At least one variable may be free, producing infinitely many solutions.</p></article>
        <article class="zero-card zero-card--stop"><span>0 = 7</span><h3>Never true</h3><p>The equations contradict one another. The system has no solution.</p></article>
      </div>

      <div class="parameter-line" data-reveal>
        <div class="parameter-line__copy">
          <div class="tool-label">Free-variable practice</div>
          <div class="numbered-system numbered-system--large">
            <p>5x + y − 2z = 10</p>
            <p>y + 3z = 5</p>
            <p>0 = 0</p>
          </div>
          <label for="classification-d">Classify the system</label>
          <select id="classification-d"><option value="">Choose…</option><option value="none">No solution</option><option value="one">One solution</option><option value="infinite">Infinitely many</option></select>
          <button type="button" id="check-d">Check classification</button>
          <p id="feedback-d" class="answer-feedback" aria-live="polite"></p>
        </div>
        <div class="parameter-line__visual">
          <span>Let z = t</span>
          <label for="parameter-t">Move t <output id="parameter-t-output">0</output></label>
          <input id="parameter-t" type="range" min="-4" max="4" step="0.5" value="0" />
          <div class="solution-triple"><span>x</span><strong id="parameter-x">1</strong><span>y</span><strong id="parameter-y">5</strong><span>z</span><strong id="parameter-z">0</strong></div>
          <div class="verification"><p>5x + y − 2z = <strong id="verify-one">10</strong></p><p>y + 3z = <strong id="verify-two">5</strong></p></div>
          <p>Every t creates another solution: <strong>(x, y, z) = (1 + t, 5 − 3t, t)</strong>.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--blue">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness check</p>
        <h2>Can you explain<br>the whole path?</h2>
      </div>
      <div class="path-check" data-reveal>
        <span>3 equations · 3 variables</span><i>→</i><span>2 equations · 2 variables</span><i>→</i><span>1 equation · 1 variable</span><i>→</i><span>Back-substitute</span>
      </div>
      <aside class="ready-banner ready-banner--blue" data-reveal>
        <span>You are ready when</span>
        <p>You can choose multipliers, preserve every term, interpret a zero row, and write a free-variable answer with a parameter.</p>
        <a href="#problem-c-lab">Retry the elimination studio <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({ previous: { href: "pages/sections/9-1.html", label: "Section 9.1 · Two variables" } })}
`;

class PlaneExplorer {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.yaw = -0.65;
    this.pitch = 0.5;
    this.dragging = false;
    this.lastPointer = null;
    this.preset = "point";
    this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.visible = true;
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement);
    this.bind();
    this.resize();
    if (!this.reduceMotion) this.animate();
  }

  bind() {
    this.canvas.addEventListener("pointerdown", (event) => {
      this.dragging = true;
      this.lastPointer = { x: event.clientX, y: event.clientY };
      this.canvas.setPointerCapture(event.pointerId);
    });
    this.canvas.addEventListener("pointermove", (event) => {
      if (!this.dragging) return;
      const dx = event.clientX - this.lastPointer.x;
      const dy = event.clientY - this.lastPointer.y;
      this.yaw += dx * 0.008;
      this.pitch = Math.max(-1.1, Math.min(1.1, this.pitch + dy * 0.008));
      this.lastPointer = { x: event.clientX, y: event.clientY };
      this.draw();
    });
    this.canvas.addEventListener("pointerup", () => {
      this.dragging = false;
      this.lastPointer = null;
    });
    document.addEventListener("visibilitychange", () => {
      this.visible = !document.hidden;
    });
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const ratio = Math.min(2, window.devicePixelRatio || 1);
    this.width = Math.max(300, rect.width);
    this.height = Math.max(330, rect.height);
    this.canvas.width = this.width * ratio;
    this.canvas.height = this.height * ratio;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.context.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.draw();
  }

  project([x, y, z]) {
    const cosY = Math.cos(this.yaw);
    const sinY = Math.sin(this.yaw);
    const cosP = Math.cos(this.pitch);
    const sinP = Math.sin(this.pitch);
    const rotatedX = x * cosY - z * sinY;
    const depth = x * sinY + z * cosY;
    const rotatedY = y * cosP - depth * sinP;
    const rotatedDepth = y * sinP + depth * cosP;
    const scale = Math.min(this.width, this.height) / 8;
    return {
      x: this.width / 2 + rotatedX * scale,
      y: this.height / 2 - rotatedY * scale,
      depth: rotatedDepth,
    };
  }

  rectangle(center, u, v, color, label) {
    const add = (a, b, c) => a.map((value, index) => value + b[index] * c);
    return {
      color,
      label,
      points: [
        add(add(center, u, -1), v, -1),
        add(add(center, u, 1), v, -1),
        add(add(center, u, 1), v, 1),
        add(add(center, u, -1), v, 1),
      ],
    };
  }

  planes() {
    if (this.preset === "line") {
      return [
        this.rectangle([0, 0, 0], [2.7, 0, 0], [0, 2.7, 0], "rgba(255,107,72,.48)", "P₁"),
        this.rectangle([0, 0, 0], [0, 2.7, 0], [0, 0, 2.7], "rgba(66,184,213,.47)", "P₂"),
        this.rectangle([0, 0, 0], [0, 2.7, 0], [1.9, 0, -1.9], "rgba(255,209,102,.43)", "P₃"),
      ];
    }
    if (this.preset === "none") {
      return [
        this.rectangle([0, 0, -0.8], [2.7, 0, 0], [0, 2.7, 0], "rgba(255,107,72,.52)", "P₁"),
        this.rectangle([0, 0, 0.9], [2.7, 0, 0], [0, 2.7, 0], "rgba(66,184,213,.5)", "P₂"),
        this.rectangle([0, 0, 0], [0, 2.7, 0], [0, 0, 2.7], "rgba(255,209,102,.43)", "P₃"),
      ];
    }
    return [
      this.rectangle([0, 0, 0], [2.7, 0, 0], [0, 2.7, 0], "rgba(255,107,72,.48)", "P₁"),
      this.rectangle([0, 0, 0], [0, 2.7, 0], [0, 0, 2.7], "rgba(66,184,213,.47)", "P₂"),
      this.rectangle([0, 0, 0], [2.7, 0, 0], [0, 0, 2.7], "rgba(255,209,102,.43)", "P₃"),
    ];
  }

  drawLine(start, end, color = "rgba(255,255,255,.35)", width = 1) {
    const a = this.project(start);
    const b = this.project(end);
    this.context.beginPath();
    this.context.moveTo(a.x, a.y);
    this.context.lineTo(b.x, b.y);
    this.context.strokeStyle = color;
    this.context.lineWidth = width;
    this.context.stroke();
  }

  draw() {
    const context = this.context;
    context.clearRect(0, 0, this.width, this.height);
    const gradient = context.createRadialGradient(this.width * 0.5, this.height * 0.45, 10, this.width * 0.5, this.height * 0.5, this.width * 0.6);
    gradient.addColorStop(0, "#12314d");
    gradient.addColorStop(1, "#071d33");
    context.fillStyle = gradient;
    context.fillRect(0, 0, this.width, this.height);

    for (let value = -3; value <= 3; value += 1) {
      this.drawLine([-3, value, 0], [3, value, 0], "rgba(255,255,255,.07)");
      this.drawLine([value, -3, 0], [value, 3, 0], "rgba(255,255,255,.07)");
    }
    this.drawLine([-3.5, 0, 0], [3.5, 0, 0], "rgba(255,255,255,.6)", 1.5);
    this.drawLine([0, -3.5, 0], [0, 3.5, 0], "rgba(255,255,255,.6)", 1.5);
    this.drawLine([0, 0, -3.5], [0, 0, 3.5], "rgba(255,255,255,.6)", 1.5);

    const planes = this.planes().map((plane) => {
      const projected = plane.points.map((point) => this.project(point));
      return { ...plane, projected, depth: projected.reduce((sum, point) => sum + point.depth, 0) / projected.length };
    }).sort((a, b) => a.depth - b.depth);

    planes.forEach((plane) => {
      context.beginPath();
      plane.projected.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
      context.closePath();
      context.fillStyle = plane.color;
      context.fill();
      context.strokeStyle = "rgba(255,255,255,.48)";
      context.lineWidth = 1.25;
      context.stroke();
      const labelPoint = plane.projected[1];
      context.fillStyle = "rgba(255,255,255,.85)";
      context.font = "700 13px Ubuntu, sans-serif";
      context.fillText(plane.label, labelPoint.x + 8, labelPoint.y - 6);
    });

    if (this.preset === "point") {
      const point = this.project([0, 0, 0]);
      context.beginPath();
      context.arc(point.x, point.y, 7, 0, Math.PI * 2);
      context.fillStyle = "#a9df72";
      context.fill();
      context.strokeStyle = "#071d33";
      context.lineWidth = 3;
      context.stroke();
    } else if (this.preset === "line") {
      this.drawLine([0, -3, 0], [0, 3, 0], "#a9df72", 5);
    }
  }

  setPreset(preset) {
    this.preset = preset;
    this.draw();
  }

  animate() {
    if (this.visible && !this.dragging) {
      this.yaw += 0.0012;
      this.draw();
    }
    requestAnimationFrame(() => this.animate());
  }
}

const explorer = new PlaneExplorer(document.querySelector("#plane-canvas"));
const planeCopy = {
  point: ["One solution", "All three planes meet at one point.", "Algebraically, elimination eventually produces a pivot for x, y, and z."],
  line: ["Infinitely many solutions", "All three planes share a line.", "One variable remains free, so every point along the shared line is a solution."],
  none: ["No solution", "There is no point common to all three planes.", "Elimination exposes a contradiction such as 0 = 7."],
};

document.querySelectorAll("[data-plane-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = button.dataset.planePreset;
    explorer.setPreset(preset);
    document.querySelectorAll("[data-plane-preset]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
    const [status, title, detail] = planeCopy[preset];
    document.querySelector("#plane-result").innerHTML = `<span>${status}</span><h3>${title}</h3><p>${detail}</p>`;
  });
});

function checkCombination(prefix, expected) {
  const actual = ["x", "y", "c"].map((suffix) => Number(document.querySelector(`#${prefix}${suffix}`).value));
  const correct = actual.every((value, index) => nearlyEqual(value, expected[index]));
  const feedback = document.querySelector(`#feedback-${prefix}`);
  setFeedback(feedback, correct, correct ? "Correct—the z terms cancel completely." : "Recheck the multiplier on every coefficient and on the right side.");
}

document.querySelector("[data-check-combination='c3']").addEventListener("click", () => checkCombination("c3", [12, -7, 43]));
document.querySelector("[data-check-combination='c2']").addEventListener("click", () => checkCombination("c2", [-6, -53, 35]));

document.querySelector("#check-triangle").addEventListener("click", () => {
  const z = Number(document.querySelector("#triangle-z").value);
  const y = Number(document.querySelector("#triangle-y").value);
  const x = Number(document.querySelector("#triangle-x").value);
  const correct = nearlyEqual(z, -0.5) && nearlyEqual(y, 2) && nearlyEqual(x, 5);
  setFeedback(document.querySelector("#feedback-triangle"), correct, correct ? "Correct: start with z = −1/2, then y = 2, then x = 5." : "Work strictly bottom-up. A wrong z-value will travel into both rows above it.");
});

document.querySelector("#check-d").addEventListener("click", () => {
  const answer = document.querySelector("#classification-d").value;
  setFeedback(document.querySelector("#feedback-d"), answer === "infinite", answer === "infinite" ? "Correct. The zero row adds no restriction, leaving z free." : "The final row says 0 = 0, so it is redundant—not contradictory.");
});

const parameterT = document.querySelector("#parameter-t");
function updateParameterLine() {
  const t = Number(parameterT.value);
  const x = 1 + t;
  const y = 5 - 3 * t;
  const z = t;
  document.querySelector("#parameter-t-output").value = formatNumber(t);
  document.querySelector("#parameter-x").textContent = formatNumber(x);
  document.querySelector("#parameter-y").textContent = formatNumber(y);
  document.querySelector("#parameter-z").textContent = formatNumber(z);
  document.querySelector("#verify-one").textContent = formatNumber(5 * x + y - 2 * z);
  document.querySelector("#verify-two").textContent = formatNumber(y + 3 * z);
}
parameterT.addEventListener("input", updateParameterLine);

updateParameterLine();
initLessonChrome();
