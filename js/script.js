const folders = document.querySelectorAll("article");
let list = document.querySelector("ul")

window.addEventListener("scroll", () => { // Scrollen voor folders
    const scroll = window.pageYOffset;

    folders.forEach(folder => {
        folder.classList.remove("active");
    });

    if (scroll > 225) {
        folders[1].classList.add("active");
    }

    if (scroll > 325) {
        folders[2].classList.add("active");
    }
});

insertCharacters() // API info ophalen

async function insertCharacters() {
    const url = 'https://fdnd.directus.app/items/person/321'

    const response = await fetch(url)
    const result = await response.json()

    console.log('API result:', result)
}

async function insertCharacters() {
    const baseURL = 'https://fdnd.directus.app/'
    const endpoint = 'items/person/321'
    
    const url = baseURL + endpoint

    const response = await fetch(url)
    const result = await response.json()

    const person = result.data

    let charactersHTML = `
        <li>Name: ${person.name}</li>
        <li>Nickname: ${person.nickname}</li>
        <li>Githubhandle: ${person.github_handle}</li>
        <li>Website: ${person.website}</li>
        <li>Bio: ${person.bio}</li>
    `

    list.insertAdjacentHTML("beforeend", charactersHTML)
}


