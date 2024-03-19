
const text = [
    "Bonjour ! Bienvenue à l'agence Neosoft Niort !",
    "A travers cette visite virtuelle, tu pourras découvrir le différents côtés de notre agence.",
    "Chaque salle que tu exploreras représente un thème spécifique. Ainsi, à chaque étape de ton aventure, tu en apprendras un peu plus sur qui nous sommes.",
    "Aussi, tu trouveras un guide à chaque étape de ta découverte pour t'aider dans ta quête, ils sont facilement reconnaissable à leur \"?\" sur leur tête.",
    "A la fin de ton parcours, tu pourras rejoindre ton RH pour un entretien.",
    "Oh, j'allais oublié !",
    "N'hésite pas à fouiller les bureaux... Nos collaborateurs sont des petits farceurs et ont cachés des choses un peu partout."
];
let index = 0;
let textIndex = 0

function showText() {
    let textElement = document.getElementById("text")
    if (textElement) {
        textElement.textContent = text[textIndex].slice(0, index);
    }
    index++;

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

const button = document.querySelector("button");

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