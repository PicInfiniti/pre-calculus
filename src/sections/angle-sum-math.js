export function degreePoint(angle){
 if(!Number.isFinite(angle))throw new Error('Use a finite angle.');
 const a=((angle%360)+360)%360;
 if(a%90===0){const [c,s]=[[1,0],[0,1],[-1,0],[0,-1]][a/90];return {c,s};}
 return {c:Math.cos(a*Math.PI/180),s:Math.sin(a*Math.PI/180)};
}
export function combineAngles(a,b,operation='+'){
 const A=degreePoint(a),B=degreePoint(b),sign=operation==='+'?1:-1;
 // Millidegree inputs retain exact quarter-turn sums despite floating-point addition.
 const mills=[a,b].every(x=>Math.abs(x*1000-Math.round(x*1000))<1e-8);
 const angle=mills?(Math.round(a*1000)+sign*Math.round(b*1000))/1000:a+sign*b,C=degreePoint(angle);
 const sin=A.s*B.c+sign*A.c*B.s,cos=A.c*B.c-sign*A.s*B.s;
 const individualDefined=A.c!==0&&B.c!==0,defined=C.c!==0;
 const tanA=A.c===0?null:A.s/A.c,tanB=B.c===0?null:B.s/B.c;
 return {A,B,C,angle,sin,cos,tan:defined?C.s/C.c:null,individualDefined,tangentDefined:defined,
  quotientAvailable:individualDefined&&defined,denominator:individualDefined?1-sign*tanA*tanB:null};
}
export function formula(fn,operation){
 const plus=operation==='+';
 if(fn==='sin')return String.raw`\sin(A${operation}B)=\sin A\cos B${operation}\cos A\sin B`;
 if(fn==='cos')return String.raw`\cos(A${operation}B)=\cos A\cos B${plus?'-':'+'}\sin A\sin B`;
 return String.raw`\tan(A${operation}B)=\frac{\tan A${operation}\tan B}{1${plus?'-':'+'}\tan A\tan B}`;
}
const step=(tex,rule,text)=>({tex,rule,text});
export const exactExamples=[
 {given:String.raw`\cos15^\circ`,value:(Math.sqrt(6)+Math.sqrt(2))/4,steps:[
  step(String.raw`15^\circ=45^\circ-30^\circ`,'Choose familiar angles','Write the target as a difference whose sine and cosine values are known.'),
  step(String.raw`\cos(45^\circ-30^\circ)=\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ`,'Cosine difference formula','Cosine uses the opposite sign: subtraction inside gives addition between the products.'),
  step(String.raw`\frac{\sqrt2}{2}\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\frac12`,'Substitute exact special-angle values','Keep the radicals and fractions exact.'),
  step(String.raw`\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}`,'Combine the fractions','Both products have denominator 4.'),
 ]},
 {given:String.raw`\cos70^\circ\cos40^\circ+\sin70^\circ\sin40^\circ`,value:Math.sqrt(3)/2,steps:[
  step(String.raw`\cos A\cos B+\sin A\sin B=\cos(A-B)`,'Recognize the cosine difference pattern','The plus between these products signals a cosine difference, not a cosine sum.'),
  step(String.raw`\cos(70^\circ-40^\circ)=\cos30^\circ`,'Read the two inputs','You do not need separate exact values for 70° and 40°.'),
  step(String.raw`\frac{\sqrt3}{2}`,'Evaluate the familiar angle','The expression is one exact cosine value.'),
 ]},
 {given:String.raw`\sin(-5\pi/12)`,value:-(Math.sqrt(6)+Math.sqrt(2))/4,steps:[
  step(String.raw`-5\pi/12=-\pi/4-\pi/6`,'Choose familiar radian angles','The two negative inputs sum to −5π/12.'),
  step(String.raw`\sin(-\pi/4)\cos(-\pi/6)+\cos(-\pi/4)\sin(-\pi/6)`,'Sine addition formula','Sine keeps the addition sign between the two products.'),
  step(String.raw`\left(-\frac{\sqrt2}{2}\right)\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\left(-\frac12\right)`,'Even and odd identities','Cosine is even; sine is odd. Both products are negative.'),
  step(String.raw`\sin(-5\pi/12)=-\frac{\sqrt6+\sqrt2}{4}`,'Combine exact terms','The angle is in Quadrant IV, so the negative sign is consistent.'),
 ]},
 {given:String.raw`\tan(7\pi/12)`,value:-2-Math.sqrt(3),steps:[
  step(String.raw`7\pi/12=\pi/3+\pi/4`,'Choose familiar angles','Both component tangents are defined.'),
  step(String.raw`\tan(\pi/3+\pi/4)=\frac{\tan(\pi/3)+\tan(\pi/4)}{1-\tan(\pi/3)\tan(\pi/4)}`,'Tangent addition formula','The numerator keeps the plus; the denominator uses a minus.'),
  step(String.raw`\frac{\sqrt3+1}{1-\sqrt3}`,'Substitute exact values','The denominator is nonzero, so the formula is valid.'),
  step(String.raw`\frac{(\sqrt3+1)(1+\sqrt3)}{(1-\sqrt3)(1+\sqrt3)}=\frac{4+2\sqrt3}{-2}`,'Rationalize with a conjugate','Multiply numerator and denominator by 1 + √3.'),
  step(String.raw`\tan(7\pi/12)=-2-\sqrt3`,'Simplify and check the sign','7π/12 is in Quadrant II, where tangent is negative.'),
 ]},
 {given:String.raw`\frac{\tan(7\pi/12)-\tan(5\pi/12)}{1+\tan(7\pi/12)\tan(5\pi/12)}`,value:Math.sqrt(3)/3,steps:[
  step(String.raw`\frac{\tan A-\tan B}{1+\tan A\tan B}=\tan(A-B)`,'Recognize a tangent difference','A minus in the numerator pairs with a plus in the denominator.'),
  step(String.raw`\tan(7\pi/12-5\pi/12)=\tan(\pi/6)`,'Subtract the angles','The component tangents and resulting tangent are all defined, so the denominator is nonzero.'),
  step(String.raw`\frac{\sqrt3}{3}`,'Evaluate the familiar angle','There is no need to calculate either original tangent separately.'),
 ]},
 {given:String.raw`\sin165^\circ`,value:(Math.sqrt(6)-Math.sqrt(2))/4,steps:[
  step(String.raw`165^\circ=135^\circ+30^\circ`,'Choose familiar angles','135° has a positive sine and a negative cosine.'),
  step(String.raw`\sin135^\circ\cos30^\circ+\cos135^\circ\sin30^\circ`,'Sine addition formula','Use both products, with an addition sign between them.'),
  step(String.raw`\frac{\sqrt2}{2}\frac{\sqrt3}{2}+\left(-\frac{\sqrt2}{2}\right)\frac12`,'Use the quadrant signs','The second product is negative because cos 135° is negative.'),
  step(String.raw`\sin165^\circ=\frac{\sqrt6-\sqrt2}{4}`,'Combine the fractions','The positive result is consistent with Quadrant II.'),
 ]},
 {given:String.raw`\tan195^\circ`,value:2-Math.sqrt(3),steps:[
  step(String.raw`195^\circ=150^\circ+45^\circ`,'Choose familiar angles','Tangent is negative at 150° and positive at 45°.'),
  step(String.raw`\frac{\tan150^\circ+\tan45^\circ}{1-\tan150^\circ\tan45^\circ}`,'Tangent addition formula','The denominator again uses the opposite sign.'),
  step(String.raw`\frac{1-1/\sqrt3}{1+1/\sqrt3}=\frac{\sqrt3-1}{\sqrt3+1}`,'Substitute and clear the inner fractions','Multiply the top and bottom by √3.'),
  step(String.raw`\frac{(\sqrt3-1)^2}{3-1}=2-\sqrt3`,'Rationalize and simplify','Tangent is positive in Quadrant III, matching the answer.'),
 ]},
];
export const advancedExamples=[
 {given:String.raw`\tan\!\left(\arcsin\frac34-\arccos\frac13\right)`,goal:String.raw`\tan(A-B)`,setup:String.raw`A=\arcsin(3/4),\quad B=\arccos(1/3)`,givens:[String.raw`A=\arcsin(3/4)`,String.raw`B=\arccos(1/3)`],targets:[String.raw`\tan(A-B)`],A:Math.asin(3/4)*180/Math.PI,B:Math.acos(1/3)*180/Math.PI,steps:[
  step(String.raw`\sin A=\frac34,\ \cos A=\frac{\sqrt7}{4};\quad\cos B=\frac13,\ \sin B=\frac{2\sqrt2}{3}`,'Principal ranges and Pythagoras','Arcsine returns an angle in [−π/2, π/2]; arccosine returns one in [0, π]. These positive inputs place both angles in I, so both missing ratios are positive.'),
  step(String.raw`\sin(A-B)=\frac34\frac13-\frac{\sqrt7}{4}\frac{2\sqrt2}{3}=\frac{3-2\sqrt{14}}{12}`,'Sine difference formula','Find the numerator of tan(A − B) exactly.'),
  step(String.raw`\cos(A-B)=\frac{\sqrt7}{4}\frac13+\frac34\frac{2\sqrt2}{3}=\frac{\sqrt7+6\sqrt2}{12}`,'Cosine difference formula','The positive, nonzero cosine confirms that this tangent is defined.'),
  step(String.raw`\tan(A-B)=\frac{3-2\sqrt{14}}{\sqrt7+6\sqrt2}`,'Quotient identity','Divide the sine by the cosine; the common denominator 12 cancels.'),
  step(String.raw`\tan(A-B)=\frac{32\sqrt2-27\sqrt7}{65}`,'Rationalize if desired','Multiply by the conjugate √7 − 6√2. Both displayed exact forms are equivalent.'),
 ]},
 {given:String.raw`\sin A=\frac35,\ A\text{ in I};\quad\sin B=\frac5{13},\ B\text{ in II}`,goal:String.raw`\cos(A+B),\quad\sin(A-B),\quad\tan(A+B)`,setup:'',givens:[String.raw`\sin A=3/5,\quad A\text{ in I}`,String.raw`\sin B=5/13,\quad B\text{ in II}`],targets:[String.raw`\cos(A+B)`,String.raw`\sin(A-B)`,String.raw`\tan(A+B)`],A:Math.asin(3/5)*180/Math.PI,B:180-Math.asin(5/13)*180/Math.PI,steps:[
  step(String.raw`\cos A=\frac45,\quad\cos B=-\frac{12}{13}`,'Pythagoras and quadrant signs','The missing coordinate magnitudes are 4/5 and 12/13. Quadrant II makes cos B negative.'),
  step(String.raw`\cos(A+B)=\frac45\left(-\frac{12}{13}\right)-\frac35\frac5{13}=-\frac{63}{65}`,'Cosine addition formula','This is the first requested value. Keep the subtraction between the products.'),
  step(String.raw`\sin(A-B)=\frac35\left(-\frac{12}{13}\right)-\frac45\frac5{13}=-\frac{56}{65}`,'Sine difference formula','This is the second requested value; it uses A − B.'),
  step(String.raw`\sin(A+B)=\frac35\left(-\frac{12}{13}\right)+\frac45\frac5{13}=-\frac{16}{65}`,'Sine addition formula','This is an intermediate value for the requested tangent, not an additional target.'),
  step(String.raw`\tan(A+B)=\frac{-16/65}{-63/65}=\frac{16}{63}`,'Quotient identity','Both sine and cosine of the sum are negative, so tangent is positive. The three requested values remain in their stated order.'),
 ]},
];
export const cofunctionSteps=[
 step(String.raw`\frac1{\sin(\pi/2-u)}`,'Reciprocal identity','Start with the left side. It requires sin(π/2 − u) ≠ 0.'),
 step(String.raw`\frac1{\sin(\pi/2)\cos u-\cos(\pi/2)\sin u}`,'Sine difference formula','Expand only the denominator.'),
 step(String.raw`\frac1{\cos u}`,'Evaluate sine and cosine of π/2','Sin(π/2) = 1 and cos(π/2) = 0. Both sides have the same restriction cos u ≠ 0.'),
 step(String.raw`\sec u`,'Reciprocal identity','The left side has become the right side on their common domain.'),
];
