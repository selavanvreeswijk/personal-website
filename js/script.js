// Omdat ik een aantal scrollanimaties heb, wilde mijn site niet goed laden. Uiteindelijk kwam ik hierop met chatGPT
// Source: chatGPT. Prompt: Mijn prompt was mijn code en waarom alle content omhoog versprong bij het laden van de pagina
history.scrollRestoration = "manual";

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

const folders = document.querySelectorAll('article');
const randomLijst = document.querySelector('.folder-2 section ul');
const nameContainer = document.querySelector('#person-321-name');
const dataContainer = document.querySelector('#person-321-data');

// Folders scrollen inspiratie van: https://nitro.framer.website/

window.addEventListener('scroll', () => { 
    const scroll = window.pageYOffset;

    folders.forEach(folder => {
        folder.classList.remove('active');
    });

    if (scroll > 400) {
        folders[1].classList.add('active');
    };

    if (scroll > 640) {
        folders[2].classList.add('active');
    };
});

// API

insertCharacters();

async function insertCharacters() {
    // Bron: chatGPT voor het ophalen van vier specifeke ID's. Hiervoor had ik alleen mijn eigen (succesvol) opgehaald. 
    // Mijn prompt: Ik haal nu op deze manier met JS een persoon op uit de API. Ik wil echter nu drie andere personen ophalen. Hoe kan ik dat aanpakken qua code?
    const ids = [321, 305, 298, 291];
    const url = `https://fdnd.directus.app/items/person?filter[id][_in]=${ids.join(',')}`;

    const response = await fetch(url);
    const result = await response.json();
    const persons = result.data;

    persons.forEach(person => {

        // Ik
        if (person.id === 321) {

            // Animatie Typewriter
            // Bron: https://www.w3schools.com/howto/howto_js_typewriter.asp
            nameContainer.textContent = person.name;

            function typeWriter(text, element, speed = 50){
                let i = 0;
                element.textContent = '';

                function typing() {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(typing, speed);
                    };
                };

                typing();
            };

            typeWriter(person.name, nameContainer, 70);


            dataContainer.innerHTML = `
                <li>Nickname: ${person.nickname}</li>
                <li>Github Handle: ${person.github_handle}</li>
                <li>Website: ${person.website}</li>
            `;
        };

        // Klasgenoten
        if (person.id === 305 || person.id === 298 || person.id === 291) {

            const container = document.querySelector(`#person-${person.id}`);

            // Die || voor wanneer data niet is ingevuld (bijvoorbeeld bij Iris haar favorite soep)
            container.innerHTML = `
                <li>
                    <img src="${person.avatar || './images/no-picture.jpg'}" alt="${person.name}">
                </li>

                <li>Name: ${person.name || 'Not specified'}</li>
                <li>Nickname: ${person.nickname || 'Not specified'}</li>
                <li>Github Handle: ${person.github_handle || 'Not specified'}</li>
                <li>Favorite Season: ${person.fav_season || 'Not specified'}</li>
                <li>Favorite Fruit: ${person.fav_fruit || 'Not specified'}</li>
                <li>Favorite Soup: ${person.fav_soup || 'Not specified'}</li>
            `;
        };
    });
};

// Random lijst folder 2 

const items = randomLijst.children;

for (let i = items.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    randomLijst.appendChild(items[randomIndex]);
}

// Ander thema

const theme = document.querySelector('.theme-toggle');
let lightMode = true;

theme.addEventListener('click', () => {

    if (lightMode) {
        lightMode = false;

        document.body.classList.add('other-theme');
        theme.textContent = 'Minimal Minor Web Development';

    } else {
        lightMode = true;

        document.body.classList.remove('other-theme');
        theme.textContent = 'Minor Web Development';
    };
});
