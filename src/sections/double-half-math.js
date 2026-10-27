import { degreePoint } from './angle-sum-math.js';

export function angleModel(theta){
 const p=degreePoint(theta),double=degreePoint(2*theta),half=degreePoint(theta/2);
 const t=p.c===0?null:p.s/p.c;
 return {theta,p,double,half,doubleTan:double.c===0?null:double.s/double.c,halfTan:half.c===0?null:half.s/half.c,
  doubleQuotient:p.c!==0&&double.c!==0,
  halfFirst:p.s!==0,halfSecond:half.c!==0,
  halfSinRoot:Math.sqrt(Math.max(0,(1-p.c)/2)),halfCosRoot:Math.sqrt(Math.max(0,(1+p.c)/2)),
  tan:t};
}
export function algebraicValues(x){
 if(!Number.isFinite(x)||Math.abs(x)>1)return null;
 return {original:Math.cos(2*Math.asin(x)),rewritten:1-2*x*x};
}
const step=(tex,rule,text)=>({tex,rule,text});
export const exactCases=[
 {given:String.raw`\cos^2(75^\circ)-\sin^2(75^\circ)`,value:-Math.sqrt(3)/2,steps:[
  step(String.raw`\cos^2 u-\sin^2 u=\cos(2u)`,'Recognize a double-angle pattern','The squared functions share the same input, 75°.'),
  step(String.raw`\cos(2\cdot75^\circ)=\cos150^\circ`,'Double the whole input','The new angle is 150°, not 75° squared.'),
  step(String.raw`-\frac{\sqrt3}{2}`,'Use the quadrant sign','150° is in Quadrant II, where cosine is negative.'),
 ]},
 {given:String.raw`2\sin(52.5^\circ)\cos(52.5^\circ)`,value:(Math.sqrt(6)+Math.sqrt(2))/4,steps:[
  step(String.raw`2\sin u\cos u=\sin(2u)`,'Recognize a double-angle pattern','Both functions use u = 52.5°.'),
  step(String.raw`\sin105^\circ=\sin(60^\circ+45^\circ)`,'Double and split the angle','Use the addition formula from section 7.2 to evaluate 105° exactly.'),
  step(String.raw`\frac{\sqrt3}{2}\frac{\sqrt2}{2}+\frac12\frac{\sqrt2}{2}`,'Sine addition formula','Substitute the exact values at 60° and 45°.'),
  step(String.raw`\frac{\sqrt6+\sqrt2}{4}`,'Combine the fractions','Keep radicals rather than rounding the individual function values.'),
 ]},
 {given:String.raw`\tan22.5^\circ`,value:Math.sqrt(2)-1,steps:[
  step(String.raw`22.5^\circ=45^\circ/2`,'Identify the parent angle','The half-angle is in Quadrant I, so its tangent is positive.'),
  step(String.raw`\tan22.5^\circ=\frac{1-\cos45^\circ}{\sin45^\circ}`,'Tangent half-angle formula','Sin 45° is nonzero, so this form is valid.'),
  step(String.raw`\frac{1-\sqrt2/2}{\sqrt2/2}=\frac{2-\sqrt2}{\sqrt2}`,'Substitute exact values','Clear the inner denominators before rationalizing.'),
  step(String.raw`\sqrt2-1`,'Rationalize and simplify','The exact result is positive, as required.'),
 ]},
 {given:String.raw`1-2\sin^2(\pi/12)`,value:Math.sqrt(3)/2,steps:[
  step(String.raw`1-2\sin^2 u=\cos(2u)`,'Choose the sine-only cosine form','This form avoids finding sin(π/12) separately.'),
  step(String.raw`\cos(2\pi/12)=\cos(\pi/6)`,'Double the radian input','All angles here are in radians.'),
  step(String.raw`\frac{\sqrt3}{2}`,'Use an exact special-angle value','The expression is a single cosine value.'),
 ]},
 {given:String.raw`\frac{2\tan(-15^\circ)}{1-\tan^2(-15^\circ)}`,value:-Math.sqrt(3)/3,steps:[
  step(String.raw`\frac{2\tan u}{1-\tan^2 u}=\tan(2u)`,'Recognize a tangent double angle','Tan(−15°) exists and the denominator is nonzero.'),
  step(String.raw`\tan(-30^\circ)=-\tan30^\circ`,'Double and use odd symmetry','The doubled angle is −30°.'),
  step(String.raw`-\frac{\sqrt3}{3}`,'Evaluate exactly','The result is negative in Quadrant IV.'),
 ]},
 {given:String.raw`\tan(5\pi/8)`,value:-1-Math.sqrt(2),steps:[
  step(String.raw`5\pi/8=(5\pi/4)/2`,'Identify the parent angle','5π/8 lies in Quadrant II, so its tangent is negative.'),
  step(String.raw`\tan(5\pi/8)=\frac{1-\cos(5\pi/4)}{\sin(5\pi/4)}`,'Tangent half-angle formula','The parent sine is nonzero.'),
  step(String.raw`\frac{1+\sqrt2/2}{-\sqrt2/2}=-\frac{2+\sqrt2}{\sqrt2}`,'Use the parent quadrant signs','Sine and cosine of 5π/4 are both −√2/2.'),
  step(String.raw`-1-\sqrt2`,'Rationalize and simplify','The sign agrees with the quadrant of the half-angle.'),
 ]},
 {given:String.raw`\sin22.5^\circ`,value:Math.sqrt(2-Math.sqrt(2))/2,steps:[
  step(String.raw`22.5^\circ=45^\circ/2`,'Locate the half-angle','The half-angle is in Quadrant I, so choose the positive root.'),
  step(String.raw`\sin22.5^\circ=+\sqrt{\frac{1-\cos45^\circ}{2}}`,'Sine half-angle formula','The ± sign is resolved by the half-angle, not by a choice of convenience.'),
  step(String.raw`\sqrt{\frac{1-\sqrt2/2}{2}}=\sqrt{\frac{2-\sqrt2}{4}}`,'Simplify inside the radical','Keep the nested radical exact.'),
  step(String.raw`\frac{\sqrt{2-\sqrt2}}{2}`,'Extract the square root of 4','The result is nonnegative in Quadrant I.'),
 ]},
 {given:String.raw`\cos105^\circ`,value:-Math.sqrt(2-Math.sqrt(3))/2,steps:[
  step(String.raw`105^\circ=210^\circ/2`,'Locate the half-angle','105° is in Quadrant II, so cosine must be negative.'),
  step(String.raw`\cos105^\circ=-\sqrt{\frac{1+\cos210^\circ}{2}}`,'Cosine half-angle formula','Use the negative square root because of the half-angle’s quadrant.'),
  step(String.raw`-\sqrt{\frac{1-\sqrt3/2}{2}}=-\sqrt{\frac{2-\sqrt3}{4}}`,'Use cos 210° = −√3/2','The sign outside the radical remains negative.'),
  step(String.raw`-\frac{\sqrt{2-\sqrt3}}{2}`,'Simplify the radical','This exact nested-radical form is equivalent to (√2 − √6)/4.'),
 ]},
];
export const rewriteCases=[
 {given:String.raw`2\sin(5\theta)\cos(5\theta)`,result:String.raw`\sin(10\theta)`,domain:String.raw`\theta\in\mathbb R`,note:'Every real θ is allowed.',steps:[
  step(String.raw`u=5\theta`,'Name the shared input','The whole input is 5θ in both functions.'),
  step(String.raw`2\sin u\cos u=\sin(2u)`,'Sine double-angle formula','Double u, rather than doubling only the coefficient outside the function.'),
  step(String.raw`\sin(10\theta)`,'Substitute back','2(5θ) = 10θ.'),
 ]},
 {given:String.raw`\cos^2(3\theta)-\sin^2(3\theta)`,result:String.raw`\cos(6\theta)`,domain:String.raw`\theta\in\mathbb R`,note:'Every real θ is allowed.',steps:[
  step(String.raw`u=3\theta`,'Name the shared input','The two squares use the same angle.'),
  step(String.raw`\cos^2 u-\sin^2 u=\cos(2u)`,'Cosine double-angle formula','The difference of these squares is a double-angle cosine.'),
  step(String.raw`\cos(6\theta)`,'Substitute back','2(3θ) = 6θ.'),
 ]},
 {given:String.raw`2\sin(\theta/2)\cos(\theta/2)`,result:String.raw`\sin\theta`,domain:String.raw`\theta\in\mathbb R`,note:'Every real θ is allowed.',steps:[
  step(String.raw`u=\theta/2`,'Name the shared input','A double-angle pattern can start from a half-sized input.'),
  step(String.raw`\sin(2u)`,'Sine double-angle formula','Replace 2 sin u cos u by sin(2u).'),
  step(String.raw`\sin\theta`,'Substitute back','2(θ/2) = θ.'),
 ]},
 {given:String.raw`\frac{1-\cos(6\theta)}{\sin(6\theta)}`,result:String.raw`\tan(3\theta)`,domain:String.raw`\sin(6\theta)\ne0`,note:'Exclude θ = kπ/6, where k is any integer. Keep this original domain after simplifying.',steps:[
  step(String.raw`A=6\theta`,'Identify the parent angle','This is the tangent half-angle ratio (1 − cos A)/sin A.'),
  step(String.raw`\tan(A/2)`,'Tangent half-angle formula','The original denominator sin A must be nonzero.'),
  step(String.raw`\tan(3\theta)`,'Substitute back and keep the domain','The new formula can be defined at extra inputs. For example, the original is undefined at θ = 0 even though tan(3θ) = 0 there.'),
 ]},
 {given:String.raw`\frac{2\tan(9\theta)}{1-\tan^2(9\theta)}`,result:String.raw`\tan(18\theta)`,domain:String.raw`\cos(9\theta)\ne0,\quad\cos(18\theta)\ne0`,note:'The component tangent must exist and the displayed denominator must be nonzero.',steps:[
  step(String.raw`u=9\theta`,'Name the shared input','Check tan u and 1 − tan²u before using the formula.'),
  step(String.raw`\tan(2u)`,'Tangent double-angle formula','On the original domain, the quotient equals tan(2u).'),
  step(String.raw`\tan(18\theta)`,'Substitute back and keep the domain','The original still excludes inputs where cos(9θ) = 0, even if the new tangent is defined there.'),
 ]},
];
export const algebraSteps=[
 step(String.raw`-1\le x\le1`,'Check the inverse-function domain','Arcsine requires its input to lie in [−1, 1]. This remains the domain of the original expression.'),
 step(String.raw`u=\arcsin x,\quad\sin u=x`,'Name the inverse angle','Arcsine returns u in [−π/2, π/2]. The sine-only cosine formula avoids choosing a square root.'),
 step(String.raw`\cos(2u)=1-2\sin^2 u`,'Cosine double-angle formula','Use the version involving only the known sine.'),
 step(String.raw`\cos(2\arcsin x)=1-2x^2,\quad -1\le x\le1`,'Substitute and retain the domain','The polynomial is defined more widely, but the original inverse-trig expression is not.'),
];
export const quadrantSteps=[
 step(String.raw`\cos\theta=-\sqrt{1-(15/17)^2}=-8/17`,'Pythagoras and the quadrant','On π/2 < θ < π, cosine is negative. Also π/4 < θ/2 < π/2, so both half-angle sine and tangent are positive.'),
 step(String.raw`\cos(2\theta)=1-2(15/17)^2=-161/289`,'Cosine double-angle formula','This is the first requested value.'),
 step(String.raw`\sin(2\theta)=2(15/17)(-8/17)=-240/289`,'Sine double-angle formula','This is the second requested value. Its negative sign comes from cosine of θ.'),
 step(String.raw`\tan(2\theta)=\frac{-240/289}{-161/289}=240/161`,'Quotient identity','This is the third requested value. The doubled-angle cosine is nonzero.'),
 step(String.raw`\sin(\theta/2)=+\sqrt{\frac{1+8/17}{2}}=\frac5{\sqrt{34}}=\frac{5\sqrt{34}}{34}`,'Sine half-angle formula','This is the fourth requested value. The half-angle lies in Quadrant I, so use the positive root.'),
 step(String.raw`\tan(\theta/2)=\frac{1+8/17}{15/17}=5/3`,'Tangent half-angle formula','This is the fifth requested value. Sine of θ is nonzero, so the chosen ratio is valid.'),
];
