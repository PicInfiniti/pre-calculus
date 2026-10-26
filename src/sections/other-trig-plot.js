import { value, add, scale, fractionTex } from './sinusoid-math';
import { features, poles, numericAt, at, reciprocal, cosineDenominator } from './other-trig-math';

const plain = tex => tex.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g,'$1/$2').replaceAll('\\pi','π').replaceAll('-','−');
const tick = x => { const text = plain(fractionTex(x,true)); return text.length > 10 ? '≈'+(value(x)*Math.PI).toFixed(2) : text; };
export function drawOtherTrig(svg,m,{mode='base',marker=null,guides=false,reveal=2}={}) {
  const info=features(m),T=value(info.period),h=value(m.h),branch=mode==='branch';
  const xmin=branch?h-.75*T:-1,xmax=branch?h+.75*T:mode==='optional'?2:1;
  const mid=m.d,amplitude=Math.abs(m.a),ymin=branch?Math.min(mid-3.2*amplitude,0):-4,ymax=branch?Math.max(mid+3.2*amplitude,0):4;
  const l=64,r=672,t=30,b=352,X=x=>l+(x-xmin)/(xmax-xmin)*(r-l),Y=y=>Math.max(t-40,Math.min(b+40,b-(y-ymin)/(ymax-ymin)*(b-t)));
  const id=svg.id,asymptotes=poles(m,xmin,xmax),cuts=[xmin,...asymptotes.map(value).filter(x=>x>xmin+1e-10&&x<xmax-1e-10),xmax];
  const ticks=branch?[-2,-1,0,1,2].map(n=>add(m.h,scale(info.period,n,4))):Array.from({length:mode==='optional'?7:5},(_,i)=>[i-2,2]);
  let major='',minor='',labels='';
  const gridCount=branch?12:mode==='optional'?12:8;
  for(let j=0;j<=gridCount;j++){const x=xmin+(xmax-xmin)*j/gridCount; if(j%2)minor+=`M${X(x)} ${t}V${b}`;else major+=`M${X(x)} ${t}V${b}`;}
  for(let j=-3;j<=3;j++){const y=branch?mid+j*amplitude:j;if(y>=ymin&&y<=ymax){major+=`M${l} ${Y(y)}H${r}`;labels+=`<text x="${l-12}" y="${Y(y)+5}" text-anchor="end">${plain(fractionTex([Math.round(y*1000),1000]))}</text>`;}}
  ticks.forEach(x=>labels+=`<text class="ot-x-tick" x="${X(value(x))}" y="${b+30}" text-anchor="middle">${tick(x)}</text>`);
  const stops='<stop stop-color="black"/><stop offset=".08" stop-color="white"/><stop offset=".92" stop-color="white"/><stop offset="1" stop-color="black"/>';
  let art=`<defs><linearGradient id="${id}-fx">${stops}</linearGradient><linearGradient id="${id}-fy" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient><mask id="${id}-mx"><rect x="${l}" y="${t}" width="${r-l}" height="${b-t}" fill="url(#${id}-fx)"/></mask><mask id="${id}-my"><rect x="${l}" y="${t}" width="${r-l}" height="${b-t}" fill="url(#${id}-fy)"/></mask><clipPath id="${id}-clip"><rect x="${l}" y="${t}" width="${r-l}" height="${b-t}"/></clipPath></defs><g mask="url(#${id}-mx)"><g mask="url(#${id}-my)"><path d="${minor}" class="ot-grid-minor"/><path d="${major}" class="ot-grid-major"/></g></g>`;
  if(reciprocal(m.fn))art+=`<rect x="${l}" y="${Y(1)}" width="${r-l}" height="${Y(-1)-Y(1)}" class="ot-forbidden"/>`;
  let axes='';if(ymin<=0&&ymax>=0)axes+=`M${l} ${Y(0)}H${r}`;if(xmin<=0&&xmax>=0)axes+=`M${X(0)} ${t}V${b}`;
  art+=`<path d="${axes}" class="ot-axes"/><text x="${r+15}" y="${Y(0)+6}" class="ot-axis-label">x</text><text x="${xmin<=0&&xmax>=0?X(0)+12:l}" y="20" class="ot-axis-label">y</text>`;
  art+=asymptotes.map(p=>`<path data-pole="${value(p)}" d="M${X(value(p))} ${t}V${b}" class="ot-asymptote"/>`).join('');
  function path(lo,hi,fn){return Array.from({length:241},(_,j)=>{const x=lo+(hi-lo)*j/240;return `${j?'L':'M'}${X(x).toFixed(3)} ${Y(fn(x*Math.PI)).toFixed(3)}`;}).join('');}
  art+=`<g clip-path="url(#${id}-clip)">`;
  if(guides){const fns=m.fn==='tan'?['sin','cos']:[cosineDenominator(m.fn)?'cos':'sin'];art+=fns.map(fn=>`<path d="${path(xmin,xmax,Math[fn])}" class="ot-parent ot-parent--${fn}"/>`).join('');}
  if(reveal>=2)for(let j=0;j<cuts.length-1;j++){
    const lo=cuts[j],hi=cuts[j+1],eps=(hi-lo)*1e-6,center=(lo+hi)/2,selected=!branch||center>value(info.branch[0])-1e-8&&center<value(info.branch[1])+1e-8;
    art+=`<path data-interval="${lo},${hi}" d="${path(lo+eps,hi-eps,x=>numericAt(m,x))}" class="ot-wave ${selected?'':'ot-wave--context'}"/>`;
  }
  if(branch&&reveal>=1)art+=info.landmarks.map(p=>`<circle cx="${X(value(p.x))}" cy="${Y(p.y)}" r="5" class="ot-key-point"/>`).join('');
  if(marker!==null){const y=at(m,marker);if(y!==null){art+=`<path d="M${X(value(marker))} ${Y(0)}V${Y(y)}" class="ot-marker-guide"/>`;if(y>=ymin&&y<=ymax)art+=`<circle cx="${X(value(marker))}" cy="${Y(y)}" r="7" class="ot-current"/>`;}}
  art+='</g>';
  svg.innerHTML=art+`<g class="ot-tick-labels">${labels}</g><text x="${(l+r)/2}" y="418" text-anchor="middle" class="ot-unit-label">x in radians · dashed gold lines are vertical asymptotes</text>`;
  svg.setAttribute('aria-label',`${m.fn} graph. Period ${plain(fractionTex(info.period,true))}. Displayed vertical asymptotes at x = ${asymptotes.map(tick).join(', ')}. ${marker!==null?at(m,marker)===null?'Selected input is excluded.':`Selected output approximately ${at(m,marker).toFixed(4)}.`:''}`);
}
