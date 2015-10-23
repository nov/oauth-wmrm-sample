self.addEventListener('fetch', function (event) {
  console.info(event);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.info(response);
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});