'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "347e4ed7cc504494fa6e6837b47b4300",
"assets/AssetManifest.bin.json": "b4a965ffabccbfb62a5e65f8e4040c28",
"assets/AssetManifest.json": "f973bed9e30ebcb988a932028ef832c2",
"assets/assets/fonts/Geologica/Geologica-Black.ttf": "0c9c350c93a897865e48ef3fa9daf56b",
"assets/assets/fonts/Geologica/Geologica-Bold.ttf": "1f85dcbc8dc6e70d52eb940da65c8dfb",
"assets/assets/fonts/Geologica/Geologica-ExtraBold.ttf": "9c38c770401b752d7f041519a10256dd",
"assets/assets/fonts/Geologica/Geologica-ExtraLight.ttf": "3891041a9aeafe406dbc99a20441bbca",
"assets/assets/fonts/Geologica/Geologica-Light.ttf": "8029eb827d8788087c087997614b9661",
"assets/assets/fonts/Geologica/Geologica-Medium.ttf": "62a2f2c336411288d2defe05fe34312f",
"assets/assets/fonts/Geologica/Geologica-Regular.ttf": "d1a609f8f6437fc3106679b0155b7242",
"assets/assets/fonts/Geologica/Geologica-SemiBold.ttf": "efd97b9c471c6edca42338762df91ca2",
"assets/assets/fonts/Geologica/Geologica-Thin.ttf": "376ba5f44315faa2f460e5189daaa95b",
"assets/assets/fonts/Geologica/Geologica.ttf": "2926daa6f6c919a765b8aed9b617a7eb",
"assets/assets/fonts/Geologica/Geologica_Auto-Black.ttf": "0ad20697af4d378c629579d86ee63a4f",
"assets/assets/fonts/Geologica/Geologica_Auto-Bold.ttf": "05590a2514a646ad6b84b0c0f3982588",
"assets/assets/fonts/Geologica/Geologica_Auto-ExtraBold.ttf": "1d4926dca7ec02f7d673c74671152869",
"assets/assets/fonts/Geologica/Geologica_Auto-ExtraLight.ttf": "111abc0b4b776ca75eb925821d5fc010",
"assets/assets/fonts/Geologica/Geologica_Auto-Light.ttf": "01450400a120507df6fc1070b4d95b9c",
"assets/assets/fonts/Geologica/Geologica_Auto-Medium.ttf": "d5cd670e7727476d533b770935089207",
"assets/assets/fonts/Geologica/Geologica_Auto-Regular.ttf": "58a68816f08a6790b17fc94214961a74",
"assets/assets/fonts/Geologica/Geologica_Auto-SemiBold.ttf": "6ab247177dcb6ebc0a8ad496d8fcea8b",
"assets/assets/fonts/Geologica/Geologica_Auto-Thin.ttf": "566f30abea21626b53cb9d9567a3f0fc",
"assets/assets/fonts/Geologica/Geologica_Cursive-Black.ttf": "8b811ba2dd3f953e66c7aa0960065c9c",
"assets/assets/fonts/Geologica/Geologica_Cursive-Bold.ttf": "a8b584e2081b7ad799f21f77a1ab4a21",
"assets/assets/fonts/Geologica/Geologica_Cursive-ExtraBold.ttf": "f6be2e2f3960fa42242e30ca9d8f0b3d",
"assets/assets/fonts/Geologica/Geologica_Cursive-ExtraLight.ttf": "d02c117f690aaa2ba00d36cabd00cdcb",
"assets/assets/fonts/Geologica/Geologica_Cursive-Light.ttf": "c24dd505b445906c9e6972381b4dad5f",
"assets/assets/fonts/Geologica/Geologica_Cursive-Medium.ttf": "7dd4a8812098e261b4bebc28a11449bf",
"assets/assets/fonts/Geologica/Geologica_Cursive-Regular.ttf": "5d75970373fbe4a5a9c6dd28c3e5a85f",
"assets/assets/fonts/Geologica/Geologica_Cursive-SemiBold.ttf": "1042831790fa0559b590a9c8ac1ef11b",
"assets/assets/fonts/Geologica/Geologica_Cursive-Thin.ttf": "2aab688e2cb46056c74d4d2c656064e5",
"assets/assets/images/ayyoobi-dark.png": "2591d64c81a21cbcb290d2279e65fb5f",
"assets/assets/images/ayyoobi.png": "1e378cb8127f8bea7ff52226a0b1ca8c",
"assets/assets/images/blue.png": "bcec48509d7f14cd6c11ab6658d05252",
"assets/assets/images/IDR.jpg": "f530deda34b744fcf430ac8874ed55cb",
"assets/assets/images/LEAVE.jpg": "2b88af0cdee9c91f27a667377d62e8dc",
"assets/assets/images/Logo.png": "ec1ce73d5dcb8625f7c04ecc605481ee",
"assets/assets/images/poster_frame.jpg": "8d26b99e2ac4e030950ef1ead5aa2d9a",
"assets/assets/images/whatsapp.png": "84cbca38b8240b2ce2745e9d4f360faa",
"assets/FontManifest.json": "59242ca369b9e6c34fdf7828cdddc13c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/blue.png": "bcec48509d7f14cd6c11ab6658d05252",
"assets/NOTICES": "35d12edf21b7c0617e5158ea762d414c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "4f59e81563e413635c57d78338d33b92",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "e0b028909550eda3023ac5765bf8c16a",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "612af00267f5e8a429531399700db66e",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "6c53da4ecc310dd5dbcfafe3d916a346",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "9ca0acf8bc84ec2421f96f835017f321",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "c2ecd49d10b76c3f9b9c072966cc0c3c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9a7f8938c2ed4e1e98f7c846ced9ed2e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ed3b1a4a840c737a875332b730244de",
"/": "0ed3b1a4a840c737a875332b730244de",
"main.dart.js": "20d4eb781a7aef60568eb48d7be1cd73",
"manifest.json": "fd1df31267c660aab8df93e1d5916421",
"version.json": "226abace40e99cb090fb563fd7a13f88"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
