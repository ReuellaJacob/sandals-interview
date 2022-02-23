//todo: edit CSS of alert banner

function welcomeMessage() {
    alert("Welcome to Sandals Church!");
}

// window.onload = welcomeMessage;

function getContent() {
    let xhr = new XMLHttpRequest();
    let url = "https://sandalschurch.com/api/latest_sermon";
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.open("GET", url);
    xhr.send();
    return responseReceivedHandler;
}

function responseReceivedHandler() {
    console.log(this.status);
    if(this.status == 200) {
        let jsonResponse = JSON.parse(this.response);
        printResponse(jsonResponse);
        playVideo(jsonResponse['hls_url'])
    }
    else {
        console.log("Failure");
    }
}

function printResponse(response) {
    let pageTitle = document.getElementById("page-title");
    pageTitle.innerHTML = response.title;

    // document.getElementById("image_hd").src= response.image_hd;
    // document.getElementById("image_sd").src= response.image_sd;

    // let apiDiv = document.getElementById("api-call-container");
    // apiDiv.innerText += JSON.stringify(response);
}

getContent();

function playVideo(url) {
    const hls = new Hls();
    if (Hls.isSupported()) {
        const video = document.getElementById('video');
                // bind them together
        hls.attachMedia(video);
        console.log(url);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            console.log('video and hls.js are now bound together !');
            hls.loadSource(url);
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                console.log(
                    'manifest loaded, found ' + data.levels.length + ' quality level'
                );
            });
        });
        video.play();
    }

    hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
            switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    // try to recover network error
                    console.log('fatal network error encountered, try to recover');
                    hls.startLoad();
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log('fatal media error encountered, try to recover');
                    hls.recoverMediaError();
                    break;
                default:
                    // cannot recover
                    hls.destroy();
                    break;
            }
        }
    });
}

