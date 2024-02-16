/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import "./gates/gate"
import { AREA } from "./constantes";
import { log } from "console";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready


WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

    function verifierHeure() {
        // Obtenir l'heure actuelle
        var maintenant = new Date();

        // Définir l'heure à laquelle tu souhaites déclencher l'action
        var heureAction1 = new Date();
        heureAction1.setHours(15); // Heure : 0 (exemple)
        heureAction1.setMinutes(35); // Minutes : 1 (exemple)
        heureAction1.setSeconds(0); // Secondes : 0 (exemple)

        var heureAction2 = new Date();
        heureAction2.setHours(12); // Heure : 0 (exemple)
        heureAction2.setMinutes(45); // Minutes : 0 (exemple)
        heureAction2.setSeconds(0); // Secondes : 0 (exemple)

        // Vérifier si l'heure actuelle correspond à l'heure d'action
        if (maintenant.getTime() === heureAction1.getTime()) {
          // Déclencher ton action ici
          //console.log("Action déclenchée à l'heure précise !");
          //WA.chat.sendChatMessage("Action déclenchée à l'heure précise !", " Mr Robot");
          WA.ui.banner.openBanner({
            id: "banner-test",
            text: "On va bientôt commencer, rendez-vous dans l'amphi ! :)",
            bgColor: "#0055FF",
            textColor: "#FFFFFF",
            closable: false,
            timeToClose: 120000,
            link:  {
                url: "",
                label: ""
              }
        });
        } else if (maintenant.getTime() === heureAction2.getTime()) {
            // Déclencher ton action ici
            //console.log("Action déclenchée à l'heure précise !");
            //WA.chat.sendChatMessage("Action déclenchée à l'heure précise !", " Mr Robot");
            WA.ui.banner.openBanner({
              id: "banner-test",
              text: "C'est bientôt la fin... Rendez-vous dans l'amphi pour la conclusion !",
              bgColor: "#0055FF",
              textColor: "#FFFFFF",
              closable: false,
              timeToClose: 120000,
              link:  {
                url: "",
                label: ""
              }
          });
          } //else {
            // Aucune des heures n'est encore passée
            //console.log("Aucune des heures n'est encore passée.");
        //}
    }
    // Vérifier l'heure toutes les secondes
    setInterval(verifierHeure, 1000);

    // Initialisation autorisation des salles
    WA.player.state.saveVariable("authorizedRooms", [1])
    WA.player.state.saveVariable("quests", [])
    WA.ui.modal.openModal({
        title: 'tuto',// mandatory, title of the iframe modal.
        src: "https://landing.neosoft.fr/discord-0", // mandatory, url of the iframe modal.
        position: "center",
        allow: null,
        allowApi: false
      })

    /*  WA.room.area.onEnter('clock').subscribe(() => {
          const today = new Date();
          const time = today.getHours() + ":" + today.getMinutes();
          currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
      })
  
      WA.room.area.onLeave('clock').subscribe(closePopup) */

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


// Message qui s'affiche sur le chat à droite avec le lien du tuto (solution 2)
//WA.chat.sendChatMessage('Bonjour ! Bienvenue à NIORT voici le tutoriel : https://landing.neosoft.fr/discord-0');

WA.room.area.onEnter('supportrh').subscribe(async () => {

    // const today = new Date();
    // const time = today.getHours() + ":" + today.getMinutes();

    currentPopup = WA.ui.openPopup(AREA.FLOOR_LAYER.SUPPORT_RH_POPUP, "support", [{
        label: "OK !",
        className: "primary",
        callback: (popup) => {
            popup.close();
            WA.player.moveTo(321, 683, 10).then((result) => {
                if (result) {
                    WA.player.moveTo(695, 1255, 10);
                }
            });
        }
    }]);
})

<<<<<<< HEAD
// const currentPlayerPosition = await WA.player.getPosition();
console.log("my position :", await WA.player.getPosition());

// setInterval(async () => { console.log("position :", await WA.player.getPosition()) }, 1000)
WA.room.area.onEnter('tutoArea').subscribe(() => {
=======
WA.room.area.onEnter(AREA.FLOOR_LAYER.TUTO_AREA).subscribe(() => {
>>>>>>> a298653df25a54d54346fe71ba68f489272532f6

    WA.ui.modal.openModal({
        title: 'tuto',// mandatory, title of the iframe modal.
        src: "https://landing.neosoft.fr/discord-0", // mandatory, url of the iframe modal.
        position: "center",
        allow: null,
        allowApi: false
    })
})

WA.room.area.onEnter(AREA.EASTER_EGG.RICK_ROLL).subscribe(() => {

    WA.ui.modal.openModal({
        title: 'rickRoll',// mandatory, title of the iframe modal.
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=opZVDTlwJOw0kQNC&autoplay=1", // mandatory, url of the iframe modal.
        position: "center",
        allow: null,
        allowApi: false
    })
})

WA.room.area.onEnter(AREA.FLOOR_LAYER.VIDEO_AGENCY).subscribe(() => {
    WA.ui.modal.openModal({
        title: 'agencyVideo',// mandatory, title of the iframe modal.
        src: "https://www.youtube.com/embed/1OnivPs6c7I?si=fcM3eA5jiw5vQ6Us",
        position: "center",
        allow: null,
        allowApi: false
    })
})

/*function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}**/

export { };
