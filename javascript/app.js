if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {
        scope: '../'
    }).then(function(reg) {
        console.log("Service worker registered")
    }).catch(function(err) {
        console.log(err);
    });
}