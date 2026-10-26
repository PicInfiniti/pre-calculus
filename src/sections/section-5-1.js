import "../assets/sass/lesson.sass";
import katex from "katex";
import "katex/dist/katex.min.css";
import { renderMathDropdown, initMathDropdown } from "./math-dropdown";
import { initLessonChrome, renderLessonHeader, renderLessonFooter, setFeedback } from "./shared";

const $ = id => document.getElementById(id);
const M = tex => `<span class="laws-math">${katex.renderToString(tex, { throwOnError: true, strict: "ignore" })}</span>`;
const practiceMath = tex => {
  const text=tex.match(/^\\text\{([^{}]*)\}$/);
  return text?`<span class="unit-question-text">${text[1]}</span>`:M(tex);
};
const equation = tex => `<div class="laws-equation">${M(tex)}</div>`;
const fmt = (value, digits = 5) => Number(value.toFixed(digits)).toString();
const tau = 2 * Math.PI;
const intro = (n, topic, title, text) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> ${topic}</p><h2>${title}</h2><p>${text}</p></div>`;
const numberInput = (id, label, value, step = "any") => `<label for="${id}">${label}</label><input type="number" id="${id}" value="${value}" step="${step}">`;
const slider = (id, label, min, max, value) => `<label for="${id}">${label}<output id="${id}-value"></output></label><input id="${id}" type="range" min="${min}" max="${max}" step="1" value="${value}">`;
const plot = (id, label) => `<svg id="${id}" viewBox="0 0 520 520" role="img" aria-label="${label}"></svg>`;
const pair = (x, y) => String.raw`\left(${x},\ ${y}\right)`;
const negate = tex => tex === "0" ? "0" : tex.startsWith("-") ? tex.slice(1) : "-" + tex;
const gcd = (a, b) => { a=Math.abs(a); b=Math.abs(b); while (b) [a,b]=[b,a%b]; return a || 1; };
function rational(n, d) { if (d<0) { n=-n; d=-d; } const g=gcd(n,d); return [n/g,d/g]; }
function fraction(n, d) {
  [n,d]=rational(n,d);
  return d===1 ? String(n) : String.raw`${n<0?"-":""}\frac{${Math.abs(n)}}{${d}}`;
}
function piFraction(n, d) {
  [n,d]=rational(n,d); if (!n) return "0";
  const top=String.raw`${Math.abs(n)===1?"":Math.abs(n)}\pi`;
  return (n<0?"-":"")+(d===1?top:String.raw`\frac{${top}}{${d}}`);
}
function radical(n, d, q) {
  if (q===1) return fraction(n,d);
  if (!n) return "0";
  [n,d]=rational(n,d);
  const top=String.raw`${Math.abs(n)===1?"":Math.abs(n)}\sqrt{${q}}`;
  return (n<0?"-":"")+(d===1?top:String.raw`\frac{${top}}{${d}}`);
}
function rootParts(n) { for (let k=Math.floor(Math.sqrt(n));k>=1;k--) if (n%(k*k)===0) return [k,n/(k*k)]; return [0,1]; }
function principal(t) { const a=((t%tau)+tau)%tau; return Math.abs(a)<1e-12 || Math.abs(a-tau)<1e-12 ? 0 : a; }
function coordinates(t) {
  const a=principal(t), quadrant=Math.round(a/(Math.PI/2));
  if (Math.abs(a-quadrant*Math.PI/2)<1e-12) return [[1,0],[0,1],[-1,0],[0,-1],[1,0]][quadrant];
  return [Math.cos(a),Math.sin(a)];
}
function location(t) {
  const [x,y]=coordinates(t);
  if (y===0) return x>0?"Positive x-axis":"Negative x-axis";
  if (x===0) return y>0?"Positive y-axis":"Negative y-axis";
  return "Quadrant "+(x>0?(y>0?"I":"IV"):(y>0?"II":"III"));
}
function reference(t) { const a=principal(t); return a<=Math.PI/2?a:a<=Math.PI?Math.PI-a:a<=3*Math.PI/2?a-Math.PI:tau-a; }
const specialPoints = [
  [0,"1","0"], [30,String.raw`\frac{\sqrt3}{2}`,String.raw`\frac12`],
  [45,String.raw`\frac{\sqrt2}{2}`,String.raw`\frac{\sqrt2}{2}`], [60,String.raw`\frac12`,String.raw`\frac{\sqrt3}{2}`],
  [90,"0","1"], [120,String.raw`-\frac12`,String.raw`\frac{\sqrt3}{2}`],
  [135,String.raw`-\frac{\sqrt2}{2}`,String.raw`\frac{\sqrt2}{2}`], [150,String.raw`-\frac{\sqrt3}{2}`,String.raw`\frac12`],
  [180,"-1","0"], [210,String.raw`-\frac{\sqrt3}{2}`,String.raw`-\frac12`],
  [225,String.raw`-\frac{\sqrt2}{2}`,String.raw`-\frac{\sqrt2}{2}`], [240,String.raw`-\frac12`,String.raw`-\frac{\sqrt3}{2}`],
  [270,"0","-1"], [300,String.raw`\frac12`,String.raw`-\frac{\sqrt3}{2}`],
  [315,String.raw`\frac{\sqrt2}{2}`,String.raw`-\frac{\sqrt2}{2}`], [330,String.raw`\frac{\sqrt3}{2}`,String.raw`-\frac12`],
];
function exactPoint(t) { return specialPoints.find(([degrees]) => Math.abs(principal(t)-degrees*Math.PI/180)<1e-10); }
const symmetryPoints = [
  { tex:pair(String.raw`\frac34`,String.raw`\frac{\sqrt7}{4}`), x:3/4, y:Math.sqrt(7)/4, exact:[String.raw`\frac34`,String.raw`\frac{\sqrt7}{4}`] },
  { tex:pair("-3/5","-4/5"), x:-3/5, y:-4/5, exact:[String.raw`-\frac35`,String.raw`-\frac45`] },
  { tex:pair(String.raw`\frac{\sqrt3}{2}`,"1/2"), x:Math.sqrt(3)/2, y:1/2, exact:[String.raw`\frac{\sqrt3}{2}`,String.raw`\frac12`] },
];
const transformations = {
  negative:{tex:"-t",signs:[1,-1],rule:pair("x","-y"),text:"Reflect across the x-axis: keep x and reverse y."},
  supplement:{tex:String.raw`\pi-t`,signs:[-1,1],rule:pair("-x","y"),text:"Reflect across the y-axis: reverse x and keep y."},
  half:{tex:String.raw`t+\pi`,signs:[-1,-1],rule:pair("-x","-y"),text:"Move halfway around the circle: reverse both coordinates."},
  back:{tex:String.raw`t-\pi`,signs:[-1,-1],rule:pair("-x","-y"),text:"A negative half-turn reaches the same opposite point as a positive half-turn."},
  turns:{tex:String.raw`t+2k\pi`,signs:[1,1],rule:pair("x","y"),text:"An integer number of full turns returns to the original point."},
};
const worked = [
  { given:String.raw`t=5\pi/3`, goal:"the exact terminal point P(t)", steps:[
    [String.raw`3\pi/2<t=5\pi/3<2\pi`,"The terminal point lies between the negative y-axis and the positive x-axis, in Quadrant IV."],
    [String.raw`\alpha=2\pi-5\pi/3=\pi/3`,"The reference point for π/3 has coordinate magnitudes 1/2 and √3/2."],
    [String.raw`P(t)=\left(\frac12,-\frac{\sqrt3}{2}\right)`,"In IV, x is positive and y is negative. Check that x² + y² = 1."],
  ]},
  { given:String.raw`t=-9\pi/7`, goal:"the exact reference number", steps:[
    [String.raw`t_0=-9\pi/7+2\pi=5\pi/7`,"Add one full turn to put the angle in [0, 2π)."],
    [String.raw`\pi/2<5\pi/7<\pi`,"The terminal point is in Quadrant II. Measure to the negative x-axis."],
    [String.raw`\alpha=\pi-5\pi/7=2\pi/7`,"The reference number is nonnegative; it is not the original negative angle."],
  ]},
  { given:String.raw`x=-2/5,\quad y>0`, goal:"the exact point P(x, y) on the unit circle", steps:[
    [String.raw`x^2+y^2=1\ \Longrightarrow\ 4/25+y^2=1`,"Substitute the known coordinate into the unit-circle equation."],
    [String.raw`y^2=21/25\ \Longrightarrow\ y=\pm\sqrt{21}/5`,"The equation alone allows a point above and a point below the x-axis."],
    [String.raw`P=\left(-\frac25,\frac{\sqrt{21}}5\right)`,"The given condition y > 0 selects the positive root."],
  ]},
  { given:String.raw`P(t)=\left(\frac34,\frac{\sqrt7}{4}\right)`, goal:String.raw`the exact terminal point ${M("P(\\pi-t)")}`, steps:[
    [String.raw`P(t)=(x,y)\ \Longrightarrow\ P(\pi-t)=(-x,y)`,"A supplement reflects the point across the y-axis."],
    [String.raw`x=3/4\ \Longrightarrow\ -x=-3/4`,"Only the horizontal coordinate changes sign."],
    [String.raw`P(\pi-t)=\left(-\frac34,\frac{\sqrt7}{4}\right)`,"The new point is in Quadrant II and still satisfies x² + y² = 1."],
  ]},
];
const checks = [
  ["Recognize the circle",String.raw`\text{Which equation defines the unit circle?}`,[String.raw`x^2+y^2=1`,String.raw`x+y=1`,String.raw`x^2+y^2=2`],0,"Radius 1 gives x² + y² = 1."],
  ["Start the walk",String.raw`t=0:\quad P(t)=\ ?`,[pair("0","0"),pair("1","0"),pair("0","1")],1,"The walk starts at (1, 0), on the positive x-axis."],
  ["Quarter-turn",String.raw`t=\pi/2:\quad P(t)=\ ?`,[pair("1","0"),pair("0","-1"),pair("0","1")],2,"A positive quarter-turn is counterclockwise and ends at (0, 1)."],
  ["Use the quadrant",String.raw`P(5\pi/3)=\ ?`,[pair("1/2",String.raw`-\sqrt3/2`),pair("-1/2",String.raw`\sqrt3/2`),pair(String.raw`\sqrt3/2`,"-1/2")],0,"The reference number is π/3. In IV, x is positive and y is negative."],
  ["Remove full turns",String.raw`t=11\pi/5:\quad\alpha=\ ?`,[String.raw`11\pi/5`,String.raw`\pi/5`,String.raw`4\pi/5`],1,"Subtract 2π to get π/5, already in Quadrant I."],
  ["Negative input",String.raw`t=-9\pi/7:\quad\alpha=\ ?`,[String.raw`5\pi/7`,String.raw`-2\pi/7`,String.raw`2\pi/7`],2,"Add 2π to reach 5π/7 in II, then compute π − 5π/7."],
  ["A decimal is in radians",String.raw`t=6:\quad\alpha=\ ?`,[String.raw`2\pi-6`,String.raw`6-\pi`,String.raw`6^\circ`],0,"Six radians lies in IV. The exact reference number is 2π − 6."],
  ["Choose the root",String.raw`x=-2/5,\ y>0:\quad y=\ ?`,[String.raw`-\sqrt{21}/5`,String.raw`\sqrt{21}/5`,String.raw`21/25`],1,"Square x, subtract from 1, and take the positive square root."],
  ["Reflect over the x-axis",String.raw`P(t)=(-3/5,-4/5):\quad P(-t)=\ ?`,[pair("3/5","4/5"),pair("3/5","-4/5"),pair("-3/5","4/5")],2,"Negating t preserves x and reverses y."],
  ["Reflect over the y-axis",String.raw`P(t)=(-3/5,-4/5):\quad P(\pi-t)=\ ?`,[pair("3/5","-4/5"),pair("-3/5","4/5"),pair("3/5","4/5")],0,"A supplement reverses x and preserves y."],
  ["Three full turns",String.raw`P(t+6\pi)=\ ?`,[String.raw`-P(t)`,String.raw`P(t)`,String.raw`P(\pi-t)`],1,"6π is three whole turns, so the terminal point is unchanged."],
  ["A half-turn",String.raw`P(t)=(x,y):\quad P(t+\pi)=\ ?`,[pair("x","-y"),pair("-x","y"),pair("-x","-y")],2,"A half-turn reaches the opposite point and reverses both coordinates."],
];

document.querySelector("#app").innerHTML = `${renderLessonHeader("5.1")}
<main class="laws-lesson unit-lesson">
<section class="lesson-hero lesson-hero--unit">
  <div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 5.1</span> The unit circle</p><h1>Walk the circle.<br><em>Read the point.</em></h1><p class="lesson-hero__lede">A real number can describe a journey around a circle. Start at (1, 0), travel a signed distance, and read where you land. One circle connects radians, exact coordinates, and symmetry.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#unit-walk">Start the walk</a><span>About 40 minutes · interactive</span></div></div>
  <div class="unit-hero-art" data-reveal><p class="tool-label">One unit of radius. Every real input.</p>${plot("unit-hero-chart","Unit circle with an exact terminal point at π/3")}${equation(String.raw`x^2+y^2=1\qquad P(\pi/3)=\left(\frac12,\frac{\sqrt3}{2}\right)`)}<p>Positive travel goes counterclockwise from (1, 0).</p></div>
</section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Connect signed arc length to radians</p></li><li><span>02</span><p>Find exact terminal points</p></li><li><span>03</span><p>Use reference numbers and signs</p></li><li><span>04</span><p>Reflect points and remove full turns</p></li></ol></section>
<section class="lesson-section" id="unit-walk">${intro("01","From a line to a circle","A distance becomes<br>a destination.",`The unit circle is centered at the origin with radius 1, so ${M(String.raw`x^2+y^2=1`)}. Starting at (1, 0), a positive real number t sends us counterclockwise; a negative t sends us clockwise. The point where we finish is the <strong>terminal point</strong> ${M("P(t)")}.`)}
<div class="laws-card-grid"><article class="laws-card"><p class="tool-label">Why radians fit</p>${equation(String.raw`s=r\theta\quad\Longrightarrow\quad s=\theta\ \text{when }r=1`)}<p>On this circle, the traveled arc length |t| equals the magnitude of the angle in radians. The sign records direction.</p></article><article class="laws-card"><p class="tool-label">Why turns disappear</p>${equation(String.raw`P(t+2k\pi)=P(t),\quad k\in\mathbb Z`)}<p>A full turn has length 2π. Adding whole turns changes the journey but preserves the destination.</p></article></div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Signed-arc explorer</p><strong>We are looking for the terminal point P(t).</strong>${slider("unit-walk-t","Signed arc t (steps of π/12)",-48,48,4)}<div class="unit-presets">${[[-6,"-\\pi/2"],[0,"0"],[4,"\\pi/3"],[12,"\\pi"],[24,"2\\pi"],[28,"7\\pi/3"]].map(([v,tex])=>`<button type="button" data-unit-walk="${v}">${M(tex)}</button>`).join("")}</div><button type="button" class="laws-button" id="unit-walk-play" aria-pressed="false">Animate one positive turn</button><div class="laws-note" id="unit-walk-reading" aria-live="polite"></div></div><div class="unit-plot">${plot("unit-walk-chart","Signed arc and terminal point on the unit circle")}<div class="unit-number-line" id="unit-walk-line"></div><p class="unit-caption">Coral follows the signed remaining arc; a full highlighted circle records completed turns. The gold starting point is (1, 0). Both axes use the same scale.</p></div></div></section>
<section class="lesson-section lesson-section--soft" id="unit-exact">${intro("02","Build exact coordinates","One small triangle.<br>A whole circle of points.","Use the 30°–60°–90° and 45°–45°–90° triangles, scaled to hypotenuse 1. Their side lengths give coordinate magnitudes; the quadrant supplies the signs. Read the horizontal coordinate first.")}
<div class="laws-rule-cards">${[[String.raw`\pi/6`,pair(String.raw`\sqrt3/2`,"1/2"),"30°: the shorter leg is 1/2."],[String.raw`\pi/4`,pair(String.raw`\sqrt2/2`,String.raw`\sqrt2/2`),"45°: equal legs satisfy 2x² = 1."],[String.raw`\pi/3`,pair("1/2",String.raw`\sqrt3/2`),"60°: swap the 30° coordinate magnitudes."]].map(([t,p,text])=>`<article><p class="tool-label">${M(t)}</p>${equation(p)}<p>${text}</p></article>`).join("")}</div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Exact terminal-point atlas</p><strong>We are looking for exact coordinates, in the order (x, y).</strong><div class="unit-angle-grid">${specialPoints.map(([d])=>`<button type="button" data-unit-angle="${d}" aria-pressed="${d===300}">${M(piFraction(d,180))}</button>`).join("")}</div><div class="laws-note" id="unit-exact-reading" aria-live="polite"></div></div><div class="unit-plot">${plot("unit-exact-chart","Special terminal points on the unit circle")}<p class="unit-caption">Choose an angle to highlight its point. The faint dots mark the other special positions; the coordinate readout stays exact.</p></div></div></section>
<section class="lesson-section" id="unit-missing">${intro("03","Recover a coordinate","Use the circle equation.<br>Then choose the sign.",`${M(String.raw`y=\pm\sqrt{1-x^2}`)} gives two possibilities unless the root is zero. A location clue chooses a sign. A coordinate outside [−1, 1] cannot belong to the unit circle.`)}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Missing-coordinate laboratory</p><strong>We are looking for the exact point P(x, y).</strong><label for="unit-known">Known coordinate</label><select id="unit-known"><option value="x">x = n/d</option><option value="y">y = n/d</option></select>${numberInput("unit-known-n","Numerator n",-2,1)}${numberInput("unit-known-d","Denominator d",5,1)}<label for="unit-side">Location of the point</label><select id="unit-side"><option value="positive">Above the x-axis (y &gt; 0)</option><option value="negative">Below the x-axis (y &lt; 0)</option><option value="both">Either side: find every point</option></select><div class="unit-presets"><button type="button" data-unit-missing="x,-2,5,positive">x = −2/5, above</button><button type="button" data-unit-missing="y,-4,5,negative">y = −4/5, left</button></div><div class="laws-note" id="unit-missing-reading" aria-live="polite"></div></div><div class="unit-plot">${plot("unit-missing-chart","Unit-circle points matching a known coordinate and location")}<p class="unit-caption">The dashed line fixes the known coordinate. With either-side mode, both possible intersections are shown when they are distinct.</p></div></div></section>
<section class="lesson-section lesson-section--soft" id="unit-reference">${intro("04","Find the reference number","Remove the turns.<br>Measure the short arc.",`The <strong>reference number</strong> is the shortest distance along the unit circle from the terminal point to the <span class="unit-nowrap">x-axis</span>. Since the radius is 1, it has the same numerical value as the reference angle in radians. It lies in ${M("[0,\\pi/2]")}.`)}
<div class="unit-reference-cards">${[["I","t_0"],["II","\\pi-t_0"],["III","t_0-\\pi"],["IV","2\\pi-t_0"]].map(([q,tex])=>`<article><strong>Quadrant ${q}</strong>${equation("\\alpha="+tex)}</article>`).join("")}</div><p class="unit-caption">Here ${M(String.raw`0\le t_0<2\pi`)}. On an axis the reference number is 0 or π/2; no nondegenerate reference triangle remains.</p>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Reference-number workbench</p><strong>We are looking for the principal position and its reference number.</strong><label for="unit-reference-mode">Input format</label><select id="unit-reference-mode"><option value="pi">Exact multiple of π</option><option value="decimal">Decimal radians</option></select><div id="unit-reference-pi-controls">${numberInput("unit-reference-n","Numerator n",11,1)}${numberInput("unit-reference-d","Denominator d",5,1)}</div><div id="unit-reference-decimal-controls" hidden>${numberInput("unit-reference-decimal","Signed distance t in radians",6,0.1)}</div><div class="unit-presets">${[["pi",11,5,"11\\pi/5"],["pi",-9,7,"-9\\pi/7"],["decimal",6,1,"6"],["decimal",-7,1,"-7"]].map(([mode,n,d,tex])=>`<button type="button" data-unit-reference="${mode},${n},${d}">${M(tex)}</button>`).join("")}</div><div class="laws-note" id="unit-reference-reading" aria-live="polite"></div></div><div class="unit-plot">${plot("unit-reference-chart","Reference arc from the terminal ray to the x-axis")}<p class="unit-caption">Gold: reference arc. Coral: terminal point. The reference number stays nonnegative even when t is negative.</p></div></div></section>
<section class="lesson-section" id="unit-symmetry">${intro("05","Move a known point","Reflect the coordinates.<br>Keep the circle.","A new input can give a reflected point without requiring new triangle calculations. Full turns preserve both coordinates; a half-turn reverses both. Reflection across one axis reverses just the perpendicular coordinate.")}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Terminal-point symmetry studio</p>${renderMathDropdown("unit-symmetry-point","Known terminal point P(t)",symmetryPoints.map(p=>p.tex),M)}<label for="unit-symmetry-kind">New input</label><select id="unit-symmetry-kind">${Object.entries(transformations).map(([value,t])=>`<option value="${value}">${({negative:"−t",supplement:"π − t",half:"t + π",back:"t − π",turns:"t + 2kπ"})[value]}</option>`).join("")}</select><div id="unit-turn-controls" hidden>${slider("unit-symmetry-k","Whole turns k",-3,3,2)}</div><div class="laws-note" id="unit-symmetry-goal" aria-live="polite"></div></div><div class="unit-plot">${plot("unit-symmetry-chart","Original and transformed terminal points on the same unit circle")}<div id="unit-symmetry-reading" aria-live="polite"></div><p class="unit-caption">Coral: P(t). Violet: the transformed point Q. Both radii end on the unit circle; overlapping radii have different stroke widths.</p></div></div>
<aside class="laws-note"><strong>A connection to the next lesson</strong><p>On the unit circle, ${M("x=\\cos t")} and ${M("y=\\sin t")}. Reflecting t to −t keeps x and reverses y, explaining why cosine is even and sine is odd. Section 5.2 develops the trigonometric functions of real numbers.</p></aside></section>
<section class="lesson-section lesson-section--soft" id="unit-worked">${intro("06","Work it out","State the goal.<br>Follow the geometry.","Reduce a full turn, read a special triangle, use the circle equation, or reflect a coordinate. Each example keeps its goal visible while the steps explain why the answer follows.")}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Guided reasoning workshop</p>${renderMathDropdown("unit-example","Choose the given information",worked.map(c=>c.given),M)}<div class="laws-note" id="unit-example-goal" aria-live="polite"></div></div><div class="laws-result"><div class="trig-step" id="unit-example-step" aria-live="polite"></div><p class="laws-progress" id="unit-example-progress"></p><div class="laws-step-buttons"><button type="button" class="laws-button" id="unit-example-back">← Previous step</button><button type="button" class="laws-button" id="unit-example-next">Next step →</button></div></div></div></section>
<section class="lesson-section lesson-section--ink" id="unit-readiness">${intro("07","Practice","Read the input.<br>Locate the point.","These checks ask for an equation, a point, or a reference number. Keep the requested object in view and use exact values when possible.")}<p class="laws-score" id="unit-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="laws-check-grid">${checks.map((q,i)=>`<article class="laws-check"><p class="tool-label">${q[0]}</p><h3>${practiceMath(q[1])}</h3>${renderMathDropdown(`unit-practice-${i}`,"Your answer",q[2],M,{placeholder:"Select an answer"})}<button type="button" class="laws-button" data-unit-check="${i}">Check answer</button><p class="answer-feedback" id="unit-feedback-${i}" aria-live="polite"></p></article>`).join("")}</div></section>
</main>${renderLessonFooter({previous:{href:"pages/sections/6-4.html",label:"Section 6.4 · Inverse trigonometric functions"},next:{href:"pages/sections/5-2.html",label:"Section 5.2 · Trigonometric functions of real numbers"}})}`;

// One unit scale in both directions keeps circles circular and radii equal.
const unitScale=170, center=260;
const screen = (x,y) => [center+x*unitScale,center-y*unitScale];
function arcPath(start,sweep,radius=unitScale) {
  const count=Math.max(2,Math.ceil(Math.abs(sweep)*32));
  return Array.from({length:count+1},(_,i)=>{
    const t=start+sweep*i/count;
    return `${i?"L":"M"}${fmt(center+radius*Math.cos(t),3)},${fmt(center-radius*Math.sin(t),3)}`;
  }).join(" ");
}
function circleGrid(id) {
  let minor="",major="";
  for(let i=-5;i<=5;i++) {
    const p=center+i*unitScale/4,paths=`<path d="M${p} 40V480M40 ${p}H480"/>`;
    if(i%2) minor+=paths; else major+=paths;
  }
  const stops='<stop offset="0" stop-color="black"/><stop offset="12%" stop-color="white"/><stop offset="88%" stop-color="white"/><stop offset="100%" stop-color="black"/>';
  return `<defs><linearGradient id="${id}-fade-x">${stops}</linearGradient><linearGradient id="${id}-fade-y" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient><mask id="${id}-mask-x"><rect x="40" y="40" width="440" height="440" fill="url(#${id}-fade-x)"/></mask><mask id="${id}-mask-y"><rect x="40" y="40" width="440" height="440" fill="url(#${id}-fade-y)"/></mask></defs><g class="unit-coordinate-grid" aria-hidden="true"><g mask="url(#${id}-mask-x)"><g mask="url(#${id}-mask-y)"><g class="unit-grid-minor">${minor}</g><g class="unit-grid-major">${major}</g></g></g><path class="unit-axes" d="M40 260H480M260 40V480"/><text x="490" y="268" class="unit-axis-label">x</text><text x="271" y="32" class="unit-axis-label">y</text></g>`;
}
function circleTickLabels() {
  let labels="";
  for(const value of [-1,-.5,.5,1]) {
    const endpoint=Math.abs(value)===1,p=center+value*unitScale,y=center-value*unitScale;
    const className=endpoint?' class="unit-tick-endpoint"':"";
    const text=String(value).replace("-","−");
    // Place ±1 outside the circle, away from its stroke and terminal points.
    labels+=`<text${className} x="${endpoint?p+Math.sign(value)*12:p}" y="286" text-anchor="${endpoint?(value<0?"end":"start"):"middle"}">${text}</text>`;
    labels+=`<text${className} x="244" y="${endpoint?y+(value>0?-14:29):y+6}" text-anchor="end">${text}</text>`;
  }
  return `<g class="unit-tick-labels" aria-hidden="true">${labels}</g>`;
}
function circleScene(svg, points, {angle=null,arc=false,ref=false,atlas=false,fixed=null}={}) {
  let art=circleGrid(svg.id)+`<circle cx="260" cy="260" r="170" class="unit-circle"/>`;
  if(atlas) art+=specialPoints.map(([d])=>{const [x,y]=screen(...coordinates(d*Math.PI/180));return `<circle cx="${x}" cy="${y}" r="4" fill="#aab1b4"/>`;}).join("");
  if(fixed) {
    const p=fixed.kind==="x"?screen(fixed.value,0)[0]:screen(0,fixed.value)[1];
    art+=`<path d="${fixed.kind==="x"?`M${p} 45V475`:`M45 ${p}H475`}" stroke="var(--violet)" stroke-width="2" stroke-dasharray="5 5"/>`;
  }
  if(angle!==null && arc) {
    if(Math.abs(angle)>=tau-1e-12) art+='<circle cx="260" cy="260" r="170" fill="none" stroke="#327347" stroke-width="4" opacity=".45"/>';
    let sweep=angle%tau;if(Math.abs(sweep)<1e-12)sweep=0;
    art+=`<path d="${arcPath(0,sweep)}" stroke="var(--coral)" stroke-width="5" fill="none"/>`;
    art+='<circle cx="430" cy="260" r="6" fill="var(--gold)"/>';
  }
  if(ref && angle!==null) {
    const [x,y]=coordinates(angle),a=reference(angle),start=x<0?Math.PI:0,sweep=x<0?(y>=0?-a:a):(y>=0?a:-a);
    art+=`<path d="${arcPath(start,sweep)}" stroke="#b58522" stroke-width="4" fill="none"/>`;
    if(a>1e-12) {const t=start+sweep/2;art+=`<text x="${center+190*Math.cos(t)}" y="${center-190*Math.sin(t)+6}" text-anchor="middle" class="unit-axis-label">α</text>`;}
  }
  points.forEach((p,i)=>{
    const [x,y]=screen(p.x,p.y),color=p.color||"var(--coral)",same=i>0&&Math.hypot(p.x-points[0].x,p.y-points[0].y)<1e-10;
    if(p.triangle) art+=`<path d="M260 260H${x}V${y}Z" fill="rgba(255,107,72,.06)"/><path d="M260 260H${x}V${y}" fill="none" stroke="var(--violet)" stroke-width="2" stroke-dasharray="5 4"/>`;
    art+=`<path class="unit-radius" d="M260 260L${x} ${y}" stroke="${color}" stroke-width="${i?3:5}"/><circle class="unit-terminal-point" cx="${x}" cy="${y}" r="${i?4:7}" fill="${color}"/>`;
    const shared=i===0&&points.slice(1).some(other=>Math.hypot(p.x-other.x,p.y-other.y)<1e-10);
    if(p.label && !same && !shared) art+=`<text x="${x+(p.x<-.8?-14:p.x>.8?14:0)}" y="${y+(p.y>=0?-15:27)}" text-anchor="${p.x<-.8?"end":p.x>.8?"start":"middle"}" class="unit-point-label">${p.label}</text>`;
    if(same) art+=`<text x="${x}" y="${y+(p.y>=0?-16:27)}" text-anchor="middle" class="unit-point-label">P = Q</text>`;
  });
  // Keep tick labels above every arc, projection, and highlight.
  svg.innerHTML=art+circleTickLabels();
  svg.setAttribute("aria-label",`Unit circle. ${points.map(p=>`${p.label||"Point"}: (${fmt(p.x)}, ${fmt(p.y)})`).join(". ")}${angle===null?"":`. ${location(angle)}.`}`);
}
circleScene($("unit-hero-chart"),[{x:1/2,y:Math.sqrt(3)/2,label:"P",triangle:true}],{angle:Math.PI/3,arc:true});

let walkAnimation=null,walkPlaying=false;
function stopWalk() {
  walkPlaying=false;if(walkAnimation!==null)cancelAnimationFrame(walkAnimation);walkAnimation=null;
  $("unit-walk-play").textContent="Animate one positive turn";$("unit-walk-play").setAttribute("aria-pressed","false");$("unit-walk-reading").setAttribute("aria-live","polite");
}
function renderWalk() {
  const n=Number($("unit-walk-t").value),t=n*Math.PI/12,[x,y]=coordinates(t),exact=exactPoint(t),turns=Math.trunc(n/24),remainder=n-turns*24;
  $("unit-walk-t-value").textContent=piFraction(n,12).replaceAll("\\pi","π").replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g,"$1/$2");
  $("unit-walk-reading").innerHTML=equation(`t=${piFraction(n,12)}\\approx${fmt(t)}\\ \\text{rad}`)+equation(`P(t)${exact?"=":"\\approx"}${exact?pair(exact[1],exact[2]):pair(fmt(x),fmt(y))}`)+`<p><strong>${location(t)}</strong>. ${n===0?"No travel: start at (1, 0).":`${n>0?"Counterclockwise":"Clockwise"} travel of ${fmt(Math.abs(t))} units.`}</p><p>${Math.abs(turns)} complete turn(s), then ${M(piFraction(Math.abs(remainder),12))} ${remainder<0?"clockwise":remainder>0?"counterclockwise":"remaining"}. ${exact?"The terminal coordinates above are exact.":"The terminal coordinates above are approximations."}</p>`;
  circleScene($("unit-walk-chart"),[{x,y,label:"P",triangle:true}],{angle:t,arc:true});
  let ticks="";
  for(let i=-4;i<=4;i++) {const X=40+(i+4)*55;ticks+=`<path d="M${X} 29V39"/><text x="${X}" y="60" text-anchor="middle">${i===0?"0":`${i===-1?"−":i===1?"":i}π`}</text>`;}
  const X=40+(n/12+4)*55;
  $("unit-walk-line").innerHTML=`<svg viewBox="0 0 520 75" role="img" aria-label="Signed input t on a number line from −4π to 4π"><path d="M40 34H480"/>${ticks}<circle cx="${X}" cy="34" r="6" fill="var(--coral)" stroke="none"/></svg>`;
}
$("unit-walk-t").addEventListener("input",()=>{stopWalk();renderWalk();});
document.querySelectorAll("[data-unit-walk]").forEach(button=>button.addEventListener("click",()=>{stopWalk();$("unit-walk-t").value=button.dataset.unitWalk;renderWalk();}));
$("unit-walk-play").addEventListener("click",()=>{
  if(walkPlaying){stopWalk();return;}
  if(Number($("unit-walk-t").value)>24)$("unit-walk-t").value=0;
  const goal=Number($("unit-walk-t").value)+24;
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){$("unit-walk-t").value=goal;renderWalk();return;}
  walkPlaying=true;$("unit-walk-play").textContent="Pause the walk";$("unit-walk-play").setAttribute("aria-pressed","true");$("unit-walk-reading").setAttribute("aria-live","off");
  let last=null;
  const frame=time=>{
    if(!walkPlaying)return;
    if(last===null)last=time;
    if(time-last>=100){$("unit-walk-t").value=Number($("unit-walk-t").value)+1;renderWalk();last=time;}
    if(Number($("unit-walk-t").value)>=goal){stopWalk();return;}
    walkAnimation=requestAnimationFrame(frame);
  };
  walkAnimation=requestAnimationFrame(frame);
});
document.addEventListener("visibilitychange",()=>{if(document.hidden)stopWalk();});window.addEventListener("pagehide",stopWalk);renderWalk();

function renderAtlas(d=300) {
  const t=d*Math.PI/180,[x,y]=coordinates(t),exact=exactPoint(t);
  document.querySelectorAll("[data-unit-angle]").forEach(button=>button.setAttribute("aria-pressed",String(Number(button.dataset.unitAngle)===d)));
  $("unit-exact-reading").innerHTML=equation(`t=${piFraction(d,180)}=${d}^\\circ`)+equation(`P(t)=${pair(exact[1],exact[2])}`)+`<p><strong>${location(t)}</strong>. ${y===0||x===0?"This point lies on an axis.":`Reference number: ${M(piFraction(Math.round(reference(t)*180/Math.PI),180))}. Use the quadrant to choose each sign.`}</p>`+equation(`(${exact[1]})^2+(${exact[2]})^2=1`);
  circleScene($("unit-exact-chart"),[{x,y,label:"P",triangle:true}],{angle:t,ref:true,atlas:true});
}
document.querySelectorAll("[data-unit-angle]").forEach(button=>button.addEventListener("click",()=>renderAtlas(Number(button.dataset.unitAngle))));renderAtlas();

function renderMissing() {
  const kind=$("unit-known").value,other=kind==="x"?"y":"x",side=$("unit-side").value;
  const options=$("unit-side").options;
  options[0].textContent=kind==="x"?"Above the x-axis (y > 0)":"Right of the y-axis (x > 0)";
  options[1].textContent=kind==="x"?"Below the x-axis (y < 0)":"Left of the y-axis (x < 0)";
  const invalidate=text=>{$("unit-missing-reading").textContent=text;$("unit-missing-chart").innerHTML="";};
  let n=$("unit-known-n").valueAsNumber,d=$("unit-known-d").valueAsNumber;
  if(!Number.isInteger(n)||!Number.isInteger(d)||Math.abs(n)>1000||Math.abs(d)>1000||d===0){invalidate("Use integer coefficients within ±1,000. The denominator must be nonzero.");return;}
  [n,d]=rational(n,d);
  if(Math.abs(n)>d){invalidate("No point on the unit circle has this coordinate: each coordinate must be between −1 and 1.");return;}
  const radicand=d*d-n*n,[k,q]=rootParts(radicand),missing=Math.sqrt(radicand)/d;
  if(missing===0 && side!=="both"){invalidate("The only possible missing coordinate is 0. That point lies on an axis, so it does not satisfy the selected strict location. Choose either-side mode to show it.");return;}
  const signs=side==="both"?(missing===0?[1]:[1,-1]):[side==="positive"?1:-1];
  const points=signs.map((sign,i)=>{
    const m=sign*missing,known=n/d;
    return {x:kind==="x"?known:m,y:kind==="x"?m:known,label:signs.length===1?"P":`P${i+1}`,color:i?"var(--violet)":"var(--coral)"};
  });
  const results=signs.map(sign=>{
    const exact=radical(sign*k,d,q),known=fraction(n,d);
    return equation(`P=${kind==="x"?pair(known,exact):pair(exact,known)}`);
  }).join("");
  $("unit-missing-reading").innerHTML=equation(`${other}^2=1-(${fraction(n,d)})^2=${fraction(radicand,d*d)}`)+results+`<p>${signs.length===2?"Without a side restriction, both points satisfy the circle equation.":missing===0?"The square root is zero, so the two algebraic signs give the same point.":"The location condition selects the sign of the missing coordinate."} These coordinates are exact.</p>`;
  circleScene($("unit-missing-chart"),points,{fixed:{kind,value:n/d}});
}
["unit-known","unit-known-n","unit-known-d","unit-side"].forEach(id=>$(id).addEventListener($(id).tagName==="SELECT"?"change":"input",renderMissing));
document.querySelectorAll("[data-unit-missing]").forEach(button=>button.addEventListener("click",()=>{
  const [kind,n,d,side]=button.dataset.unitMissing.split(",");$("unit-known").value=kind;$("unit-known-n").value=n;$("unit-known-d").value=d;$("unit-side").value=side;renderMissing();
}));renderMissing();

function piPlusDecimal(coefficient,constant) {
  if(coefficient===0)return fmt(constant,6);
  const term=piFraction(coefficient,1);
  return constant===0?term:`${term}${constant<0?"-":"+"}${fmt(Math.abs(constant),6)}`;
}
function renderReference() {
  const mode=$("unit-reference-mode").value;
  $("unit-reference-pi-controls").hidden=mode!=="pi";$("unit-reference-decimal-controls").hidden=mode!=="decimal";
  const invalidate=text=>{$("unit-reference-reading").textContent=text;$("unit-reference-chart").innerHTML="";};
  let t,original,normalized,alpha,turns;
  if(mode==="pi") {
    let n=$("unit-reference-n").valueAsNumber,d=$("unit-reference-d").valueAsNumber;
    if(!Number.isInteger(n)||!Number.isInteger(d)||Math.abs(n)>100000||Math.abs(d)>100000||d===0){invalidate("Use integer coefficients within ±100,000 and a nonzero denominator.");return;}
    [n,d]=rational(n,d);const p=((n%(2*d))+2*d)%(2*d),a=2*p<=d?p:p<=d?d-p:2*p<=3*d?p-d:2*d-p;
    t=p*Math.PI/d;original=piFraction(n,d);normalized=piFraction(p,d);alpha=piFraction(a,d);turns=Math.floor(n/(2*d));
  } else {
    const value=$("unit-reference-decimal").valueAsNumber;
    if(!Number.isFinite(value)||Math.abs(value)>1000000||Math.abs(value*1e6-Math.round(value*1e6))>1e-4){invalidate("Enter finite radians within ±1,000,000, with at most six decimal places.");return;}
    turns=Math.floor(value/tau);t=value-turns*tau;original=fmt(value,6);normalized=piPlusDecimal(-2*turns,value);
    if(t<=Math.PI/2)alpha=piPlusDecimal(-2*turns,value);
    else if(t<=Math.PI)alpha=piPlusDecimal(2*turns+1,-value);
    else if(t<=3*Math.PI/2)alpha=piPlusDecimal(-2*turns-1,value);
    else alpha=piPlusDecimal(2*turns+2,-value);
  }
  const [x,y]=coordinates(t),a=reference(t);
  $("unit-reference-reading").innerHTML=`<p class="tool-label">1 · Remove full turns</p>${equation(`t=${original},\\quad k=${turns}`)}${equation(`t_0=${normalized}`)}<p><strong>${location(t)}</strong>; ${M(String.raw`0\le t_0<2\pi`)}.</p><p class="tool-label">2 · Measure to the x-axis</p>${equation(`\\alpha=${alpha}\\approx${fmt(a,6)}\\ \\text{rad}`)}<p>${a===0||Math.abs(a-Math.PI/2)<1e-12?"The point is on an axis. The reference number is still nonnegative.":"The exact expression above stays nonnegative, even if the original input is negative."}</p>`;
  circleScene($("unit-reference-chart"),[{x,y,label:"P",triangle:true}],{angle:t,ref:true});
}
["unit-reference-mode","unit-reference-n","unit-reference-d","unit-reference-decimal"].forEach(id=>$(id).addEventListener($(id).tagName==="SELECT"?"change":"input",renderReference));
document.querySelectorAll("[data-unit-reference]").forEach(button=>button.addEventListener("click",()=>{
  const [mode,n,d]=button.dataset.unitReference.split(",");$("unit-reference-mode").value=mode;
  if(mode==="pi"){$("unit-reference-n").value=n;$("unit-reference-d").value=d;}else $("unit-reference-decimal").value=n;renderReference();
}));renderReference();

initMathDropdown("unit-symmetry-point",symmetryPoints.map(p=>p.tex),M);
function renderSymmetry() {
  const p=symmetryPoints[Number($("unit-symmetry-point").dataset.value)],kind=$("unit-symmetry-kind").value,tr=transformations[kind],k=Number($("unit-symmetry-k").value);
  $("unit-turn-controls").hidden=kind!=="turns";$("unit-symmetry-k-value").textContent=k;
  const tex=kind==="turns"?(k===0?"t":`t${k<0?"-":"+"}${piFraction(2*Math.abs(k),1)}`):tr.tex;
  const [sx,sy]=tr.signs,x=p.x*sx,y=p.y*sy,exact=p.exact.map((v,i)=>tr.signs[i]<0?negate(v):v);
  $("unit-symmetry-goal").innerHTML=`<strong>We are looking for the terminal point ${M(`P(${tex})`)}.</strong><p>${tr.text}</p>${equation(`(x,y)\\longmapsto${tr.rule}`)}`;
  $("unit-symmetry-reading").innerHTML=`<div class="unit-point-readouts"><div><span>Known point</span>${equation(`P(t)=${p.tex}`)}</div><div><span>Transformed point</span>${equation(`P(${tex})=${pair(exact[0],exact[1])}`)}</div></div>`;
  circleScene($("unit-symmetry-chart"),[{x:p.x,y:p.y,label:"P"},{x,y,label:"Q",color:"var(--violet)"}]);
}
["unit-symmetry-point","unit-symmetry-kind","unit-symmetry-k"].forEach(id=>$(id).addEventListener($(id).tagName==="INPUT"?"input":"change",renderSymmetry));renderSymmetry();

initMathDropdown("unit-example",worked.map(c=>c.given),M);
let workedStep=0;
function renderWorked() {
  const i=Number($("unit-example").dataset.value),c=worked[i],[tex,text]=c.steps[workedStep],goal=$("unit-example-goal");
  if(goal.dataset.case!==String(i)){goal.dataset.case=String(i);goal.innerHTML=`<strong>We are looking for ${c.goal}.</strong>`;}
  $("unit-example-step").innerHTML=`<p class="tool-label">Move ${workedStep+1}</p>${equation(tex)}<p>${text}</p>`;
  $("unit-example-progress").textContent=`Step ${workedStep+1} of ${c.steps.length}`;$("unit-example-back").disabled=workedStep===0;$("unit-example-next").disabled=workedStep===c.steps.length-1;
}
$("unit-example").addEventListener("change",()=>{workedStep=0;renderWorked();});
$("unit-example-back").addEventListener("click",()=>{if(workedStep>0)workedStep--;renderWorked();});
$("unit-example-next").addEventListener("click",()=>{if(workedStep<worked[Number($("unit-example").dataset.value)].steps.length-1)workedStep++;renderWorked();});renderWorked();
checks.forEach((q,i)=>initMathDropdown(`unit-practice-${i}`,q[2],M));
const solved=new Set();
document.querySelectorAll("[data-unit-check]").forEach(button=>button.addEventListener("click",()=>{
  const i=Number(button.dataset.unitCheck),choice=$("unit-practice-"+i).dataset.value;
  if(choice===""){setFeedback($("unit-feedback-"+i),false,"Choose an answer first.");return;}
  const correct=Number(choice)===checks[i][3];if(correct)solved.add(i);
  setFeedback($("unit-feedback-"+i),correct,(correct?"Correct. ":"Try again. ")+checks[i][4]);
  $("unit-score").textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?" · Ready to move on!":""}`;
}));
initLessonChrome();
