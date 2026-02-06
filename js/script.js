const folders = document.querySelectorAll("article");
const list = document.querySelector(".folder-1 section ul");
const mijnNaam = document.querySelector("header");
const randomLijst = document.querySelector('.folder-2 ul');

// Folders scrollen

window.addEventListener("scroll", () => { 
    const scroll = window.pageYOffset;

    folders.forEach(folder => {
        folder.classList.remove("active");
    });

    if (scroll > 300) {
        folders[1].classList.add("active");
    };

    if (scroll > 640) {
        folders[2].classList.add("active");
    };
});

// API

insertCharacter() 

async function insertCharacter() {
    const url = 'https://fdnd.directus.app/items/person/321';

    const response = await fetch(url);
    const result = await response.json();

    const person = result.data;

    // <li>Bio: ${person.bio}</li>

        let titelNaam =`
            <h1>${person.name}</h1>
        `

       let mijnData = `
            <li>Nickname: ${person.nickname}</li>
            <li>Github Handle: ${person.github_handle}</li>
            <li>Website: ${person.website}</li>
        `

    mijnNaam.insertAdjacentHTML("afterbegin", titelNaam);
    list.insertAdjacentHTML("beforeend", mijnData);
}

// Random lijst folder 2 

for (let i = randomLijst.children.length; i >= 0; i--) {
    randomLijst.appendChild(randomLijst.children[Math.random() * i | 0]);
}





