const CACHE_NAME = 'v1_cacheCruzpeñaPWA' ;
 var urlsToCache = [
   './',
   './css/styles.css',
   './img/1.png',
   './img/2.png',
   './img/3.png',
   './img/4.png',
   './img/5.png',
   './img/6.png',
   './img/facebook.png',
   './img/instagram.png',
   './img/twitter.png',
   './img/favicon-1024.png',
   './img/512.png',
   './img/384.png',
   './img/128.png',
   './img/32.png',
   './img/16.png',
];

self.addEventListener('install', e => {
    e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
    return cache.addAll(urlsToCache)
    .then(() => {
         self.skipWaiting();
    });
})
   
    .catch(err => console.Log('No se ha registrado el cache', єrr))
    );
});

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        cache.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheNames => {
                    if(cacheWhitelist.indexOf(cacheNames) === -1){
                    //
                    return caches.delete(cacheNames);
                }
            })
         );
     
    })

.then(() =>  {
    self.clients.claim();
          })
        );
    });





    //Evento fetch
    self.addEventListener(fetch, e => {
        e.respondwith(
            caches.match(e.request)
            .then(res =>{
                return res;
            })
        )
    });

