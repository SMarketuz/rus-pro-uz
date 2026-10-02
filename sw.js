/* Oddiy oflayn kesh: sahifa bir marta ochilgach internetsiz ham ishlaydi
   (ovozni tanish bundan mustasno — u internet talab qiladi). */
const CACHE = 'rus30-v2';
const FILES = ['./', 'index.html', 'css/style.css', 'js/app.js', 'js/data/plan.js',
  'js/data/days-01-05.js', 'js/data/days-06-10.js', 'js/data/days-11-15.js', 'js/data/days-16-20.js', 'icon.svg', 'manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
