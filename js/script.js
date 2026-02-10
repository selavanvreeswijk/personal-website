const folders = document.querySelectorAll("article");
const list = document.querySelector(".folder-1 section ul");
const mijnNaam = document.querySelector("header");
const randomLijst = document.querySelector('.folder-2 ul');

// Folders scrollen inspiratie van: https://nitro.framer.website/

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

// Ander theme

const theme = document.querySelector('.other-theme')
let lightMode = true

theme.addEventListener('click', () => {
    if (lightMode) {;
        lightMode = false;

        document.body.classList.add('other-theme');
        theme.textContent = 'Minimal Minor Web Development';
    } else {;
        lightMode = true;

        document.body.classList.remove('other-theme');
        theme.textContent = 'Minor Web Development';
    };
});

// Glitch Text Reveal

// const { Splitting } = window
// const RESULTS = Splitting()

// const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('')


// for (let r = 0; r < RESULTS.length; r++) {
//   const CHARS = RESULTS[r].chars
//   for (let c = 0; c < CHARS.length; c++) {

//     for (let g = 0; g < 10; g++) {
//       CHARS[c].style.setProperty(
//         `--char-${g}`,
//         `"${GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]}"`
//       )
//     }
//   }
// }



