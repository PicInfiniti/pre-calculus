import katex from 'katex';
import 'katex/dist/katex.min.css';

// Select-only combobox. Focus stays on the trigger while navigating options.
const openDropdowns = new Set();
const escapeHtml = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function renderMathDropdown(id, label, items, renderMath, {placeholder = '', isDisabled = () => false} = {}) {
  return `<div class="log-expression-picker" id="${id}" data-value="${placeholder ? '' : '0'}"><span class="log-expression-label" id="${id}-label">${label}</span><button type="button" class="log-expression-trigger" id="${id}-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-options" aria-labelledby="${id}-label ${id}-selected"><span id="${id}-selected">${placeholder || renderMath(items[0])}</span><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button><div class="log-expression-menu" id="${id}-options" role="listbox" aria-labelledby="${id}-label" hidden>${items.map((item, index) => `<div class="log-expression-option" id="${id}-option-${index}" role="option" data-math-option="${index}" aria-selected="${!placeholder && index === 0}"${isDisabled(item, index) ? ' aria-disabled="true"' : ''}>${renderMath(item)}<span class="log-expression-check" aria-hidden="true">✓</span></div>`).join('')}</div></div>`;
}

export function initMathDropdown(id, items, renderMath, {onSelect} = {}) {
  const root = document.getElementById(id);
  const trigger = root.querySelector('.log-expression-trigger');
  const menu = root.querySelector('.log-expression-menu');
  const display = trigger.querySelector('span');
  const options = [...menu.querySelectorAll('[data-math-option]')];
  const enabled = () => options.map((option, index) => option.getAttribute('aria-disabled') === 'true' ? -1 : index).filter(index => index >= 0);
  let active = 0, search = '', searchTimer, renderedDisplay = display.innerHTML;

  const setActive = (index, scrollIntoView = true) => {
    active = index;
    options.forEach((option, i) => option.classList.toggle('is-active', i === index));
    if (index < 0) return;
    trigger.setAttribute('aria-activedescendant', options[index].id);
    if (scrollIntoView) {
      const top = options[index].offsetTop, bottom = top + options[index].offsetHeight;
      if (top < menu.scrollTop) menu.scrollTop = top;
      else if (bottom > menu.scrollTop + menu.clientHeight) menu.scrollTop = bottom - menu.clientHeight;
    }
  };
  const close = () => {
    if (menu.hidden) return;
    menu.hidden = true;
    clearTimeout(searchTimer); search = '';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.removeAttribute('aria-activedescendant');
    root.append(menu);
    menu.removeAttribute('style');
    menu.classList.remove('lesson-dropdown-menu--floating');
    openDropdowns.delete(close);
  };
  const position = () => {
    const rect = trigger.getBoundingClientRect(), edge = 8, gap = 6;
    const width = Math.min(rect.width, document.documentElement.clientWidth - edge * 2);
    const below = Math.max(0, innerHeight - rect.bottom - gap - edge), above = Math.max(0, rect.top - gap - edge);
    const upwards = below < Math.min(menu.scrollHeight, 240) && above > below;
    menu.style.width = `${width}px`;
    menu.style.left = `${Math.max(edge, Math.min(rect.left, document.documentElement.clientWidth - width - edge))}px`;
    menu.style.maxHeight = `${Math.min(384, innerHeight / 2, upwards ? above : below)}px`;
    menu.style.top = `${upwards ? rect.top - gap - menu.getBoundingClientRect().height : rect.bottom + gap}px`;
  };
  const open = () => {
    if (trigger.disabled || !enabled().length) return;
    for (const other of openDropdowns) other();
    // Escape clipped lesson cards, but keep live IDs before the magnifier's copies.
    const anchor = document.querySelector('.reading-lens, .reading-magnifier');
    document.body.insertBefore(menu, anchor);
    menu.classList.add('lesson-dropdown-menu--floating');
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    position();
    openDropdowns.add(close);
    const selected = root.dataset.value === '' ? -1 : Number(root.dataset.value);
    setActive(enabled().includes(selected) ? selected : enabled()[0]);
  };
  const sync = (index, placeholder = '') => {
    root.dataset.value = index < 0 ? '' : String(index);
    const html = index < 0 ? escapeHtml(placeholder) : renderMath(items[index]);
    if (renderedDisplay !== html) { display.innerHTML = html; renderedDisplay = html; }
    options.forEach((option, i) => option.setAttribute('aria-selected', String(i === index)));
  };
  const choose = (index, restoreFocus = true) => {
    if (!enabled().includes(index)) return;
    sync(index);
    close();
    if (onSelect) onSelect(index);
    else root.dispatchEvent(new Event('change', {bubbles: true}));
    if (restoreFocus && trigger.isConnected) trigger.focus({preventScroll: true});
  };
  const click = () => menu.hidden ? open() : close();
  const keydown = event => {
    const isOpen = !menu.hidden, indices = enabled();
    if (!indices.length || trigger.disabled) return;
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (!isOpen) open();
      if (event.key === 'Home') setActive(indices[0]);
      else if (event.key === 'End') setActive(indices.at(-1));
      else if (isOpen) setActive(indices[Math.max(0, Math.min(indices.length - 1, indices.indexOf(active) + (event.key === 'ArrowDown' ? 1 : -1)))]);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isOpen) choose(active); else open();
    } else if (event.key === 'Escape' && isOpen) {
      event.preventDefault(); event.stopPropagation(); close();
    } else if (event.key === 'Tab' && isOpen) choose(active, false);
    else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      if (!isOpen) open();
      clearTimeout(searchTimer);
      search += event.key.toLocaleLowerCase();
      const ordered = [...indices.filter(index => index > active), ...indices.filter(index => index <= active)];
      const match = ordered.find(index => options[index].textContent.trim().toLocaleLowerCase().startsWith(search));
      if (match !== undefined) setActive(match);
      searchTimer = setTimeout(() => { search = ''; }, 600);
    }
  };
  const preventBlur = event => event.preventDefault();
  const menuClick = event => {
    const option = event.target.closest('[data-math-option]');
    if (option && menu.contains(option)) choose(Number(option.dataset.mathOption));
  };
  const hover = event => {
    const option = event.target.closest('[data-math-option]');
    if (option && menu.contains(option) && option.getAttribute('aria-disabled') !== 'true') setActive(Number(option.dataset.mathOption), false);
  };
  const outside = event => { if (!root.contains(event.target) && !menu.contains(event.target)) close(); };
  const scroll = event => { if (!menu.contains(event.target)) close(); };
  trigger.addEventListener('click', click);
  trigger.addEventListener('keydown', keydown);
  trigger.addEventListener('blur', close);
  menu.addEventListener('pointerdown', preventBlur);
  menu.addEventListener('click', menuClick);
  menu.addEventListener('pointermove', hover);
  document.addEventListener('pointerdown', outside);
  window.addEventListener('scroll', scroll, true);
  window.addEventListener('resize', close);
  return {sync, close, destroy() {
    close(); clearTimeout(searchTimer);
    trigger.removeEventListener('click', click);
    trigger.removeEventListener('keydown', keydown);
    trigger.removeEventListener('blur', close);
    menu.removeEventListener('pointerdown', preventBlur);
    menu.removeEventListener('click', menuClick);
    menu.removeEventListener('pointermove', hover);
    document.removeEventListener('pointerdown', outside);
    window.removeEventListener('scroll', scroll, true);
    window.removeEventListener('resize', close);
  }};
}

function selectLabel(select) {
  if (select.getAttribute('aria-label')) return select.getAttribute('aria-label');
  const labels = select.getAttribute('aria-labelledby')?.split(/\s+/).map(id => document.getElementById(id)).filter(Boolean) || [...select.labels];
  return labels.map(label => {
    const copy = label.cloneNode(true);
    copy.querySelectorAll('select, input, button, .log-expression-picker, .katex-html, annotation').forEach(node => node.remove());
    return copy.textContent.trim();
  }).join(' ').trim() || select.title || 'Choose an option';
}

// Progressively enhance existing selects; their values and lesson listeners remain intact.
export function initLessonDropdowns(scope = document.querySelector('#app')) {
  const entries = new Map();
  let serial = 0, scheduled = false;
  const disabledOption = option => option.disabled || (option.parentElement.tagName === 'OPTGROUP' && option.parentElement.disabled);
  const renderOption = option => option.dataset.tex
    ? `<span class="lesson-select-math">${katex.renderToString(option.dataset.tex, {throwOnError: true, strict: 'ignore'})}</span>`
    : `<span class="math-dropdown-text">${escapeHtml(option.textContent)}</span>`;

  function refresh(entry) {
    const {select, root} = entry;
    const nativeOptions = [...select.options], placeholder = nativeOptions.find(option => option.value === '') || null;
    const items = nativeOptions.filter(option => option !== placeholder);
    const emptyLabel = /^Choose(?:…|\.\.\.)?$/i.test(placeholder?.textContent.trim() || '') ? 'Select an answer' : placeholder?.textContent || '';
    const label = selectLabel(select);
    const signature = JSON.stringify([label, items.map(option => [option.textContent, option.value, option.dataset.tex, disabledOption(option)])]);
    if (signature !== entry.signature) {
      const focused = root.contains(document.activeElement);
      entry.controller?.destroy();
      root.innerHTML = renderMathDropdown(entry.id, escapeHtml(label), items, renderOption, {
        placeholder: emptyLabel, isDisabled: disabledOption,
      });
      const content = root.firstElementChild;
      root.replaceChildren(...content.childNodes);
      entry.controller = initMathDropdown(entry.id, items, renderOption, {onSelect(index) {
        select.selectedIndex = nativeOptions.indexOf(items[index]);
        select.dispatchEvent(new Event('input', {bubbles: true}));
        select.dispatchEvent(new Event('change', {bubbles: true}));
        schedule();
      }});
      entry.signature = signature;
      if (focused) root.querySelector('.log-expression-trigger').focus({preventScroll: true});
    }
    const trigger = root.querySelector('.log-expression-trigger');
    trigger.disabled = select.disabled;
    trigger.setAttribute('aria-required', String(select.required));
    trigger.setAttribute('aria-invalid', select.getAttribute('aria-invalid') || 'false');
    trigger.title = select.selectedOptions[0]?.textContent || '';
    entry.controller.sync(items.indexOf(select.selectedOptions[0]), emptyLabel || 'Select an option');
    if (select.disabled) entry.controller.close();
  }
  function add(select) {
    if (entries.has(select) || select.multiple || select.size > 1) return;
    const id = `${select.id || 'lesson-select-' + ++serial}-dropdown`;
    const root = document.createElement('div');
    root.className = 'log-expression-picker lesson-select';
    root.id = id;
    select.after(root);
    const entry = {select, root, id, signature: null, controller: null, labels: []};
    entries.set(select, entry);
    refresh(entry);
    select.classList.add('lesson-native-select');
    select.setAttribute('aria-hidden', 'true');
    select.tabIndex = -1;
    const focus = event => {
      if (root.contains(event.target) || event.target === select || event.target.closest('a, button, input')) return;
      event.preventDefault();
      root.querySelector('.log-expression-trigger').focus();
    };
    for (const label of select.labels) { label.addEventListener('click', focus); entry.labels.push([label, focus]); }
  }
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      for (const [select, entry] of entries) {
        if (!scope.contains(select)) {
          entry.controller.destroy();
          entry.labels.forEach(([label, listener]) => label.removeEventListener('click', listener));
          entry.root.remove(); entries.delete(select);
        } else refresh(entry);
      }
    });
  }
  scope.querySelectorAll('select').forEach(add);
  // Preset/reset handlers may assign select.value without dispatching change.
  for (const event of ['input', 'change', 'click', 'reset']) scope.addEventListener(event, schedule);
  new MutationObserver(records => {
    let changed = false;
    for (const record of records) {
      if (record.type === 'attributes' && record.target.matches('select, option, optgroup')) changed = true;
      if (record.type === 'childList') {
        if (record.target.closest('select')) changed = true;
        for (const node of record.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches('select')) add(node);
          node.querySelectorAll('select').forEach(add);
        }
        if (record.removedNodes.length) changed = true;
      }
    }
    if (changed) schedule();
  }).observe(scope, {subtree: true, childList: true, attributes: true, attributeFilter: ['disabled', 'selected', 'label', 'aria-label', 'aria-labelledby', 'aria-invalid', 'required']});
}
