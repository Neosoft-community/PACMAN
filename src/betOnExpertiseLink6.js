
const text = [
    "« La raison d’être de notre practice est de créer des solutions logicielles innovantes centrées sur la valeur. Aussi, investissons-nous sur le développement de nos talents pour qu’ils soient à la pointe des bonnes pratiques. Nous plaçons donc l’architecture, la sécurité by design, l’éco-conception et le clean code au centre de nos préoccupations afin de bâtir, aux côtés de nos clients, des systèmes d’information responsables, agiles et résilients. » - Patrice Corteel, Practice Leader Software Engineering "
];
let index = 0;
let textIndex = 0


function showText() {
    let textElement = document.getElementById("text")
    if (textElement) {
        textElement.textContent = text[textIndex].slice(0, index);
    }
    index++;

    if (textIndex === text.length) {
        document.getElementById("buttonsContainer").style.display = "flex"
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

    if (textIndex >= text.length) {
        document.getElementById("box").style.display = "none";
        window.parent.postMessage({ type: 'closeUIWebsite' }, "*");
        return;
    }
    showText();
});