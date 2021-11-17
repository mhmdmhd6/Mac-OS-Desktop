const staticCachesName = 'site-static-v5';
const dynamicCache = 'site-dynamic-v6';
const assets = [
    '/',
    './index.html',
    './Css/style.css',
    './javascript/script.js',
    './javascript/app.js',
    './manifest.json',
    './background/MontereyBackground.jpg',
    './icon',
    './icon/dock',
    './icon/dock/appstore.png',
    './icon/dock/bin.png',
    './icon/dock/books.png',
    './icon/dock/calculator.png',
    './icon/dock/calendar.png',
    './icon/dock/contacts.png',
    './icon/dock/finder.png',
    './icon/dock/launchpad.png',
    './icon/dock/mail.png',
    './icon/dock/maps.png',
    './icon/dock/messages.png',
    './icon/dock/music.png',
    './icon/dock/notes.png',
    './icon/dock/photos.png',
    './icon/dock/preferences.png',
    './icon/dock/reminders.png',
    './icon/dock/terminal.png',
    './icon/dock/vscode.svg',
    './icon/launchpad',
    './icon/Launchpad/appstore.png',
    './icon/Launchpad/calculator.png',
    './icon/Launchpad/calendar.png',
    './icon/Launchpad/contacts.png',
    './icon/Launchpad/dictionary.png',
    './icon/Launchpad/Home.png',
    './icon/Launchpad/mail.png',
    './icon/Launchpad/messages.png',
    './icon/Launchpad/netnewswire.png',
    './icon/Launchpad/numbers.png',
    './icon/Launchpad/pages.png',
    './icon/Launchpad/zoom.png',
    './icon/manifest',
    './cursor/Normal.cur',
    './cursor/link.cur',
    'https://vscode.dev',
    'https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Roboto:wght@100&display=swap',
    'https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap',
    'https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.jquery.com/jquery-1.12.4.js',
    'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
}


// service has been instaalled
self.addEventListener('install', evnt => {
    console.log("service worker has been installed!");

    evnt.waitUntil (
        caches.open(staticCachesName).then(caches =>{
            console.log("caching shell assets");
            caches.addAll(assets);
        })
    );
});

//activate event
self.addEventListener('activate', evnt => {
    console.log("service worker has been activated!");

    evnt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCachesName)
                .map(key => caches.delete(key))    
            )
        })
    );
});


self.addEventListener('fetch', evnt => {
    console.log("fetch", evnt);
    evnt.respondWith(
        caches.match(evnt.request).then(CacheRes => {
            return CacheRes || fetch(evnt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(Cache => {
                    Cache.put(evnt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCache, 60)
                    return fetchRes;
                })
            });
        })
    );
});
