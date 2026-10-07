import "../assets/sass/lesson.sass";
import {renderMathDropdown, initMathDropdown} from "./math-dropdown";
import katex from "katex";
import "katex/dist/katex.min.css";
import { initLessonChrome, renderLessonHeader, renderLessonFooter, setFeedback } from "./shared";

const M = tex => `<span class="laws-math">${katex.renderToString(String.raw`\displaystyle ` + tex, { throwOnError: true, strict: "ignore" })}</span>`;
const command = name => String.fromCharCode(92) + name;
const $ = id => document.getElementById(id);
const fmt = (n, digits = 4) => Number(n.toFixed(digits)).toString();
const rad = d => d * Math.PI / 180;
const tan = d => Math.tan(rad(d));
const intro = (n, topic, title, text) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> ${topic}</p><h2>${title}</h2><p>${text}</p></div>`;
const range = (id, title, min, max, step, value) => `<label for="${id}">${title}<output id="${id}-value"></output></label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">`;
const number = (id, title, value, min, max) => `<label for="${id}">${title}</label><input type="number" id="${id}" value="${value}" min="${min}" max="${max}" step="any">`;
const plot = (id, label) => `<svg id="${id}" viewBox="0 0 520 400" role="img" aria-label="${label}"></svg>`;
const equation = tex => `<div class="laws-equation">${M(tex)}</div>`;
const choices = (name, legend, items) => `<fieldset class="laws-choices"><legend>${legend}</legend>${items.map(([value, tex], i) => `<label><input type="radio" name="${name}" value="${value}" ${i === 0 ? 'checked' : ''}><span>${M(tex)}</span></label>`).join('')}</fieldset>`;
const selected = name => $(name)?.dataset.value ?? document.querySelector(`[name="${name}"]:checked`).value;
const ratios = [
  ['sin', 'Sine', 'O', 'H'], ['cos', 'Cosine', 'A', 'H'], ['tan', 'Tangent', 'O', 'A'],
  ['csc', 'Cosecant', 'H', 'O'], ['sec', 'Secant', 'H', 'A'], ['cot', 'Cotangent', 'A', 'O'],
];
const names = { O: 'opposite', A: 'adjacent', H: 'hypotenuse' };
const colors = { O: '#db482b', A: '#327347', H: '#6844a6' };
const definition = (key, num, den) => String.raw`${command(key)}\theta=\frac{\text{${names[num]}}}{\text{${names[den]}}}`;
const stepper = id => `<div class="trig-step" id="${id}-step" aria-live="polite"></div><p class="laws-progress" id="${id}-progress"></p><div class="laws-step-buttons"><button type="button" class="laws-button" id="${id}-back">← Previous step</button><button type="button" class="laws-button" id="${id}-next">Next step →</button></div>`;

const rebuilds = [
  { title: 'A hypotenuse and one leg', prompt: String.raw`AB=25,\quad BC=15`, o: 15, a: 20, ref: 'B', steps: [
    ['Recover the missing leg', String.raw`AC=\sqrt{25^2-15^2}=\sqrt{400}=20`, 'The right angle is at C. AB is the hypotenuse; BC = 15 and AC = 20. Relative to B, AC is opposite and BC is adjacent.'],
    ['Read the three primary ratios', String.raw`\sin B=\frac45,\quad\cos B=\frac35,\quad\tan B=\frac43`, 'Use opposite = 20, adjacent = 15, hypotenuse = 25.'],
    ['Take their reciprocals', String.raw`\csc B=\frac54,\quad\sec B=\frac53,\quad\cot B=\frac34`, 'Invert each ratio, keeping its function name paired correctly.'],
  ]},
  { title: 'Rebuild from sine', prompt: String.raw`\sin A=\frac5{13}`, o: 5, a: 12, ref: 'A', steps: [
    ['Choose a representative triangle', String.raw`O_A=5,\quad H=13`, 'These are proportions. The actual lengths may be 5k and 13k for any positive scale k.'],
    ['Use Pythagoras', String.raw`A_A=\sqrt{13^2-5^2}=12`, 'The adjacent leg is 12k. Angles A and B are complementary, so their opposite and adjacent legs swap.'],
    ['Combine ratios from both angles', String.raw`\sec B\tan A=\frac{13}{5}\cdot\frac5{12}=\frac{13}{12}`, 'For B, adjacent = 5; for A, opposite = 5 and adjacent = 12.'],
  ]},
  { title: 'Rebuild from tangent', prompt: String.raw`\tan A=\frac{24}{7}`, o: 24, a: 7, ref: 'A', steps: [
    ['Choose the two legs', String.raw`O_A=24,\quad A_A=7`, 'Tangent is opposite divided by adjacent. Any similar triangle has the same ratios.'],
    ['Recover the hypotenuse', String.raw`H=\sqrt{24^2+7^2}=25`, 'Pythagoras adds the squares of the legs when the hypotenuse is unknown.'],
    ['Use the complementary angle', String.raw`\tan B+\csc A=\frac7{24}+\frac{25}{24}=\frac43`, 'At B the opposite leg is 7 and the adjacent leg is 24.'],
  ]},
];
const exactExpressions = [
  [String.raw`5\sin45^\circ-\sin60^\circ\cot45^\circ`, [
    ['Substitute exact values', String.raw`5\left(\frac{\sqrt2}{2}\right)-\frac{\sqrt3}{2}(1)`, 'The cotangent of 45° is 1, because its two legs are equal.'],
    ['Combine over a common denominator', String.raw`\frac{5\sqrt2-\sqrt3}{2}`, 'Unlike radicals cannot be combined. Keep the answer exact.'],
  ]],
  [String.raw`\tan\frac\pi6\csc\frac\pi4+\sec\frac\pi6`, [
    ['Substitute exact values', String.raw`\frac{\sqrt3}{3}\sqrt2+\frac{2\sqrt3}{3}`, 'π/6 is 30° and π/4 is 45°. Reciprocal ratios come from the same special triangles.'],
    ['Multiply and combine', String.raw`\frac{\sqrt6+2\sqrt3}{3}`, 'Multiply the radicals first, then use the common denominator.'],
  ]],
];
const identityCases = [
  [String.raw`\tan\theta=5,\quad\cos\theta=\frac1{\sqrt{26}}`, [
    ['Use the quotient identity', String.raw`\tan\theta=\frac{\sin\theta}{\cos\theta}`, 'This identity follows by cancelling the hypotenuse in the sine/cosine quotient.'],
    ['Isolate sine', String.raw`\sin\theta=\tan\theta\cos\theta=\frac5{\sqrt{26}}`, 'Multiply both sides by cos θ.'],
    ['Rationalize if desired', String.raw`\sin\theta=\frac{5\sqrt{26}}{26}`, 'Both forms are exact and equivalent.'],
  ]],
  [String.raw`\sin\theta=\frac35,\quad 0<\theta<90^\circ`, [
    ['Use the Pythagorean identity', String.raw`\sin^2\theta+\cos^2\theta=1`, 'The squares of sine and cosine sum to 1.'],
    ['Isolate the square', String.raw`\cos^2\theta=1-\frac9{25}=\frac{16}{25}`, 'Subtract the square of sine.'],
    ['Choose the positive root', String.raw`\cos\theta=\sqrt{\frac{16}{25}}=\frac45`, 'The angle is acute, so cosine is positive.'],
  ]],
];
const checks = [
  ['Name the sides', String.raw`\sin\theta=\ ?`, [String.raw`O/H`, String.raw`A/H`, String.raw`O/A`], 0, 'Sine is opposite divided by hypotenuse, with sides named relative to the chosen angle.'],
  ['Similar triangles', String.raw`\text{Double every side. What happens to }\tan\theta?`, [String.raw`\text{Doubles}`, String.raw`\text{Stays the same}`, String.raw`\text{Halves}`], 1, 'Both legs double, so their common factor cancels in opposite/adjacent.'],
  ['Reciprocal', String.raw`\cot A=2\quad\Rightarrow\quad\tan A=\ ?`, ['2', String.raw`\frac12`, String.raw`\sqrt2`], 1, 'Tangent and cotangent are reciprocals.'],
  ['A radical reciprocal', String.raw`\sin B=\frac{\sqrt3}{12}\quad\Rightarrow\quad\csc B=\ ?`, [String.raw`4\sqrt3`, String.raw`\sqrt3/12`, String.raw`12\sqrt3`], 0, 'Invert, then rationalize: 12/√3 = 4√3.'],
  ['Range for acute angles', String.raw`\text{Which statement is always true?}`, [String.raw`\tan\theta<1`, String.raw`0<\sin\theta<1`, String.raw`\sec\theta<1`], 1, 'Every leg is shorter than the hypotenuse; sine and cosine lie strictly between 0 and 1.'],
  ['Recover a leg', String.raw`\sin A=5/13:\quad\text{adjacent leg}=\ ?`, ['8', '12', '18'], 1, 'Choose opposite 5 and hypotenuse 13. The other leg is √(169 − 25) = 12.'],
  ['Special angle', String.raw`\tan(\pi/6)=\ ?`, [String.raw`\sqrt3`, String.raw`\frac{\sqrt3}{3}`, String.raw`\frac12`], 1, 'At 30° the opposite leg is 1 and adjacent leg is √3.'],
  ['Find components', String.raw`H=28:\quad\text{horizontal leg }x=\ ?`, [String.raw`28\sin\theta`, String.raw`28\cos\theta`, String.raw`28\tan\theta`], 1, 'The horizontal leg is adjacent to θ, so cos θ = x/28.'],
  ['Elevation', String.raw`d=60,\ \theta=35^\circ:\quad h=\ ?`, [String.raw`60/\tan35^\circ`, String.raw`60\sin35^\circ`, String.raw`60\tan35^\circ`], 2, 'Height is opposite and the ground distance is adjacent. h/d = tan θ.'],
  ['Depression', String.raw`h=10,\ \theta=55^\circ:\quad d=\ ?`, [String.raw`10/\tan55^\circ`, String.raw`10\tan55^\circ`, String.raw`10\cos55^\circ`], 0, 'The depression angle equals the elevation angle at the swimmer; tan θ = 10/d.'],
  ['Pythagorean identity', String.raw`\sin\theta=3/5:\quad\cos\theta=\ ?`, [String.raw`2/5`, String.raw`4/5`, String.raw`-4/5`], 1, 'For an acute angle, cosine is the positive square root of 1 − 9/25.'],
  ['Two observers', String.raw`\text{Same side, closer angle }\beta>\alpha`, [String.raw`h=L\tan\alpha`, String.raw`h=\frac{L}{\cot\alpha-\cot\beta}`, String.raw`h=\frac{L}{\cot\alpha+\cot\beta}`], 1, 'The ground distances are h cot α and h cot β. Their difference equals L.'],
];

document.querySelector('#app').innerHTML = `${renderLessonHeader('6.2')}<main class="laws-lesson trig-lesson">
<section class="lesson-hero lesson-hero--trig"><div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 6.2</span> Right-triangle trigonometry</p><h1>Change the size.<br><em>Keep the ratio.</em></h1><p class="lesson-hero__lede">A right triangle turns an angle into six ratios. Learn to name its sides, recover exact values, and measure heights and distances you cannot reach.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#ratios">Explore the ratios</a><span>About 45 minutes · interactive</span></div></div><div class="trig-hero-art" data-reveal><p class="tool-label">One shape. Six ways to compare.</p>${plot('trig-hero-chart', 'A right triangle with opposite, adjacent, and hypotenuse labeled')}<div class="trig-hero-equation">${M(String.raw`\sin\theta=\frac{\color{#db482b}{\text{opposite}}}{\color{#6844a6}{\text{hypotenuse}}}`)}</div><p>Resize the triangle. The angle—and its ratios—stay the same.</p></div></section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Identify sides and compute all six ratios</p></li><li><span>02</span><p>Use special triangles for exact values</p></li><li><span>03</span><p>Connect ratios through identities</p></li><li><span>04</span><p>Model elevation and depression</p></li></ol></section>
<section class="lesson-section" id="ratios">${intro('01', 'Understand the shape', 'The angle chooses<br>the side names.', `The hypotenuse is opposite the right angle and is always the longest side. Relative to the chosen acute angle, the other sides are <strong>opposite</strong> and <strong>adjacent</strong>. The acute angles add to ${M('90^\\circ')}, and ${M(String.raw`O^2+A^2=H^2`)}.`)}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Similarity and ratio studio</p>${range('ratio-angle', 'Angle A (degrees)', 5, 85, 1, 35)}${range('ratio-scale', 'Triangle scale', 1, 4, .1, 2)}<label for="ratio-reference">Name sides relative to</label><select id="ratio-reference"><option value="A">Angle A</option><option value="B">Angle B (complement of A)</option></select><p>Change the scale first, then the angle. Which action changes the ratios?</p><div id="ratio-reading" class="laws-note" aria-live="polite"></div></div><div class="trig-plot">${plot('ratio-chart', 'Interactive right triangle')}<div class="trig-legend"><span>Coral · opposite</span><span>Green · adjacent</span><span>Violet · hypotenuse</span></div><div class="trig-ratio-buttons" aria-label="Select a ratio to highlight">${ratios.map(([key, label]) => `<button type="button" data-ratio="${key}" aria-pressed="${key === 'sin'}">${M(String.raw`${command(key)}\theta`)}<span>${label}</span></button>`).join('')}</div><div class="trig-ratio-detail" id="ratio-detail" aria-live="polite"></div></div></div>
<div class="trig-definition-grid">${ratios.map(([key, label, num, den]) => `<article><strong>${label}</strong>${equation(definition(key, num, den))}</article>`).join('')}</div><aside class="laws-note"><strong>SOH–CAH–TOA:</strong> sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent. The reciprocal pairs are ${M(String.raw`\sin\leftrightarrow\csc`)}, ${M(String.raw`\cos\leftrightarrow\sec`)}, and ${M(String.raw`\tan\leftrightarrow\cot`)}. For acute angles, ${M(String.raw`0<\sin\theta,\cos\theta<1`)} and ${M(String.raw`\csc\theta,\sec\theta>1`)}. Tangent and cotangent are positive but may be below, equal to, or above 1.</aside></section>
<section class="lesson-section lesson-section--soft" id="rebuild">${intro('02', 'Work it out', 'Recover a side.<br>Read both angles.', 'A known ratio determines a family of similar triangles. Choose convenient side lengths, use Pythagoras, and keep the reference angle visible. Changing from A to B swaps opposite and adjacent.')}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Exact triangle reconstructor</p>${renderMathDropdown('rebuild-case','Choose a starting point',rebuilds.map(c=>c.prompt),M)}<div class="laws-note" id="rebuild-given"></div><div class="trig-plot trig-plot--compact">${plot('rebuild-chart', 'Triangle for exact ratio reconstruction')}</div></div><div class="laws-result">${stepper('rebuild')}</div></div>
<div class="laws-card-grid"><article class="laws-card"><p class="tool-label">Reciprocal switch</p>${equation(String.raw`\cot A=2\ \Rightarrow\ \tan A=\frac12`)}<p>Invert the value, not the angle.</p></article><article class="laws-card"><p class="tool-label">Invert a radical</p>${equation(String.raw`\sin B=\frac{\sqrt3}{12}`)}${equation(String.raw`\csc B=\frac{12}{\sqrt3}=4\sqrt3`)}<p>Multiply numerator and denominator by √3 to rationalize.</p></article></div></section>
<section class="lesson-section" id="special">${intro('03', 'Exact values', 'Two special shapes.<br>No calculator needed.', 'An isosceles right triangle has side proportions 1, 1, √2. Splitting an equilateral triangle in half gives proportions 1, √3, 2. Name the sides from your chosen angle to recover every value.')}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Special-triangle viewer</p>${choices('special-angle', 'Choose an acute angle', [[30, String.raw`30^\circ=\frac{\pi}{6}`], [45, String.raw`45^\circ=\frac{\pi}{4}`], [60, String.raw`60^\circ=\frac{\pi}{3}`]])}<div class="laws-note" id="special-proof" aria-live="polite"></div></div><div class="trig-plot">${plot('special-chart', 'A special right triangle with exact side lengths')}<div id="special-reading" class="trig-exact-values" aria-live="polite"></div></div></div>
<div class="trig-table-wrap"><table class="trig-table"><caption>Exact values to know</caption><thead><tr><th scope="col">Ratio</th>${[30,45,60].map(d => `<th scope="col">${M(`${d}^\\circ`)}</th>`).join('')}</tr></thead><tbody>${[['sin',String.raw`\frac12`,String.raw`\frac{\sqrt2}{2}`,String.raw`\frac{\sqrt3}{2}`],['cos',String.raw`\frac{\sqrt3}{2}`,String.raw`\frac{\sqrt2}{2}`,String.raw`\frac12`],['tan',String.raw`\frac{\sqrt3}{3}`,'1',String.raw`\sqrt3`]].map(row => `<tr><th scope="row">${M(String.raw`${command(row[0])}\theta`)}</th>${row.slice(1).map(tex => `<td>${M(tex)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Exact expression builder</p>${choices('exact-case', 'Choose an expression', exactExpressions.map((c,i)=>[i,c[0]]))}<p>Substitute exact values before multiplying or combining terms. Use degrees or radians consistently.</p></div><div class="laws-result">${stepper('exact')}</div></div></section>
<section class="lesson-section lesson-section--soft" id="identities">${intro('04', 'Connect the ratios', 'One ratio can<br>unlock another.', 'Divide sine by cosine to get tangent. Divide the Pythagorean equation by the square of the hypotenuse to get a second relationship. For an acute angle, all six ratios are positive.')}
<div class="laws-card-grid"><article class="laws-card"><p class="tool-label">Quotient identity</p>${equation(String.raw`\frac{\sin\theta}{\cos\theta}=\tan\theta`)}${equation(String.raw`\frac{O/H}{A/H}=\frac OA`)}<p>The hypotenuse cancels.</p></article><article class="laws-card"><p class="tool-label">Pythagorean identity</p>${equation(String.raw`\sin^2\theta+\cos^2\theta=1`)}${equation(String.raw`\frac{O^2+A^2}{H^2}=1`)}<p>${M(String.raw`\sin^2\theta`)} means ${M(String.raw`(\sin\theta)^2`)}.</p></article></div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Identity solver</p>${choices('identity-case','Choose what you know',identityCases.map((c,i)=>[i,c[0]]))}<p>Use the identities directly, then explain why the positive answer is appropriate.</p></div><div class="laws-result">${stepper('identity')}</div></div></section>
<section class="lesson-section" id="one-triangle">${intro('05','Measure the world','Start with the horizontal.<br>Choose the ratio.', 'An angle of <strong>elevation</strong> looks upward from a horizontal line; an angle of <strong>depression</strong> looks downward from a horizontal line. Parallel horizontals make the depression angle equal to the elevation angle at the lower point.')}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Height and distance surveyor</p><label for="survey-mode">Measurement</label><select id="survey-mode"><option value="elevation">Elevation · find a height</option><option value="depression">Depression · find a ground distance</option><option value="components">Hypotenuse · find both legs</option></select>${range('survey-angle','Angle (degrees)',5,85,1,35)}${number('survey-length','Known length',60,.01,1000000)}<p id="survey-context"></p><div class="laws-note" id="survey-reading" aria-live="polite"></div></div><div class="trig-plot">${plot('survey-chart','Elevation or depression geometry')}<p class="trig-caption">Coral is the line of sight. Gold dashed lines are horizontal. Diagrams show the geometry; reported lengths use the entered units.</p></div></div><aside class="laws-note">Use degree mode when entering degree angles on a calculator. Keep full precision until the final rounding. If the observer is above the ground, add their eye height to the vertical rise to obtain the object's total height.</aside></section>
<section class="lesson-section lesson-section--soft" id="two-triangles">${intro('06','Connect two triangles','Two lines of sight.<br>One shared height.', 'Draw a vertical to create two right triangles. Express each horizontal leg in terms of the same height. Then use the known separation: subtract distances on the same side, or add them on opposite sides.')}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Two-triangle field lab</p><label for="field-mode">Geometry</label><select id="field-mode"><option value="same">Two observers on the same side</option><option value="opposite">Observers on opposite sides</option><option value="ships">Two depression angles from above</option><option value="fixed">Known height · difference of distances</option></select>${range('field-alpha','Angle α (degrees)',5,85,1,32)}${range('field-beta','Angle β (degrees)',5,85,1,35)}${number('field-length','Known length L',1000,.01,1000000)}<div class="trig-presets"><button type="button" class="laws-button" data-field="mountain">Mountain survey</button><button type="button" class="laws-button" data-field="cloud">Cloud height</button><button type="button" class="laws-button" data-field="ships">Ships below</button><button type="button" class="laws-button" data-field="segment">Ground segment</button></div><p id="field-context"></p></div><div class="laws-result"><div class="trig-plot">${plot('field-chart','Two right triangles sharing a vertical height')}</div><div id="field-reading" aria-live="polite"></div></div></div></section>
<section class="lesson-section lesson-section--ink" id="readiness">${intro('07','Practice','Name the sides.<br>Trust the relationships.', 'Choose a reference angle, select a ratio, and keep exact values whenever possible. For applied problems, write the triangle equation before reaching for a calculator.')}<p class="laws-score" id="trig-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="laws-check-grid">${checks.map((q,i)=>`<article class="laws-check"><p class="tool-label">${q[0]}</p><h3>${M(q[1])}</h3>${renderMathDropdown(`trig-practice-${i}`,"Your answer",q[2],M,{placeholder:"Select an answer"})}<button type="button" class="laws-button" data-trig-check="${i}">Check answer</button><p class="answer-feedback" id="trig-feedback-${i}" aria-live="polite"></p></article>`).join('')}</div></section>
</main>${renderLessonFooter({previous:{href:'pages/sections/6-1.html',label:'Section 6.1 · Angle measure'},next:{href:'pages/sections/6-3.html',label:'Section 6.3 · Trigonometric functions of angles'}})}`;

function svgLabel(x,y,text,color='var(--ink)',anchor='middle') {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${color}" class="trig-svg-label">${text}</text>`;
}
function angleArc(x,y,r,start,end,color='var(--gold)') {
  const at = d => [x+r*Math.cos(rad(d)),y-r*Math.sin(rad(d))];
  const [sx,sy]=at(start),[ex,ey]=at(end);
  return `<path d="M${x} ${y} L${sx} ${sy} A${r} ${r} 0 0 ${end>start?0:1} ${ex} ${ey} Z" fill="${color}" fill-opacity=".18" stroke="${color}" stroke-width="2"/>`;
}
// Side geometry uses a single scale for both axes; angle arcs use the same SVG units.
function triangle(svg,o,a,{ref='A',scale=1,labels=null,active=null,hero=false}={}) {
  const h=Math.hypot(o,a),unit=270*scale/h,x=90,y=320,X=x+a*unit,Y=y-o*unit;
  const roles=ref==='A'?{bottom:'A',vertical:'O',hyp:'H'}:{bottom:'O',vertical:'A',hyp:'H'};
  const line=(x1,y1,x2,y2,role)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colors[role]}" stroke-width="${active?.includes(role)?8:4}" stroke-linecap="round"/>`;
  const theta=Math.atan2(o,a)*180/Math.PI;
  let art=`<path d="M${x} ${y}H${X}V${Y}Z" fill="rgba(169,147,239,.08)"/>`;
  art+=ref==='A'?angleArc(x,y,Math.min(35,a*unit*.4,o*unit*.6),0,theta):angleArc(X,Y,Math.min(35,a*unit*.4,o*unit*.4),-90,-180+theta);
  art+=line(x,y,X,y,roles.bottom)+line(X,y,X,Y,roles.vertical)+line(x,y,X,Y,'H');
  const size=Math.min(15,a*unit*.25,o*unit*.25);
  art+=`<path d="M${X-size} ${y}V${y-size}H${X}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
  art+=svgLabel(x-17,y+7,'A')+svgLabel(X+15,Y-12,'B')+svgLabel(X+17,y+25,'C');
  const lengths=labels||[fmt(a),fmt(o),fmt(h)];
  art+=svgLabel((x+X)/2,y+38,hero?'Adjacent':lengths[0],colors[roles.bottom]);
  art+=svgLabel(X+18,(y+Y)/2+7,hero?'Opposite':lengths[1],colors[roles.vertical],'start');
  art+=svgLabel((x+X)/2-20,(y+Y)/2-20,hero?'Hypotenuse':lengths[2],colors.H);
  if(!hero)art+=svgLabel(ref==='A'?x+50:X-38,ref==='A'?y-8:Y+50,'θ');
  svg.innerHTML=art;
  if(svg.id==='ratio-chart'){
    const bounds=svg.getBBox(),top=Math.min(0,bounds.y-20);
    const right=Math.max(520,bounds.x+bounds.width+20),bottom=Math.max(400,bounds.y+bounds.height+20);
    svg.setAttribute('viewBox',`0 ${top} ${right} ${bottom-top}`);
  }
  svg.setAttribute('aria-label',`Right triangle. Angle ${ref} is the reference angle. Opposite ${fmt(ref==='A'?o:a)}, adjacent ${fmt(ref==='A'?a:o)}, hypotenuse ${fmt(h)}.`);
}
triangle($('trig-hero-chart'),3,4,{hero:true});
let currentRatio='sin';
function renderRatios() {
  const degrees=Number($('ratio-angle').value),scale=Number($('ratio-scale').value),ref=$('ratio-reference').value;
  const h=5*scale,o=h*Math.sin(rad(degrees)),a=h*Math.cos(rad(degrees));
  const values={O:ref==='A'?o:a,A:ref==='A'?a:o,H:h};
  const [,label,num,den]=ratios.find(r=>r[0]===currentRatio);
  $('ratio-angle-value').textContent=degrees+'°';$('ratio-scale-value').textContent=fmt(scale);
  triangle($('ratio-chart'),o,a,{ref,scale:scale/3,active:[num,den]});
  $('ratio-reading').innerHTML=`<strong>Reference angle ${ref}: ${ref==='A'?degrees:90-degrees}°</strong><p>Opposite = ${fmt(values.O)}<br>Adjacent = ${fmt(values.A)}<br>Hypotenuse = ${fmt(values.H)}</p><p>Similar triangles keep this angle and every ratio. Lengths and displayed decimals are rounded.</p>`;
  $('ratio-detail').innerHTML=`<p class="tool-label">${label} · highlighted sides</p>${equation(definition(currentRatio,num,den))}${equation(String.raw`${command(currentRatio)}\theta\approx\frac{${fmt(values[num])}}{${fmt(values[den])}}\approx${fmt(values[num]/values[den])}`)}`;
  document.querySelectorAll('[data-ratio]').forEach(btn=>btn.setAttribute('aria-pressed',btn.dataset.ratio===currentRatio));
}
['ratio-angle','ratio-scale','ratio-reference'].forEach(id=>$(id).addEventListener($(id).tagName==='SELECT'?'change':'input',renderRatios));
document.querySelectorAll('[data-ratio]').forEach(btn=>btn.addEventListener('click',()=>{currentRatio=btn.dataset.ratio;renderRatios();}));renderRatios();

function initStepper(id,name,cases,onCase=()=>{}) {
  let step=0;
  const render=()=>{
    const index=Number(selected(name)),steps=cases[index];onCase(index);
    const [title,tex,text]=steps[step];
    $(id+'-step').innerHTML=`<p class="tool-label">${title}</p>${equation(tex)}<p>${text}</p>`;
    $(id+'-progress').textContent=`Step ${step+1} of ${steps.length}`;
    $(id+'-back').disabled=step===0;$(id+'-next').disabled=step===steps.length-1;
  };
  ($(name)?[$(name)]:[...document.querySelectorAll(`[name="${name}"]`)]).forEach(input=>input.addEventListener('change',()=>{step=0;render();}));
  $(id+'-back').addEventListener('click',()=>{if(step>0)step--;render();});
  $(id+'-next').addEventListener('click',()=>{if(step<cases[Number(selected(name))].length-1)step++;render();});render();
}
initMathDropdown('rebuild-case',rebuilds.map(c=>c.prompt),M);
initStepper('rebuild','rebuild-case',rebuilds.map(c=>c.steps),i=>{
  const c=rebuilds[i];triangle($('rebuild-chart'),c.o,c.a,{ref:c.ref});
  $('rebuild-given').innerHTML=`<strong>${c.title}</strong><p>${i===0?`${M('AB=25')}, ${M('BC=15')}; find all six ratios for B.`:'The ratio fixes the shape, not the absolute size. Use a convenient representative triangle.'}</p>`;
});
initStepper('exact','exact-case',exactExpressions.map(c=>c[1]));
initStepper('identity','identity-case',identityCases.map(c=>c[1]));
const specialValues={
  30:{o:1,a:Math.sqrt(3),labels:['√3','1','2'],values:[String.raw`\frac12`,String.raw`\frac{\sqrt3}{2}`,String.raw`\frac{\sqrt3}{3}`,'2',String.raw`\frac{2\sqrt3}{3}`,String.raw`\sqrt3`]},
  45:{o:1,a:1,labels:['1','1','√2'],values:[String.raw`\frac{\sqrt2}{2}`,String.raw`\frac{\sqrt2}{2}`,'1',String.raw`\sqrt2`,String.raw`\sqrt2`,'1']},
  60:{o:Math.sqrt(3),a:1,labels:['1','√3','2'],values:[String.raw`\frac{\sqrt3}{2}`,String.raw`\frac12`,String.raw`\sqrt3`,String.raw`\frac{2\sqrt3}{3}`,'2',String.raw`\frac{\sqrt3}{3}`]},
};
function renderSpecial() {
  const d=Number(selected('special-angle')),s=specialValues[d];
  triangle($('special-chart'),s.o,s.a,{labels:s.labels});
  $('special-proof').innerHTML=`<strong>${d===45?'45°–45°–90°':'30°–60°–90°'}</strong><p>${d===45?`Equal legs of length 1 give a hypotenuse ${M(String.raw`\sqrt{1^2+1^2}=\sqrt2`)}.`:`Halve an equilateral triangle of side 2: the short leg is 1, so the other leg is ${M(String.raw`\sqrt{2^2-1^2}=\sqrt3`)}.`}</p><p>Reference angle A = ${d}°. The opposite leg changes when you switch between 30° and 60°.</p>`;
  $('special-reading').innerHTML=ratios.map(([key],i)=>`<div>${M(String.raw`${command(key)}${d}^\circ=${s.values[i]}`)}</div>`).join('');
}
document.querySelectorAll('[name="special-angle"]').forEach(input=>input.addEventListener('change',renderSpecial));renderSpecial();

function surveyScene(svg,mode,theta,d,h,length) {
  const unit=Math.min(330/d,240/h),x=70,y=320,X=x+d*unit,Y=y-h*unit;
  let art=`<path d="M35 ${y}H480" stroke="var(--ink)" stroke-width="2"/><path d="M${x} ${y}H${X}V${Y}Z" fill="rgba(255,107,72,.08)"/><path d="M${x} ${y}L${X} ${Y}" stroke="var(--coral)" stroke-width="4"/><path d="M${X} ${y}V${Y}" stroke="var(--green)" stroke-width="4"/><path d="M${X-14} ${y}V${y-14}H${X}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
  if(mode==='depression') {
    art+=`<path d="M${x} ${Y}H480" stroke="var(--gold)" stroke-width="2" stroke-dasharray="7 6"/>`+angleArc(X,Y,38,-180,-180+theta)+svgLabel(X-65,Y+23,theta+'°');
    art+=angleArc(x,y,35,0,theta)+svgLabel(x+65,y-10,theta+'°')+svgLabel(X,Y-16,'Observer');
  } else art+=angleArc(x,y,35,0,theta)+svgLabel(x+65,y-12,theta+'°');
  art+=svgLabel((x+X)/2,y+35,mode==='elevation'?`d = ${fmt(d,2)}`:`x = ${fmt(d,2)}`);
  art+=svgLabel(X+18,(Y+y)/2,mode==='components'?'y':'h',colors.A,'start');
  if(mode==='components') art+=svgLabel((x+X)/2-20,(y+Y)/2-18,`H = ${fmt(length,2)}`,'var(--coral)');
  svg.innerHTML=art;svg.setAttribute('aria-label',`${mode}. Angle ${theta} degrees. Horizontal distance ${fmt(d)}, vertical height ${fmt(h)}.`);
}
function renderSurvey() {
  const mode=$('survey-mode').value,theta=Number($('survey-angle').value),L=$('survey-length').valueAsNumber;
  $('survey-angle-value').textContent=theta+'°';
  const contexts={elevation:'Known length is horizontal ground distance d. Find the vertical rise h.',depression:'Known length is observer height h above the lower point. Find horizontal distance x.',components:'Known length is hypotenuse H. Find adjacent x and opposite y.'};
  $('survey-context').textContent=contexts[mode];
  if(!Number.isFinite(L)||L<.01||L>1000000){$('survey-reading').textContent='Enter a positive length between 0.01 and 1,000,000.';$('survey-chart').innerHTML='';return;}
  const d=mode==='elevation'?L:mode==='depression'?L/tan(theta):L*Math.cos(rad(theta));
  const h=mode==='elevation'?L*tan(theta):mode==='depression'?L:L*Math.sin(rad(theta));
  surveyScene($('survey-chart'),mode,theta,d,h,L);
  const setup=mode==='elevation'?String.raw`\tan${theta}^\circ=\frac hd`:mode==='depression'?String.raw`\tan${theta}^\circ=\frac hx`:String.raw`\cos\theta=\frac xH,\quad\sin\theta=\frac yH`;
  const result=mode==='elevation'?String.raw`h=${L}\tan${theta}^\circ\approx${fmt(h)}`:mode==='depression'?String.raw`x=\frac{${L}}{\tan${theta}^\circ}\approx${fmt(d)}`:String.raw`x\approx${fmt(d)},\quad y\approx${fmt(h)}`;
  $('survey-reading').innerHTML=equation(setup)+(mode==='components'?equation(String.raw`x=${L}\cos${theta}^\circ`)+equation(String.raw`y=${L}\sin${theta}^\circ`):'')+equation(result)+`<p>${mode==='elevation'?`Vertical rise, nearest whole unit: ${Math.round(h)}.`:mode==='depression'?`Ground distance, nearest tenth: ${d.toFixed(1)}.`:'The two legs resolve a length into horizontal and vertical components.'}</p>`;
}
['survey-mode','survey-angle','survey-length'].forEach(id=>$(id).addEventListener($(id).tagName==='SELECT'?'change':'input',renderSurvey));
$('survey-mode').addEventListener('change',()=>{const mode=$('survey-mode').value;$('survey-angle').value=mode==='depression'?55:35;$('survey-length').value=mode==='depression'?10:mode==='components'?28:60;renderSurvey();});renderSurvey();

function fieldScene(svg,mode,alpha,beta,h,d1,d2,L) {
  const opposite=mode==='opposite',depression=mode==='ships';
  const total=opposite?d1+d2:Math.max(d1,d2),unit=Math.min(350/total,230/h);
  const y=310,Y=y-h*unit,base=opposite?75+d1*unit:435;
  const x1=opposite?75:base-d1*unit,x2=opposite?base+d2*unit:base-d2*unit;
  let art=`<path d="M35 ${y}H485" stroke="var(--ink)" stroke-width="2"/><path d="M${base} ${y}V${Y}" stroke="var(--green)" stroke-width="4"/><path d="M${x1} ${y}L${base} ${Y}" stroke="var(--coral)" stroke-width="3"/><path d="M${x2} ${y}L${base} ${Y}" stroke="var(--violet)" stroke-width="3"/>`;
  if(depression) art+=`<path d="M35 ${Y}H485" stroke="var(--gold)" stroke-dasharray="6 5" stroke-width="2"/>`+angleArc(base,Y,50,-180,-180+alpha,'var(--coral)')+angleArc(base,Y,32,-180,-180+beta,'var(--violet)')+svgLabel(base-8,Y-15,'α and β below horizontal','var(--ink)','end');
  else {
    art+=angleArc(x1,y,30,0,alpha,'var(--coral)');
    art+=opposite?angleArc(x2,y,30,180-beta,180,'var(--violet)'):angleArc(x2,y,30,0,beta,'var(--violet)');
  }
  art+=svgLabel(x1,y+30,`α = ${alpha}°`,colors.O)+svgLabel(x2,y+55,`β = ${beta}°`,'#6844a6');
  art+=svgLabel(base+12,(y+Y)/2,'h',colors.A,'start');
  const left=Math.min(x1,x2),right=Math.max(x1,x2);
  art+=`<path d="M${left} 405H${right}M${left} 397V413M${right} 397V413" stroke="var(--ink)" stroke-width="2"/>`+svgLabel((left+right)/2,435,`${mode==='fixed'||mode==='ships'?'x':'L'} = ${fmt(L,2)}`);
  svg.setAttribute('viewBox','0 0 520 450');svg.innerHTML=art;svg.setAttribute('aria-label',`${mode} geometry. Angle alpha ${alpha} degrees, beta ${beta} degrees. Shared height ${fmt(h)}. Separation ${fmt(L)}.`);
}
function renderField() {
  const mode=$('field-mode').value,alpha=Number($('field-alpha').value),beta=Number($('field-beta').value),L=$('field-length').valueAsNumber;
  $('field-alpha-value').textContent=alpha+'°';$('field-beta-value').textContent=beta+'°';
  $('field-context').textContent=mode==='same'?'L is the distance between observers on the same side. α is the farther, smaller angle; β is the closer, larger angle.':mode==='opposite'?'L is the total separation across the vertical foot. The two horizontal legs add to L.':mode==='ships'?'L is the aircraft height above level water. Both ships lie on the same side of the vertical below the aircraft.':'L is the known vertical height. Find the ground segment between the two sightline endpoints on the same side.';
  if(!Number.isFinite(L)||L<.01||L>1000000){$('field-reading').textContent='Enter a positive length between 0.01 and 1,000,000.';$('field-chart').innerHTML='';return;}
  if(mode==='same'&&beta<=alpha){$('field-reading').innerHTML='<p class="laws-note">On the same side, the closer observer must have the larger angle: choose β &gt; α. Equal angles at a positive separation cannot share a finite height.</p>';$('field-chart').innerHTML='';return;}
  const c1=1/tan(alpha),c2=1/tan(beta),knownHeight=mode==='ships'||mode==='fixed';
  const h=knownHeight?L:mode==='same'?L/(c1-c2):L/(c1+c2),d1=h*c1,d2=h*c2,separation=mode==='opposite'?d1+d2:Math.abs(d1-d2);
  fieldScene($('field-chart'),mode,alpha,beta,h,d1,d2,separation);
  const bridge=mode==='same'?String.raw`L=h\cot\alpha-h\cot\beta`:mode==='opposite'?String.raw`L=h\cot\alpha+h\cot\beta`:String.raw`x=\left|h\cot\alpha-h\cot\beta\right|`;
  const isolated=knownHeight?String.raw`x=${L}\left|\frac1{\tan${alpha}^\circ}-\frac1{\tan${beta}^\circ}\right|`:mode==='same'?String.raw`h=\frac{${L}}{\cot${alpha}^\circ-\cot${beta}^\circ}`:String.raw`h=\frac{${L}}{\cot${alpha}^\circ+\cot${beta}^\circ}`;
  const answer=knownHeight?separation:h;
  $('field-reading').innerHTML=`<p class="tool-label">1 · Express both horizontal legs</p>${equation(String.raw`d_\alpha=h\cot\alpha,\quad d_\beta=h\cot\beta`)}<p class="tool-label">2 · Connect the distances</p>${equation(bridge)}<p class="tool-label">3 · Substitute and solve</p>${equation(isolated)}<div class="trig-answer"><strong>${knownHeight?'x':'h'} ≈ ${fmt(answer,3)}</strong><span>Nearest tenth: ${answer.toFixed(1)} · nearest whole unit: ${Math.round(answer)}</span></div><p>Horizontal legs: ${fmt(d1,3)} and ${fmt(d2,3)}. Round only after completing the calculation.</p>`;
}
['field-mode','field-alpha','field-beta','field-length'].forEach(id=>$(id).addEventListener($(id).tagName==='SELECT'?'change':'input',renderField));
const fieldPresets={mountain:['same',32,35,1000],cloud:['opposite',45,75,600],ships:['ships',40,52,35000],segment:['fixed',30,60,85]};
document.querySelectorAll('[data-field]').forEach(btn=>btn.addEventListener('click',()=>{const [mode,a,b,L]=fieldPresets[btn.dataset.field];$('field-mode').value=mode;$('field-alpha').value=a;$('field-beta').value=b;$('field-length').value=L;renderField();}));renderField();
checks.forEach((q,i)=>initMathDropdown(`trig-practice-${i}`,q[2],M));
const solved=new Set();
document.querySelectorAll('[data-trig-check]').forEach(btn=>btn.addEventListener('click',()=>{
  const i=Number(btn.dataset.trigCheck),input=$("trig-practice-"+i).dataset.value;
  if(input===""){setFeedback($('trig-feedback-'+i),false,'Choose an answer first.');return;}
  const correct=Number(input)===checks[i][3];if(correct)solved.add(i);
  setFeedback($('trig-feedback-'+i),correct,(correct?'Correct. ':'Try again. ')+checks[i][4]);
  $('trig-score').textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?' · Ready to move on!':''}`;
}));
initLessonChrome();
