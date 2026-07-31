/* 家族旅行通 Service Worker
   策略:network-first(永遠優先拿最新版),失敗才用快取
   這樣新版部署一定會生效,不會被舊快取卡住 */
const CACHE = "familyhub-v1";
const TIMEOUT = 4000;

self.addEventListener("install", (e) => { self.skipWaiting(); });

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;   // 只管自己網域

  e.respondWith((async () => {
    // 先試網路(4 秒逾時)
    try {
      const net = await Promise.race([
        fetch(e.request),
        new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), TIMEOUT)),
      ]);
      if (net && net.ok) {
        const c = await caches.open(CACHE);
        c.put(e.request, net.clone());
      }
      return net;
    } catch (_) {
      // 網路不行 → 用快取
      const hit = await caches.match(e.request);
      if (hit) return hit;
      const home = await caches.match("./");
      if (home) return home;
      return new Response("離線中,且沒有快取可用。請連上網路後重試。", {
        status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }
  })());
});
