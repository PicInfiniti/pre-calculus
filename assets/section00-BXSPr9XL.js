import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e,n as t,o as n,r,s as i}from"./shared-DtWqxIaS.js";var a=document.querySelector(`#app`),o=[{id:`natural`,category:`numbers`,symbol:`ℕ`,title:`Natural numbers`,read:`the natural numbers`,meaning:`The counting numbers. In this course we use ℕ = {1, 2, 3, …}.`,example:`7 ∈ ℕ`,note:`Some books include 0 in ℕ. Always check the definition being used.`},{id:`whole`,category:`numbers`,symbol:`W or ℕ₀`,title:`Whole numbers`,read:`the whole numbers`,meaning:`The nonnegative integers: zero together with the counting numbers. The symbol W is common but not universal.`,example:`W = {0, 1, 2, 3, …}`},{id:`integers`,category:`numbers`,symbol:`ℤ`,title:`Integers`,read:`the integers`,meaning:`Whole numbers, their negatives, and zero.`,example:`ℤ = {…, −2, −1, 0, 1, 2, …}`},{id:`rational`,category:`numbers`,symbol:`ℚ`,title:`Rational numbers`,read:`the rational numbers`,meaning:`Numbers that can be written as a fraction p/q of integers, where q ≠ 0. Terminating and repeating decimals are rational.`,example:`−3/4, 5, and 0.125 belong to ℚ`},{id:`real`,category:`numbers`,symbol:`ℝ`,title:`Real numbers`,read:`the real numbers`,meaning:`Every number represented on the number line: rational and irrational numbers together.`,example:`√2 ∈ ℝ and π ∈ ℝ`},{id:`irrational`,category:`numbers`,symbol:`ℝ ∖ ℚ`,title:`Irrational numbers`,read:`real numbers except rationals`,meaning:`Real numbers that cannot be written as a ratio of integers. Their decimals neither terminate nor repeat.`,example:`√2, π ∈ ℝ ∖ ℚ`},{id:`complex`,category:`numbers`,symbol:`ℂ`,title:`Complex numbers`,read:`the complex numbers`,meaning:`Numbers of the form a + bi, where a and b are real and i² = −1. Every real number is also complex.`,example:`3 − 2i ∈ ℂ`},{id:`set`,category:`sets`,symbol:`{…}`,title:`Set braces`,read:`the set containing`,meaning:`Curly braces collect distinct objects into a set. Order and repetition do not change the set.`,example:`A = {−1, 0, 2}`},{id:`membership`,category:`sets`,symbol:`∈  ∉`,title:`Membership`,read:`is in; is not in`,meaning:`Use ∈ when an object belongs to a set and ∉ when it does not.`,example:`2 ∈ {1, 2, 3}, but 5 ∉ {1, 2, 3}`},{id:`subset`,category:`sets`,symbol:`⊂  ⊆`,title:`Subsets`,read:`is a proper subset of; is a subset of`,meaning:`A ⊆ B means every element of A belongs to B and equality is allowed. A ⊂ B commonly means A is strictly smaller than B.`,example:`{1, 2} ⊂ {1, 2, 3} and A ⊆ A`,note:`The symbol ⊂ is not used consistently in every book. Follow the definition given by your course or text.`},{id:`empty`,category:`sets`,symbol:`∅`,title:`Empty set`,read:`the empty set`,meaning:`A set with no elements. It is not the same as the number 0.`,example:`{x ∈ ℝ : x² = −1} = ∅`},{id:`union`,category:`sets`,symbol:`A ∪ B`,title:`Union`,read:`A union B`,meaning:`Everything in A or B, including elements shared by both sets.`,example:`{1, 2} ∪ {2, 3} = {1, 2, 3}`},{id:`intersection`,category:`sets`,symbol:`A ∩ B`,title:`Intersection`,read:`A intersect B`,meaning:`Only the elements common to both A and B.`,example:`{1, 2} ∩ {2, 3} = {2}`},{id:`difference`,category:`sets`,symbol:`A ∖ B, A − B`,title:`Set difference`,read:`A minus B`,meaning:`Elements in A after removing everything that is also in B. Both A ∖ B and A − B are commonly used.`,example:`{1, 2, 3} ∖ {2, 3, 4} = {1}`},{id:`interval`,category:`sets`,symbol:`[a, b)`,title:`Interval notation`,read:`from a through b`,meaning:`A square bracket includes an endpoint; a parenthesis excludes it. Infinity always uses a parenthesis.`,example:`[−2, 5) means −2 ≤ x < 5`},{id:`builder`,category:`sets`,symbol:`{x : …}`,title:`Set-builder notation`,read:`the set of x such that`,meaning:`Describes a set by a condition its elements must satisfy. A vertical bar may replace the colon.`,example:`{x ∈ ℝ : x ≥ −2} = [−2, ∞)`},{id:`function-names`,category:`functions`,symbol:`f, g`,title:`Function names`,read:`f and g`,meaning:`Lowercase letters such as f and g name functions. They are rules, not variables being multiplied.`,example:`f(x) = x² and g(x) = 2x + 1`},{id:`function-value`,category:`functions`,symbol:`f(x)`,title:`Function value`,read:`f of x`,meaning:`The output of function f when its input is x. The parentheses do not mean multiplication.`,example:`If f(x) = x², then f(−3) = 9`},{id:`domain`,category:`functions`,symbol:`D<sub>f</sub>`,title:`Domain of f`,read:`D sub f`,meaning:`The set of every allowed input for f. We write D<sub>f</sub> when naming that set directly.`,example:`For f(x) = √x, D<sub>f</sub> = [0, ∞)`},{id:`range`,category:`functions`,symbol:`R<sub>f</sub>`,title:`Range of f`,read:`R sub f`,meaning:`The set of outputs the function f actually produces.`,example:`For f(x) = x², R<sub>f</sub> = [0, ∞)`},{id:`mapping`,category:`functions`,symbol:`f: A → B`,title:`Function mapping`,read:`f maps A to B`,meaning:`Function f accepts inputs from set A and sends them to outputs in set B.`,example:`f: ℝ → ℝ,  f(x) = 2x − 1`},{id:`inverse-image`,category:`functions`,symbol:`f(x) = k`,title:`Solving a function equation`,read:`f of x equals k`,meaning:`Find every input x whose output is k. On a graph, look where the curve crosses y = k.`,example:`If f(x) = x², then f(x) = 9 gives x = ±3`},{id:`variables`,category:`names`,symbol:`x, y, z`,title:`Variables`,read:`x, y, and z`,meaning:`Lowercase x, y, and z usually represent quantities allowed to vary or unknown values to find.`,example:`2x + 3y = 12`},{id:`constants`,category:`names`,symbol:`a, b, c`,title:`Constants and parameters`,read:`a, b, and c`,meaning:`Lowercase letters near the beginning of the alphabet often stand for fixed numbers or adjustable parameters.`,example:`In y = ax² + bx + c, a, b, and c determine the parabola`},{id:`subscripts`,category:`names`,symbol:`x₁, x₂`,title:`Subscripts`,read:`x sub one; x sub two`,meaning:`A subscript labels related quantities. It is an index, not multiplication and not an exponent.`,example:`P₁ = (x₁, y₁),  P₂ = (x₂, y₂)`},{id:`uppercase-sets`,category:`names`,symbol:`A, B, C`,title:`Names for sets`,read:`set A, set B, set C`,meaning:`Uppercase letters commonly name sets. Always use the surrounding context to distinguish a set from a point.`,example:`A = {1, 3, 5}`},{id:`points`,category:`names`,symbol:`P(x, y)`,title:`Coordinate points`,read:`point P at x comma y`,meaning:`An uppercase letter names a point; the ordered pair gives its horizontal and vertical coordinates.`,example:`P(−2, 5) is 2 units left and 5 units up`},{id:`equal`,category:`algebra`,symbol:`=  ≠  ≈`,title:`Equality symbols`,read:`equals; does not equal; approximately equals`,meaning:`Use = for exactly the same value, ≠ for different values, and ≈ only after rounding or estimating.`,example:`√2 ≈ 1.414, but √2 ≠ 1.414`},{id:`multiplication`,category:`algebra`,symbol:`ab, a · b`,title:`Multiplication`,read:`a times b`,meaning:`Juxtaposition, a centered dot, and parentheses can all indicate multiplication. The × sign is used less often beside the variable x because they look alike.`,example:`3x = 3 · x = 3(x)`},{id:`division`,category:`algebra`,symbol:`a/b`,title:`Division and fractions`,read:`a divided by b; a over b`,meaning:`A fraction bar means division and groups the entire numerator and denominator. The denominator cannot equal zero.`,example:`(x + 1)/(x − 2),  x ≠ 2`},{id:`parentheses`,category:`algebra`,symbol:`(…)`,title:`Parentheses`,read:`the quantity`,meaning:`Parentheses may group operations, hold a function input, or form an ordered pair. Context tells you which job they are doing.`,example:`3(x + 1),  f(x),  and P(2, −1)`},{id:`inequality`,category:`algebra`,symbol:`<  ≤  >  ≥`,title:`Inequalities`,read:`less than; at most; greater than; at least`,meaning:`The bar in ≤ or ≥ includes equality. The open symbols < and > do not.`,example:`x ≥ 3 means x is 3 or larger`},{id:`absolute`,category:`algebra`,symbol:`|x|`,title:`Absolute value`,read:`the absolute value of x`,meaning:`Distance from x to 0, so the result is never negative.`,example:`|−5| = 5`},{id:`radical`,category:`algebra`,symbol:`√x`,title:`Square root`,read:`the principal square root of x`,meaning:`The nonnegative number whose square is x. For real-number work, x must be at least 0.`,example:`√25 = 5, not ±5; solving u² = 25 gives u = ±5`},{id:`power`,category:`algebra`,symbol:`xⁿ`,title:`Exponent`,read:`x to the nth power`,meaning:`The superscript tells how a base is powered. It is different from a subscript label.`,example:`x³ = x · x · x`},{id:`plus-minus`,category:`algebra`,symbol:`±`,title:`Plus or minus`,read:`plus or minus`,meaning:`Represents two values or two cases, one using + and one using −.`,example:`x² = 16 ⟹ x = ±4`},{id:`infinity`,category:`algebra`,symbol:`∞`,title:`Infinity`,read:`infinity`,meaning:`Describes unbounded behavior; it is not a real number or an endpoint that can be included.`,example:`x > 2 is written (2, ∞)`},{id:`delta`,category:`algebra`,symbol:`Δ`,title:`Change`,read:`delta`,meaning:`Uppercase Greek delta commonly means final value minus initial value.`,example:`Δy = y₂ − y₁`},{id:`implies`,category:`algebra`,symbol:`⟹`,title:`Implies`,read:`implies; therefore`,meaning:`Shows that the statement on the right follows from the statement on the left.`,example:`x = 3 ⟹ x² = 9`},{id:`ordered-pair`,category:`coordinates`,symbol:`(x, y)`,title:`Ordered pair`,read:`x comma y`,meaning:`The first coordinate is horizontal and the second is vertical. Reversing them usually gives a different point.`,example:`(2, −3) ≠ (−3, 2)`},{id:`point-add`,category:`coordinates`,symbol:`P + Q`,title:`Coordinate addition`,read:`P plus Q`,meaning:`When points are treated as position vectors, add matching coordinates.`,example:`(2, −1) + (3, 4) = (5, 3)`,note:`Geometrically, this is vector addition. We use the coordinate shorthand when the context permits it.`},{id:`point-subtract`,category:`coordinates`,symbol:`P − Q`,title:`Coordinate subtraction`,read:`P minus Q`,meaning:`Subtract the x-coordinates and y-coordinates in the same order. The result is the displacement from Q to P.`,example:`(2, −1) − (3, 4) = (−1, −5)`},{id:`scalar`,category:`coordinates`,symbol:`kP`,title:`Scalar multiplication`,read:`k times P`,meaning:`Multiply both coordinates by the same scalar k. This stretches, shrinks, or reverses the position vector.`,example:`−2(3, −1) = (−6, 2)`}],s={all:`All notation`,numbers:`Number sets`,sets:`Sets & intervals`,functions:`Functions`,names:`Names & labels`,algebra:`Algebra symbols`,coordinates:`Coordinates`};a.innerHTML=`
  ${n(`0.0`)}
  <main>
    <section class="lesson-hero lesson-hero--notation">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 00</span> Mathematical notation</p>
        <h1>Learn the language.<br><em>Then do the math.</em></h1>
        <p class="lesson-hero__lede">Symbols are compressed sentences. This guide teaches how to read, say, and use the notation that appears throughout precalculus.</p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#symbol-library">Browse the symbols</a>
          <span>Keep this page open while you study</span>
        </div>
      </div>
      <div class="notation-hero-art" aria-hidden="true" data-reveal>
        <div class="notation-orbit notation-orbit--one"><span>ℝ</span><span>f(x)</span><span>∪</span></div>
        <div class="notation-orbit notation-orbit--two"><span><span class="math-indexed">D<sub>f</sub></span></span><span>(x, y)</span><span>≤</span></div>
        <div class="notation-orbit__center"><strong>?</strong><small>click · read · use</small></div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Guide objectives" data-reveal>
      <p>Use this guide to</p>
      <ol>
        <li><span>01</span>Recognize standard number systems</li>
        <li><span>02</span>Read sets, intervals, and function notation aloud</li>
        <li><span>03</span>Distinguish variables, labels, and subscripts</li>
        <li><span>04</span>Calculate with two-dimensional coordinates</li>
      </ol>
    </section>

    <section class="lesson-section" id="symbol-library">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Clickable notation list</p>
        <h2>Every symbol has<br>a job and a voice.</h2>
        <p>Choose any entry to see what it means, how to read it aloud, and a precalculus example. Use search when a symbol appears unfamiliar.</p>
      </div>

      <div class="notation-explorer" data-reveal>
        <div class="notation-explorer__index">
          <label class="notation-search" for="notation-search"><span>Find a symbol or idea</span><input id="notation-search" type="search" placeholder="Try domain, ∩, or subscript" /></label>
          <div class="notation-categories" id="notation-categories" aria-label="Notation categories"></div>
          <div class="notation-list" id="notation-list"></div>
          <p class="notation-empty" id="notation-empty" hidden>No notation matches that search.</p>
        </div>
        <article class="notation-detail" id="notation-detail" aria-live="polite"></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="number-systems">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Number-system ladder</p>
        <h2>One number can belong<br>to several sets.</h2>
        <p>The number systems nest inside one another: ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ. Choose a value and watch every set that contains it light up.</p>
      </div>
      <div class="number-lab" data-reveal>
        <div class="number-ladder" aria-label="Nested real-number systems">
          <article data-number-set="R"><span>ℝ</span><strong>Real numbers</strong><small>everything on the number line</small></article>
          <article data-number-set="Q"><span>ℚ</span><strong>Rational numbers</strong><small>fractions of integers</small></article>
          <article data-number-set="Z"><span>ℤ</span><strong>Integers</strong><small>…, −2, −1, 0, 1, 2, …</small></article>
          <article data-number-set="N"><span>ℕ</span><strong>Natural numbers</strong><small>1, 2, 3, … in this course</small></article>
          <aside id="irrational-status"><span>ℝ ∖ ℚ</span><strong>Irrational</strong><small>real, but not rational</small></aside>
        </div>
        <div class="number-lab__controls">
          <p class="tool-label">Choose a number</p>
          <div class="number-choices">
            <button type="button" class="is-active" data-number-case="five">5</button>
            <button type="button" data-number-case="zero">0</button>
            <button type="button" data-number-case="negative">−3</button>
            <button type="button" data-number-case="fraction">2/3</button>
            <button type="button" data-number-case="decimal">0.125</button>
            <button type="button" data-number-case="root">√2</button>
            <button type="button" data-number-case="pi">π</button>
          </div>
          <div class="number-verdict" id="number-verdict" aria-live="polite"></div>
          <p class="notation-caution"><strong>Convention alert:</strong> some courses define ℕ to include 0. Here ℕ begins at 1; zero belongs to ℤ, ℚ, and ℝ.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="set-operations">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Set-operation studio</p>
        <h2>Combine, overlap,<br>or remove.</h2>
        <p>Union collects, intersection keeps the overlap, and difference removes. Order matters for difference but not for union or intersection.</p>
      </div>
      <div class="set-lab" data-reveal>
        <div class="set-lab__visual">
          <svg id="set-diagram" viewBox="0 0 600 420" role="img" aria-label="Venn diagram for the selected set operation"></svg>
        </div>
        <div class="set-lab__controls">
          <p class="tool-label">A = {1, 2, 3} · B = {3, 4}</p>
          <div class="set-operation-buttons">
            <button type="button" class="is-active" data-set-operation="union">A ∪ B</button>
            <button type="button" data-set-operation="intersection">A ∩ B</button>
            <button type="button" data-set-operation="a-minus-b">A ∖ B</button>
            <button type="button" data-set-operation="b-minus-a">B ∖ A</button>
          </div>
          <div class="set-result" id="set-result" aria-live="polite"></div>
          <dl class="set-laws">
            <div><dt>Union and intersection</dt><dd>A ∪ B = B ∪ A · A ∩ B = B ∩ A</dd></div>
            <div><dt>Difference</dt><dd>A ∖ B usually differs from B ∖ A</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="interval-notation">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>04</span> Interval studio</p>
        <h2>Brackets tell you<br>whether the edge stays.</h2>
        <p>Move each finite endpoint, decide whether it belongs to the set, and compare the same interval as a picture, an inequality, and set-builder notation.</p>
      </div>
      <div class="interval-lab" data-reveal>
        <div class="interval-lab__visual">
          <div class="interval-lab__visual-topline"><span>Interactive number line</span><small>Drag the green endpoints</small></div>
          <svg id="interval-line" viewBox="0 0 760 360" role="img" aria-label="A draggable number line showing the selected interval"></svg>
          <div class="interval-key" aria-label="Endpoint key"><span><i class="is-closed"></i>Included endpoint</span><span><i class="is-open"></i>Excluded endpoint</span></div>
        </div>
        <div class="interval-lab__controls">
          <p class="tool-label">Choose the interval shape</p>
          <div class="interval-mode-buttons">
            <button type="button" class="is-active" data-interval-mode="bounded">Between two numbers</button>
            <button type="button" data-interval-mode="left-ray">Toward −∞</button>
            <button type="button" data-interval-mode="right-ray">Toward ∞</button>
          </div>
          <div class="interval-endpoints">
            <fieldset id="interval-left-field"><legend>Left endpoint</legend><label><span>Value</span><input id="interval-left" type="number" min="-9" max="8" value="-2" /></label><button type="button" class="is-closed" id="interval-left-toggle" aria-pressed="true"><strong>Included</strong><small>square bracket [</small></button></fieldset>
            <fieldset id="interval-right-field"><legend>Right endpoint</legend><label><span>Value</span><input id="interval-right" type="number" min="-8" max="9" value="5" /></label><button type="button" id="interval-right-toggle" aria-pressed="false"><strong>Excluded</strong><small>parenthesis )</small></button></fieldset>
          </div>
          <div class="interval-result" id="interval-result" aria-live="polite"></div>
          <p class="interval-rule"><strong>Infinity is never an endpoint.</strong> Always pair −∞ or ∞ with a parenthesis, never a square bracket.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="coordinate-arithmetic">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Coordinate arithmetic</p>
        <h2>Match x with x.<br>Match y with y.</h2>
        <p>In two dimensions, coordinate arithmetic works component by component. Geometrically, we are treating each point as its position vector from the origin.</p>
      </div>
      <div class="notation-coordinate-lab" data-reveal>
        <div class="notation-coordinate-lab__graph"><svg id="coordinate-chart" viewBox="0 0 540 540" role="img" aria-label="Coordinate vectors and their calculated result"></svg></div>
        <div class="notation-coordinate-lab__controls">
          <p class="tool-label">Two-dimensional calculator</p>
          <div class="coordinate-inputs">
            <fieldset><legend>P = (x₁, y₁)</legend><label>x₁<input id="point-p-x" type="number" min="-5" max="5" value="2" /></label><label>y₁<input id="point-p-y" type="number" min="-5" max="5" value="-1" /></label></fieldset>
            <fieldset><legend>Q = (x₂, y₂)</legend><label>x₂<input id="point-q-x" type="number" min="-5" max="5" value="3" /></label><label>y₂<input id="point-q-y" type="number" min="-5" max="5" value="4" /></label></fieldset>
          </div>
          <label class="scalar-input" for="point-scalar">Scalar k <input id="point-scalar" type="number" min="-3" max="3" step="0.5" value="-2" /></label>
          <div class="coordinate-operations">
            <button type="button" class="is-active" data-coordinate-operation="add">P + Q</button>
            <button type="button" data-coordinate-operation="subtract">P − Q</button>
            <button type="button" data-coordinate-operation="scale">kP</button>
          </div>
          <div class="coordinate-result" id="coordinate-result" aria-live="polite"></div>
          <div class="coordinate-legend"><span><i class="is-p"></i>P</span><span><i class="is-q"></i>Q</span><span><i class="is-result"></i>Result</span></div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--notation" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Notation check</p>
        <h2>Can you read it<br>before you solve it?</h2>
        <p>Translate each symbol into words first. Once the notation is clear, the calculation becomes much easier.</p>
      </div>
      <div class="notation-check-grid">
        <article class="check-card" data-reveal><span>Number systems</span><h3>Smallest standard set containing −7</h3><select id="check-number"><option value="">Choose…</option><option value="a">ℕ</option><option value="correct">ℤ</option><option value="b">ℝ ∖ ℚ</option></select><button type="button" id="check-number-button">Check set</button><p id="feedback-number" class="answer-feedback" aria-live="polite"></p></article>
        <article class="check-card" data-reveal><span>Functions</span><h3>What does D<sub>f</sub> name?</h3><select id="check-domain-symbol"><option value="">Choose…</option><option value="a">The derivative of f</option><option value="correct">The domain of f</option><option value="b">The range of f</option></select><button type="button" id="check-domain-button">Check meaning</button><p id="feedback-domain-symbol" class="answer-feedback" aria-live="polite"></p></article>
        <article class="check-card" data-reveal><span>Sets</span><h3>A ∩ B keeps which elements?</h3><select id="check-intersection"><option value="">Choose…</option><option value="a">Everything in either set</option><option value="correct">Only elements shared by both</option><option value="b">Only elements outside both</option></select><button type="button" id="check-intersection-button">Check operation</button><p id="feedback-intersection" class="answer-feedback" aria-live="polite"></p></article>
        <article class="check-card" data-reveal><span>Coordinates</span><h3>(3, −1) − (−2, 4)</h3><div class="notation-coordinate-answer"><input id="check-coordinate-x" type="number" aria-label="x-coordinate" /><span aria-hidden="true">,</span><input id="check-coordinate-y" type="number" aria-label="y-coordinate" /></div><button type="button" id="check-coordinate-button">Check coordinates</button><p id="feedback-coordinate" class="answer-feedback" aria-live="polite"></p></article>
      </div>
      <aside class="ready-banner ready-banner--notation" data-reveal><span>You are notation-ready when</span><p>You can say a symbol aloud, explain its job, and use it correctly in a small example.</p><a href="#symbol-library">Open the symbol list <span aria-hidden="true">↑</span></a></aside>
    </section>
  </main>
  ${e({previous:null,next:{href:`pages/sections/9-1.html`,label:`Section 9.1 · Two-variable systems`}})}
`;var c=document.querySelector(`#notation-list`),l=document.querySelector(`#notation-detail`),u=document.querySelector(`#notation-search`),d=`all`,f=`real`;function p(){document.querySelector(`#notation-categories`).innerHTML=Object.entries(s).map(([e,t])=>`<button type="button" class="${e===d?`is-active`:``}" data-notation-category="${e}">${t}</button>`).join(``),document.querySelectorAll(`[data-notation-category]`).forEach(e=>e.addEventListener(`click`,()=>{d=e.dataset.notationCategory,p(),h()}))}function m(e){let t=o.find(t=>t.id===e)||o[0];f=t.id,document.querySelectorAll(`[data-notation-id]`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.notationId===t.id)),l.innerHTML=`
    <p class="tool-label">${s[t.category]}</p>
    <div class="notation-detail__symbol"><span class="math-indexed">${t.symbol}</span></div>
    <h3>${t.title}</h3>
    <div class="notation-detail__read"><span>Read it aloud</span><strong>“${t.read}”</strong></div>
    <p>${t.meaning}</p>
    <div class="notation-detail__example"><span>Example</span><strong>${t.example}</strong></div>
    ${t.note?`<aside>${t.note}</aside>`:``}
  `}function h(){let e=u.value.trim().toLowerCase(),t=o.filter(t=>{let n=d===`all`||t.category===d,r=`${t.symbol} ${t.title} ${t.read} ${t.meaning}`.toLowerCase();return n&&r.includes(e)});c.innerHTML=t.map(e=>`<button type="button" class="${e.id===f?`is-active`:``}" data-notation-id="${e.id}"><span><span class="math-indexed">${e.symbol}</span></span><span><strong>${e.title}</strong><small>${e.read}</small></span></button>`).join(``),document.querySelector(`#notation-empty`).hidden=t.length>0,document.querySelectorAll(`[data-notation-id]`).forEach(e=>e.addEventListener(`click`,()=>m(e.dataset.notationId))),t.length&&!t.some(e=>e.id===f)&&m(t[0].id)}u.addEventListener(`input`,h),p(),h(),m(f);var g={five:{value:`5`,sets:[`N`,`Z`,`Q`,`R`],irrational:!1,text:`5 is a counting number, so it also belongs to every larger nested system.`},zero:{value:`0`,sets:[`Z`,`Q`,`R`],irrational:!1,text:`With our convention, 0 is not natural. It is an integer, 0/1 is rational, and every rational is real.`},negative:{value:`−3`,sets:[`Z`,`Q`,`R`],irrational:!1,text:`Negative integers are not natural, but −3 = −3/1 makes this number rational and therefore real.`},fraction:{value:`2/3`,sets:[`Q`,`R`],irrational:!1,text:`A ratio of integers is rational. It need not be an integer.`},decimal:{value:`0.125`,sets:[`Q`,`R`],irrational:!1,text:`This terminating decimal equals 1/8, so it is rational and real.`},root:{value:`√2`,sets:[`R`],irrational:!0,text:`√2 is real but cannot be written as a ratio of integers, so it lies in ℝ ∖ ℚ.`},pi:{value:`π`,sets:[`R`],irrational:!0,text:`π is an irrational real number: its decimal neither terminates nor repeats.`}};function _(e){let t=g[e];document.querySelectorAll(`[data-number-case]`).forEach(t=>t.classList.toggle(`is-active`,t.dataset.numberCase===e)),document.querySelectorAll(`[data-number-set]`).forEach(e=>e.classList.toggle(`is-active`,t.sets.includes(e.dataset.numberSet))),document.querySelector(`#irrational-status`).classList.toggle(`is-active`,t.irrational);let n=t.sets.map(e=>`${t.value} ∈ ℱ`.replace(`ℱ`,e===`N`?`ℕ`:e===`Z`?`ℤ`:e===`Q`?`ℚ`:`ℝ`));t.irrational&&n.splice(n.length-1,0,`${t.value} ∈ ℝ ∖ ℚ`),document.querySelector(`#number-verdict`).innerHTML=`<span>${n.join(` · `)}</span><strong>${t.text}</strong>`}document.querySelectorAll(`[data-number-case]`).forEach(e=>e.addEventListener(`click`,()=>_(e.dataset.numberCase))),_(`five`);var v={union:{expression:`A ∪ B`,result:`{1, 2, 3, 4}`,explanation:`Collect every element that appears in A or B. Write the shared 3 only once.`},intersection:{expression:`A ∩ B`,result:`{3}`,explanation:`Keep only the overlap: 3 is the one element present in both sets.`},"a-minus-b":{expression:`A ∖ B`,result:`{1, 2}`,explanation:`Start with A, then remove its shared element 3.`},"b-minus-a":{expression:`B ∖ A`,result:`{4}`,explanation:`Start with B, then remove its shared element 3. Difference depends on order.`}};function y(e){return`
    <defs>
      <clipPath id="clip-a"><circle cx="235" cy="210" r="125"/></clipPath>
      <mask id="a-minus-b"><rect width="600" height="420" fill="black"/><circle cx="235" cy="210" r="125" fill="white"/><circle cx="365" cy="210" r="125" fill="black"/></mask>
      <mask id="b-minus-a"><rect width="600" height="420" fill="black"/><circle cx="365" cy="210" r="125" fill="white"/><circle cx="235" cy="210" r="125" fill="black"/></mask>
    </defs>
    ${e===`union`?`<circle cx="235" cy="210" r="125" class="set-fill"/><circle cx="365" cy="210" r="125" class="set-fill"/>`:e===`intersection`?`<circle cx="365" cy="210" r="125" class="set-fill" clip-path="url(#clip-a)"/>`:`<rect x="0" y="0" width="600" height="420" class="set-fill" mask="url(#${e===`a-minus-b`?`a-minus-b`:`b-minus-a`})"/>`}
    <circle cx="235" cy="210" r="125" class="set-outline"/><circle cx="365" cy="210" r="125" class="set-outline"/>
    <text x="155" y="95" class="set-name">A</text><text x="435" y="95" class="set-name">B</text>
    <text x="190" y="215" class="set-elements">1, 2</text><text x="297" y="215" class="set-elements">3</text><text x="400" y="215" class="set-elements">4</text>
  `}function b(e){let t=v[e];document.querySelectorAll(`[data-set-operation]`).forEach(t=>t.classList.toggle(`is-active`,t.dataset.setOperation===e)),document.querySelector(`#set-diagram`).innerHTML=y(e),document.querySelector(`#set-result`).innerHTML=`<span>${t.expression}</span><strong>${t.result}</strong><p>${t.explanation}</p>`}document.querySelectorAll(`[data-set-operation]`).forEach(e=>e.addEventListener(`click`,()=>b(e.dataset.setOperation))),b(`union`);var x={mode:`bounded`,left:-2,right:5,leftClosed:!0,rightClosed:!1},S=document.querySelector(`#interval-line`),C=document.querySelector(`#interval-left`),w=document.querySelector(`#interval-right`),T=document.querySelector(`#interval-left-toggle`),E=document.querySelector(`#interval-right-toggle`),D=e=>70+(e+10)/20*620;function O(e){return e<0?`−${Math.abs(e)}`:String(e)}function k(e,t,n){let r=D(e);return`<circle cx="${r}" cy="180" r="15" class="interval-endpoint ${t?`is-closed`:`is-open`}" data-interval-endpoint="${n}" role="slider" tabindex="0" aria-label="${n} endpoint" aria-valuemin="-9" aria-valuemax="9" aria-valuenow="${e}"/><text x="${r}" y="232" class="interval-endpoint-label">${O(e)}</text>`}function A(){let e=[];for(let t=-10;t<=10;t+=1){let n=D(t);e.push(`<line x1="${n}" y1="${t%2==0?160:168}" x2="${n}" y2="${t%2==0?200:192}" class="interval-tick"/>`),t%2==0&&e.push(`<text x="${n}" y="265" class="interval-tick-label">${O(t)}</text>`)}return e.join(``)}function j(){let e=O(x.left),t=O(x.right);return x.mode===`left-ray`?{interval:`(−∞, ${t}${x.rightClosed?`]`:`)`}`,inequality:`x ${x.rightClosed?`≤`:`<`} ${t}`,builder:`{x ∈ ℝ : x ${x.rightClosed?`≤`:`<`} ${t}}`,words:`All real numbers ${x.rightClosed?`up to and including`:`less than`} ${t}.`}:x.mode===`right-ray`?{interval:`${x.leftClosed?`[`:`(`}${e}, ∞)`,inequality:`x ${x.leftClosed?`≥`:`>`} ${e}`,builder:`{x ∈ ℝ : x ${x.leftClosed?`≥`:`>`} ${e}}`,words:`All real numbers ${x.leftClosed?`from and including`:`greater than`} ${e}.`}:{interval:`${x.leftClosed?`[`:`(`}${e}, ${t}${x.rightClosed?`]`:`)`}`,inequality:`${e} ${x.leftClosed?`≤`:`<`} x ${x.rightClosed?`≤`:`<`} ${t}`,builder:`{x ∈ ℝ : ${e} ${x.leftClosed?`≤`:`<`} x ${x.rightClosed?`≤`:`<`} ${t}}`,words:`All real numbers between ${e} and ${t}; ${x.leftClosed?`include`:`exclude`} ${e} and ${x.rightClosed?`include`:`exclude`} ${t}.`}}function M(){let e=x.mode===`left-ray`,t=x.mode===`right-ray`,n=e?58:D(x.left),r=t?702:D(x.right),i=e?`<path d="M72 164 L48 180 L72 196" class="interval-arrow"/>`:``,a=t?`<path d="M688 164 L712 180 L688 196" class="interval-arrow"/>`:``,o=e?``:k(x.left,x.leftClosed,`left`),s=t?``:k(x.right,x.rightClosed,`right`);S.innerHTML=`
    <line x1="50" y1="180" x2="710" y2="180" class="interval-axis"/>
    ${A()}
    <line x1="${n}" y1="180" x2="${r}" y2="180" class="interval-selected"/>
    ${i}${a}${o}${s}
  `;let c=j();document.querySelector(`#interval-result`).innerHTML=`<span>Interval notation</span><strong>${c.interval}</strong><dl><div><dt>Inequality</dt><dd>${c.inequality}</dd></div><div><dt>Set-builder</dt><dd>${c.builder}</dd></div></dl><p>${c.words}</p>`,document.querySelectorAll(`[data-interval-mode]`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.intervalMode===x.mode)),document.querySelector(`#interval-left-field`).classList.toggle(`is-infinite`,e),document.querySelector(`#interval-right-field`).classList.toggle(`is-infinite`,t),C.disabled=e,T.disabled=e,w.disabled=t,E.disabled=t,T.classList.toggle(`is-closed`,x.leftClosed),T.setAttribute(`aria-pressed`,String(x.leftClosed)),T.querySelector(`strong`).textContent=e?`−∞`:x.leftClosed?`Included`:`Excluded`,T.querySelector(`small`).textContent=e?`always a parenthesis`:x.leftClosed?`square bracket [`:`parenthesis (`,E.classList.toggle(`is-closed`,x.rightClosed),E.setAttribute(`aria-pressed`,String(x.rightClosed)),E.querySelector(`strong`).textContent=t?`∞`:x.rightClosed?`Included`:`Excluded`,E.querySelector(`small`).textContent=t?`always a parenthesis`:x.rightClosed?`square bracket ]`:`parenthesis )`}function N(e,t){let n=Math.max(-9,Math.min(9,Math.round(t)));e===`left`?(x.left=Math.min(n,x.right-1),C.value=x.left):(x.right=Math.max(n,x.left+1),w.value=x.right),M()}document.querySelectorAll(`[data-interval-mode]`).forEach(e=>e.addEventListener(`click`,()=>{x.mode=e.dataset.intervalMode,M()})),C.addEventListener(`input`,()=>N(`left`,Number(C.value))),w.addEventListener(`input`,()=>N(`right`,Number(w.value))),T.addEventListener(`click`,()=>{x.leftClosed=!x.leftClosed,M()}),E.addEventListener(`click`,()=>{x.rightClosed=!x.rightClosed,M()});var P=null;S.addEventListener(`pointerdown`,e=>{let t=e.target.closest(`[data-interval-endpoint]`);t&&(e.preventDefault(),P=t.dataset.intervalEndpoint,S.setPointerCapture(e.pointerId))}),S.addEventListener(`pointermove`,e=>{if(!P)return;let t=S.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*760;N(P,(n-70)/620*20-10)}),S.addEventListener(`pointerup`,()=>{P=null}),S.addEventListener(`pointercancel`,()=>{P=null}),S.addEventListener(`keydown`,e=>{let t=e.target.closest(`[data-interval-endpoint]`);if(!t||![`ArrowLeft`,`ArrowRight`].includes(e.key))return;e.preventDefault();let n=t.dataset.intervalEndpoint;N(n,x[n]+(e.key===`ArrowRight`?1:-1)),S.querySelector(`[data-interval-endpoint="${n}"]`)?.focus()}),M();var F=[`#point-p-x`,`#point-p-y`,`#point-q-x`,`#point-q-y`,`#point-scalar`].map(e=>document.querySelector(e)),I=`add`,L=document.querySelector(`#coordinate-chart`);function R(e){let n=t(e);return n.startsWith(`-`)?`−${n.slice(1)}`:n}function z(e){return 50+(e+16)/32*440}function B(e){return 490-(e+16)/32*440}function V(){let e=[];for(let t=-16;t<=16;t+=2)e.push(`<line x1="${z(t)}" y1="50" x2="${z(t)}" y2="490" class="notation-coordinate-grid-line"/>`),e.push(`<line x1="50" y1="${B(t)}" x2="490" y2="${B(t)}" class="notation-coordinate-grid-line"/>`);return e.push(`<line x1="50" y1="${B(0)}" x2="490" y2="${B(0)}" class="notation-coordinate-axis"/><line x1="${z(0)}" y1="50" x2="${z(0)}" y2="490" class="notation-coordinate-axis"/>`),e.join(``)}function H(e,t,n){return`<line x1="${z(0)}" y1="${B(0)}" x2="${z(e.x)}" y2="${B(e.y)}" class="coordinate-vector ${t}"/><circle cx="${z(e.x)}" cy="${B(e.y)}" r="9" class="coordinate-dot ${t}"/><text x="${z(e.x)+12}" y="${B(e.y)-12}" class="coordinate-label">${n}(${R(e.x)}, ${R(e.y)})</text>`}function U(){let[e,t,n,r,i]=F.map(e=>Number(e.value)||0),a={x:e,y:t},o={x:n,y:r},s,c,l;I===`add`?(s={x:e+n,y:t+r},c=`P + Q = (${R(e)} + ${R(n)}, ${R(t)} + ${R(r)}) = (${R(s.x)}, ${R(s.y)})`,l=`Add x to x and y to y.`):I===`subtract`?(s={x:e-n,y:t-r},c=`P − Q = (${R(e)} − (${R(n)}), ${R(t)} − (${R(r)})) = (${R(s.x)}, ${R(s.y)})`,l=`Keep the order: this displacement points from Q toward P.`):(s={x:i*e,y:i*t},c=`${R(i)}P = (${R(i)} · ${R(e)}, ${R(i)} · ${R(t)}) = (${R(s.x)}, ${R(s.y)})`,l=`The same scalar multiplies both coordinates.`),L.innerHTML=`${V()}${H(a,`is-p`,`P`)}${H(o,`is-q`,`Q`)}${H(s,`is-result`,`R`)}`,document.querySelector(`#coordinate-result`).innerHTML=`<span>${I===`add`?`Coordinate addition`:I===`subtract`?`Coordinate subtraction`:`Scalar multiplication`}</span><strong>${c}</strong><p>${l}</p>`}F.forEach(e=>e.addEventListener(`input`,U)),document.querySelectorAll(`[data-coordinate-operation]`).forEach(e=>e.addEventListener(`click`,()=>{I=e.dataset.coordinateOperation,document.querySelectorAll(`[data-coordinate-operation]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),U()})),U(),document.querySelector(`#check-number-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-number`).value===`correct`;i(document.querySelector(`#feedback-number`),e,e?`Correct. −7 is an integer; it is also rational and real, but ℤ is the smallest listed system.`:`Negative whole numbers belong to the integers. Choose the smallest set that contains the number.`)}),document.querySelector(`#check-domain-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-domain-symbol`).value===`correct`;i(document.querySelector(`#feedback-domain-symbol`),e,e?`Correct. D sub f names the set of allowed inputs for f.`:`The subscript identifies which function the set belongs to: D means domain.`)}),document.querySelector(`#check-intersection-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-intersection`).value===`correct`;i(document.querySelector(`#feedback-intersection`),e,e?`Correct. Intersection keeps only the overlap.`:`Think of the lens-shaped overlap in a Venn diagram.`)}),document.querySelector(`#check-coordinate-button`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-coordinate-x`).value)===5&&Number(document.querySelector(`#check-coordinate-y`).value)===-5;i(document.querySelector(`#feedback-coordinate`),e,e?`Correct. (3 − (−2), −1 − 4) = (5, −5).`:`Subtract matching coordinates in order. Be careful: 3 − (−2) becomes 3 + 2.`)}),r();