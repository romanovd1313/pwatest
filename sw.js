'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","css/style.css","about.html","blog.html","contact.html","portfolio.html"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});