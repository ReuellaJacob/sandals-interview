//todo: edit CSS of alert banner
import {playVideo} from './video.js';

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
        playVideo(jsonResponse['hls_url']);
    }
    else {
        console.log("Failure");
    }
}

function printResponse(response) {
    let pageTitle = document.getElementById("page-title");
    pageTitle.innerHTML = response.title;
    // test(response.title);

    document.getElementById("sermon-video").poster= response.image_hd;

    // document.getElementById("image_sd").src= response.image_sd;

    // let apiDiv = document.getElementById("api-call-container");
    // apiDiv.innerText += JSON.stringify(response);
}

getContent();



