
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('dpm-v1').then(c=> c.addAll([
    '/','/index.html','/products.html','/contact.html','/game.html',
    '/assets/style.css','/assets/i18n.js','/assets/i18n/en.json','/assets/i18n/ar.json','/assets/game.js','/assets/logo.svg'
  ])));
});
self.addEventListener('fetch', (e)=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
