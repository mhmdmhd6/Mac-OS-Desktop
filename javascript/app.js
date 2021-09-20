// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register('../sw.js')
//     .then(function (reg) {
//         console.log("Service worker registered", reg);
//     })["catch"](function (err) {
//         console.log(err);
//     });
// }

// does the browser support service workers?
if ('serviceWorker' in navigator) {
    // then register our service worker
    navigator.serviceWorker.register('../sw.js')
      .then(reg => {
        // display a success message
        console.log(`Service Worker Registration (Scope: ${reg.scope})`);
      })
      .catch(error => {
        // display an error message
        let msg = `Service Worker Error (${error})`;
        console.error(msg);
        // display a warning dialog (using Sweet Alert 2)
        Swal.fire('', msg, 'error');
      });
  } else {
    // happens when the app isn't served over a TLS connection (HTTPS)
    // or if the browser doesn't support service workers
    console.warn('Service Worker not available');
  }