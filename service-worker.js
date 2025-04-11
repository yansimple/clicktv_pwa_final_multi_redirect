self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  console.log('Service Worker активирован');
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});