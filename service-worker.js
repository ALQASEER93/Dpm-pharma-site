self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('dpm-v2').then(c =>
      c.addAll([
        '/index.html',
        '/products.html',
        '/contact.html',
        '/game.html',
        '/assets/style.css',
        '/assets/i18n.js',
        '/assets/i18n/en.json',
        '/assets/i18n/ar.json',
        '/assets/game.js',
        '/assets/logo.svg'
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== 'dpm-v2').map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;

  // للانتقالات (فتح صفحات HTML)، أعطِ index.html كـ fallback ثابت
  if (req.mode === 'navigate') {
    e.respondWith(
      (async () => {
        const cached = await caches.match('/index.html');
        try {
          const fresh = await fetch(req, { redirect: 'follow' });
          return fresh;
        } catch {
          return cached || Response.error();
        }
      })()
    );
    return;
  }

  // لباقي الطلبات (أصول ثابتة)
  e.respondWith(
    caches.match(req).then(r => r || fetch(req))
  );
});
