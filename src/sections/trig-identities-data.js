// Expressions and original explanations follow the section 7.1 course-note scope.
const all = { key:'all', tex:String.raw`\theta\in\mathbb R`, text:'Every real angle is allowed.', accepts:()=>true };
const sine = { key:'sin', tex:String.raw`\sin\theta\ne0`, text:'Exclude θ = kπ. Here k is any integer.', accepts:q=>q.s!==0 };
const cosine = { key:'cos', tex:String.raw`\cos\theta\ne0`, text:'Exclude θ = π/2 + kπ. Here k is any integer.', accepts:q=>q.c!==0 };
const both = { key:'both', tex:String.raw`\sin\theta\ne0,\quad\cos\theta\ne0`, text:'Both sine and cosine must be nonzero. Exclude θ = kπ/2; k is any integer.', accepts:q=>q.s!==0&&q.c!==0 };
export const domains={all,sine,cosine,both};
const step = (tex, rule, why, evaluate) => ({tex,rule,why,evaluate});

export const simplifications = [
 {given:String.raw`\cos^2\theta(1+\tan^2\theta)`,result:'1',domain:cosine,left:q=>q.c*q.c*(1+q.tan*q.tan),right:()=>1,steps:[
  step(String.raw`\cos^2\theta\sec^2\theta`,'Pythagorean identity','Replace 1 + tan²θ with sec²θ.',q=>q.c*q.c*q.sec*q.sec),
  step(String.raw`\cos^2\theta\cdot\frac1{\cos^2\theta}`,'Reciprocal identity','Rewrite sec²θ as 1/cos²θ.',q=>q.c*q.c/(q.c*q.c)),
  step('1','Cancel a nonzero factor','Cosine is nonzero on the original domain. The answer is 1 only on that domain.',()=>1),
 ]},
 {given:String.raw`\frac{\sin\theta\sec\theta}{\tan\theta}`,result:'1',domain:both,left:q=>q.s*q.sec/q.tan,right:()=>1,steps:[
  step(String.raw`\frac{\sin\theta(1/\cos\theta)}{\sin\theta/\cos\theta}`,'Reciprocal and quotient identities','Both cosine and tangent must be defined, and tangent cannot be zero.',q=>(q.s/q.c)/(q.s/q.c)),
  step(String.raw`\frac{\sin\theta}{\cos\theta}\cdot\frac{\cos\theta}{\sin\theta}`,'Divide by a nonzero fraction','Multiply by the reciprocal of sin θ / cos θ.',q=>q.s/q.c*q.c/q.s),
  step('1','Cancel nonzero factors','Sine and cosine are both nonzero here. Simplifying does not fill in the excluded inputs.',()=>1),
 ]},
 {given:String.raw`\frac{\sin\theta}{\cot\theta+\csc\theta}`,result:String.raw`1-\cos\theta`,domain:sine,left:q=>q.s/(q.cot+q.csc),right:q=>1-q.c,steps:[
  step(String.raw`\frac{\sin\theta}{(\cos\theta+1)/\sin\theta}`,'Quotient and reciprocal identities','Combine the two denominator terms over sin θ.',q=>q.s/((q.c+1)/q.s)),
  step(String.raw`\frac{\sin^2\theta}{1+\cos\theta}`,'Divide by a fraction','Multiply the numerator by sin θ.',q=>q.s*q.s/(1+q.c)),
  step(String.raw`\frac{1-\cos^2\theta}{1+\cos\theta}`,'Pythagorean identity','Use sin²θ = 1 − cos²θ.',q=>(1-q.c*q.c)/(1+q.c)),
  step(String.raw`\frac{(1-\cos\theta)(1+\cos\theta)}{1+\cos\theta}`,'Difference of squares','Factor the whole numerator before canceling.',q=>(1-q.c)*(1+q.c)/(1+q.c)),
  step(String.raw`1-\cos\theta`,'Cancel a nonzero factor','On the original domain sin θ ≠ 0, so cos θ cannot be −1. Thus 1 + cos θ is nonzero.',q=>1-q.c),
 ]},
 {given:String.raw`\frac{2+\tan^2\theta}{\sec^2\theta}-1`,result:String.raw`\cos^2\theta`,domain:cosine,left:q=>(2+q.tan*q.tan)/(q.sec*q.sec)-1,right:q=>q.c*q.c,steps:[
  step(String.raw`\frac{2+\tan^2\theta-\sec^2\theta}{\sec^2\theta}`,'Common denominator','Write 1 as sec²θ / sec²θ before subtracting.',q=>(2+q.tan*q.tan-q.sec*q.sec)/(q.sec*q.sec)),
  step(String.raw`\frac1{\sec^2\theta}`,'Pythagorean identity','Since sec²θ − tan²θ = 1, the numerator is 2 − 1 = 1.',q=>1/(q.sec*q.sec)),
  step(String.raw`\cos^2\theta`,'Reciprocal identity','The original expression still excludes zeros of cosine.',q=>q.c*q.c),
 ]},
 {given:String.raw`(\sin\theta+\cos\theta)^2`,result:String.raw`1+2\sin\theta\cos\theta`,domain:all,left:q=>(q.s+q.c)**2,right:q=>1+2*q.s*q.c,steps:[
  step(String.raw`\sin^2\theta+2\sin\theta\cos\theta+\cos^2\theta`,'Square of a binomial','Use (a + b)² = a² + 2ab + b². Keep the cross term.',q=>q.s*q.s+2*q.s*q.c+q.c*q.c),
  step(String.raw`(\sin^2\theta+\cos^2\theta)+2\sin\theta\cos\theta`,'Reorder and group terms','Bring the two squares together.',q=>(q.s*q.s+q.c*q.c)+2*q.s*q.c),
  step(String.raw`1+2\sin\theta\cos\theta`,'Pythagorean identity','Only the sum of the squares becomes 1; the cross term remains.',q=>1+2*q.s*q.c),
 ]},
];

export const proofs = [
 {given:String.raw`\sin\theta\sec\theta`,result:String.raw`\tan\theta`,domain:cosine,left:q=>q.s*q.sec,right:q=>q.tan,steps:[
  step(String.raw`\frac{\sin\theta}{\cos\theta}`,'Reciprocal identity','Replace sec θ by 1/cos θ.',q=>q.s/q.c),
  step(String.raw`\tan\theta`,'Quotient identity','The quotient sin θ / cos θ is tan θ.',q=>q.tan),
 ]},
 {given:String.raw`\cos\theta\cot\theta+\sin\theta`,result:String.raw`\csc\theta`,domain:sine,left:q=>q.c*q.cot+q.s,right:q=>q.csc,steps:[
  step(String.raw`\frac{\cos^2\theta}{\sin\theta}+\sin\theta`,'Quotient identity','Replace cot θ by cos θ / sin θ.',q=>q.c*q.c/q.s+q.s),
  step(String.raw`\frac{\cos^2\theta+\sin^2\theta}{\sin\theta}`,'Common denominator','Write sin θ as sin²θ / sin θ.',q=>(q.c*q.c+q.s*q.s)/q.s),
  step(String.raw`\frac1{\sin\theta}`,'Pythagorean identity','The numerator is 1.',q=>1/q.s),
  step(String.raw`\csc\theta`,'Reciprocal identity','This is the target right side wherever sin θ is nonzero.',q=>q.csc),
 ]},
 {given:String.raw`\sec\theta-\sec\theta\sin^2\theta`,result:String.raw`\cos\theta`,domain:cosine,left:q=>q.sec-q.sec*q.s*q.s,right:q=>q.c,steps:[
  step(String.raw`\sec\theta(1-\sin^2\theta)`,'Factor a common factor','Factor sec θ out of both terms.',q=>q.sec*(1-q.s*q.s)),
  step(String.raw`\sec\theta\cos^2\theta`,'Pythagorean identity','Replace 1 − sin²θ by cos²θ.',q=>q.sec*q.c*q.c),
  step(String.raw`\frac{\cos^2\theta}{\cos\theta}`,'Reciprocal identity','Replace sec θ by 1/cos θ.',q=>q.c*q.c/q.c),
  step(String.raw`\cos\theta`,'Cancel a nonzero factor','The original secant already requires cos θ ≠ 0.',q=>q.c),
 ]},
 {given:String.raw`\frac{1+\cos\theta}{\sin\theta}`,result:String.raw`\csc\theta+\cot\theta`,domain:sine,left:q=>(1+q.c)/q.s,right:q=>q.csc+q.cot,steps:[
  step(String.raw`\frac1{\sin\theta}+\frac{\cos\theta}{\sin\theta}`,'Split a sum over one denominator','Both terms keep the same nonzero denominator.',q=>1/q.s+q.c/q.s),
  step(String.raw`\csc\theta+\cot\theta`,'Reciprocal and quotient identities','Recognize each quotient to reach the target.',q=>q.csc+q.cot),
 ]},
 {given:String.raw`\frac{\sin\theta}{1+\cos\theta}+\frac{1+\cos\theta}{\sin\theta}`,result:String.raw`2\csc\theta`,domain:sine,left:q=>q.s/(1+q.c)+(1+q.c)/q.s,right:q=>2*q.csc,steps:[
  step(String.raw`\frac{\sin^2\theta+(1+\cos\theta)^2}{\sin\theta(1+\cos\theta)}`,'Common denominator','Use the product of the two original denominators.',q=>(q.s*q.s+(1+q.c)**2)/(q.s*(1+q.c))),
  step(String.raw`\frac{\sin^2\theta+1+2\cos\theta+\cos^2\theta}{\sin\theta(1+\cos\theta)}`,'Expand a binomial square','The square contributes 1 + 2 cos θ + cos²θ.',q=>(q.s*q.s+1+2*q.c+q.c*q.c)/(q.s*(1+q.c))),
  step(String.raw`\frac{2(1+\cos\theta)}{\sin\theta(1+\cos\theta)}`,'Pythagorean identity and factoring','Combine sin²θ + cos²θ into 1, then factor the numerator.',q=>2*(1+q.c)/(q.s*(1+q.c))),
  step(String.raw`\frac2{\sin\theta}`,'Cancel a nonzero factor','Sin θ ≠ 0 also implies 1 + cos θ ≠ 0, so this cancellation is valid.',q=>2/q.s),
  step(String.raw`2\csc\theta`,'Reciprocal identity','The transformed left side is exactly the target right side.',q=>2*q.csc),
 ]},
 {given:String.raw`\frac{\sin^2\theta}{\cos\theta}`,result:String.raw`\sec\theta-\cos\theta`,domain:cosine,side:'RHS',left:q=>q.s*q.s/q.c,right:q=>q.sec-q.c,steps:[
  step(String.raw`\frac1{\cos\theta}-\cos\theta`,'Reciprocal identity','Start from the right side, which has two terms to combine.',q=>1/q.c-q.c),
  step(String.raw`\frac{1-\cos^2\theta}{\cos\theta}`,'Common denominator','Write cos θ as cos²θ / cos θ.',q=>(1-q.c*q.c)/q.c),
  step(String.raw`\frac{\sin^2\theta}{\cos\theta}`,'Pythagorean identity','The right side has become the left side. Reversing the chosen direction is valid.',q=>q.s*q.s/q.c),
 ]},
 {given:String.raw`\sin^2\theta(1+\cot^2\theta)`,result:'1',domain:sine,left:q=>q.s*q.s*(1+q.cot*q.cot),right:()=>1,steps:[
  step(String.raw`\sin^2\theta\csc^2\theta`,'Pythagorean identity','Use 1 + cot²θ = csc²θ.',q=>q.s*q.s*q.csc*q.csc),
  step(String.raw`\frac{\sin^2\theta}{\sin^2\theta}`,'Reciprocal identity','Replace csc²θ with 1/sin²θ.',q=>q.s*q.s/(q.s*q.s)),
  step('1','Cancel a nonzero factor','Sine is nonzero on the original domain.',()=>1),
 ]},
 {given:String.raw`\tan\theta+\cot\theta`,result:String.raw`\sec\theta\csc\theta`,domain:both,left:q=>q.tan+q.cot,right:q=>q.sec*q.csc,steps:[
  step(String.raw`\frac{\sin\theta}{\cos\theta}+\frac{\cos\theta}{\sin\theta}`,'Quotient identities','Rewrite both terms using sine and cosine.',q=>q.s/q.c+q.c/q.s),
  step(String.raw`\frac{\sin^2\theta+\cos^2\theta}{\sin\theta\cos\theta}`,'Common denominator','Use sin θ cos θ, which is nonzero on the original domain.',q=>(q.s*q.s+q.c*q.c)/(q.s*q.c)),
  step(String.raw`\frac1{\sin\theta\cos\theta}`,'Pythagorean identity','The numerator is 1.',q=>1/(q.s*q.c)),
  step(String.raw`\sec\theta\csc\theta`,'Reciprocal identities','Split the product denominator into the two reciprocal factors.',q=>q.sec*q.csc),
 ]},
 {given:String.raw`\cos^2\theta-\sin^2\theta`,result:String.raw`1-2\sin^2\theta`,domain:all,left:q=>q.c*q.c-q.s*q.s,right:q=>1-2*q.s*q.s,steps:[
  step(String.raw`(1-\sin^2\theta)-\sin^2\theta`,'Pythagorean identity','Replace only cos²θ with 1 − sin²θ.',q=>(1-q.s*q.s)-q.s*q.s),
  step(String.raw`1-2\sin^2\theta`,'Combine like terms','Two negative sine-square terms combine. The equality holds for every real angle.',q=>1-2*q.s*q.s),
 ]},
 {given:String.raw`\cos(-\theta)-\sin(-\theta)`,result:String.raw`\cos\theta+\sin\theta`,domain:all,left:q=>q.c+q.s,right:q=>q.c+q.s,steps:[
  step(String.raw`\cos\theta-\sin(-\theta)`,'Even identity for cosine','Cosine keeps its value when the input changes sign.',q=>q.c+q.s),
  step(String.raw`\cos\theta-(-\sin\theta)`,'Odd identity for sine','Sine changes sign. Keep the outside minus sign as well.',q=>q.c-(-q.s)),
  step(String.raw`\cos\theta+\sin\theta`,'Subtract a negative','The two minus signs produce a plus.',q=>q.c+q.s),
 ]},
];

export function context(n,d) {
  if(!Number.isInteger(n)||!Number.isInteger(d)||!d) throw new Error('Use integer coefficients and a nonzero denominator.');
  if(d<0){n=-n;d=-d;}
  const p=((n%(2*d))+2*d)%(2*d),axis=2*p%d===0,q=axis?(2*p/d)%4:null;
  const s=axis?[0,1,0,-1][q]:Math.sin(p*Math.PI/d),c=axis?[1,0,-1,0][q]:Math.cos(p*Math.PI/d);
  return {s,c,tan:c===0?null:s/c,cot:s===0?null:c/s,sec:c===0?null:1/c,csc:s===0?null:1/s};
}
export const comparisons = [
 {label:'A quotient identity',given:String.raw`\sin\theta\sec\theta`,result:String.raw`\tan\theta`,domain:cosine,left:q=>q.s*q.sec,right:q=>q.tan},
 {label:'A tempting cosine claim',given:String.raw`\cos(2\theta)`,result:String.raw`2\cos\theta`,domain:all,left:(q,n,d)=>context(2*n,d).c,right:q=>2*q.c},
 {label:'A missing cross term',given:String.raw`(\sin\theta+\cos\theta)^2`,result:'1',domain:all,left:q=>(q.s+q.c)**2,right:()=>1},
 {label:'A cancellation with excluded inputs',...simplifications[1]},
 {label:'A factored simplification',...simplifications[2]},
];
export function compare(item,n,d) {
  const q=context(n,d),allowed=item.domain.accepts(q);
  return {allowed,left:allowed?item.left(q,n,d):null,right:item.right(q,n,d)};
}
