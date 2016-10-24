var urlsToCache = [];


  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");

  urlsToCache.push("");



  
    urlsToCache.push("/404.html");
  

  
    urlsToCache.push("/404.html");
  

  
    urlsToCache.push("/a-propos/");
  

  
    urlsToCache.push("/a-propos/");
  

  

  
    urlsToCache.push("/humans.txt");
  

  
    urlsToCache.push("/");
  

  
    urlsToCache.push("/");
  

  

  
    urlsToCache.push("/assets/css/main.css");
  

  

  
    urlsToCache.push("/presentations/ne-passons-pas-a-cote-des-choses-simples/");
  

  

  
    urlsToCache.push("/robots.txt");
  

  
    urlsToCache.push("/2016/01/28/comprendre-le-mvp/");
  

  
    urlsToCache.push("/2016/01/28/comprendre-le-mvp/");
  

  
    urlsToCache.push("/2016/05/21/la-stack-jam/");
  

  
    urlsToCache.push("/2016/05/21/la-stack-jam/");
  

  
    urlsToCache.push("/2016/08/30/ten-ways-to-make-a-product-great/");
  

  
    urlsToCache.push("/2016/08/30/ten-ways-to-make-a-product-great/");
  


var CACHE_NAME = 'frank-taillandier-cache-v1';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(urlsToCache);
  }).catch(function(err) {
    console.log('cache add err', err);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// strategies from the offline cookbook by jake archibald
// https://jakearchibald.com/2014/offline-cookbook/#serving-suggestions-responding-to-requests



  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    );
  });

