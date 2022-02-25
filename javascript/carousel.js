let sermons

async function loadData() {
    let sermonsList = await fetch("data/sermons.json")
        .then(response => {
            return response.json();
        })
    sermons = sermonsList.sermons
}

export function carousel() {
    loadData().then(_ => {
        // container for carousel
        let carousel = document.getElementById('carousel-container');

        // add the input buttons
        for(let i =0; i < sermons.length; i++) {
            // console.log(sermons[i]);
            let idName = "sermon" + i;
            let input = document.createElement('input');

            input.id = idName;
            input.type = 'radio';
            input.name = 'slider';

            if (i === 0) {
                input.checked = true;
            }

            carousel.appendChild(input);
        }

        // container for carousel cards
        let card = document.createElement('div')
        card.className = "cards"

        for(let i =0; i < sermons.length; i++) {
            let label = document.createElement('label');
            let image = document.createElement('img')

            let forElement = "sermon" + i;
            let labelId = "card" + i;

            label.className = "card";
            label.htmlFor = forElement;
            label.id = labelId;
            image.className = "image";

            image.src = sermons[i]['image']
            image.alt = sermons[i]['name']
            image.ondblclick = function() {location.replace(sermons[i]['web']);};

            label.appendChild(image);
            card.appendChild(label);
        }
        carousel.appendChild(card);
    })
}

carousel();
