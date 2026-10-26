import "../assets/sass/lesson.sass";
import katex from "katex";
import "katex/dist/katex.min.css";
import { initLessonChrome, renderLessonHeader, renderLessonFooter, setFeedback } from "./shared";
import { renderMathDropdown, initMathDropdown } from "./math-dropdown";
import { fromDecimal, fractionTex, value, cycle, evaluate } from "./sinusoid-math";

const $ = id => document.getElementById(id);
const M = tex => `<span class="laws-math">${katex.renderToString(tex,{throwOnError:true,strict:"ignore"})}</span>`;
const E = tex => `<div class="laws-equation">${M(tex)}</div>`;
const F = (x, pi=false) => fractionTex(Array.isArray(x)?x:fromDecimal(x),pi);
const intro = (n,k,title,text) => `<div class="lesson-section__intro" data-reveal><p class="lesson-kicker"><span>${n}</span> ${k}</p><h2>${title}</h2><p>${text}</p></div>`;
const svg = (id,label) => `<svg id="${id}" viewBox="0 0 720 440" role="img" aria-label="${label}"></svg>`;
const number = (id,label,v,step=.5) => `<label for="${id}">${label}</label><input id="${id}" type="number" value="${v}" step="${step}">`;
const functionSelect = id => `<label for="${id}">Function</label><select id="${id}"><option value="sin">Sine</option><option value="cos">Cosine</option></select>`;
const stepper = id => `<div class="sg-step" id="${id}-step" aria-live="polite"></div><p id="${id}-progress" class="laws-progress"></p><div class="laws-step-buttons"><button id="${id}-back" type="button" class="laws-button">← Previous step</button><button id="${id}-next" type="button" class="laws-button">Next step →</button></div>`;
const model = (fn,a,br=[1,1],h=[0,1],d=0,bPi=false) => ({fn,a,br,h,d,bPi});
const examples = [
  {m:model('cos',1,[1,1],[0,1],-1),given:String.raw`f(x)=-1+\cos x`},
  {m:model('cos',-1,[1,1],[0,1],2),given:String.raw`f(x)=2-\cos x`},
  {m:model('sin',-2,[1,1],[0,1],4),given:String.raw`f(x)=4-2\sin x`},
  {m:model('cos',5,[1,4]),given:String.raw`f(x)=5\cos(x/4)`},
  {m:model('cos',1,[4,1],[0,1],0,true),given:String.raw`f(x)=\cos(4\pi x)`},
  {m:model('sin',-2,[1,1],[1,6]),given:String.raw`f(x)=-2\sin(x-\pi/6)`},
  {m:model('sin',2,[2,3],[1,4]),given:String.raw`f(x)=2\sin\left(\frac23x-\frac\pi6\right)`,factor:String.raw`\frac23x-\frac\pi6=\frac23\left(x-\frac\pi4\right)`},
];
const inverseExamples = [
  {m:model('cos',2,[2,1]),answer:String.raw`y=2\cos(2x)`,why:"Start at the maximum at x = 0, so positive cosine is a convenient choice."},
  {m:model('sin',3,[1,2]),answer:String.raw`y=3\sin(x/2)`,why:"The curve crosses the midline upward at x = 0, so positive sine fits directly."},
  {m:model('cos',.1,[2,1],[-1,4]),answer:String.raw`y=\frac1{10}\cos\left[2\left(x+\frac\pi4\right)\right]`,why:"The maximum at x = −π/4 is a convenient cosine start. Choose a positive coefficient and shift left by π/4."},
  {m:model('sin',5,[2,1],[-1,4],0,true),answer:String.raw`y=5\cos(2\pi x)`,why:"The maximum is at x = 0. Use that point as the cosine start; the shift is 0. The displayed cycle begins a quarter-period earlier."},
];
const star = model('cos',-2.1,[1,156],[0,1],7.9,true);
const checks = [
  ["Read the amplitude",String.raw`y=4-2\sin x`,"We are looking for the amplitude.",["-2","2","4"],1,"Amplitude is |−2| = 2; 4 is the midline."],
  ["Find the period",String.raw`y=5\cos(x/4)`,"We are looking for the least positive period.",[String.raw`\pi/2`,String.raw`2\pi`,String.raw`8\pi`],2,"Divide 2π by 1/4 to get 8π."],
  ["Keep π in the coefficient",String.raw`y=\cos(4\pi x)`,"We are looking for the least positive period.",[String.raw`1/2`,String.raw`\pi/2`,"4"],0,"2π/(4π) = 1/2. The π factors cancel."],
  ["Factor before shifting",String.raw`y=2\sin(2x/3-\pi/6)`,"We are looking for the horizontal shift.",[String.raw`\pi/6\text{ right}`,String.raw`\pi/4\text{ right}`,String.raw`\pi/4\text{ left}`],1,"Factor 2/3: (2/3)(x − π/4). The shift is right by π/4."],
  ["Read the range",String.raw`y=4-2\sin x`,"We are looking for the range.",[String.raw`[-2,2]`,String.raw`[4,6]`,String.raw`[2,6]`],2,"Move two units above and below the midline y = 4."],
  ["Space the key points",String.raw`T=3\pi`,"We are looking for the distance between consecutive key points.",[String.raw`3\pi/4`,String.raw`3\pi/5`,String.raw`\pi/4`],0,"Five points have four gaps. Each gap is T/4."],
  ["Read a reflected cosine",String.raw`y=2-\cos x`,"We are looking for the value at x = 0.",["3","1","2"],1,"Cos 0 = 1, so 2 − cos 0 = 1. The cycle starts at a minimum."],
  ["Recover the midline",String.raw`y_{\min}=-1,\quad y_{\max}=5`,"We are looking for amplitude and midline.",[String.raw`A=6,\ D=2`,String.raw`A=3,\ D=3`,String.raw`A=3,\ D=2`],2,"Half the total height is 3; the average of −1 and 5 is 2."],
  ["Model a cycle",String.raw`b(t)=7.9-2.1\cos(\pi t/156)`,"We are looking for the period in days.",["156","312","78"],1,"2π/(π/156) = 312 days."],
];

document.querySelector('#app').innerHTML = `${renderLessonHeader('5.3')}
<main class="laws-lesson sine-graph-lesson">
<section class="lesson-hero lesson-hero--sine-graph"><div class="lesson-hero__copy" data-reveal><p class="lesson-kicker"><span>Section 5.3</span> Graphs of sine and cosine</p><h1>Trace a cycle.<br><em>Shape the wave.</em></h1><p class="lesson-hero__lede">A repeating curve starts with five landmarks. Change the height, stretch the cycle, move its starting point, and read the same pattern in a new place.</p><div class="lesson-hero__actions"><a class="lesson-button lesson-button--dark" href="#sg-base">Build a cycle</a><span>About 45 minutes · interactive</span></div></div><div class="sg-hero-art" data-reveal><p class="tool-label">One pattern, five landmarks</p>${svg('sg-hero-chart','One cycle of sine, with five key points')}${E(String.raw`0\ \longrightarrow\ 1\ \longrightarrow\ 0\ \longrightarrow\ -1\ \longrightarrow\ 0`)}<p>Quarter-period steps connect the unit circle to a wave.</p></div></section>
<section class="lesson-objectives" aria-label="Lesson objectives" data-reveal><p>By the end, you can</p><ol><li><span>01</span><p>Plot a cycle with five key points</p></li><li><span>02</span><p>Read amplitude, period, and shifts</p></li><li><span>03</span><p>Recover an equation from a graph</p></li><li><span>04</span><p>Interpret a periodic model</p></li></ol></section>
<section class="lesson-section" id="sg-base">${intro('01','Understand the pattern','Five points.<br>One complete cycle.',`Sine reads the unit circle’s vertical coordinate; cosine reads its horizontal coordinate. Both repeat after a full turn. Their domain is ${M(String.raw`\mathbb R`)}, range is ${M('[-1,1]')}, and least positive period is ${M('2\\pi')}. Unless a model specifies other units, x is measured in radians.`)}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Circle-to-wave explorer</p><strong>We are looking for the output at x and its position in one cycle.</strong>${functionSelect('sg-base-function')}<label for="sg-base-x">Input x (steps of π/12)</label><input id="sg-base-x" type="range" min="0" max="24" value="6" step="1"><div id="sg-base-reading" class="laws-note sg-base-reading" aria-live="polite"></div><svg id="sg-circle" viewBox="0 0 300 300" role="img" aria-label="Unit circle showing the selected coordinate"></svg></div><div class="sg-plot">${svg('sg-base-chart','Sine or cosine graph with the current input marked')}<div id="sg-base-table"></div><p class="sg-caption">Horizontal: x in radians. Vertical: the function value. Five landmarks divide one period into four equal intervals; the first and last outputs agree.</p></div></div></section>
<section class="lesson-section lesson-section--soft" id="sg-transform">${intro('02','Explore transformations','Change the parameters.<br>Keep the pattern.',`Use ${M(String.raw`y=A\sin[B(x-h)]+D`)} or cosine. For a nonconstant curve, amplitude is ${M('|A|')}, period is ${M('T=2\\pi/|B|')}, and midline is ${M('y=D')}. The range is ${M('[D-|A|,D+|A|]')}. A negative A reflects the curve about its midline.`)}
<div class="laws-rule-cards"><article><h3>Height</h3><p>|A| measures the distance from the midline to a peak. D moves the whole curve up or down.</p></article><article><h3>Width</h3><p>A larger |B| packs a cycle into a shorter interval. Quarter-period spacing is T/4.</p></article><article><h3>Starting point</h3><p>In factored form, h is the horizontal shift: right if positive, left if negative. For sine it marks a midline crossing; for cosine, an extremum.</p></article></div>
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">Transformation studio</p><strong>We are looking for the amplitude, period, midline, range, and five key points.</strong>${functionSelect('sg-function')}<div class="sg-input-grid"><div>${number('sg-a','Coefficient A',2)}</div><div>${number('sg-b','Coefficient B',1,.25)}</div><div>${number('sg-h','Shift h, as a multiple of π',0,.25)}</div><div>${number('sg-d','Vertical shift D',0)}</div></div><p>Use coefficients within ±8 and at most three decimal places; for B use 0 or |B| ≥ 1/8. Negative B reverses the inner direction. Zero A or B produces a constant.</p><button class="laws-button" type="button" id="sg-reset">Reset the studio</button><div id="sg-studio-reading" class="laws-note sg-studio-reading" aria-live="polite"></div></div><div class="sg-plot">${svg('sg-studio-chart','Transformed sinusoid and its midline')}<div id="sg-studio-table"></div><p class="sg-caption">Horizontal: x in radians, with quarter-period labels (≈ marks rounded ticks). The table retains exact coordinates. Vertical: y. Violet marks the chosen cycle; the gold dashed line is the midline. Graph scales adjust to the parameters.</p></div></div></section>
<section class="lesson-section" id="sg-work">${intro('03','Work through the notes','Factor the input.<br>Then place the landmarks.',`In ${M(String.raw`A\sin(Bx-C)+D`)}, the horizontal shift is ${M('C/B')}, provided B ≠ 0. Factor B before reading the shift. Begin at h and add T/4 four times. Connect the landmarks with a smooth curve, then repeat the pattern.`)}
<aside class="laws-note">${E(String.raw`\frac23x-\frac\pi6=\frac23\left(x-\frac\pi4\right)`)}<p>The shift is π/4 to the right. The constant π/6 in the unfactored input is not the horizontal shift.</p></aside>
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">One-cycle workshop</p>${renderMathDropdown('sg-example','Choose the given function',examples.map(c=>c.given),M)}<div class="laws-note" id="sg-work-goal" aria-live="polite"></div>${stepper('sg-work')}</div><div class="sg-plot">${svg('sg-work-chart','Worked function with its selected cycle')}<div id="sg-work-table"></div><p class="sg-caption">Horizontal: x in radians. The table keeps key-point coordinates exact. Later steps reveal the points and the smooth curve.</p></div></div></section>
<section class="lesson-section lesson-section--soft" id="sg-reconstruct">${intro('04','Read a graph','Measure the cycle.<br>Write an equation.',`Read the maximum and minimum to find ${M(String.raw`|A|=\frac{y_{\max}-y_{\min}}2`)} and ${M(String.raw`D=\frac{y_{\max}+y_{\min}}2`)}. Measure a full repeat to find T, then use ${M('B=2\\pi/T')}. Choose a maximum for cosine or a midline crossing for sine. Many equivalent equations describe the same curve.`)}
<div class="laws-lab laws-lab--dropdown" data-reveal><div class="laws-controls"><p class="tool-label">Graph-to-equation workshop</p><label for="sg-inverse">Choose a graph</label><select id="sg-inverse">${inverseExamples.map((_,i)=>`<option value="${i}">Graph ${i+1}</option>`).join('')}</select><div class="laws-note"><strong>We are looking for the amplitude, period, midline, and one sine or cosine equation with its horizontal shift.</strong></div>${stepper('sg-inverse')}</div><div class="sg-plot">${svg('sg-inverse-chart','Given cycle for equation reconstruction')}<div id="sg-inverse-table"></div><p class="sg-caption">Horizontal: x in radians. The five marked coordinates describe one complete cycle. Use their values to measure the height and repeat interval.</p></div></div></section>
<section class="lesson-section" id="sg-model">${intro('05','Apply a periodic model','Read the units.<br>Interpret the cycle.',`The notes model the variable star R Leonis with ${M(String.raw`b(t)=7.9-2.1\cos(\pi t/156)`)}, where t is in days. Treat b as the model’s brightness measure; the mathematical maximum and minimum are values of b. We use t ≥ 0 for elapsed time.`)}
<div class="laws-lab" data-reveal><div class="laws-controls"><p class="tool-label">R Leonis model</p><div class="laws-note"><strong>We are looking for the period in days, the largest and smallest model values, and their timing during one cycle.</strong></div><label for="sg-day">Elapsed time t (days)</label><input id="sg-day" type="range" min="0" max="312" value="0" step="1"><div class="sg-model-reading" id="sg-model-reading" aria-live="polite"></div>${E(String.raw`T=\frac{2\pi}{\pi/156}=312\text{ days}`)}${E(String.raw`b_{\min}=5.8,\quad b_{\max}=10`)}<p>The model starts at its minimum. It reaches its maximum halfway through the cycle, at day 156, and returns to its minimum at day 312.</p></div><div class="sg-plot">${svg('sg-model-chart','R Leonis brightness model over 312 days')}<div id="sg-model-table"></div><p class="sg-caption">Horizontal: elapsed time t in days. Vertical: model value b(t). Amplitude is 2.1, midline is 7.9, and the quarter-period is 78 days.</p></div></div></section>
<section class="lesson-section lesson-section--ink" id="sg-practice">${intro('06','Practice','Read the coefficient.<br>Check the whole cycle.',"Identify what the question asks before calculating. Keep the shift factored, use four equal gaps between five landmarks, and attach the appropriate units.")}<p id="sg-score" class="laws-score" aria-live="polite">0 of ${checks.length} checks solved</p><div class="laws-check-grid">${checks.map((q,i)=>`<article class="laws-check"><p class="tool-label">${q[0]}</p><h3>${M(q[1])}</h3><p>${q[2]}</p>${renderMathDropdown('sg-answer-'+i,'Your answer',q[3],M,{placeholder:'Select an answer'})}<button type="button" class="laws-button" data-sg-check="${i}">Check answer</button><p id="sg-feedback-${i}" class="answer-feedback" aria-live="polite"></p></article>`).join('')}</div></section>
</main>${renderLessonFooter({previous:{href:'pages/sections/5-2.html',label:'Section 5.2 · Trigonometric functions'},next:{href:"pages/sections/5-4.html",label:"Section 5.4 · More trigonometric graphs"}})}`;

function equation(m) {
  const h=value(m.h),shift=h?`x${h<0?'+':'-'}${F([Math.abs(m.h[0]),m.h[1]],!m.bPi)}`:'x';
  const b=value(m.br)===1&&!m.bPi?'':F(m.br,m.bPi);
  const input=b?`${b}\\left(${shift}\\right)`:h?`\\left(${shift}\\right)`:shift;
  const a=m.a===1?'':m.a===-1?'-':F(m.a);
  return `y=${a}\\${m.fn} ${input}${m.d?`${m.d<0?'-':'+'}${F(Math.abs(m.d))}`:''}`;
}
function properties(m) {
  const c=cycle(m);
  if(!c) {const constant=evaluate(m,0);return E(`y=${F(constant)}`)+'<p>This is a constant function. Its amplitude is 0, its range is one value, and it has no least positive period: every positive shift repeats it.</p>';}
  return E(equation(m))+`<div class="sg-properties"><p>Amplitude <strong>${M(F(Math.abs(m.a)))}</strong></p><p>Period <strong>${M(F(c.period,c.pi))}</strong></p><p>Midline <strong>${M('y='+F(m.d))}</strong></p><p>Shift <strong>${M(F(m.h,c.pi))}</strong></p></div>`+`<p>Domain: all real x. Range: ${M(`[${F(m.d-Math.abs(m.a))},${F(m.d+Math.abs(m.a))}]`)}. ${value(m.h)?`Shift ${value(m.h)>0?'right':'left'} by ${M(F([Math.abs(m.h[0]),m.h[1]],c.pi))}.`:'No horizontal shift.'}</p>`;
}
function table(id,m,visible=true) {
  const c=cycle(m);
  $(id).innerHTML=!c||!visible?'':`<div class="sg-table-scroll"><table><caption>Five key points of the selected cycle</caption><thead><tr><th scope="col">${m===star?'t (days)':'x'}</th>${c.points.map(p=>`<th scope="col">${M(F(p.x,c.pi))}</th>`).join('')}</tr></thead><tbody><tr><th scope="row">${m===star?'b(t)':'y'}</th>${c.points.map(p=>`<td>${M(F(p.y))}</td>`).join('')}</tr></tbody></table></div>`;
}
const plain = tex => tex.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g,'$1/$2').replaceAll('\\pi','π').replaceAll('-','−');
// Fixed viewBox and reserved readouts keep each chart in place as examples change.
function graph(id,m,{marker=null,reveal=2}={}) {
  const el=$(id), c=cycle(m),p=c?.period||[2,1],unit=m.bPi?1:Math.PI,start=value(m.h)*unit,T=value(p)*unit;
  const xmin=Math.min(start-.13*T,0),xmax=Math.max(start+1.13*T,.05*T),amp=c?Math.abs(m.a):1,mid=c?m.d:evaluate(m,0),ymin=Math.min(mid-1.45*amp,0),ymax=Math.max(mid+1.45*amp,0),left=66,right=672,top=30,bottom=355;
  const X=x=>left+(x-xmin)/(xmax-xmin)*(right-left),Y=y=>bottom-(y-ymin)/(ymax-ymin)*(bottom-top),axisY=Y(0),axisX=X(0);
  let minor='',major='',labels='';
  for(let j=0;j<=8;j++) {const x=start+j*T/8,px=X(x);(j%2?()=>minor+=`M${px} ${top}V${bottom}`:()=>major+=`M${px} ${top}V${bottom}`)();}
  for(let j=-2;j<=2;j++) {const y=mid+j*amp/2;major+=`M${left} ${Y(y)}H${right}`;labels+=`<text x="${left-12}" y="${Y(y)+5}" text-anchor="end">${plain(F(y))}</text>`;}
  const keypoints=c?.points||[];
  keypoints.forEach(pt=>{labels+=`<text class="sg-x-tick" x="${X(value(pt.x)*unit)}" y="${bottom+29}" text-anchor="middle">${plain(F(pt.x,c.pi)).length>10?'≈'+(value(pt.x)*unit).toFixed(2):plain(F(pt.x,c.pi))}</text>`;});
  const path=(a,b)=>Array.from({length:361},(_,j)=>{const x=a+(b-a)*j/360;return `${j?'L':'M'}${X(x).toFixed(3)} ${Y(evaluate(m,x)).toFixed(3)}`;}).join('');
  let art=`<defs><linearGradient id="${id}-fade"><stop stop-color="white" stop-opacity="0"/><stop offset=".12" stop-color="white"/><stop offset=".88" stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><mask id="${id}-mask"><rect x="${left}" y="${top}" width="${right-left}" height="${bottom-top}" fill="url(#${id}-fade)"/></mask><clipPath id="${id}-clip"><rect x="${left}" y="${top}" width="${right-left}" height="${bottom-top}"/></clipPath></defs><g mask="url(#${id}-mask)"><path d="${minor}" class="sg-grid-minor"/><path d="${major}" class="sg-grid-major"/></g><path d="M${left} ${axisY}H${right}M${axisX} ${top}V${bottom}" class="sg-axes"/><text x="${right+16}" y="${axisY+6}" class="sg-axis-label">${m===star?'t':'x'}</text><text x="${axisX+12}" y="${top-10}" class="sg-axis-label">${m===star?'b':'y'}</text><path d="M${left} ${Y(mid)}H${right}" class="sg-midline"/>`;
  if(reveal>=2)art+=`<g clip-path="url(#${id}-clip)"><path d="${path(xmin,xmax)}" class="sg-wave-context"/><path d="${path(start,start+T)}" class="sg-wave"/></g>`;
  if(reveal>=1)art+=keypoints.map(pt=>`<circle cx="${X(value(pt.x)*unit)}" cy="${Y(pt.y)}" r="5" class="sg-key-point"/>`).join('');
  if(marker!==null)art+=`<path d="M${X(marker)} ${Y(0)}V${Y(evaluate(m,marker))}" class="sg-guide"/><circle cx="${X(marker)}" cy="${Y(evaluate(m,marker))}" r="7" class="sg-current"/>`;
  el.innerHTML=art+`<g class="sg-tick-labels">${labels}</g><text x="${(left+right)/2}" y="417" text-anchor="middle" class="sg-unit-label">${m===star?'Elapsed time (days)':'x in radians · quarter-period tick spacing'}</text>`;
  el.setAttribute('aria-label',`${m===star?'Brightness model':'Graph of '+m.fn}. ${c?`Amplitude ${Math.abs(m.a)}, midline ${m.d}. Key points: ${c.points.map(pt=>`(${plain(F(pt.x,c.pi))}, ${pt.y})`).join('; ')}.`:'Constant function.'}`);
}
function renderBase() {
  const fn=$('sg-base-function').value,n=Number($('sg-base-x').value),x=n*Math.PI/12,m=model(fn,1),v=evaluate(m,x);
  const exact=(fn==='sin'?[0,1,0,-1,0]:[1,0,-1,0,1])[n/6]??null;
  $('sg-base-reading').innerHTML=E(`x=${F([n,12],true)}`)+E(`\\${fn} x${exact!==null?'='+exact:'\\approx'+v.toFixed(4)}`)+`<p>${fn==='sin'?'Read the vertical coordinate.':'Read the horizontal coordinate.'} At the five landmarks the outputs are exact; other displayed outputs are rounded to four decimals.</p>`;
  const cx=150,cy=150,r=95,px=cx+r*Math.cos(x),py=cy-r*Math.sin(x);
  $('sg-circle').innerHTML=`<path class="sg-grid-major" d="M55 35V265M245 35V265M35 55H265M35 245H265"/><path class="sg-axes" d="M25 150H275M150 25V275"/><circle cx="150" cy="150" r="95" class="sg-unit-circle"/><path d="M150 150L${px} ${py}" class="sg-circle-ray"/><path d="M150 150${fn==='sin'?`V${py}H${px}`:`H${px}V${py}`}" class="sg-guide"/><circle cx="${px}" cy="${py}" r="5" class="sg-current"/><g class="sg-tick-labels"><text x="254" y="171">1</text><text x="45" y="171" text-anchor="end">−1</text><text x="137" y="44" text-anchor="end">1</text><text x="137" y="268" text-anchor="end">−1</text></g><text x="280" y="154">x</text><text x="158" y="21">y</text>`;
  graph('sg-base-chart',m,{marker:x});table('sg-base-table',m);
}
$('sg-base-function').addEventListener('change',renderBase);$('sg-base-x').addEventListener('input',renderBase);renderBase();graph('sg-hero-chart',model('sin',1));
function renderStudio() {
  const ids=['sg-a','sg-b','sg-h','sg-d'],v=ids.map(id=>$(id).valueAsNumber);
  if(v.some(n=>!Number.isFinite(n)||Math.abs(n)>8||Math.abs(n*1000-Math.round(n*1000))>1e-6)||(v[1]!==0&&Math.abs(v[1])<.125)) {
    $('sg-studio-reading').textContent='Enter finite coefficients within ±8 with at most three decimal places. B must be 0 or have magnitude at least 1/8.';$('sg-studio-chart').innerHTML='';$('sg-studio-chart').setAttribute('aria-label','No graph: invalid coefficients.');$('sg-studio-table').innerHTML='';return;
  }
  const [a,b,h,d]=v,m=model($('sg-function').value,a,fromDecimal(b),fromDecimal(h),d);
  $('sg-studio-reading').innerHTML=properties(m);graph('sg-studio-chart',m);table('sg-studio-table',m);
}
['sg-a','sg-b','sg-h','sg-d','sg-function'].forEach(id=>$(id).addEventListener($(id).tagName==='SELECT'?'change':'input',renderStudio));
$('sg-reset').addEventListener('click',()=>{['sg-a','sg-b','sg-h','sg-d'].forEach((id,i)=>$(id).value=[2,1,0,0][i]);$('sg-function').value='sin';renderStudio();});renderStudio();
initMathDropdown('sg-example',examples.map(c=>c.given),M);
let workStep=0,inverseStep=0;
function buttons(id,index) {$(id+'-progress').textContent=`Step ${index+1} of 4`;$(id+'-back').disabled=index===0;$(id+'-next').disabled=index===3;}
function renderWork() {
  const choice=Number($('sg-example').dataset.value),c=examples[choice],m=c.m,info=cycle(m);
  if($('sg-work-goal').dataset.case!==String(choice)) {$('sg-work-goal').dataset.case=String(choice);$('sg-work-goal').innerHTML='<strong>We are looking for the amplitude, period, horizontal shift, midline, and a graph of one complete cycle of the given function.</strong>';}
  const content=[
    `<p class="tool-label">Read the factored form</p>${c.factor?E(c.factor):E(equation(m))}<p>${c.factor?'Divide the phase constant π/6 by 2/3 to get the shift π/4.':'Match the function to A sin[B(x − h)] + D or cosine.'}</p>`,
    `<p class="tool-label">Find the height and width</p>${properties(m)}${E(`T=\\frac{2\\pi}{${F(m.br,m.bPi)}}=${F(info.period,info.pi)}`)}`,
    `<p class="tool-label">Place the five landmarks</p>${E(`\\Delta x=T/4=${F(info.quarter,info.pi)}`)}<p>Start at ${M('h='+F(m.h,info.pi))} and add the quarter-period four times. Apply the coefficient and vertical shift to the basic outputs.</p>`,
    `<p class="tool-label">Connect and repeat</p><p>Connect the five key points with a smooth sinusoidal curve. The last point closes one cycle; continue the same pattern in both directions.</p>${E(`y\\in[${F(m.d-Math.abs(m.a))},${F(m.d+Math.abs(m.a))}]`)}<p>${m.a<0?'The negative coefficient reverses the basic curve about its midline.':'The positive coefficient preserves the basic curve’s direction.'}</p>`,
  ];
  $('sg-work-step').innerHTML=content[workStep];buttons('sg-work',workStep);graph('sg-work-chart',m,{reveal:workStep<2?0:workStep===2?1:2});table('sg-work-table',m,workStep>=2);
}
$('sg-example').addEventListener('change',()=>{workStep=0;renderWork();});
function renderInverse() {
  const c=inverseExamples[Number($('sg-inverse').value)],m=c.m,info=cycle(m),amp=Math.abs(m.a),lo=m.d-amp,hi=m.d+amp;
  const content=[
    `<p class="tool-label">Measure vertically</p>${E(`|A|=\\frac{${F(hi)}-(${F(lo)})}{2}=${F(amp)}`)}${E(`D=\\frac{${F(hi)}+(${F(lo)})}{2}=${F(m.d)}`)}`,
    `<p class="tool-label">Measure a full cycle</p>${E(`T=${F(info.points[4].x,info.pi)}-(${F(info.points[0].x,info.pi)})=${F(info.period,info.pi)}`)}${E(`B=\\frac{2\\pi}{${F(info.period,info.pi)}}=${F(m.br,m.bPi)}`)}`,
    `<p class="tool-label">Choose a starting landmark</p><p>${c.why}</p>${E(`h=${F(Number($('sg-inverse').value)===3?[0,1]:m.h,info.pi)}`)}<p>A negative sine coefficient starts downward; a positive cosine coefficient starts at a maximum. Read h from the chosen starting landmark.</p>`,
    `<p class="tool-label">Write one valid equation</p>${E(c.answer)}<p>Substitute the marked coordinates to check the pattern. Equivalent sine and cosine expressions can have different horizontal shifts.</p>`,
  ];
  $('sg-inverse-step').innerHTML=content[inverseStep];buttons('sg-inverse',inverseStep);graph('sg-inverse-chart',m);table('sg-inverse-table',m);
}
$('sg-inverse').addEventListener('change',()=>{inverseStep=0;renderInverse();});
['sg-work','sg-inverse'].forEach(id=>['back','next'].forEach(direction=>$(id+'-'+direction).addEventListener('click',()=>{const delta=direction==='next'?1:-1;if(id==='sg-work'){workStep=Math.max(0,Math.min(3,workStep+delta));renderWork();}else{inverseStep=Math.max(0,Math.min(3,inverseStep+delta));renderInverse();}})));
renderWork();renderInverse();
function renderModel(){const t=Number($('sg-day').value);$('sg-model-reading').innerHTML=E(`t=${t}\\text{ days},\\quad b(t)\\approx${evaluate(star,t).toFixed(3)}`)+'<p>Model values are rounded to three decimals here.</p>';graph('sg-model-chart',star,{marker:t});table('sg-model-table',star);}
$('sg-day').addEventListener('input',renderModel);renderModel();
checks.forEach((q,i)=>initMathDropdown('sg-answer-'+i,q[3],M));
const solved=new Set();document.querySelectorAll('[data-sg-check]').forEach(button=>button.addEventListener('click',()=>{const i=Number(button.dataset.sgCheck),choice=$('sg-answer-'+i).dataset.value;if(choice===''){setFeedback($('sg-feedback-'+i),false,'Choose an answer first.');return;}const correct=Number(choice)===checks[i][4];if(correct)solved.add(i);setFeedback($('sg-feedback-'+i),correct,(correct?'Correct. ':'Try again. ')+checks[i][5]);$('sg-score').textContent=`${solved.size} of ${checks.length} checks solved${solved.size===checks.length?' · Ready to move on!':''}`;}));
initLessonChrome();
