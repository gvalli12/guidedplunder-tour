// Service Worker — GuidedPlunder GPS tour PWA
const CACHE_NAME = 'guidedplunder-tour-v26';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './selfie.js',
  './tour-data.js',
  './tour-data-asburypark.js',
  './tour-data-wildwood.js',
  './tour-data-hopatcong.js',
  './deals-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './screecher-wings.png',
  './screecher-talking.png',
  './screecher-portrait.png',
  './screecher-closeup.png',
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
  './audio/stops/stop-25.mp3',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', e => {
  // Cache each file on its own. addAll() rejects the entire install if one
  // asset 404s or the quota blows up on the intro video, which left the
  // tour with no offline shell at all.
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(ASSETS.map(url => cache.add(url).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function shouldRuntimeCache(request, response) {
  if (!response || response.status !== 200) return false;
  const url = new URL(request.url);
  if (url.origin === self.location.origin && response.type === 'basic') return true;
  // Leaflet is required to open the map. Do not cache map tiles — they are unbounded.
  if (url.hostname === 'unpkg.com' && response.type === 'cors') return true;
  return false;
}

self.addEventListener('fetch', e => {
  const request = e.request;
  if (request.method !== 'GET') return;
  // Media elements seek with Range. A cached 200 for a Range request breaks playback.
  if (request.headers.has('range')) return;

  e.respondWith((async () => {
    // ignoreSearch so app.js?v=26 hits the precached app.js, and
    // index.html?dest=asbury still opens offline.
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (shouldRuntimeCache(request, response)) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
      }
      return response;
    } catch (_) {
      return cached || Response.error();
    }
  })());
});
