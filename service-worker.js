const CACHE_NAME = 'my-cache-v1';
const ASSETS_TO_CACHE = [
  'https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg',
  'https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614',
  // Add more URLs of images, videos, and audio files here
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache opened');
        return cache.addAll(ASSETS_TO_CACHE)
          .then(() => {
            console.log('Service Worker: Assets cached');
          })
          .catch((err) => {
            console.error('Service Worker: Failed to cache assets', err);
          });
      })
  );
});

// Serve cached assets when requested
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('Service Worker: Returning from cache', event.request.url);
          return response;
        }
        console.log('Service Worker: Not in cache, fetching from network', event.request.url);
        return fetch(event.request);
      })
  );
});
