import "../assets/sass/lesson.sass";
import katex from "katex";
import "katex/dist/katex.min.css";
import { renderMathDropdown, initMathDropdown } from "./math-dropdown";
import { initLessonChrome, renderLessonHeader, renderLessonFooter, setFeedback } from "./shared";
import { functionKeys, undefinedTex, fmt, rational, piFraction, principal, coordinates, numericValues, exactValues, location, passports } from "./real-trig-math";

const $ = id => document.getElementById(id);
const M = tex => `<span class="laws-math">${katex.renderToString(tex, { throwOnError: true, strict: "ignore" })}</span>`;
const E = tex => `<div class="laws-equation">${M(tex)}</div>`;
const pair = (x, y) => String.raw`\left(${x},\ ${y}\right)`;
const command = key => "\\" + key + " ";
const intro = (n, topic, title, text) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> ${topic}</p><h2>${title}</h2><p>${text}</p></div>`;
const plot = (id, label) => `<svg id="${id}" viewBox="0 0 520 520" role="img" aria-label="${label}"></svg>`;
const number = (id, label, value, step = 1) => `<label for="${id}">${label}</label><input type="number" id="${id}" value="${value}" step="${step}">`;
const slider = (id, label, min, max, value) => `<label for="${id}">${label}<output id="${id}-value"></output></label><input type="range" id="${id}" min="${min}" max="${max}" step="1" value="${value}">`;
const chooseFunction = id => `<label for="${id}">Focus function</label><select id="${id}">${functionKeys.map(key => `<option value="${key}">${key}</option>`).join("")}</select>`;
const stepper = id => `<div class="trig-step" id="${id}-step" aria-live="polite"></div><p class="laws-progress" id="${id}-progress"></p><div class="laws-step-buttons"><button type="button" class="laws-button" id="${id}-back">← Previous step</button><button type="button" class="laws-button" id="${id}-next">Next step →</button></div>`;
const valueTex = (value, exact) => {
  if (exact !== undefined && exact !== null) return exact;
  if (value === null) return undefinedTex;
  if (value !== 0 && (Math.abs(value) >= 1e4 || Math.abs(value) < 1e-4)) {
    const [mantissa, exponent] = value.toExponential(4).split("e");
    return String.raw`${Number(mantissa)}\times10^{${Number(exponent)}}`;
  }
  return fmt(value, 6);
};
function ratioCards(values, exact = null) {
  return functionKeys.map(key => `<div class="rt-ratio${values[key] === null ? " rt-ratio--undefined" : ""}" data-rt-function="${key}"><span>${M(command(key) + "t")}</span><strong>${M(valueTex(values[key], exact?.[key]))}</strong><small>${values[key] === null ? "Zero denominator" : exact ? "Exact value" : "Approximate value"}</small></div>`).join("");
}
const points = [
  { tex: pair(String.raw`\frac15`, String.raw`-\frac{2\sqrt6}{5}`), x: 1/5, y: -2*Math.sqrt(6)/5, exact: { sin:String.raw`-\frac{2\sqrt6}{5}`, cos:String.raw`\frac15`, tan:String.raw`-2\sqrt6`, csc:String.raw`-\frac{5\sqrt6}{12}`, sec:"5", cot:String.raw`-\frac{\sqrt6}{12}` } },
  { tex: pair("-3/5", "4/5"), x: -3/5, y: 4/5, exact: { sin:String.raw`\frac45`, cos:String.raw`-\frac35`, tan:String.raw`-\frac43`, csc:String.raw`\frac54`, sec:String.raw`-\frac53`, cot:String.raw`-\frac34` } },
  { tex: pair("0", "-1"), x: 0, y: -1, exact: { sin:"-1", cos:"0", tan:undefinedTex, csc:"-1", sec:undefinedTex, cot:"0" } },
  { tex: pair("-1", "0"), x: -1, y: 0, exact: { sin:"0", cos:"-1", tan:"0", csc:undefinedTex, sec:"-1", cot:undefinedTex } },
];
const recoveries = [
  { given:String.raw`\tan t=\frac14,\quad t\text{ in III}`, goal:String.raw`\sin t\ \text{and}\ \cos t`, point:[-4/Math.sqrt(17),-1/Math.sqrt(17)], steps:[
    [String.raw`y/x=1/4,\quad x<0,\ y<0`,"Positive tangent allows I or III. The given quadrant selects negative coordinates."],
    [String.raw`(a,b)=(-4,-1),\quad r=\sqrt{17}`,"Choose a representative point on the ray, then find its distance from the origin."],
    [String.raw`(x,y)=\left(-\frac4{\sqrt{17}},-\frac1{\sqrt{17}}\right)`,"Divide both representative coordinates by r to reach the unit circle."],
    [String.raw`\sin t=-\frac{\sqrt{17}}{17},\quad\cos t=-\frac{4\sqrt{17}}{17}`,"Read sine from y and cosine from x. Both values are negative in III."],
  ] },
  { given:String.raw`\sin t=-\frac35,\quad t\text{ in IV}`, goal:String.raw`\cos t\ \text{and}\ \tan t`, point:[4/5,-3/5], steps:[
    [String.raw`y=-3/5,\quad x^2+y^2=1`,"Sine gives the unit-circle y-coordinate directly."],
    [String.raw`x^2=1-9/25=16/25`,"Use the circle equation to find the square of the other coordinate."],
    [String.raw`x=4/5`,"Quadrant IV selects the positive root for x."],
    [String.raw`\cos t=4/5,\quad\tan t=\frac{-3/5}{4/5}=-3/4`,"Use x for cosine and y/x for tangent."],
  ] },
  { given:String.raw`\cos t=-\frac34,\quad\sin t<0`, goal:String.raw`\sin t\ \text{and}\ \tan t`, point:[-3/4,-Math.sqrt(7)/4], steps:[
    [String.raw`x=-3/4,\quad y<0\ \Longrightarrow\ \text{III}`,"Cosine fixes x; the negative-sine condition fixes the sign of y."],
    [String.raw`y^2=1-9/16=7/16`,"Subtract the square of x from 1."],
    [String.raw`y=-\sqrt7/4`,"Choose the negative root required by the sign clue."],
    [String.raw`\sin t=-\sqrt7/4,\quad\tan t=\frac{-\sqrt7/4}{-3/4}=\sqrt7/3`,"Tangent is positive because both coordinates are negative."],
  ] },
];
const simplifications = [
  [String.raw`\cos(-700^\circ)`, String.raw`\cos(700^\circ)`, "Cosine is even. Removing the negative input does not add a minus sign outside."],
  [String.raw`\sin(-3\pi/13)`, String.raw`-\sin(3\pi/13)`, "Sine is odd. Move the input's minus sign in front of the function."],
  [String.raw`\tan(-5x)`, String.raw`-\tan(5x)`, "Tangent is odd. The identity holds wherever tangent is defined."],
];
const evaluations = [
  { given:String.raw`\sec(-3\pi/4)`, steps:[
    [String.raw`\sec(-3\pi/4)=\sec(3\pi/4)`,"Secant is even, so use the corresponding positive input."],
    [String.raw`\cos(3\pi/4)=-\sqrt2/2`,"The reference number is π/4 and cosine is negative in II."],
    [String.raw`\sec(-3\pi/4)=\frac1{-\sqrt2/2}=-\sqrt2`,"Take the reciprocal and rationalize."],
  ] },
  { given:String.raw`\cos(-2\pi/3)`, steps:[
    [String.raw`\cos(-2\pi/3)=\cos(2\pi/3)`,"Cosine is even."],
    [String.raw`\alpha=\pi-2\pi/3=\pi/3`,"The positive input is in II; its reference number is π/3."],
    [String.raw`\cos(-2\pi/3)=-\cos(\pi/3)=-1/2`,"Attach the quadrant's negative sign."],
  ] },
  { given:String.raw`\tan(-7\pi/6)`, steps:[
    [String.raw`\tan(-7\pi/6)=-\tan(7\pi/6)`,"Tangent is odd. Keep the outside minus sign."],
    [String.raw`\tan(7\pi/6)=\tan(\pi/6)=\sqrt3/3`,"The positive input is in III, where tangent is positive."],
    [String.raw`\tan(-7\pi/6)=-\sqrt3/3`,"Apply the outside sign from the first step."],
  ] },
  { given:String.raw`\sin(17\pi/6)`, steps:[
    [String.raw`17\pi/6-2\pi=5\pi/6`,"Sine has period 2π. Remove a full turn."],
    [String.raw`\alpha=\pi-5\pi/6=\pi/6`,"The terminal point is in II, where sine is positive."],
    [String.raw`\sin(17\pi/6)=\sin(\pi/6)=1/2`,"Use the exact value at the reference number."],
  ] },
];
const checks = [
  ["Read the coordinate",String.raw`P(t)=(1/5,-2\sqrt6/5):\ \sin t=\ ?`,[String.raw`1/5`,String.raw`-2\sqrt6/5`,String.raw`-2\sqrt6`],1,"Sine is the y-coordinate on the unit circle."],
  ["Form the quotient",String.raw`P(t)=(1/5,-2\sqrt6/5):\ \tan t=\ ?`,[String.raw`-2\sqrt6`,String.raw`-\sqrt6/12`,String.raw`1/5`],0,"Divide y by x. The common denominator 5 cancels."],
  ["Zero denominator",String.raw`\csc(0)=\ ?`,["0","1",undefinedTex],2,"At t = 0, y = 0, so 1/y is undefined."],
  ["Zero numerator",String.raw`\cot(\pi/2)=\ ?`,[undefinedTex,"0","1"],1,"At π/2, x = 0 and y = 1; x/y = 0."],
  ["A negative reciprocal",String.raw`\sec(\pi)=\ ?`,["1","0","-1"],2,"The x-coordinate is −1, so secant is 1/(−1) = −1."],
  ["Use the quadrant",String.raw`\tan t=1/4,\ t\text{ in III}:\ \sin t=\ ?`,[String.raw`-\sqrt{17}/17`,String.raw`\sqrt{17}/17`,String.raw`-4\sqrt{17}/17`],0,"Choose (−4, −1), then divide by radius √17. Sine comes from the vertical coordinate."],
  ["Even function",String.raw`\cos(-t)=\ ?`,[String.raw`-\cos t`,String.raw`\cos t`,String.raw`1/\cos t`],1,"Reflection across the x-axis preserves the horizontal coordinate."],
  ["Odd function",String.raw`\sin(-t)=\ ?`,[String.raw`\sin t`,String.raw`1/\sin t`,String.raw`-\sin t`],2,"Reflection reverses the vertical coordinate."],
  ["Evaluate with symmetry",String.raw`\sec(-3\pi/4)=\ ?`,[String.raw`-\sqrt2`,String.raw`\sqrt2`,String.raw`-\sqrt2/2`],0,"Secant is even; cosine at 3π/4 is −√2/2, whose reciprocal is −√2."],
  ["Tangent's period",String.raw`\text{Least positive period of tangent}`, [String.raw`2\pi`,String.raw`\pi`,String.raw`\pi/2`],1,"A half-turn reverses both coordinates, preserving y/x."],
  ["Secant's domain",String.raw`\text{Which inputs must secant exclude?}`,[String.raw`k\pi`,String.raw`2k\pi`,String.raw`\pi/2+k\pi`],2,"At π/2 + kπ, x = cos t = 0. Here k is an integer."],
  ["Cosecant's range",String.raw`\text{Can a real cosecant equal 1/2?}`,[String.raw`\text{No}`,String.raw`\text{Yes}`,String.raw`\text{Only in I}`],0,"Since |sin t| ≤ 1, a defined reciprocal has magnitude at least 1."],
];

function practicePrompt(tex) {
  const plain=tex.match(/^\\text\{([^{}]*)\}$/);
  if(plain)return `<span class="rt-question-text">${plain[1]}</span>`;
  const parts=tex.split(":\\ ");
  return parts.map(part=>`<span class="rt-question-line">${M(part)}</span>`).join("");
}
document.querySelector("#app").innerHTML=`${renderLessonHeader("5.2")}
<main class="laws-lesson real-trig-lesson">
<section class="lesson-hero lesson-hero--real-trig"><div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 5.2</span> Trigonometric functions of real numbers</p><h1>One point.<br><em>Six functions.</em></h1><p class="lesson-hero__lede">The unit circle turns any real input into coordinates. Sine and cosine read those coordinates; the other four functions form quotients and reciprocals. Read the signs, check the denominator, and keep exact values in view.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#rt-functions">Explore the functions</a><span>About 40 minutes · interactive</span></div></div><div class="rt-hero-art" data-reveal><p class="tool-label">From a real input to real values</p>${plot("rt-hero-chart","Unit circle at 5π/6, showing cosine horizontally and sine vertically")}${E(String.raw`P(t)=(\cos t,\sin t)`)}<p>At t = 5π/6, cosine is negative and sine is positive.</p></div></section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Read all six functions from a point</p></li><li><span>02</span><p>Check domains, ranges, and periods</p></li><li><span>03</span><p>Recover values using sign clues</p></li><li><span>04</span><p>Use even/odd identities exactly</p></li></ol></section>
<section class="lesson-section" id="rt-functions">${intro("01","Define the six functions","Read the point.<br>Check the quotient.",`For any real number t, let ${M("P(t)=(x,y)")} be its terminal point on the unit circle. Because the radius is 1, ${M(String.raw`\cos t=x`)} and ${M(String.raw`\sin t=y`)}. Every quotient below requires a nonzero denominator. Inputs without a degree symbol are in radians.`)}
<div class="rt-definition-grid">${functionKeys.map(key=>`<article><h3>${M(command(key)+"t="+passports[key].formula)}</h3><p>${passports[key].denominator?`${passports[key].denominator} must not be zero.`:"Defined for every real t."}</p></article>`).join("")}</div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Six-function explorer</p><strong>We are looking for the six function values at t.</strong><label for="rt-input-mode">Input format</label><select id="rt-input-mode"><option value="pi">Exact multiple of π</option><option value="decimal">Decimal radians</option></select><div id="rt-pi-controls">${number("rt-n","Numerator n",5)}${number("rt-d","Denominator d",6)}</div><div id="rt-decimal-controls" hidden>${number("rt-decimal","Input t in radians",1,0.1)}</div><div class="rt-presets">${[["pi",0,1,"0"],["pi",1,2,"\\pi/2"],["pi",5,6,"5\\pi/6"],["pi",5,3,"5\\pi/3"],["pi",-7,6,"-7\\pi/6"],["decimal",1,1,"1"]].map(([mode,n,d,tex])=>`<button type="button" data-rt-input="${mode},${n},${d}">${M(tex)}</button>`).join("")}</div><button type="button" class="laws-button" id="rt-play" aria-pressed="false">Animate one positive turn</button><p>Animation starts at 0 and advances in π/12 steps.</p><div class="laws-note rt-explorer-reading" id="rt-explorer-reading" aria-live="polite"></div></div><div class="rt-plot">${plot("rt-explorer-chart","Terminal point and coordinate projections for the six trig functions")}<div class="rt-value-grid" id="rt-explorer-values" aria-live="polite"></div><p class="rt-caption">Violet: x = cos t. Coral: y = sin t. Zero is a value; a zero denominator makes its quotient undefined. Both axes use the same scale.</p></div></div></section>
<section class="lesson-section lesson-section--soft" id="rt-from-point">${intro("02","Use the given coordinates","A point is enough.<br>No angle estimate needed.","When the terminal point is known, substitute its coordinates directly. Dividing two fractions often cancels a shared denominator. Rationalize a reciprocal when an exact radical appears in the denominator.")}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Point-to-function laboratory</p>${renderMathDropdown("rt-point","Known terminal point P(t)",points.map(p=>p.tex),M)}${chooseFunction("rt-point-function")}<div class="laws-note rt-point-reading" id="rt-point-reading" aria-live="polite"></div></div><div class="rt-plot">${plot("rt-point-chart","Known terminal point on the unit circle")}<div class="rt-value-grid" id="rt-point-values"></div><p class="rt-caption">Focus on one definition in the explanation. The six exact values remain visible for comparison.</p></div></div></section>
<section class="lesson-section" id="rt-domains">${intro("03","Know what is allowed","A denominator can fail.<br>A pattern can repeat.","Sine and cosine stay between −1 and 1. Their defined reciprocals have magnitude at least 1. The fundamental period is the least positive input shift that repeats a function’s values throughout its domain.")}
<div class="rt-passport-grid">${functionKeys.map(key=>{const p=passports[key];return `<article><h3>${M(command(key)+"t")}</h3><p>Domain ${key==="sin"||key==="cos"?"":"(k is any integer)"}</p>${E(p.domain)}<p>Range</p>${E(p.range)}<p>Period ${M(piFraction(p.period))} · ${p.parity}</p></article>`;}).join("")}</div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Domain gate and period comparison</p>${chooseFunction("rt-domain-function")}${slider("rt-domain-t","Input t (steps of π/12)",0,24,6)}<div class="laws-note rt-domain-reading" id="rt-domain-reading" aria-live="polite"></div></div><div class="rt-plot">${plot("rt-domain-chart","Terminal points for an input and one period later")}<p class="rt-caption">Coral: the input point. Violet: one function period later. For tangent and cotangent the points are opposite, but their coordinate quotients agree.</p></div></div>
<div class="laws-rule-cards">${[[String.raw`\sin^2t+\cos^2t=1`,"Every real input: this is x² + y² = 1."],[String.raw`1+\tan^2t=\sec^2t`,"Where cos t ≠ 0: divide the circle equation by x²."],[String.raw`1+\cot^2t=\csc^2t`,"Where sin t ≠ 0: divide the circle equation by y²."]].map(([tex,text])=>`<article>${E(tex)}<p>${text}</p></article>`).join("")}</div><aside class="laws-note">Use ${M(String.raw`\cot t=x/y`)} at an axis. The rewrite ${M(String.raw`\cot t=1/\tan t`)} applies only when both sides are defined; it cannot evaluate cot(π/2), since the inner tangent is undefined there.</aside></section>
<section class="lesson-section lesson-section--soft" id="rt-recovery">${intro("04","Recover the missing values","Use the ratio.<br>Let the quadrant choose.","A ratio fixes a ray’s slope or a coordinate magnitude. A quadrant or sign clue resolves the remaining sign. If you choose a representative point away from the unit circle, divide its coordinates by its radius before reading sine and cosine.")}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Ratio and sign reconstruction</p>${renderMathDropdown("rt-recovery-case","Choose the given information",recoveries.map(c=>c.given),M)}<div class="laws-note" id="rt-recovery-goal" aria-live="polite"></div></div><div class="laws-result rt-stepper-result"><div class="rt-compact-plot">${plot("rt-recovery-chart","Unit-circle point determined by the given ratio and sign clues")}</div>${stepper("rt-recovery")}</div></div></section>
<section class="lesson-section" id="rt-parity">${intro("05","Use reflection","Keep cosine.<br>Reverse sine.",`Replacing t with −t reflects the terminal point over the <span class="rt-nowrap">x-axis</span>. Cosine and secant are <strong>even</strong>; sine, cosecant, tangent, and cotangent are <strong>odd</strong>. Apply these identities on the functions’ domains.`)}
<div class="laws-card-grid"><article class="laws-card"><p class="tool-label">Even: same value</p>${E(String.raw`\cos(-t)=\cos t`)}${E(String.raw`\sec(-t)=\sec t`)}<p>The horizontal coordinate x stays the same.</p></article><article class="laws-card"><p class="tool-label">Odd: opposite value</p>${E(String.raw`\sin(-t)=-\sin t`)}${E(String.raw`\tan(-t)=-\tan t`)}<p>The vertical coordinate changes sign. Cosecant and cotangent are odd as well.</p></article></div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Even/odd reflection studio</p>${chooseFunction("rt-parity-function")}${slider("rt-parity-t","Positive input t (steps of π/12)",0,24,4)}<div class="laws-note rt-parity-reading" id="rt-parity-reading" aria-live="polite"></div></div><div class="rt-plot">${plot("rt-parity-chart","Terminal points for t and −t reflected across the x-axis")}<p class="rt-caption">Coral: P(t). Violet: P(−t). For an even function the outputs match; for an odd function they have opposite signs, including zero when the function is defined.</p></div></div>
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Symbolic simplifier</p>${renderMathDropdown("rt-simplify","Simplify this expression",simplifications.map(c=>c[0]),M)}<strong>We are looking for an equivalent expression with a positive inner argument.</strong></div><div class="laws-result" id="rt-simplify-reading" aria-live="polite"></div></div></section>
<section class="lesson-section lesson-section--soft" id="rt-exact">${intro("06","Evaluate exactly","Use a reference number.<br>Keep the sign.","Use periodicity to remove turns and even/odd identities to handle negative inputs. Then evaluate at a reference number and apply the correct sign. An exact value does not require a decimal calculator result.")}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Exact-value workshop</p>${renderMathDropdown("rt-exact-case","Choose an expression",evaluations.map(c=>c.given),M)}<div class="laws-note" id="rt-exact-goal" aria-live="polite"></div></div><div class="laws-result">${stepper("rt-exact")}</div></div></section>
<section class="lesson-section lesson-section--ink" id="rt-readiness">${intro("07","Practice","Read the definition.<br>Choose the sign.","Each check asks for one value or property. Identify the requested function, check its denominator, and use an exact value or identity.")}<p class="laws-score" id="rt-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="laws-check-grid">${checks.map((q,i)=>`<article class="laws-check"><p class="tool-label">${q[0]}</p><h3>${practicePrompt(q[1])}</h3>${renderMathDropdown(`rt-practice-${i}`,"Your answer",q[2],M,{placeholder:"Select an answer"})}<button type="button" class="laws-button" data-rt-check="${i}">Check answer</button><p class="answer-feedback" id="rt-feedback-${i}" aria-live="polite"></p></article>`).join("")}</div></section>
</main>${renderLessonFooter({previous:{href:"pages/sections/5-1.html",label:"Section 5.1 · The unit circle"},next:{href:"pages/sections/5-3.html",label:"Section 5.3 · Sine and cosine graphs"}})}`;

// Geometry uses one scale for x and y. Tick labels are drawn last to stay legible.
const center=260,unit=170;
function circleGrid(id) {
  let minor="",major="",labels="";
  for(let i=-5;i<=5;i++){
    const p=center+i*unit/4,path=`<path d="M${p} 40V480M40 ${p}H480"/>`;
    if(i%2)minor+=path;else major+=path;
  }
  for(const value of [-1,-.5,.5,1]){
    const endpoint=Math.abs(value)===1,p=center+value*unit,y=center-value*unit,cls=endpoint?' class="unit-tick-endpoint"':"",text=String(value).replace("-","−");
    labels+=`<text${cls} x="${endpoint?p+Math.sign(value)*12:p}" y="286" text-anchor="${endpoint?(value<0?"end":"start"):"middle"}">${text}</text><text${cls} x="244" y="${endpoint?y+(value>0?-14:29):y+6}" text-anchor="end">${text}</text>`;
  }
  const stops='<stop offset="0" stop-color="black"/><stop offset="12%" stop-color="white"/><stop offset="88%" stop-color="white"/><stop offset="100%" stop-color="black"/>';
  return {grid:`<defs><linearGradient id="${id}-fade-x">${stops}</linearGradient><linearGradient id="${id}-fade-y" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient><mask id="${id}-mask-x"><rect x="40" y="40" width="440" height="440" fill="url(#${id}-fade-x)"/></mask><mask id="${id}-mask-y"><rect x="40" y="40" width="440" height="440" fill="url(#${id}-fade-y)"/></mask></defs><g class="unit-coordinate-grid" aria-hidden="true"><g mask="url(#${id}-mask-x)"><g mask="url(#${id}-mask-y)"><g class="unit-grid-minor">${minor}</g><g class="unit-grid-major">${major}</g></g></g><path class="unit-axes" d="M40 260H480M260 40V480"/><text x="490" y="268" class="unit-axis-label">x</text><text x="271" y="32" class="unit-axis-label">y</text></g>`,labels:`<g class="unit-tick-labels" aria-hidden="true">${labels}</g>`};
}
function drawCircle(svg,ps,{project=true}={}) {
  const {grid,labels}=circleGrid(svg.id);
  let art=grid+'<circle cx="260" cy="260" r="170" class="unit-circle"/>';
  ps.forEach((p,i)=>{
    const X=center+p.x*unit,Y=center-p.y*unit,color=p.color||(i?"var(--violet)":"var(--coral)"),same=i>0&&Math.hypot(p.x-ps[0].x,p.y-ps[0].y)<1e-10;
    if(project&&i===0)art+=`<path d="M260 260H${X}V${Y}Z" fill="rgba(255,107,72,.045)"/><path d="M260 260H${X}" fill="none" stroke="var(--violet)" stroke-width="4"/><path d="M${X} 260V${Y}" fill="none" stroke="var(--coral)" stroke-width="4"/>`;
    art+=`<path class="rt-radius" d="M260 260L${X} ${Y}" fill="none" stroke="${i?color:'var(--ink)'}" stroke-width="${i?3:4}"/><circle class="rt-terminal-point" cx="${X}" cy="${Y}" r="${i?4:7}" fill="${color}"/>`;
    const shared=i===0&&ps.slice(1).some(q=>Math.hypot(p.x-q.x,p.y-q.y)<1e-10);
    if(!shared&&!same)art+=`<text x="${X+(p.x<-.85?-15:p.x>.85?15:0)}" y="${Y+(p.y>=0?-16:27)}" text-anchor="${p.x<-.85?'end':p.x>.85?'start':'middle'}" class="unit-point-label">${i?'Q':'P'}</text>`;
    if(same)art+=`<text x="${X}" y="${Y+(p.y>=0?-16:27)}" text-anchor="middle" class="unit-point-label">P = Q</text>`;
  });
  svg.innerHTML=art+labels;
  svg.setAttribute("aria-label",`Unit circle. ${ps.map((p,i)=>`${i?'Q':'P'} = (${fmt(p.x)}, ${fmt(p.y)})`).join('. ')}.`);
}
drawCircle($("rt-hero-chart"),[{x:-Math.sqrt(3)/2,y:1/2}]);

function readInput() {
  if($("rt-input-mode").value==="pi"){
    let n=$("rt-n").valueAsNumber,d=$("rt-d").valueAsNumber;
    if(!Number.isInteger(n)||!Number.isInteger(d)||Math.abs(n)>100000||Math.abs(d)>100000||d===0)return {error:"Use integer coefficients within ±100,000 and a nonzero denominator."};
    [n,d]=rational(n,d);const p=((n%(2*d))+2*d)%(2*d),t=p*Math.PI/d;
    return {t,tex:piFraction(n,d),principal:piFraction(p,d),exact:exactValues(t)};
  }
  const value=$("rt-decimal").valueAsNumber;
  if(!Number.isFinite(value)||Math.abs(value)>1e6||Math.abs(value*1e6-Math.round(value*1e6))>1e-4)return {error:"Enter finite radians within ±1,000,000, with at most six decimal places."};
  return {t:principal(value),tex:fmt(value,6),principal:fmt(principal(value),6),exact:value===0?exactValues(0):null};
}
function renderExplorer() {
  const pi=$("rt-input-mode").value==="pi";$("rt-pi-controls").hidden=!pi;$("rt-decimal-controls").hidden=pi;
  const input=readInput();
  if(input.error){$("rt-explorer-reading").textContent=input.error;$("rt-explorer-chart").innerHTML="";$("rt-explorer-values").innerHTML="";return;}
  const [x,y]=coordinates(input.t),values=numericValues(x,y),blocked=functionKeys.filter(key=>values[key]===null);
  $("rt-explorer-reading").innerHTML=E(`t=${input.tex}\\ \\text{rad}`)+E(`P(t)${input.exact?'=':'\\approx'}${pair(valueTex(x,input.exact?.cos),valueTex(y,input.exact?.sin))}`)+`<p><strong>${location(x,y)}</strong>. ${input.exact?'The six displayed values are exact.':'The displayed coordinates and function values are approximations.'}</p><p>${blocked.length?`${blocked.join(' and ')} ${blocked.length>1?'are':'is'} undefined at this input. Other function values can still be zero.`:'Every denominator is nonzero, so all six functions are defined.'}</p>`;
  $("rt-explorer-values").innerHTML=ratioCards(values,input.exact);drawCircle($("rt-explorer-chart"),[{x,y}]);
}
let playing=false,animation=null;
function stopAnimation(){playing=false;if(animation!==null)cancelAnimationFrame(animation);animation=null;$("rt-play").textContent="Animate one positive turn";$("rt-play").setAttribute("aria-pressed","false");$("rt-explorer-reading").setAttribute("aria-live","polite");$("rt-explorer-values").setAttribute("aria-live","polite");}
["rt-input-mode","rt-n","rt-d","rt-decimal"].forEach(id=>$(id).addEventListener($(id).tagName==="SELECT"?"change":"input",()=>{stopAnimation();renderExplorer();}));
document.querySelectorAll("[data-rt-input]").forEach(button=>button.addEventListener("click",()=>{
  stopAnimation();const [mode,n,d]=button.dataset.rtInput.split(',');$("rt-input-mode").value=mode;
  if(mode==="pi"){$("rt-n").value=n;$("rt-d").value=d;}else $("rt-decimal").value=n;renderExplorer();
}));
$("rt-play").addEventListener("click",()=>{
  if(playing){stopAnimation();return;}
  $("rt-input-mode").value="pi";$("rt-d").value=12;$("rt-n").value=0;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){$("rt-n").value=24;renderExplorer();return;}
  renderExplorer();playing=true;$("rt-play").textContent="Pause the turn";$("rt-play").setAttribute("aria-pressed","true");$("rt-explorer-reading").setAttribute("aria-live","off");$("rt-explorer-values").setAttribute("aria-live","off");let last=null;
  const frame=time=>{if(!playing)return;if(last===null)last=time;if(time-last>=100){$("rt-n").value=Number($("rt-n").value)+1;renderExplorer();last=time;}if(Number($("rt-n").value)>=24){stopAnimation();return;}animation=requestAnimationFrame(frame);};animation=requestAnimationFrame(frame);
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAnimation();});window.addEventListener('pagehide',stopAnimation);renderExplorer();

initMathDropdown("rt-point",points.map(p=>p.tex),M);
function renderPoint() {
  const p=points[Number($("rt-point").dataset.value)],key=$("rt-point-function").value,meta=passports[key],values=numericValues(p.x,p.y),value=values[key];
  const coordinateTex={x:p.exact.cos,y:p.exact.sin,'1':'1'};
  const substitution=meta.denominator?String.raw`\frac{${coordinateTex[meta.numerator]}}{${coordinateTex[meta.denominator]}}`:coordinateTex[meta.numerator];
  $("rt-point-reading").innerHTML=`<strong>We are looking for the exact value of ${M(command(key)+'t')}.</strong>`+E(`${command(key)}t=${meta.formula}`)+E(`${command(key)}t${value===null?'\\text{ is undefined}':`=${substitution}=${p.exact[key]}`}`)+`<p>${value===null?`The denominator ${meta.denominator} equals 0. A reciprocal or quotient with that denominator is undefined.`:meta.denominator?'Substitute the known coordinates and simplify. A zero numerator is allowed when the denominator is nonzero.':'On the unit circle, this function reads one coordinate directly.'}</p>`;
  $("rt-point-values").innerHTML=ratioCards(values,p.exact);drawCircle($("rt-point-chart"),[{x:p.x,y:p.y}]);
}
$("rt-point").addEventListener('change',renderPoint);$("rt-point-function").addEventListener('change',renderPoint);renderPoint();
function renderDomain() {
  const key=$("rt-domain-function").value,meta=passports[key],n=Number($("rt-domain-t").value),t=n*Math.PI/12,[x,y]=coordinates(t),exact=exactValues(t),v=numericValues(x,y)[key],q=meta.period===1?{x:-x,y:-y}:{x,y};
  $("rt-domain-t-value").textContent=piFraction(n,12).replaceAll('\\pi','π').replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g,'$1/$2');
  $("rt-domain-reading").innerHTML=`<strong>We are looking for where ${M(command(key)+'t')} is defined and when it repeats.</strong>`+E(`t=${piFraction(n,12)}`)+`<p class="rt-domain-status ${v===null?'is-blocked':'is-open'}">${v===null?'Input blocked: denominator is zero.':'Input allowed.'}</p><p>${meta.restriction}</p>`+E(`${command(key)}t${v===null?'\\text{ is undefined}':'='+valueTex(v,exact?.[key])}`)+`<p>Least positive period: ${M(piFraction(meta.period))}.</p>`+E(`${command(key)}(t+${piFraction(meta.period)})=${command(key)}t`)+`<p>${v===null?'The shifted input is excluded too. This periodic identity is used on the function’s domain.':meta.period===1?'A half-turn reverses x and y together, so their quotient stays the same.':'A full turn returns to the same point, so the function value stays the same.'}</p>`;
  drawCircle($("rt-domain-chart"),[{x,y},{...q,color:'var(--violet)'}],{project:false});
}
$("rt-domain-function").addEventListener('change',renderDomain);$("rt-domain-t").addEventListener('input',renderDomain);renderDomain();
function bindStepper(id,caseId,cases,{recovery=false}={}) {
  initMathDropdown(caseId,cases.map(c=>c.given),M);let index=0;
  const render=()=>{
    const choice=Number($(caseId).dataset.value),c=cases[choice],goal=$(id+'-goal'),[tex,text]=c.steps[index];
    if(goal.dataset.case!==String(choice)){goal.dataset.case=String(choice);goal.innerHTML=`<strong>We are looking for the exact ${recovery?'values of':'value of'}:</strong>${E(recovery?c.goal:c.given)}`;}
    if(recovery)drawCircle($("rt-recovery-chart"),[{x:c.point[0],y:c.point[1]}]);
    $(id+'-step').innerHTML=`<p class="tool-label">Move ${index+1}</p>${E(tex)}<p>${text}</p>`;$(id+'-progress').textContent=`Step ${index+1} of ${c.steps.length}`;$(id+'-back').disabled=index===0;$(id+'-next').disabled=index===c.steps.length-1;
  };
  $(caseId).addEventListener('change',()=>{index=0;render();});$(id+'-back').addEventListener('click',()=>{if(index>0)index--;render();});$(id+'-next').addEventListener('click',()=>{if(index<cases[Number($(caseId).dataset.value)].steps.length-1)index++;render();});render();
}
bindStepper('rt-recovery','rt-recovery-case',recoveries,{recovery:true});bindStepper('rt-exact','rt-exact-case',evaluations);
function renderParity() {
  const key=$("rt-parity-function").value,meta=passports[key],n=Number($("rt-parity-t").value),t=n*Math.PI/12,[x,y]=coordinates(t),v=numericValues(x,y)[key],w=numericValues(x,-y)[key],exact=exactValues(t),negative=exactValues(-t);
  $("rt-parity-t-value").textContent=piFraction(n,12).replaceAll('\\pi','π').replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g,'$1/$2');
  $("rt-parity-reading").innerHTML=`<strong>We are looking for the relationship between ${M(command(key)+'(-t)')} and ${M(command(key)+'t')}.</strong>`+E(`${command(key)}(-t)=${meta.parity==='odd'?'-':''}${command(key)}t`)+`<p><strong>${key} is ${meta.parity}.</strong> ${meta.parity==='even'?'The value is preserved by reflection.':'The value changes sign under reflection.'}</p>`+E(`${command(key)}(${piFraction(n,12)})=${valueTex(v,exact?.[key])}`)+E(`${command(key)}(${piFraction(-n,12)})=${valueTex(w,negative?.[key])}`)+`<p>${v===null?'Both inputs are excluded. Apply the even/odd identity only where the function is defined.':'Both inputs are allowed. The computed values agree with the identity.'}</p>`;
  drawCircle($("rt-parity-chart"),[{x,y},{x,y:-y,color:'var(--violet)'}],{project:false});
}
$("rt-parity-function").addEventListener('change',renderParity);$("rt-parity-t").addEventListener('input',renderParity);renderParity();
initMathDropdown('rt-simplify',simplifications.map(c=>c[0]),M);
function renderSimplify(){const [given,result,text]=simplifications[Number($("rt-simplify").dataset.value)];$("rt-simplify-reading").innerHTML=E(given+'='+result)+`<p>${text}</p>`;}
$("rt-simplify").addEventListener('change',renderSimplify);renderSimplify();
checks.forEach((q,i)=>initMathDropdown(`rt-practice-${i}`,q[2],M));
const solved=new Set();document.querySelectorAll('[data-rt-check]').forEach(button=>button.addEventListener('click',()=>{
  const i=Number(button.dataset.rtCheck),choice=$("rt-practice-"+i).dataset.value;
  if(choice===''){setFeedback($("rt-feedback-"+i),false,'Choose an answer first.');return;}
  const correct=Number(choice)===checks[i][3];if(correct)solved.add(i);setFeedback($("rt-feedback-"+i),correct,(correct?'Correct. ':'Try again. ')+checks[i][4]);$("rt-score").textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?' · Ready to move on!':''}`;
}));
initLessonChrome();
