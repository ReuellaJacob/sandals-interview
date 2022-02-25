export function dynamicHTML(response) {
    // get container
    let sermonContainer = document.getElementById('sermon-container');

    // create elements
    let video = document.createElement('video');

    let sermonInfo = document.createElement('div');
    let sermonTitle = document.createElement('h2');
    let sermonDescription = document.createElement('p');
    let sermonDate = document.createElement('p');

    video.id = 'sermon-video';

    sermonInfo.className = 'container';
    sermonInfo.id = 'sermon-info';

    sermonTitle.className = 'title';
    sermonDescription.id = 'description';
    sermonDate.id = 'date';

    // add attributes
    video.poster = response.image_hd;
    video.controls = true;

    // add text
    sermonTitle.innerHTML += response.title;
    sermonDescription.innerHTML += response.desc;
    sermonDate.innerHTML += response.date;

    // append elements
    sermonContainer.appendChild(video);
    sermonContainer.appendChild(sermonInfo);

    sermonInfo.appendChild(sermonTitle);
    sermonInfo.appendChild(sermonDate);
    sermonInfo.appendChild(sermonDescription);
}
