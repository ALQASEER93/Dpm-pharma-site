
const I18N = {lang: 'en', dict: {}};
async function setLang(lang){
  I18N.lang = lang; localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang==='ar'?'rtl':'ltr');
  const res = await fetch(`assets/i18n/${lang}.json`);
  I18N.dict = await res.json(); translate();
}
function translate(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n'); const v = I18N.dict[key];
    if(!v) return;
    if(typeof v === 'string'){ el.innerText = v; }
    else{
      if(v.text) el.innerText = v.text;
      if(v.placeholder) el.setAttribute('placeholder', v.placeholder);
      if(v.html) el.innerHTML = v.html;
    }
  });
  document.title = I18N.dict['site.title'] || document.title;
}
window.addEventListener('DOMContentLoaded', ()=> setLang(localStorage.getItem('lang')||'en'));
function waLink(){ window.open('https://wa.me/962778880285','_blank'); }
