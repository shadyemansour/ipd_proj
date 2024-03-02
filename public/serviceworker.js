/**
 *
 * This file is the service worker that will be registered with the browser.
 * It uses the Workbox library to cache the API requests and serve them from the cache when offline.
 * https://developer.chrome.com/docs/workbox
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

if (workbox) {
  // Register a route for requests to the backend API
  workbox.routing.registerRoute(
    ({ url }) => url.port === "3001",
    new workbox.strategies.NetworkFirst({
      cacheName: "api-cache",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // Cache for one day
        }),
      ],
    })
  );
}
