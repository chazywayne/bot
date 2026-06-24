const CACHE_NAME = 'tech-tutorials-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/unlock-mkopa-phones.html',
  '/bot.html',
  '/VPNs_wifi.html',
  '/404.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});