// import './apiCalls.js'
//
// if (Hls.isSupported()) {
//     var video = document.getElementById('video');
//     var hls = new Hls();
//     // bind them together
//     hls.attachMedia(video);
//     let url = response.hls_url
//     console.log(url);
//     hls.on(Hls.Events.MEDIA_ATTACHED, function () {
//         console.log('video and hls.js are now bound together !');
//         hls.loadSource(url);
//         hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
//             console.log(
//                 'manifest loaded, found ' + data.levels.length + ' quality level'
//             );
//         });
//     });
//     video.play();
// }
//
// hls.on(Hls.Events.ERROR, function (event, data) {
//     if (data.fatal) {
//         switch (data.type) {
//             case Hls.ErrorTypes.NETWORK_ERROR:
//                 // try to recover network error
//                 console.log('fatal network error encountered, try to recover');
//                 hls.startLoad();
//                 break;
//             case Hls.ErrorTypes.MEDIA_ERROR:
//                 console.log('fatal media error encountered, try to recover');
//                 hls.recoverMediaError();
//                 break;
//             default:
//                 // cannot recover
//                 hls.destroy();
//                 break;
//         }
//     }
// });
