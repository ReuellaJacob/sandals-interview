//todo: edit CSS of alert banner
import {playVideo} from './video.js';
import {dynamicHTML} from './dynamicHTML.js';

function getContent() {
    let xhr = new XMLHttpRequest();
    let url = "https://sandalschurch.com/api/latest_sermon";
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.open("GET", url);
    xhr.send();
    return responseReceivedHandler;
}

function responseReceivedHandler() {
    if(this.status === 200) {
        let jsonResponse = JSON.parse(this.response);
        dynamicHTML(jsonResponse);
        playVideo(jsonResponse['hls_url']);
    }
    else {
        console.log("Failure");
    }
}

getContent();



