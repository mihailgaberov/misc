const filesToCache = [
    'index.html',
    'offline.html',
    '404.html',
    'style.css',
    'image002.png'
];

const staticCacheName = 'our-seconds-cache';

self.addEventListener('install', event => {
    console.log('attempting to install sw and cache static resources');

    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', event => {
    console.log('Fetch event for: ', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('Found: ', event.request.url, ' in cache.');
                    return response;
                }

                console.log('Network request for ', event.request.url);
                return fetch(event.request)
                    .then(response => {
                        if (response.status === 404) {
                            return caches.match.match('404.html');
                        }

                        return caches.open(staticCacheName)
                            .then(cache => {
                                cache.put(event.request.url, response.clone());
                                return response;
                            })
                    });
            })
            .catch(err => {
                console.log('>>>> offline: ', err);
                return caches.match('offline.html')
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhiteList = [staticCacheName];

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheWhiteList.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                )
            })
    )
});
