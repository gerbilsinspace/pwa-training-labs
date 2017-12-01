(function() {
  'use strict';

    const CACHE_NAME = 'static-cache';
    const urlsToCache = [
        'index.html',
        'styles/main.css'
    ]

    self.addEventListener('install', event => {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => {
                    return cache.addAll(urlsToCache);
                })
        );
    });

    self.addEventListener('fetch', event => {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    return response || fetchAndCache(event.request);
                })
        )
    })

    const fetchAndCache = (url) => {
        return fetch(url).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
    
            return caches.open(CACHE_NAME).then(cache => {
                cache.put(url, response.clone());
                return response;
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
})();
