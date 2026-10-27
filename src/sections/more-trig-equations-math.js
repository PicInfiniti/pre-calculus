import {fraction,scale,fractionTex} from './sinusoid-math.js';
import {family,enumerate,familyTex} from './trig-equations-math.js';
export {enumerate,familyTex};
// Coefficients are exact rational multiples of π. For u = (n/d)x,
// divide both the starting angle and its repeating shift by n/d.
export function divideFamilies(families,[n,d]){
 if(!Number.isInteger(n)||!Number.isInteger(d)||n===0||d===0)throw new Error('Use a nonzero rational angle multiplier.');
 return families.map(f=>({base:scale(f.base,d,n),period:scale(f.period,Math.abs(d),Math.abs(n))}));
}
export const F=q=>fractionTex(q,true);
const s=(tex,rule,text)=>({tex,rule,text});
export const identityCases=[
 {id:'1',given:String.raw`1+\cos x=2\sin^2x`,families:[family(1,3),family(5,3),family(1)],steps:[
 s(String.raw`1+\cos x=2(1-\cos^2x)`,'Use the Pythagorean identity','Replace the squared sine so the equation involves only cosine.'),
 s(String.raw`(2\cos x-1)(\cos x+1)=0`,'Collect and factor','The equivalent quadratic is 2 cos²x + cos x − 1 = 0.'),
 s(String.raw`\cos x=1/2\quad\text{or}\quad\cos x=-1`,'Keep both factors','Both values lie in [−1, 1]. The value −1 supplies one direction per turn.'),
 ]},
 {id:'2(a)',given:String.raw`\sin(2x)+\sin x=0`,families:[family(0,1,1),family(2,3),family(4,3)],steps:[
 s(String.raw`2\sin x\cos x+\sin x=0`,'Expand the double angle','Both terms now use the same angle x.'),
 s(String.raw`\sin x(2\cos x+1)=0`,'Factor instead of dividing','Dividing by sin x would lose every solution for which sin x = 0.'),
 s([String.raw`\sin x=0`,String.raw`\cos x=-1/2`],'Solve every factor','The first factor gives x = kπ; the second contributes two more families.'),
 ]},
 {id:'2(b)',given:String.raw`\cos(2x)=\cos x-1`,families:[family(1,2,1),family(1,3),family(5,3)],steps:[
 s(String.raw`2\cos^2x-1=\cos x-1`,'Choose a cosine identity','Use cos(2x) = 2 cos²x − 1 to match the other cosine term.'),
 s(String.raw`\cos x(2\cos x-1)=0`,'Collect and factor','Add 1 to both sides and move the remaining term to the left.'),
 s(String.raw`\cos x=0\quad\text{or}\quad\cos x=1/2`,'Keep both factors','Cosine zero gives π/2 + kπ; cosine 1/2 needs two directions per turn.'),
 ]},
 {id:'3(a)',given:String.raw`\sin(2x)=\sqrt2\cos x`,families:[family(1,2,1),family(1,4),family(3,4)],steps:[
 s(String.raw`2\sin x\cos x-\sqrt2\cos x=0`,'Expand and collect','The coefficient is √2, not 2.'),
 s(String.raw`\cos x(2\sin x-\sqrt2)=0`,'Keep the zero cosine branch','Canceling cosine would discard π/2 + kπ.'),
 s(String.raw`\cos x=0\quad\text{or}\quad\sin x=\sqrt2/2`,'Locate all directions','The sine factor adds the Quadrant I and II directions π/4 and 3π/4.'),
 ]},
 {id:'3(b)',given:String.raw`\cos(2x)+\sin x=0`,families:[family(1,2),family(7,6),family(11,6)],steps:[
 s(String.raw`1-2\sin^2x+\sin x=0`,'Choose the sine identity','Use cos(2x) = 1 − 2 sin²x to obtain one trig function.'),
 s(String.raw`(2\sin x+1)(\sin x-1)=0`,'Multiply by −1 and factor','Changing the sign of both sides preserves the roots.'),
 s(String.raw`\sin x=-1/2\quad\text{or}\quad\sin x=1`,'Use the sine range','Negative sine supplies two directions; sine 1 supplies only π/2 per turn.'),
 ]},
 {id:'4',given:String.raw`\cos x-\cos(2x)=-2`,families:[family(1)],steps:[
 s(String.raw`\cos x-(2\cos^2x-1)=-2`,'Rewrite the double angle','The expression cos(2x) means cosine of twice x, not cosine squared.'),
 s(String.raw`(2\cos x-3)(\cos x+1)=0`,'Collect and factor','The resulting quadratic is 2 cos²x − cos x − 3 = 0.'),
 s(String.raw`\cos x=3/2\quad\text{or}\quad\cos x=-1`,'Reject the impossible value','Cosine cannot equal 3/2. Only cosine −1 produces real solutions.'),
 ]},
];
identityCases.forEach(c=>c.steps.push(s(c.families.map(f=>'x='+familyTex(f)),'Repeat every surviving direction','k is any integer. Substitution into the original equation confirms each family; all real x are allowed in its domain.')));
const intervalLines=roots=>roots.length?Array.from({length:Math.ceil(roots.length/3)},(_,i)=>roots.slice(i*3,i*3+3).map(r=>F(r.q)).join(',\\ ')):String.raw`\varnothing`;
const multiple=(id,given,inner,fn,target,multiplier,innerFamilies,intervalOnly=false,variable='x')=>{
 const families=divideFamilies(innerFamilies,multiplier),[n,d]=multiplier;
 return {id,given,inner,fn,target,multiplier,innerFamilies,families,intervalOnly,variable,steps:[
 s(['u='+inner,'\\'+fn+' u='+target.tex],'Name the complete inner angle','Isolate the trig function, then solve in u. All angles are in radians.'),
 s(innerFamilies.map(f=>'u='+familyTex(f)),'Write every inner-angle family','k is any integer. Tangent and cotangent repeat after π; sine and cosine repeat after 2π.'),
 s(families.map(f=>variable+'='+familyTex(f)),'Divide every term, including the shift',`Since u = ${d===1?n:n+'/'+d} times the original angle, multiply the whole family by ${n===1?d:d+'/'+n}. The new repeating shift must change too.`),
 s(intervalLines(enumerate(families,[0,1],[2,1])),'Filter the original interval [0, 2π)','Keep every family member at least 0 and strictly less than 2π. An equation can have infinitely many real solutions and none in this interval.'),
 ]};
};
export const multipleCases=[
 multiple('5',String.raw`2\sin(2x)+\sqrt2=0`,'2x','sin',{tex:String.raw`-\sqrt2/2`,value:-Math.SQRT1_2},[2,1],[family(5,4),family(7,4)],true),
 multiple('6',String.raw`\sin(x/4)=\sqrt3/2`,'x/4','sin',{tex:String.raw`\sqrt3/2`,value:Math.sqrt(3)/2},[1,4],[family(1,3),family(2,3)]),
 multiple('7',String.raw`\tan(2x)=1`,'2x','tan',{tex:'1',value:1},[2,1],[family(1,4,1)]),
 multiple('8',String.raw`\cot(3x)=0`,'3x','cot',{tex:'0',value:0},[3,1],[family(1,2,1)]),
 multiple('Practice (a)',String.raw`2\cos(3x)-\sqrt3=0`,'3x','cos',{tex:String.raw`\sqrt3/2`,value:Math.sqrt(3)/2},[3,1],[family(1,6),family(11,6)]),
 multiple('Practice (b)',String.raw`2\cos(x/6)+\sqrt3=0`,'x/6','cos',{tex:String.raw`-\sqrt3/2`,value:-Math.sqrt(3)/2},[1,6],[family(5,6),family(7,6)]),
 multiple('Practice (c)',String.raw`\tan(\theta/4)+\sqrt3=0`,String.raw`\theta/4`,'tan',{tex:String.raw`-\sqrt3`,value:-Math.sqrt(3)},[1,4],[family(-1,3,1)],false,String.raw`\theta`),
];
export const combinedCases=[
 {...multiple('9',String.raw`\sin(4\theta)\cos\theta-\sin\theta\cos(4\theta)=\sqrt2/2`,String.raw`3\theta`,'sin',{tex:String.raw`\sqrt2/2`,value:Math.SQRT1_2},[3,1],[family(1,4),family(3,4)],false,String.raw`\theta`),steps:[
 s(String.raw`\sin(4\theta-\theta)=\sqrt2/2`,'Recognize sine of a difference','sin A cos B − cos A sin B = sin(A − B). Multiplication commutes in the second product.'),
 s(String.raw`\sin(3\theta)=\sqrt2/2`,'Simplify the inner angle','Now use the multiple-angle method. This is not sin θ and is not a product of two sines.'),
 s([String.raw`3\theta=\pi/4+2k\pi`,String.raw`3\theta=3\pi/4+2k\pi`],'Keep both inner-angle directions','Divide both starting angles and the 2kπ shift by 3.'),
 s([String.raw`\theta=\pi/12+2k\pi/3`,String.raw`\theta=\pi/4+2k\pi/3`],'Report all real solutions','k is any integer. All real θ are allowed in the original equation.'),
 s([String.raw`\pi/12,\ \pi/4,\ 3\pi/4`,String.raw`11\pi/12,\ 17\pi/12,\ 19\pi/12`],'List every solution in [0, 2π)','Each family contributes three roots in the original interval.'),
 ]},
 {id:'10',given:String.raw`\cos(\sin x)=0`,families:[],steps:[
 s(String.raw`u=\sin x,\qquad -1\le u\le1`,'Use the inner function’s range','The input to cosine is a real number in [−1, 1], measured in radians.'),
 s(String.raw`\cos u=0\ \Longrightarrow\ u=\pi/2+k\pi`,'Locate the outer function’s zeros','The closest zeros to 0 are −π/2 and π/2. Both lie outside [−1, 1].'),
 s(String.raw`[\cos1,1]\subset(0,1]`,'Compare the ranges','For u in [−1, 1], cosine stays at least cos(1) > 0. Thus cos(sin x) never reaches zero.'),
 s(String.raw`\text{No real solutions}`,'Conclude from the range','All real x are in the original domain, but none satisfies the equation. cos(sin x) is a composition, not cos x · sin x.'),
 ]},
];
export function innerInterval(c,lo,hi){const[n,d]=c.multiplier;return [scale(fraction(lo),n,d),scale(fraction(hi),n,d)];}
