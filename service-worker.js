const CACHE='ruka-costos-recetas-v6';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./favicon.png','./logo-ruka-recorte.png','./logo-ruka-actual.jpg','./ruka-costos-recetas-hero.png','./ruka-cocina.png',
  './ruka-ui-preview.png',
  './ruka-app-showcase.png',
  './logo-ruka-costos-recetas.svg','./receta-brownie.png','./receta-budin-vainilla.png','./receta-scons.png','./receta-alfajor-maicena.png','./receta-bizcochuelo-naranja.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>caches.match('./index.html'))));
});
