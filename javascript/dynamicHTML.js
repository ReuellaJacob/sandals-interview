export function dynamicHTML(response) {
    // get container
    let container = document.getElementById('page-container');

    // create elements
    let sermonContainer = document.createElement('div');
    let video = document.createElement('video');

    let sermonInfo = document.createElement('div');
    let sermonTitle = document.createElement('h2');
    let sermonDescription = document.createElement('p');
    let sermonDate = document.createElement('p');

    // assign class/id
    sermonContainer.className='container';
    sermonContainer.id = 'sermon-container';

    video.id = 'sermon-video';

    sermonInfo.className = 'container';
    sermonInfo.id = 'sermon-info';

    sermonTitle.id = 'title';
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
    container.appendChild(sermonContainer);

    sermonContainer.appendChild(video);
    sermonContainer.appendChild(sermonInfo);

    sermonInfo.appendChild(sermonTitle);
    sermonInfo.appendChild(sermonDate);
    sermonInfo.appendChild(sermonDescription);
}
