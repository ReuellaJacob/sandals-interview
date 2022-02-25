let sermons

async function loadData() {
    let sermonsList = await fetch("data/sermons.json")
        .then(response => {
            return response.json();
        })
    sermons = sermonsList.sermons
}

function carousel() {
    loadData().then(_ => {
        // container for carousel
        let carousel = document.getElementById('carousel-container');

        // add the input buttons
        sermons.forEach((sermon, index) => {
            let idName = "sermon" + index;
            let input = document.createElement('input');

            input.id = idName;
            input.type = 'radio';
            input.name = 'slider';

            if (index === 0) {
                input.checked = true;
            }

            carousel.appendChild(input);
        })

        // container for carousel cards
        let card = document.createElement('div')
        card.className = "cards"

        sermons.forEach((sermon, index) => {
            let label = document.createElement('label');
            let image = document.createElement('img')

            let forElement = "sermon" + index;
            let labelId = "card" + index;

            label.className = "card";
            label.htmlFor = forElement;
            label.id = labelId;
            image.className = "image";

            image.src = sermon['image']
            image.alt = sermon['name']
            image.ondblclick = function() {location.replace(sermon['link']);};

            label.appendChild(image);
            card.appendChild(label);
        })
        carousel.appendChild(card);
    })
}

carousel();
