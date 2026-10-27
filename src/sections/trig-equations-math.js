import {fraction,add,scale,value,fractionTex} from './sinusoid-math.js';
export const family=(n,d=1,p=2,q=1)=>({base:fraction(n,d),period:fraction(p,q)});
export const compareRational=(a,b)=>a[0]*b[1]-b[0]*a[1];
export function enumerate(families,lo,hi,includeLo=true,includeHi=false){
 const roots=new Map();
 for(const [index,f]of families.entries()){
  const p=value(f.period),b=value(f.base);
  if(p<=0)throw new Error('The solution-family period must be positive.');
  for(let k=Math.ceil((value(lo)-b)/p)-1;k<=Math.floor((value(hi)-b)/p)+1;k++){
   const q=add(f.base,scale(f.period,k)),left=compareRational(q,lo),right=compareRational(q,hi);
   if((left>0||includeLo&&left===0)&&(right<0||includeHi&&right===0))roots.set(q.join('/'),{q,k,family:index});
  }
 }
 return [...roots.values()].sort((a,b)=>compareRational(a.q,b.q));
}
export function familyTex(f){
 const [n,d]=f.period,top=`${n===1?'':n}k\\pi`,term=d===1?top:`\\frac{${top}}{${d}}`;
 return f.base[0]?fractionTex(f.base,true)+'+'+term:term;
}
const step=(tex,rule,text)=>({tex,rule,text});
export const basicCases=[
 {id:'1',variable:'x',domain:String.raw`x\in\mathbb R`,given:String.raw`6\cos x=8\cos x+\sqrt2`,goal:'We are looking for six specific solutions and a description of all real solutions.',families:[family(3,4),family(5,4)],extra:{type:'six'},steps:[
  step(String.raw`-2\cos x=\sqrt2`,'Collect like terms','Subtract 8 cos x from both sides.'),
  step(String.raw`\cos x=-\sqrt2/2`,'Isolate the trig function','Divide by −2. Cosine is negative in Quadrants II and III.'),
  step(String.raw`x=3\pi/4\quad\text{or}\quad x=5\pi/4\quad(0\le x<2\pi)`,'Locate both angles in one turn','Both angles have reference angle π/4.'),
  step([String.raw`x=3\pi/4+2k\pi`,String.raw`x=5\pi/4+2k\pi`],'Repeat by the cosine period','k is any integer. These two families describe all real solutions.'),
  step([String.raw`3\pi/4,\ 5\pi/4,\ 11\pi/4`,String.raw`13\pi/4,\ 19\pi/4,\ 21\pi/4`],'List six specific solutions','These are six examples from k = 0, 1, 2. The general families, rather than this finite list, give all solutions.'),
 ]},
 {id:'2',variable:'x',domain:String.raw`x\in\mathbb R`,given:String.raw`5\sin x-\sqrt3=3\sin x`,goal:'We are looking for six specific solutions and a description of all real solutions.',families:[family(1,3),family(2,3)],extra:{type:'six'},steps:[
  step(String.raw`2\sin x=\sqrt3`,'Collect and isolate','Subtract 3 sin x and add √3.'),
  step(String.raw`\sin x=\sqrt3/2`,'Divide by 2','Sine is positive in Quadrants I and II.'),
  step(String.raw`x=\pi/3\quad\text{or}\quad x=2\pi/3\quad(0\le x<2\pi)`,'Locate both angles in one turn','The reference angle is π/3.'),
  step([String.raw`x=\pi/3+2k\pi`,String.raw`x=2\pi/3+2k\pi`],'Repeat by the sine period','k is any integer. Include both families.'),
  step([String.raw`\pi/3,\ 2\pi/3,\ 7\pi/3`,String.raw`8\pi/3,\ 13\pi/3,\ 14\pi/3`],'List six specific solutions','Taking k = 0, 1, 2 in both families supplies six different solutions.'),
 ]},
 {id:'3',variable:String.raw`\theta`,domain:String.raw`\cos\theta\ne0`,given:String.raw`-\sqrt3=3\tan\theta`,goal:'We are looking for all real solutions, then every solution in [−2π, 2π].',families:[family(-1,6,1)],extra:{type:'interval',lo:[-2,1],hi:[2,1],left:true,right:true},steps:[
  step(String.raw`\tan\theta=-\sqrt3/3`,'Isolate tangent','Divide by 3. The original tangent excludes θ = π/2 + kπ.'),
  step(String.raw`\theta=-\pi/6+k\pi`,'Use tangent’s period','k is any integer. A π shift already reaches the other terminal direction; a second family is unnecessary.'),
  step(String.raw`-2\pi\le-\pi/6+k\pi\le2\pi`,'Apply the closed interval','Divide by π and solve the integer bounds: −11/6 ≤ k ≤ 13/6, so k = −1, 0, 1, 2.'),
  step([String.raw`-7\pi/6,\ -\pi/6`,String.raw`5\pi/6,\ 11\pi/6`],'List every interval solution','Both endpoints are permitted, but neither is a solution of this equation.'),
 ]},
];
export const algebraCases=[
 {id:'4',given:String.raw`\csc^2\theta-2=0`,domain:String.raw`\sin\theta\ne0`,families:[family(1,4,1,2)],steps:[
  step(String.raw`\csc^2\theta=2`,'Isolate the square','Cosecant requires sin θ ≠ 0.'),
  step(String.raw`\csc\theta=\pm\sqrt2\quad\Longrightarrow\quad\sin\theta=\pm\sqrt2/2`,'Keep both square-root signs','Take reciprocals of the nonzero possibilities.'),
  step(String.raw`\theta=\pi/4+k\pi/2`,'Combine all four directions','k is any integer. The angles repeat every π/2 for this squared equation, and none has zero sine.'),
 ]},
 {id:'5a',given:String.raw`\tan^2\theta=3`,domain:String.raw`\cos\theta\ne0`,families:[family(1,3,1),family(2,3,1)],steps:[
  step(String.raw`\tan\theta=\sqrt3\quad\text{or}\quad\tan\theta=-\sqrt3`,'Keep both square-root signs','Squaring loses the sign, so solve both tangent equations.'),
  step([String.raw`\theta=\pi/3+k\pi`,String.raw`\theta=2\pi/3+k\pi`],'Repeat each branch by π','k is any integer. Neither branch contains an excluded tangent input.'),
 ]},
 {id:'5b',given:String.raw`\cos^2\theta=9`,domain:String.raw`\theta\in\mathbb R`,families:[],steps:[
  step(String.raw`\cos\theta=3\quad\text{or}\quad\cos\theta=-3`,'Keep both square-root signs','Both algebraic possibilities must be checked against the function’s range.'),
  step(String.raw`-1\le\cos\theta\le1`,'Check the cosine range','Neither 3 nor −3 is a possible real cosine.'),
  step(String.raw`\text{No real solutions}`,'Reject impossible trig values','The equation has an empty real solution set.'),
 ]},
 {id:'6',given:String.raw`3\tan^2 x-1=0`,variable:'x',domain:String.raw`\cos x\ne0`,families:[family(1,6,1),family(5,6,1)],steps:[
  step(String.raw`\tan^2 x=1/3`,'Isolate the square','Add 1 and divide by 3.'),
  step(String.raw`\tan x=\pm\sqrt3/3`,'Take both square roots','Rationalize 1/√3 if desired.'),
  step([String.raw`x=\pi/6+k\pi`,String.raw`x=5\pi/6+k\pi`],'Use both tangent families','k is any integer. Both signs are represented.'),
 ]},
 {id:'7',given:String.raw`\cot\theta\cos\theta+\cos\theta=0`,domain:String.raw`\sin\theta\ne0`,families:[family(1,2,1),family(3,4,1)],steps:[
  step(String.raw`\cos\theta(\cot\theta+1)=0`,'Factor before dividing','Dividing by cos θ would discard valid solutions where cos θ = 0.'),
  step(String.raw`\cos\theta=0\quad\text{or}\quad\cot\theta=-1`,'Zero-product property','The original domain still requires sin θ ≠ 0.'),
  step([String.raw`\theta=\pi/2+k\pi`,String.raw`\theta=3\pi/4+k\pi`],'Solve both factors','k is any integer. Both families have nonzero sine and satisfy the original equation.'),
 ]},
 {id:'8',given:String.raw`\sin^3\theta=\sin\theta`,domain:String.raw`\theta\in\mathbb R`,families:[family(0,1,1,2)],steps:[
  step(String.raw`\sin\theta(\sin^2\theta-1)=0`,'Move to one side and factor','Do not divide by sine: sin θ = 0 is one of the required branches.'),
  step(String.raw`\sin\theta=0,\quad1,\quad-1`,'Zero-product property','The quadratic factor contributes both 1 and −1.'),
  step(String.raw`\theta=k\pi/2`,'Combine the axis directions','k is any integer. All four axis directions repeat through this single family.'),
 ]},
 {id:'9',variable:'x',given:String.raw`\sqrt2\sin x\sec x=2\sin x`,domain:String.raw`\cos x\ne0`,families:[family(0,1,1),family(1,4),family(7,4)],extra:{type:'interval',lo:[0,1],hi:[2,1],left:true,right:false},steps:[
  step(String.raw`\sin x(\sqrt2\sec x-2)=0`,'Factor without losing a branch','Secant requires cos x ≠ 0. Dividing by sine would lose its zero solutions.'),
  step(String.raw`\sin x=0\quad\text{or}\quad\cos x=\sqrt2/2`,'Solve the two factors','The secant branch is sec x = √2, so its cosine is positive √2/2.'),
  step([String.raw`x=k\pi`,String.raw`x=\pi/4+2k\pi`,String.raw`x=7\pi/4+2k\pi`],'Write every family','k is any integer. All three families satisfy the original secant domain.'),
  step(String.raw`[0,2\pi):\quad0,\ \pi/4,\ \pi,\ 7\pi/4`,'Apply the half-open interval','Include 0 and exclude 2π. The interval contains four distinct solutions.'),
 ]},
 {id:'10',given:String.raw`\sin^2\theta-\sin\theta-20=0`,domain:String.raw`\theta\in\mathbb R`,families:[],steps:[
  step(String.raw`(\sin\theta-5)(\sin\theta+4)=0`,'Factor as a quadratic','Treat sin θ as one algebraic variable.'),
  step(String.raw`\sin\theta=5\quad\text{or}\quad\sin\theta=-4`,'Zero-product property','Check both possible trig values.'),
  step(String.raw`\text{No real solutions}`,'Use the sine range','Neither value lies in [−1, 1].'),
 ]},
 {id:'11',given:String.raw`2\cos^2\theta-\cos\theta=1`,domain:String.raw`\theta\in\mathbb R`,families:[family(0),family(2,3),family(4,3)],extra:{type:'interval',lo:[-2,1],hi:[0,1],left:true,right:false},steps:[
  step(String.raw`(2\cos\theta+1)(\cos\theta-1)=0`,'Move the constant and factor','The quadratic is 2c² − c − 1.'),
  step(String.raw`\cos\theta=-1/2\quad\text{or}\quad\cos\theta=1`,'Zero-product property','Both values lie in the cosine range.'),
  step([String.raw`\theta=2k\pi`,String.raw`\theta=2\pi/3+2k\pi`,String.raw`\theta=4\pi/3+2k\pi`],'Write all real solutions','k is any integer. Include the axis solution as well as both negative-cosine angles.'),
  step(String.raw`[-2\pi,0):\quad-2\pi,\ -4\pi/3,\ -2\pi/3`,'Check the interval endpoints','−2π is included and solves the equation. 0 also solves it, but is excluded by this interval.'),
 ]},
 {id:'12',variable:'x',given:String.raw`\sin^3 x+\frac{\sqrt3}{2}\sin^2 x-\sin x-\frac{\sqrt3}{2}=0`,domain:String.raw`x\in\mathbb R`,families:[family(1,2,1),family(4,3),family(5,3)],extra:{type:'interval',lo:[-3,1],hi:[1,1],left:true,right:true},steps:[
  step(String.raw`\sin^2 x(\sin x+\sqrt3/2)-(\sin x+\sqrt3/2)=0`,'Factor by grouping','Both pairs contain the factor sin x + √3/2.'),
  step(String.raw`(\sin^2 x-1)(\sin x+\sqrt3/2)=0`,'Factor the common binomial','The coefficient is √3/2, so the third sine value is within range.'),
  step(String.raw`\sin x=1,\quad-1,\quad-\sqrt3/2`,'Solve each factor','All three values are admissible; keep every branch.'),
  step([String.raw`x=\pi/2+k\pi`,String.raw`x=4\pi/3+2k\pi`,String.raw`x=5\pi/3+2k\pi`],'Describe all solutions','k is any integer. The first family combines sine = 1 and sine = −1.'),
  step([String.raw`-8\pi/3,\ -5\pi/2,\ -7\pi/3,\ -3\pi/2`,String.raw`-2\pi/3,\ -\pi/2,\ -\pi/3,\ \pi/2`],'List the closed-interval solutions','These eight values lie in [−3π, π]. Neither endpoint satisfies the equation.'),
 ]},
];
export const inverseCases=[
 {id:'14a',given:String.raw`\tan\theta=5/2`,domain:String.raw`\cos\theta\ne0`,steps:[
  step(String.raw`\alpha=\arctan(5/2),\quad-\pi/2<\alpha<\pi/2`,'Use the principal inverse angle','The inverse expression is an exact angle; a decimal approximation is unnecessary.'),
  step(String.raw`\theta=\arctan(5/2)+k\pi`,'Add the tangent period','k is any integer. One family already includes every tangent solution.'),
 ]},
 {id:'14b',given:String.raw`\cos\theta=5/2`,domain:String.raw`\theta\in\mathbb R`,steps:[
  step(String.raw`5/2>1`,'Check the range before taking an inverse','A real cosine cannot equal 5/2.'),
  step(String.raw`\text{No real solutions}`,'Reject the impossible value','Arccos(5/2) has no real value either.'),
 ]},
 {id:'14c',given:String.raw`5\sin\theta=3`,domain:String.raw`\theta\in\mathbb R`,steps:[
  step(String.raw`\sin\theta=3/5`,'Isolate sine','The target lies in [−1, 1].'),
  step(String.raw`\alpha=\arcsin(3/5),\quad0<\alpha<\pi/2`,'Name the exact reference angle','Positive sine has two directions per turn.'),
  step([String.raw`\theta=\arcsin(3/5)+2k\pi`,String.raw`\theta=\pi-\arcsin(3/5)+2k\pi`],'Use both sine branches','k is any integer. A single principal inverse angle would miss the second branch.'),
 ]},
 {id:'14d',given:String.raw`-3\cos\theta=2`,domain:String.raw`\theta\in\mathbb R`,steps:[
  step(String.raw`\cos\theta=-2/3`,'Divide by −3','The negative sign places the solutions in Quadrants II and III.'),
  step(String.raw`\alpha=\arccos(-2/3),\quad\pi/2<\alpha<\pi`,'Name the principal angle','The other direction is 2π − α.'),
  step([String.raw`\theta=\arccos(-2/3)+2k\pi`,String.raw`\theta=2\pi-\arccos(-2/3)+2k\pi`],'Include both cosine branches','k is any integer. These are exact solutions.'),
 ]},
 {id:'14e',given:String.raw`4\sin\theta=-3`,domain:String.raw`\theta\in\mathbb R`,steps:[
  step(String.raw`\sin\theta=-3/4`,'Isolate sine','The target is negative and lies within the sine range.'),
  step(String.raw`\alpha=\arcsin(3/4),\quad0<\alpha<\pi/2`,'Choose a positive reference angle','The required directions are in Quadrants III and IV.'),
  step([String.raw`\theta=-\arcsin(3/4)+2k\pi`,String.raw`\theta=\pi+\arcsin(3/4)+2k\pi`],'Write both exact families','k is any integer. Negative representatives are allowed in an all-real solution family.'),
 ]},
];
export const interceptFamily=family(-1,6,1,3);
export const interceptSteps=[
 step(String.raw`\sin(3x+\pi/2)=0`,'Set the output to zero','An x-intercept is a point (x, 0).'),
 step(String.raw`3x+\pi/2=k\pi`,'Use every zero of sine','k is any integer, not just zero.'),
 step(String.raw`x=-\pi/6+k\pi/3`,'Solve for the original variable','Divide every term, including kπ, by 3.'),
 step(String.raw`\left(-\pi/6+k\pi/3,\ 0\right)`,'Report the intercept points','k is any integer. Consecutive zeros are π/3 apart; the full graph’s period is 2π/3.'),
];
export const explorerCases=[
 {given:String.raw`\sin\theta=\sqrt3/2`,fn:'sin',target:Math.sqrt(3)/2,families:[family(1,3),family(2,3)]},
 {given:String.raw`\cos\theta=-\sqrt2/2`,fn:'cos',target:-Math.sqrt(2)/2,families:[family(3,4),family(5,4)]},
 {given:String.raw`\tan\theta=-\sqrt3/3`,fn:'tan',target:-Math.sqrt(3)/3,families:[family(-1,6,1)]},
 {given:String.raw`\sin\theta=0`,fn:'sin',target:0,families:[family(0,1,1)]},
 {given:String.raw`\cos\theta=1`,fn:'cos',target:1,families:[family(0)]},
 {given:String.raw`\sin\theta=-1`,fn:'sin',target:-1,families:[family(3,2)]},
 {given:String.raw`\cos\theta=0`,fn:'cos',target:0,families:[family(1,2,1)]},
 {given:String.raw`\tan\theta=\sqrt3`,fn:'tan',target:Math.sqrt(3),families:[family(1,3,1)]},
 {given:String.raw`\cos\theta=5/2`,fn:'cos',target:2.5,families:[]},
];
