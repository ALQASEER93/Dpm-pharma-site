function translate(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const v = I18N.dict[key];
    if(!v) return;
    const isList = el.tagName === 'UL' || el.tagName === 'OL';
    if(typeof v === 'string'){
      if(isList) el.innerHTML = v; else el.innerText = v;
    } else {
      if(v.text) el.innerText = v.text;
      if(v.placeholder) el.setAttribute('placeholder', v.placeholder);
      if(v.html) el.innerHTML = v.html;
    }
  });
  document.title = I18N.dict['site.title'] || document.title;
}
