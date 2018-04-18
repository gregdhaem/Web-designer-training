//                          LES EVENEMENTS

// Les événements vont me permettre de déclancher une fonction suite à une 
// action de mon utilisateur.

// OBJECTIF : Etre en mesure de capturer ces événements afin d'éxecuter une
// fonction

// Les événements MOUSE 

// click        :   Au clic sur un élément
// mouseenter   :   La sourie passe au dessus de la zone
// nouseleave   :   La souris quitte la zone

// Les événements KEYBOARD

// keydown      :   Une touche du clavier est enfoncée
// keyup        :   Une touche du clavier est relachée

// Les événements WINDOW

// scroll       :   Défilement
// resize       :   Redimentionnement de fenêtre

// Les événements FORM

// change       :   pour les éléments <input>, <select>, <textarea>
// submit       :   A l'envoi du formulaire
// input        :   Pour capter la saisie d'un utilisateur sur un champ
//                  <input>

//#############################################################################
// Les écouteurs d'événements
// Pour attacher un événement à un élément, j'utilise la syntaxe suivante :
//

var p = document.getElementById("MonParagraphe");
console.log(p);
function chgclr(){
    p.style.color = "#990000"
}

p.addEventListener('click', chgclr);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// var maform      = document.createElement("form");
var moninput    = document.createElement("input");

moninput.type           = "text";
moninput.id             = "MonInput";
moninput.placeholder    = "Enter text here..."

moninput.setAttribute("class" , "setAttributeClass");

document.body.appendChild(moninput);

function mess(){
    console.log("I know that you have entered : " + moninput.value);
}  
moninput.addEventListener('input', mess);






