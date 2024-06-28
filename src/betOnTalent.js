
const text = [
    "Hello ! Bienvenue dans la salle \"Bet On Talent\". Ici tu découvriras des informations sur les opportunités de carrière chez Neosoft. ",
    "Tout d'abord, mot de Barbara, la Directrice du Développement RH : ",
    "\"Engager nos talents dans une culture d'apprentissage"
];
let index = 0;
let textIndex = 0

function showText() {
    let textElement = document.getElementById("text")
    if (textElement) {
        textElement.textContent = text[textIndex].slice(0, index);
    }
    index++;

    console.log(textIndex)
    if (textIndex === 3) {
        document.getElementById("buttonsContainer").style.display = "flex"
    }
    if (textIndex !== 3) {
        document.getElementById("videoContainer").style.display = "none"
    }
    if(textIndex === 2){
        document.getElementById("img").style.display = "block"
    }
    if (index <= text[textIndex].length) {
        setTimeout(showText, 20);
    } else {
        let nextButton = document.getElementById("next")
        if (nextButton) {
            nextButton.hidden = false;
        }
    }
}

showText();

const button = document.getElementById("next");

button?.addEventListener("click", () => {
    let nextButton = document.getElementById("next")
    if (nextButton) {
        nextButton.hidden = true;
    }
    index = 0;
    textIndex++;
    if (textIndex == text.length) {
        document.getElementById("box").style.display = "none"
    }
    showText();
});

const pacte = document.getElementById("pacte")
const career = document.getElementById("career")

pacte?.addEventListener("click", () => {
    window.open("https://www.neosoft.fr/pourquoi-rejoindre-neosoft/", "_blank")
})

career?.addEventListener("click", () => {
    window.open("https://www.neosoft.fr/votre-carriere-chez-neosoft", "_blank")
})