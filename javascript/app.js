// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register('/javascript/sw.js')
//     .then(function (reg) {
//         console.log("Service worker registered", reg);
//     })["catch"](function (err) {
//         console.log(err);
//     });
// }

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('./sw.js').then(function(registration) {
//             // Registration was successful
//             console.log('Service Worker registration successful with scope: ', registration.scope);

//             // console.log('Service Worker registration successful with scope: ', registration.scope);
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://mhmdmhd6.github.io/Mac-OS-Desktop/sw.js').then(function(registration){
      console.log('service worker registration succeeded:',registration);
    },
  function(error){
    console.log('service worker registration failed:',error);
  });
  }
  else{
    console.log('service workers are not supported.');
  }
  