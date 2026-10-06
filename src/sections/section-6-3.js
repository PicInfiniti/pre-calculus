import "../assets/sass/lesson.sass";
import katex from "katex";
import "katex/dist/katex.min.css";
import { initLessonChrome, renderLessonHeader, renderLessonFooter, setFeedback } from "./shared";

const M = tex => `<span class="laws-math">${katex.renderToString(String.raw`\displaystyle ` + tex, { throwOnError: true, strict: "ignore" })}</span>`;
const $ = id => document.getElementById(id);
const command = name => String.fromCharCode(92) + name;
const equation = tex => `<div class="laws-equation">${M(tex)}</div>`;
const fmt = (n, digits = 4) => Number(n.toFixed(digits)).toString();
const intro = (n, topic, title, text) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> ${topic}</p><h2>${title}</h2><p>${text}</p></div>`;
const range = (id, title, min, max, step, value) => `<label for="${id}">${title}<output id="${id}-value"></output></label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">`;
const num = (id, title, value, step='any') => `<label for="${id}">${title}</label><input type="number" id="${id}" value="${value}" step="${step}">`;
const plot = (id, label) => `<svg id="${id}" viewBox="0 0 520 520" role="img" aria-label="${label}"></svg>`;
const choices = (name, legend, items) => `<fieldset class="laws-choices"><legend>${legend}</legend>${items.map(([value, tex],i)=>`<label><input type="radio" name="${name}" value="${value}" ${i===0?'checked':''}><span>${M(tex)}</span></label>`).join('')}</fieldset>`;
const selected = name => document.querySelector(`[name="${name}"]:checked`).value;
const stepper = id => `<div id="${id}-step" class="trig-step" aria-live="polite"></div><p id="${id}-progress" class="laws-progress"></p><div class="laws-step-buttons"><button type="button" class="laws-button" id="${id}-back">← Previous step</button><button type="button" class="laws-button" id="${id}-next">Next step →</button></div>`;
const functions = ['sin','cos','tan','csc','sec','cot'];
const undefinedTex = String.raw`\text{undefined}`;
const definitions = { sin:'y/r', cos:'x/r', tan:'y/x', csc:'r/y', sec:'r/x', cot:'x/y' };
const signs = [[1,1,1], [1,-1,-1], [-1,-1,1], [-1,1,-1]];
const romans = ['I','II','III','IV'];
const functionColumn = name => ({sin:0,csc:0,cos:1,sec:1,tan:2,cot:2})[name];
const normal = degrees => {const n=((degrees%360)+360)%360;return Math.abs(n)<1e-9||Math.abs(n-360)<1e-9?0:n;};
function position(degrees) {
  const n=normal(degrees);
  if(Math.abs(n/90-Math.round(n/90))<1e-10)return ['Positive x-axis','Positive y-axis','Negative x-axis','Negative y-axis'][Math.round(n/90)%4];
  return 'Quadrant '+romans[Math.floor(n/90)];
}
const reference = degrees => {const n=normal(degrees);return n<=90?n:n<=180?180-n:n<=270?n-180:360-n;};
function coordinates(degrees,r=1) {
  const n=normal(degrees),a=n*Math.PI/180;
  if(Math.abs(n/90-Math.round(n/90))<1e-10)return [[r,0],[0,r],[-r,0],[0,-r]][Math.round(n/90)%4];
  return [r*Math.cos(a),r*Math.sin(a)];
}
function numericRatios(x,y,r) {
  return {sin:y/r,cos:x/r,tan:x===0?null:y/x,csc:y===0?null:r/y,sec:x===0?null:r/x,cot:y===0?null:x/y};
}
const gcd = (a,b) => {a=Math.abs(a);b=Math.abs(b);while(b){const t=a%b;a=b;b=t;}return a||1;};
function rational(n,d) {if(d<0){n=-n;d=-d;}const g=gcd(n,d);return [n/g,d/g];}
function fraction(n,d) {
  [n,d]=rational(n,d);if(n===0)return '0';const sign=n<0?'-':'';
  return d===1?String(n):String.raw`${sign}\frac{${Math.abs(n)}}{${d}}`;
}
function piFraction(n,d) {
  [n,d]=rational(n,d);if(n===0)return '0';const sign=n<0?'-':'';n=Math.abs(n);
  const top=String.raw`${n===1?'':n}\pi`;return d===1?sign+top:String.raw`${sign}\frac{${top}}{${d}}`;
}
function radicalFraction(n,d,q) {
  if(d===0)return undefinedTex;if(q===1)return fraction(n,d);
  [n,d]=rational(n,d);if(n===0)return '0';const sign=n<0?'-':'';
  const top=String.raw`${Math.abs(n)===1?'':Math.abs(n)}\sqrt{${q}}`;
  return d===1?sign+top:String.raw`${sign}\frac{${top}}{${d}}`;
}
function squareParts(n) {
  for(let k=Math.floor(Math.sqrt(n));k>=1;k--)if(n%(k*k)===0)return [k,n/(k*k)];
}
function exactPoint(x,y) {
  const [k,q]=squareParts(x*x+y*y);
  return {r:radicalFraction(k,1,q),sin:radicalFraction(y,k*q,q),cos:radicalFraction(x,k*q,q),tan:x===0?undefinedTex:fraction(y,x),csc:radicalFraction(k,y,q),sec:radicalFraction(k,x,q),cot:y===0?undefinedTex:fraction(x,y)};
}
const special = {
  0:['0','1','0',undefinedTex,'1',undefinedTex],
  30:[String.raw`\frac12`,String.raw`\frac{\sqrt3}{2}`,String.raw`\frac{\sqrt3}{3}`,'2',String.raw`\frac{2\sqrt3}{3}`,String.raw`\sqrt3`],
  45:[String.raw`\frac{\sqrt2}{2}`,String.raw`\frac{\sqrt2}{2}`,'1',String.raw`\sqrt2`,String.raw`\sqrt2`,'1'],
  60:[String.raw`\frac{\sqrt3}{2}`,String.raw`\frac12`,String.raw`\sqrt3`,String.raw`\frac{2\sqrt3}{3}`,'2',String.raw`\frac{\sqrt3}{3}`],
  90:['1','0',undefinedTex,'1',undefinedTex,'0'],
};
function exactAngle(degrees) {
  const a=reference(degrees),base=Object.keys(special).map(Number).find(n=>Math.abs(n-a)<1e-8);
  if(base===undefined)return null;
  const [x,y]=coordinates(degrees),values=numericRatios(x,y,1);
  return Object.fromEntries(functions.map((key,i)=>[key,values[key]===null?undefinedTex:values[key]===0?'0':(values[key]<0?'-':'')+special[base][i]]));
}
function ratioCards(values,exact=null) {
  return functions.map(key=>`<div><span>${M(String.raw`${command(key)}\theta`)}</span><strong>${M(exact?exact[key]:values[key]===null?undefinedTex:fmt(values[key]))}</strong>${exact?'':`<small>${values[key]===null?'Zero denominator':'Approximate value'}</small>`}</div>`).join('');
}
const deductions = [
  {prompt:String.raw`\cot\theta=\frac14,\quad\sin\theta<0`,point:[-1,-4],steps:[
    ['Determine the quadrant',String.raw`\cot\theta>0,\ \sin\theta<0\ \Rightarrow\ \text{Quadrant III}`, 'Cotangent is positive in I and III; negative sine selects III. Both coordinates are negative.'],
    ['Choose coordinates with the correct signs',String.raw`\frac xy=\frac14:\quad x=-1,\ y=-4,\ r=\sqrt{17}`, 'These coordinates describe a convenient point on the terminal ray. The radius is positive.'],
    ['Read the primary ratios',String.raw`\tan\theta=4,\quad\sin\theta=-\frac{4\sqrt{17}}{17},\quad\cos\theta=-\frac{\sqrt{17}}{17}`, 'Use y/x, y/r, and x/r, then rationalize the denominators.'],
    ['Take the reciprocals',String.raw`\csc\theta=-\frac{\sqrt{17}}4,\quad\sec\theta=-\sqrt{17}`, 'Sine and cosecant have the same sign; cosine and secant have the same sign.'],
  ]},
  {prompt:String.raw`\tan\theta=-\frac12,\quad\theta\text{ in IV}`,point:[2,-1],steps:[
    ['Choose signed coordinates',String.raw`x=2,\quad y=-1`, 'In IV, x is positive and y is negative. Their ratio y/x is −1/2.'],
    ['Find the radius',String.raw`r=\sqrt{2^2+(-1)^2}=\sqrt5`, 'A distance is positive even when a coordinate is negative.'],
    ['Evaluate the reciprocal ratio',String.raw`\csc\theta=\frac ry=-\sqrt5`, 'The y-coordinate is negative, so cosecant is negative.'],
  ]},
  {prompt:String.raw`\cos\theta=-\frac34,\quad\sin\theta<0`,point:[-3,-Math.sqrt(7)],steps:[
    ['Locate the terminal side',String.raw`\cos\theta<0,\ \sin\theta<0\ \Rightarrow\ \text{III}`, 'Both coordinates are negative. Choose x = −3 and r = 4.'],
    ['Recover the signed vertical coordinate',String.raw`y=-\sqrt{4^2-(-3)^2}=-\sqrt7`, 'Choose the negative root because sine is negative.'],
    ['Multiply the ratios',String.raw`\tan\theta\sec\theta=\frac{\sqrt7}{3}\left(-\frac43\right)=-\frac{4\sqrt7}{9}`, 'Tangent is positive in III, while secant is negative.'],
  ]},
  {prompt:String.raw`\tan\theta=-4,\quad\csc\theta>0`,point:[-1,4],steps:[
    ['Combine the sign clues',String.raw`\tan\theta<0,\ \sin\theta>0\ \Rightarrow\ \text{II}`, 'Cosecant and sine share a sign. Positive y and negative tangent require negative x.'],
    ['Build a representative point',String.raw`x=-1,\quad y=4,\quad r=\sqrt{17}`, 'The ratio y/x is −4 and the radius is positive.'],
    ['Add the ratios',String.raw`\cos\theta+\sin\theta=\frac{-1+4}{\sqrt{17}}=\frac{3\sqrt{17}}{17}`, 'Use the same radius as the denominator for both terms.'],
  ]},
];
const evaluations = [
  {prompt:String.raw`\cot1590^\circ`,degrees:1590,steps:[
    ['Remove full turns',String.raw`1590^\circ-4(360^\circ)=150^\circ`, 'The terminal side is in Quadrant II.'],
    ['Find the reference angle',String.raw`\alpha=180^\circ-150^\circ=30^\circ`, 'Measure the small opening from the negative x-axis.'],
    ['Evaluate and attach the sign',String.raw`\cot1590^\circ=-\cot30^\circ=-\sqrt3`, 'Cotangent is negative in II.'],
  ]},
  {prompt:String.raw`\tan(-420^\circ)`,degrees:-420,steps:[
    ['Find a coterminal angle in one turn',String.raw`-420^\circ+2(360^\circ)=300^\circ`, 'The terminal side is in Quadrant IV.'],
    ['Find the reference angle',String.raw`\alpha=360^\circ-300^\circ=60^\circ`, 'The reference angle is nonnegative.'],
    ['Evaluate and attach the sign',String.raw`\tan(-420^\circ)=-\tan60^\circ=-\sqrt3`, 'Tangent is negative in IV.'],
  ]},
  {prompt:String.raw`\cos\left(-\frac{11\pi}4\right),\quad\csc\left(-\frac{11\pi}4\right)`,degrees:-495,steps:[
    ['Add complete turns',String.raw`-\frac{11\pi}4+4\pi=\frac{5\pi}4`, 'The terminal side is in Quadrant III.'],
    ['Find the reference angle',String.raw`\alpha=\frac{5\pi}4-\pi=\frac\pi4`, 'The reference triangle is a 45°–45°–90° triangle.'],
    ['Assign signs to each ratio',String.raw`\cos\left(-\frac{11\pi}4\right)=-\frac{\sqrt2}{2}`, 'Cosine is negative in III.'],
    ['Use the reciprocal pair',String.raw`\csc\left(-\frac{11\pi}4\right)=-\sqrt2`, 'Sine and cosecant are also negative in III.'],
  ]},
];
const checks = [
  ['Signed point',String.raw`P=(-3,4):\quad\sin\theta=\ ?`,[String.raw`4/5`,String.raw`-3/5`,String.raw`-4/3`],0,'The radius is 5. Sine is y/r = 4/5.'],
  ['Quadrant III',String.raw`P=(-5,-12):\quad\tan\theta=\ ?`,[String.raw`-12/5`,String.raw`12/5`,String.raw`-5/13`],1,'Both coordinates are negative, so y/x = 12/5 is positive.'],
  ['Axis value',String.raw`\tan(\pi/2)=\ ?`,['0','1',undefinedTex],2,'At π/2 the x-coordinate is zero; tangent y/x is undefined.'],
  ['Zero, not undefined',String.raw`\cot(3\pi/2)=\ ?`,['0','-1',undefinedTex],0,'Here x = 0 and y = −r. Cotangent x/y equals zero.'],
  ['Sign clues',String.raw`\csc\theta<0,\quad\cos\theta>0`,[String.raw`\text{II}`,String.raw`\text{III}`,String.raw`\text{IV}`],2,'Negative cosecant means negative y. Positive cosine means positive x: Quadrant IV.'],
  ['Choose a signed root',String.raw`\tan\theta=-1/2\text{ in IV}:\quad\csc\theta=\ ?`,[String.raw`\sqrt5`,String.raw`-\sqrt5`,String.raw`-1/\sqrt5`],1,'Choose x = 2 and y = −1. Then r = √5 and r/y = −√5.'],
  ['Reference angle',String.raw`\theta=622^\circ:\quad\alpha=\ ?`,['82^\\circ','98^\\circ','262^\\circ'],0,'622° − 360° = 262° in III, so the reference angle is 262° − 180° = 82°.'],
  ['Negative turns',String.raw`\theta=-725^\circ:\quad\alpha=\ ?`,['355^\\circ','5^\\circ','-5^\\circ'],1,'Add 1080° to get 355°. The reference angle is 360° − 355° = 5°.'],
  ['Exact reference angle',String.raw`\theta=-24\pi/7:\quad\alpha=\ ?`,[String.raw`3\pi/7`,String.raw`4\pi/7`,String.raw`-3\pi/7`],0,'Add 4π to get 4π/7 in II. Its reference angle is π − 4π/7 = 3π/7.'],
  ['Decimal radians',String.raw`\theta=2.3:\quad\alpha=\ ?`,[String.raw`\pi-2.3`,String.raw`2.3-\pi`,String.raw`2\pi-2.3`],0,'The angle 2.3 radians is in II, so its exact reference angle is π − 2.3.'],
  ['Evaluate a large angle',String.raw`\cot1590^\circ=\ ?`,[String.raw`\sqrt3`,String.raw`-\sqrt3`,String.raw`-\sqrt3/3`],1,'Reduce to 150°, use reference angle 30°, and make cotangent negative in II.'],
  ['Evaluate a negative angle',String.raw`\cos(-11\pi/4)=\ ?`,[String.raw`\sqrt2/2`,String.raw`-\sqrt2/2`,'0'],1,'A coterminal angle is 5π/4 in III, with reference angle π/4 and negative cosine.'],
];

const functionOptions = functions.map(key=>`<option value="${key}">${key}</option>`).join('');
document.querySelector('#app').innerHTML=`${renderLessonHeader('6.3')}<main class="laws-lesson general-lesson">
<section class="lesson-hero lesson-hero--general"><div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 6.3</span> Trigonometric functions of angles</p><h1>One ray.<br><em>Every quadrant.</em></h1><p class="lesson-hero__lede">The triangle gives you the magnitudes. Coordinates give you the signs. Extend the six trig ratios to any angle, including negative rotations and multiple turns.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#orbit">Follow the terminal side</a><span>About 40 minutes · interactive</span></div></div><div class="general-hero-art" data-reveal><p class="tool-label">Signed coordinates. Positive radius.</p>${plot('general-hero-chart','A terminal ray in Quadrant II and its reference triangle')}<div class="general-hero-equation">${M(String.raw`\sin\theta=\frac{\color{#c4482a}y}{r},\quad\cos\theta=\frac{\color{#6844a6}x}{r}`)}</div><p>The radius stays positive. The coordinates can change sign.</p></div></section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Compute six ratios from signed coordinates</p></li><li><span>02</span><p>Use quadrant clues and axis values</p></li><li><span>03</span><p>Find exact reference angles in either unit</p></li><li><span>04</span><p>Evaluate general angles with correct signs</p></li></ol></section>
<section class="lesson-section" id="orbit">${intro('01','Extend the definitions','Keep the radius positive.<br>Let the coordinates speak.',`Place the angle in standard position and choose a nonzero point ${M('P(x,y)')} on its terminal ray. The distance is ${M(String.raw`r=\sqrt{x^2+y^2}>0`)}. Replacing side lengths with coordinates makes the ratios work in every quadrant.`)}
<div class="general-definitions">${functions.map(key=>`<article>${equation(String.raw`${command(key)}\theta=\frac{${definitions[key][0]}}{${definitions[key][2]}}`)}<p>${['tan','sec'].includes(key)?'Undefined when x = 0':['cot','csc'].includes(key)?'Undefined when y = 0':'Defined for every angle'}</p></article>`).join('')}</div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Rotating-ray observatory</p>${range('orbit-angle','Angle θ (degrees)',-720,720,1,150)}${range('orbit-radius','Distance r',.5,4,.5,3)}<div class="general-presets">${[0,90,150,180,225,270,330,-90,450].map(d=>`<button type="button" data-orbit="${d}">${M(`${d}^\\circ`)}</button>`).join('')}</div><button type="button" class="laws-button" id="orbit-play" aria-pressed="false">Animate the ray</button><div class="laws-note" id="orbit-reading" aria-live="polite"></div><p>Change r while keeping θ fixed. All coordinates scale together, so every ratio stays the same.</p></div><div class="general-plot">${plot('orbit-chart','Angle, signed coordinates, and reference triangle')}<div class="general-ratio-grid" id="orbit-ratios" aria-live="polite"></div></div></div><aside class="laws-note">A zero numerator gives a value of <strong>zero</strong>. A zero denominator gives an <strong>undefined</strong> ratio. These are different outcomes. The origin cannot determine a terminal ray.</aside></section>
<section class="lesson-section lesson-section--soft" id="point">${intro('02','Work it out','Choose a point.<br>Recover six exact ratios.',`Coordinates carry their signs into the formulas. Squaring them gives a positive radius. For a reference triangle, the leg lengths are ${M('|x|')} and ${M('|y|')}; signed coordinates remain ${M('x')} and ${M('y')}.`)}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Signed-point calculator</p>${range('point-x','Coordinate x',-12,12,1,-3)}${range('point-y','Coordinate y',-12,12,1,4)}<div class="general-presets">${[[-3,4],[-5,-12],[-3,2],[0,4],[-3,0],[0,0]].map(([x,y])=>`<button type="button" data-point="${x},${y}">${M(`(${x},${y})`)}</button>`).join('')}</div><div class="laws-note" id="point-reading" aria-live="polite"></div><div class="general-ratio-grid" id="point-ratios" aria-live="polite"></div></div><div class="general-plot">${plot('point-chart','Point on a terminal ray with signed coordinates')}<p class="general-caption">Violet: x-coordinate · coral: y-coordinate · green: radius. The grid uses equal units on both axes and adjusts its extent to keep the point visible.</p></div></div></section>
<section class="lesson-section" id="signs">${intro('03','Find the quadrant','Two sign clues.<br>One possible region.', 'Sine and cosecant share the sign of y. Cosine and secant share the sign of x. Tangent and cotangent share the sign of y/x. Combine clues by intersecting the possible quadrants.')}
<div class="general-sign-map">${romans.map((roman,i)=>`<article><strong>Quadrant ${roman}</strong><p>${['All six positive','Sine and cosecant positive','Tangent and cotangent positive','Cosine and secant positive'][i]}</p><span>${M(String.raw`(\sin,\cos,\tan):\ (${signs[i].map(v=>v>0?'+':'-').join(',')})`)}</span></article>`).join('')}</div><p class="general-caption">Counterclockwise from Quadrant I: All, Sine, Tangent, Cosine. Reciprocal partners keep the same sign.</p>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Quadrant clue finder</p><label for="clue-first">First function</label><select id="clue-first">${functionOptions}</select><label for="clue-first-sign">First sign</label><select id="clue-first-sign"><option value="1">Positive</option><option value="-1" selected>Negative</option></select><label for="clue-second">Second function</label><select id="clue-second">${functionOptions}</select><label for="clue-second-sign">Second sign</label><select id="clue-second-sign"><option value="1">Positive</option><option value="-1">Negative</option></select></div><div class="laws-result"><div class="general-quadrant-grid" id="clue-map"></div><div class="laws-note" id="clue-reading" aria-live="polite"></div></div></div><aside class="laws-note">Strict positive or negative clues exclude a function's zeros and undefined values. Some pairs leave two possible quadrants; conflicting reciprocal signs leave none.</aside>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Ratio and sign reconstruction</p>${choices('deduction-case','Choose the known information',deductions.map((c,i)=>[i,c.prompt]))}<div class="general-plot general-plot--compact">${plot('deduction-chart','Signed reference triangle for ratio reconstruction')}</div></div><div class="laws-result">${stepper('deduction')}</div></div></section>
<section class="lesson-section lesson-section--soft" id="reference">${intro('04','Find the small opening','Reduce the turns.<br>Measure from the x-axis.',`The reference angle ${M(String.raw`\alpha`)} is the smallest nonnegative opening between the terminal ray and the x-axis. It lies in ${M(String.raw`[0,\pi/2]`)}. On an axis it can be 0 or ${M(String.raw`\pi/2`)}; the reference triangle then collapses.`)}
<div class="general-reference-rules">${[['I',String.raw`\alpha=\theta_0`],['II',String.raw`\alpha=\pi-\theta_0`],['III',String.raw`\alpha=\theta_0-\pi`],['IV',String.raw`\alpha=2\pi-\theta_0`]].map(([q,tex])=>`<article><strong>Quadrant ${q}</strong>${equation(tex)}</article>`).join('')}</div><p class="general-caption">Here ${M(String.raw`0\le\theta_0<2\pi`)} is the coterminal angle within one positive turn. In degrees, replace π and 2π with 180° and 360°.</p>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Exact reference-angle workbench</p><label for="reference-mode">Angle format</label><select id="reference-mode"><option value="degrees">Degrees</option><option value="pi">Exact multiple of π</option><option value="radians">Decimal radians</option></select><div id="reference-degrees-controls">${num('reference-degrees','Degrees',622)}</div><div id="reference-pi-controls" hidden><p>Angle = ${M(String.raw`(n/d)\pi`)}.</p>${num('reference-n','Numerator n',15,1)}${num('reference-d','Denominator d',4,1)}</div><div id="reference-radians-controls" hidden>${num('reference-radians','Radians',2.3)}</div><div class="general-presets">${[['degrees',174,1,'174^\\circ'],['degrees',622,1,'622^\\circ'],['degrees',-725,1,'-725^\\circ'],['pi',15,4,String.raw`15\pi/4`],['pi',8,3,String.raw`8\pi/3`],['pi',-17,6,String.raw`-17\pi/6`],['pi',11,9,String.raw`11\pi/9`],['pi',-24,7,String.raw`-24\pi/7`],['radians',2.3,1,'2.3'],['pi',-10,1,String.raw`-10\pi`]].map(([mode,n,d,tex])=>`<button type="button" data-reference="${mode},${n},${d}">${M(tex)}</button>`).join('')}</div><div class="laws-note" id="reference-reading" aria-live="polite"></div></div><div class="general-plot">${plot('reference-chart','Reference angle from the terminal ray to the nearest x-axis')}<div class="general-ratio-grid" id="reference-ratios"></div><p class="general-caption" id="reference-caption"></p></div></div></section>
<section class="lesson-section" id="evaluate">${intro('05','Evaluate exactly','Magnitude from the triangle.<br>Sign from the quadrant.', 'Follow four steps: reduce to one turn, locate the quadrant, find the reference angle, then attach the correct sign to the exact special-angle value. A negative angle does not automatically make its trig values negative.')}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">General-angle evaluation stepper</p>${choices('evaluation-case','Choose an expression',evaluations.map((c,i)=>[i,c.prompt]))}<div class="general-plot general-plot--compact">${plot('evaluation-chart','Reference triangle for an exact trigonometric evaluation')}</div></div><div class="laws-result">${stepper('evaluation')}</div></div><div class="laws-card-grid"><article class="laws-card"><p class="tool-label">Axes have exact values</p>${equation(String.raw`\sin\pi=0,\quad\cos\pi=-1`)}${equation(String.raw`\tan\frac\pi2\ \text{is undefined}`)}${equation(String.raw`\cot\frac{3\pi}2=0`)}<p>Use the coordinate definitions directly when a reference triangle collapses.</p></article><article class="laws-card"><p class="tool-label">A reference angle preserves magnitude</p>${equation(String.raw`\sin150^\circ=\sin30^\circ=\frac12`)}${equation(String.raw`\cos150^\circ=-\cos30^\circ`)}<p>The same reference triangle can produce different signs for different functions.</p></article></div></section>
<section class="lesson-section lesson-section--ink" id="readiness">${intro('06','Practice','Keep the signs.<br>Check the denominator.', 'Coordinates determine the sign. Reference angles determine the magnitude. Before simplifying, check whether the defining denominator is zero.')}<p class="laws-score" id="general-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="laws-check-grid">${checks.map((q,i)=>`<article class="laws-check"><p class="tool-label">${q[0]}</p><h3>${M(q[1])}</h3><fieldset class="laws-choices"><legend>Your answer</legend>${q[2].map((tex,j)=>`<label><input type="radio" name="general-practice-${i}" value="${j}"><span>${M(tex)}</span></label>`).join('')}</fieldset><button type="button" class="laws-button" data-general-check="${i}">Check answer</button><p class="answer-feedback" id="general-feedback-${i}" aria-live="polite"></p></article>`).join('')}</div></section>
</main>${renderLessonFooter({previous:{href:'pages/sections/6-2.html',label:'Section 6.2 · Right-triangle trigonometry'},next:null})}`;

const svgLabel = (x,y,text,color='var(--ink)',anchor='middle') => `<text x="${x}" y="${y}" fill="${color}" text-anchor="${anchor}" class="general-svg-label">${text}</text>`;
const at = (r,d) => [260+r*Math.cos(d*Math.PI/180),260-r*Math.sin(d*Math.PI/180)];
function arc(r,start,sweep) {
  const count=Math.max(2,Math.ceil(Math.abs(sweep)/2));let d='';
  for(let i=0;i<=count;i++){const [x,y]=at(r,start+sweep*i/count);d+=`${i?'L':'M'}${fmt(x,3)} ${fmt(y,3)} `;}return d;
}
// A square viewBox and one unit scale preserve circles and right angles in every viewport.
function scene(svg,x,y,r,{unit=40,degrees=null,showCircle=true,grid=false}={}) {
  const X=260+x*unit,Y=260-y*unit,angle=degrees??Math.atan2(y,x)*180/Math.PI,n=normal(angle),ref=reference(angle);
  let art='';
  if(grid){const extent=Math.ceil(220/unit),step=extent>9?2:1;for(let i=-extent;i<=extent;i+=step){const p=260+i*unit;if(p<40||p>480)continue;art+=`<path d="M${p} 40V480M40 ${p}H480" stroke="var(--line)" stroke-width="1"/>`;if(i!==0)art+=svgLabel(p,282,String(i),'#73808a')+svgLabel(242,520-p+7,String(i),'#73808a','end');}}
  if(showCircle)art+=`<circle cx="260" cy="260" r="${r*unit}" fill="none" stroke="var(--line)" stroke-width="2"/>`;
  art+=`<path d="M30 260H490M260 30V490" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`+svgLabel(490,286,'x')+svgLabel(279,35,'y');
  const start=x<0?180:0,sweep=x<0?(y>=0?-ref:ref):(y>=0?ref:-ref);
  if(ref>0){const [ax,ay]=at(40,start+sweep/2);art+=`<path d="${arc(55,start,sweep)}" fill="none" stroke="var(--gold)" stroke-width="5"/>`+svgLabel(ax,ay+6,'α','#8b5c13');}
  if(degrees!==null&&n!==0)art+=`<path d="${arc(78,0,n)}" fill="none" stroke="var(--violet)" stroke-width="2" stroke-dasharray="5 4"/>`;
  art+=`<path d="M260 260H${X}V${Y}Z" fill="rgba(255,107,72,.08)"/><path d="M260 260H${X}" stroke="#6844a6" stroke-width="5"/><path d="M${X} 260V${Y}" stroke="#c4482a" stroke-width="5"/><path d="M260 260L${X} ${Y}" stroke="#28603a" stroke-width="4"/>`;
  if(x!==0&&y!==0){const sx=x>0?-1:1,sy=y>0?-1:1;art+=`<path d="M${X+sx*12} 260V${260+sy*12}H${X}" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`;}
  art+=`<circle cx="${X}" cy="${Y}" r="6" fill="var(--coral)"/><circle cx="260" cy="260" r="5" fill="var(--ink)"/>`;
  art+=svgLabel(X,Y+(y>=0?-16:29),`P(${fmt(x,2)}, ${fmt(y,2)})`,'var(--ink)',x>3?'end':x< -3?'start':'middle');
  if(!grid){art+=svgLabel((260+X)/2,260+(y>=0?30:-14),'x','#6844a6');art+=svgLabel(X+(x>=0?18:-18),(260+Y)/2,'y','#c4482a');art+=svgLabel((260+X)/2+(x>=0?-18:18),(260+Y)/2+(y>=0?-14:24),'r','#28603a');}
  svg.innerHTML=art;svg.setAttribute('aria-label',`${position(angle)}. Point (${fmt(x)}, ${fmt(y)}). Radius ${fmt(r)}. Reference angle ${fmt(ref)} degrees.`);
}
scene($('general-hero-chart'),...coordinates(150,3),3,{degrees:150,unit:55});
let playing=false,animation=null,lastTime=0;
function stopOrbit(){playing=false;if(animation!==null)cancelAnimationFrame(animation);animation=null;$('orbit-play').textContent='Animate the ray';$('orbit-play').setAttribute('aria-pressed','false');$('orbit-reading').setAttribute('aria-live','polite');$('orbit-ratios').setAttribute('aria-live','polite');}
function renderOrbit() {
  const degrees=Number($('orbit-angle').value),r=Number($('orbit-radius').value),[x,y]=coordinates(degrees,r),values=numericRatios(x,y,r);
  $('orbit-angle-value').textContent=degrees+'°';$('orbit-radius-value').textContent=fmt(r);
  scene($('orbit-chart'),x,y,r,{degrees});
  $('orbit-reading').innerHTML=`<strong>${position(degrees)}</strong>${equation(String.raw`x\approx${fmt(x)},\quad y\approx${fmt(y)}`)}<p>Radius r = ${r}. Reference angle α = ${fmt(reference(degrees))}°. The dashed violet arc shows the terminal position within one positive turn; the gold arc is the reference angle.</p>`;
  const exact=exactAngle(degrees);$('orbit-ratios').innerHTML=ratioCards(values,exact);
}
$('orbit-play').addEventListener('click',()=>{
  if(playing){stopOrbit();return;}
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){$('orbit-angle').value=Number($('orbit-angle').value)>630?-720:Number($('orbit-angle').value)+90;renderOrbit();return;}
  playing=true;lastTime=0;$('orbit-play').textContent='Pause the ray';$('orbit-play').setAttribute('aria-pressed','true');$('orbit-reading').setAttribute('aria-live','off');$('orbit-ratios').setAttribute('aria-live','off');
  const frame=time=>{if(!playing)return;if(!lastTime)lastTime=time;const elapsed=(time-lastTime)/1000;if(elapsed>=1/30){let next=Number($('orbit-angle').value)+Math.max(1,Math.round(elapsed*40));if(next>720)next=-720;$('orbit-angle').value=next;renderOrbit();lastTime=time;}animation=requestAnimationFrame(frame);};animation=requestAnimationFrame(frame);
});
['orbit-angle','orbit-radius'].forEach(id=>$(id).addEventListener('input',()=>{stopOrbit();renderOrbit();}));document.querySelectorAll('[data-orbit]').forEach(btn=>btn.addEventListener('click',()=>{stopOrbit();$('orbit-angle').value=btn.dataset.orbit;renderOrbit();}));document.addEventListener('visibilitychange',()=>{if(document.hidden)stopOrbit();});renderOrbit();
function renderPoint() {
  const x=Number($('point-x').value),y=Number($('point-y').value),r=Math.hypot(x,y);
  $('point-x-value').textContent=x;$('point-y-value').textContent=y;
  if(r===0){$('point-reading').innerHTML='<strong>The origin does not define an angle.</strong><p>Choose a nonzero point. Here r = 0, so the coordinate definitions cannot determine trig values.</p>';$('point-ratios').innerHTML='';$('point-chart').innerHTML='';return;}
  const exact=exactPoint(x,y),degrees=Math.atan2(y,x)*180/Math.PI;
  scene($('point-chart'),x,y,r,{unit:200/Math.max(6,r),grid:true});
  $('point-reading').innerHTML=`<strong>${position(degrees)}</strong>${equation(String.raw`r=\sqrt{(${x})^2+(${y})^2}=${exact.r}`)}<p>Reference triangle legs: ${M(String.raw`|x|=${Math.abs(x)},\ |y|=${Math.abs(y)}`)}. The six answers below are exact.</p>`;
  $('point-ratios').innerHTML=ratioCards(numericRatios(x,y,r),exact);
}
['point-x','point-y'].forEach(id=>$(id).addEventListener('input',renderPoint));document.querySelectorAll('[data-point]').forEach(btn=>btn.addEventListener('click',()=>{const [x,y]=btn.dataset.point.split(',');$('point-x').value=x;$('point-y').value=y;renderPoint();}));renderPoint();
$('clue-first').value='csc';$('clue-second').value='cos';
function renderClues() {
  const a=$('clue-first').value,b=$('clue-second').value,sa=Number($('clue-first-sign').value),sb=Number($('clue-second-sign').value);
  const matches=signs.map((s,i)=>s[functionColumn(a)]===sa&&s[functionColumn(b)]===sb?i:null).filter(i=>i!==null);
  $('clue-map').innerHTML=[1,0,2,3].map(i=>`<div class="${matches.includes(i)?'is-match':''}"><strong>${romans[i]}</strong><span>${matches.includes(i)?'Matches both':'Excluded'}</span></div>`).join('');
  $('clue-reading').innerHTML=equation(String.raw`${command(a)}\theta${sa>0?'>':'<'}0,\quad ${command(b)}\theta${sb>0?'>':'<'}0`)+`<strong>${matches.length===1?'One quadrant: '+romans[matches[0]]:matches.length===0?'No quadrant satisfies both clues.':'Possible quadrants: '+matches.map(i=>romans[i]).join(' and ')}</strong><p>${matches.length===0?'These strict signs conflict. Reciprocal functions must have the same sign.':matches.length===2?'Another independent clue is needed to choose one quadrant.':'The coordinates now have a determined sign.'}</p>`;
}
['clue-first','clue-second','clue-first-sign','clue-second-sign'].forEach(id=>$(id).addEventListener('change',renderClues));renderClues();
function initStepper(id,name,cases,onCase) {
  let step=0;const render=()=>{const index=Number(selected(name)),steps=cases[index].steps;onCase(index);const [title,tex,text]=steps[step];$(id+'-step').innerHTML=`<p class="tool-label">${title}</p>${equation(tex)}<p>${text}</p>`;$(id+'-progress').textContent=`Step ${step+1} of ${steps.length}`;$(id+'-back').disabled=step===0;$(id+'-next').disabled=step===steps.length-1;};
  document.querySelectorAll(`[name="${name}"]`).forEach(input=>input.addEventListener('change',()=>{step=0;render();}));$(id+'-back').addEventListener('click',()=>{if(step>0)step--;render();});$(id+'-next').addEventListener('click',()=>{if(step<cases[Number(selected(name))].steps.length-1)step++;render();});render();
}
initStepper('deduction','deduction-case',deductions,i=>{const [x,y]=deductions[i].point;scene($('deduction-chart'),x,y,Math.hypot(x,y),{unit:40});});
initStepper('evaluation','evaluation-case',evaluations,i=>{const d=evaluations[i].degrees,[x,y]=coordinates(d,3);scene($('evaluation-chart'),x,y,3,{degrees:d,unit:55});});

function piPlusDecimal(coefficient,constant) {
  if(coefficient===0)return fmt(constant,6);
  const term=piFraction(coefficient,1);
  if(constant===0)return term;
  if(coefficient<0&&constant>0)return fmt(constant,6)+term;
  return term+(constant>0?'+':'-')+fmt(Math.abs(constant),6);
}
function validDecimal(value) {
  return Number.isFinite(value)&&Math.abs(value)<=1000000&&Math.abs(value*1000000-Math.round(value*1000000))<1e-4;
}
function renderReference() {
  const mode=$('reference-mode').value;
  ['degrees','pi','radians'].forEach(kind=>$('reference-'+kind+'-controls').hidden=kind!==mode);
  let degrees,originalTex,principalTex,alphaTex,turns;
  const invalid=text=>{$('reference-reading').textContent=text;$('reference-chart').innerHTML='';$('reference-ratios').innerHTML='';$('reference-caption').textContent='';};
  if(mode==='pi') {
    let n=$('reference-n').valueAsNumber,d=$('reference-d').valueAsNumber;
    if(!Number.isInteger(n)||!Number.isInteger(d)||d===0||Math.abs(n)>100000||Math.abs(d)>100000){invalid('Use integer coefficients within ±100,000. The denominator cannot be zero.');return;}
    [n,d]=rational(n,d);const p=((n%(2*d))+2*d)%(2*d);
    const a=2*p<=d?p:p<=d?d-p:2*p<=3*d?p-d:2*d-p;
    degrees=180*p/d;turns=Math.floor(n/(2*d));originalTex=piFraction(n,d);principalTex=piFraction(p,d);alphaTex=piFraction(a,d);
  } else {
    const value=$('reference-'+mode).valueAsNumber;
    if(!validDecimal(value)){invalid('Enter a finite angle within ±1,000,000, with at most six decimal places.');return;}
    if(mode==='degrees') {
      degrees=value;turns=Math.floor(value/360);originalTex=String.raw`${fmt(value,6)}^\circ`;principalTex=String.raw`${fmt(normal(value),6)}^\circ`;alphaTex=String.raw`${fmt(reference(value),6)}^\circ`;
    } else {
      turns=Math.floor(value/(2*Math.PI));const principal=value-turns*2*Math.PI;
      degrees=principal*180/Math.PI;originalTex=fmt(value,6);principalTex=piPlusDecimal(-2*turns,value);
      if(principal<=Math.PI/2)alphaTex=piPlusDecimal(-2*turns,value);
      else if(principal<=Math.PI)alphaTex=piPlusDecimal(2*turns+1,-value);
      else if(principal<=3*Math.PI/2)alphaTex=piPlusDecimal(-2*turns-1,value);
      else alphaTex=piPlusDecimal(2*turns+2,-value);
    }
  }
  const [x,y]=coordinates(degrees,3),a=reference(degrees),exact=exactAngle(degrees);
  scene($('reference-chart'),x,y,3,{degrees,unit:55});
  $('reference-reading').innerHTML=`<p class="tool-label">1 · Remove complete turns</p>${equation(String.raw`\theta=${originalTex},\quad k=${turns}`)}${equation(String.raw`\theta_0=${principalTex}`)}<strong>${position(degrees)}</strong><p class="tool-label">2 · Measure to the x-axis</p>${equation(String.raw`\alpha=${alphaTex}`)}<p>${mode==='degrees'?'Use the quadrant rule in degrees.':`Exact expression above; approximately ${fmt(a*Math.PI/180,6)} radians (${fmt(a,4)}°).`}</p><p>${a===0||Math.abs(a-90)<1e-8?'This is an axis angle. Use coordinates directly; the reference triangle is degenerate.':'The reference angle is nonnegative, even if the original angle is negative.'}</p>`;
  $('reference-ratios').innerHTML=ratioCards(numericRatios(x,y,3),exact);
  $('reference-caption').textContent=exact?'The six values above are exact. The quadrant supplies each sign.':'The six values above are approximations. The reference-angle expression remains exact; it need not be a special angle.';
}
['reference-mode','reference-degrees','reference-n','reference-d','reference-radians'].forEach(id=>$(id).addEventListener($(id).tagName==='SELECT'?'change':'input',renderReference));
document.querySelectorAll('[data-reference]').forEach(btn=>btn.addEventListener('click',()=>{
  const [mode,n,d]=btn.dataset.reference.split(',');$('reference-mode').value=mode;
  if(mode==='pi'){$('reference-n').value=n;$('reference-d').value=d;}else $('reference-'+mode).value=n;renderReference();
}));renderReference();
const solved=new Set();
document.querySelectorAll('[data-general-check]').forEach(btn=>btn.addEventListener('click',()=>{
  const i=Number(btn.dataset.generalCheck),input=document.querySelector(`[name="general-practice-${i}"]:checked`);
  if(!input){setFeedback($('general-feedback-'+i),false,'Choose an answer first.');return;}
  const correct=Number(input.value)===checks[i][3];if(correct)solved.add(i);
  setFeedback($('general-feedback-'+i),correct,(correct?'Correct. ':'Try again. ')+checks[i][4]);
  $('general-score').textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?' · Ready to move on!':''}`;
}));
initLessonChrome();
