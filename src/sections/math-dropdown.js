// Select-only combobox: keyboard focus stays on the trigger while options are open.
export function renderMathDropdown(id, label, items, renderMath, { placeholder = "" } = {}) {
  return `<div class="log-expression-picker" id="${id}" data-value="${placeholder ? '' : '0'}"><span class="log-expression-label" id="${id}-label">${label}</span><button type="button" class="log-expression-trigger" id="${id}-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-options" aria-labelledby="${id}-label ${id}-selected"><span id="${id}-selected">${placeholder || renderMath(items[0])}</span><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button><div class="log-expression-menu" id="${id}-options" role="listbox" aria-labelledby="${id}-label" hidden>${items.map((tex,i)=>`<div class="log-expression-option" id="${id}-option-${i}" role="option" data-math-option="${i}" aria-selected="${!placeholder&&i===0}">${renderMath(tex)}<span class="log-expression-check" aria-hidden="true">✓</span></div>`).join('')}</div></div>`;
}

export function initMathDropdown(id, items, renderMath) {
  const root=document.getElementById(id),trigger=document.getElementById(id+'-trigger'),menu=document.getElementById(id+'-options'),display=document.getElementById(id+'-selected');
  const options=[...menu.querySelectorAll('[data-math-option]')];let active=0;
  const setActive=index=>{
    active=index;options.forEach((option,i)=>option.classList.toggle('is-active',i===index));
    trigger.setAttribute('aria-activedescendant',options[index].id);
    options[index].scrollIntoView({block:'nearest',behavior:'instant'});
  };
  const open=()=>{menu.hidden=false;trigger.setAttribute('aria-expanded','true');setActive(Number(root.dataset.value));};
  const close=()=>{menu.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.removeAttribute('aria-activedescendant');};
  const choose=(index,restoreFocus=true)=>{
    root.dataset.value=index;display.innerHTML=renderMath(items[index]);
    options.forEach((option,i)=>option.setAttribute('aria-selected',String(i===index)));
    close();root.dispatchEvent(new Event('change',{bubbles:true}));
    if(restoreFocus)trigger.focus({preventScroll:true});
  };
  trigger.addEventListener('click',()=>{if(menu.hidden)open();else close();});
  trigger.addEventListener('keydown',event=>{
    const isOpen=!menu.hidden;
    if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
      event.preventDefault();if(!isOpen)open();
      if(event.key==='Home')setActive(0);else if(event.key==='End')setActive(items.length-1);
      else if(isOpen)setActive(Math.max(0,Math.min(items.length-1,active+(event.key==='ArrowDown'?1:-1))));
    }else if(event.key==='Enter'||event.key===' '){event.preventDefault();if(isOpen)choose(active);else open();}
    else if(event.key==='Escape'&&isOpen){event.preventDefault();event.stopPropagation();close();}
    else if(event.key==='Tab'&&isOpen)choose(active,false);
  });
  trigger.addEventListener('blur',close);
  menu.addEventListener('pointerdown',event=>event.preventDefault());
  menu.addEventListener('click',event=>{const option=event.target.closest('[data-math-option]');if(option)choose(Number(option.dataset.mathOption));});
  document.addEventListener('pointerdown',event=>{if(!root.contains(event.target))close();});
}
