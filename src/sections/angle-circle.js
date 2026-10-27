import {degreePoint} from './angle-sum-math.js';

// One physical scale for both axes; all rays terminate at the same unit circle.
export function angleCircle(svg,angles,labels=['P','Q']){
 const id=svg.id,center=260,unit=170;let major='',minor='',ticks='';
 for(let j=-5;j<=5;j++){const p=center+j*unit/4;if(j%2)minor+=`M${p} 40V480M40 ${p}H480`;else major+=`M${p} 40V480M40 ${p}H480`;}
 for(const v of [-1,-.5,.5,1]){const end=Math.abs(v)===1,p=center+v*unit,y=center-v*unit,text=String(v).replace('-','−');ticks+=`<text class="${end?'dh-end-tick':''}" x="${end?p+Math.sign(v)*12:p}" y="286" text-anchor="${end?(v<0?'end':'start'):'middle'}">${text}</text><text class="${end?'dh-end-tick':''}" x="244" y="${end?y+(v>0?-14:29):y+6}" text-anchor="end">${text}</text>`;}
 const stops='<stop stop-color="black"/><stop offset=".12" stop-color="white"/><stop offset=".88" stop-color="white"/><stop offset="1" stop-color="black"/>';
 let art=`<defs><linearGradient id="${id}-fx">${stops}</linearGradient><linearGradient id="${id}-fy" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient><mask id="${id}-mx"><rect x="40" y="40" width="440" height="440" fill="url(#${id}-fx)"/></mask><mask id="${id}-my"><rect x="40" y="40" width="440" height="440" fill="url(#${id}-fy)"/></mask></defs><g mask="url(#${id}-mx)"><g mask="url(#${id}-my)"><path d="${minor}" class="dh-grid-minor"/><path d="${major}" class="dh-grid-major"/></g></g><path d="M40 260H480M260 40V480" class="dh-axes"/><text x="490" y="268" class="dh-axis-label">x</text><text x="271" y="32" class="dh-axis-label">y</text><circle cx="260" cy="260" r="170" class="dh-circle"/>`;
 const points=angles.map(degreePoint),same=Math.hypot(points[0].c-points[1].c,points[0].s-points[1].s)<1e-10;
 points.forEach((p,i)=>{const X=center+p.c*unit,Y=center-p.s*unit,color=i?'var(--violet)':'var(--coral)',vertical=Math.abs(p.c)<.14;art+=`<path d="M260 260L${X} ${Y}" class="dh-ray" stroke="${color}" stroke-width="${i?3:6}"/><circle cx="${X}" cy="${Y}" r="${i?4:6}" fill="${color}"/>`;if(!same||i===1)art+=`<text x="${X+(vertical?16:p.c<-.85?-16:p.c>.85?16:0)}" y="${Y+(p.s>=0?-17:28)}" text-anchor="${vertical?'start':p.c<-.85?'end':p.c>.85?'start':'middle'}" class="dh-point-label">${same?labels.join(' = '):labels[i]}</text>`;});
 svg.innerHTML=art+`<g class="dh-tick-labels">${ticks}</g>`;svg.setAttribute('aria-label',angles.map((a,i)=>`${labels[i]} at ${Number(a.toFixed(6))} degrees, coordinates (${Number(points[i].c.toFixed(6))}, ${Number(points[i].s.toFixed(6))})`).join('. '));
}
