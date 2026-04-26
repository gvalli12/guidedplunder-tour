// Service Worker — LBI Pirate Tour PWA
const CACHE_NAME = 'lbi-pirate-v25';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './tour-data.js',
  './deals-data.js',
  './manifest.json',
  './screecher-wings.png',
  './screecher-talking.png',
  './screecher-portrait.png',
  './screecher-closeup.png',
  './selfie.js',
  './screecher-intro.mp4',
  './audio/intro.mp3',
  './audio/pirate-music.mp3',
  './audio/stops/stop-01.mp3',
  './audio/stops/stop-02.mp3',
  './audio/stops/stop-03.mp3',
  './audio/stops/stop-04.mp3',
  './audio/stops/stop-05.mp3',
  './audio/stops/stop-06.mp3',
  './audio/stops/stop-07.mp3',
  './audio/stops/stop-08.mp3',
  './audio/stops/stop-09.mp3',
  './audio/stops/stop-10.mp3',
  './audio/stops/stop-11.mp3',
  './audio/stops/stop-12.mp3',
  './audio/stops/stop-13.mp3',
  './audio/stops/stop-14.mp3',
  './audio/stops/stop-15.mp3',
  './audio/stops/stop-16.mp3',
  './audio/stops/stop-17.mp3',
  './audio/stops/stop-18.mp3',
  './audio/stops/stop-19.mp3',
  './audio/stops/stop-20.mp3',
  './audio/stops/stop-21.mp3',
  './audio/stops/stop-22.mp3',
  './audio/stops/stop-23.mp3',
  './audio/stops/stop-24.mp3',
  './audio/stops/stop-25.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return resp;
      }).catch(() => cached);
    })
  );
});
