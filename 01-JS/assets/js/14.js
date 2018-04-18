/**
 * 
 *          LA MANIPULATION DES CONTENUS
 * 
 */
// function l(e) {
//     console.log(e)
// }
// Nouvelle Syntaxe ECMA 6 avec les fonctions fléchées
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

l = e => console.log(e);

// Pour récupérer le lien google
var google = document.getElementById("google");
l(google);

// je souhaite récupérer le lien vers lequel pointe la balise
l("####################")

l(google.href);
l("####################")

l(google.id);
l("####################")

l(google.className);
l("####################")

l(google.textContent);
l("####################")

google.textContent = "Mon lien vers Google que j'ai modifié moi même en utilisant xyz.textContent !";

google.href = "https://www.google.it";


/*

    Ajouter un élément dans ma page

*/

// docuement.createElement() pour générer un nouvel élément
// modifiable ensuite avec les méthodes ci-dessus
//
// NB : Ce nouvel élément est placé en mémoire...
// Définition
var newspan = document.createElement("span");
// Avec une ID
newspan.id = "MonNewSpan";
// Avec du contenu
newspan.textContent = " Mon nouveau Text span en JS ";
// Insérer dans la page avec ID google
google.appendChild(newspan);

/* -------------------------------
        EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
<h1><a>TITRE</a></h1>
-------------------------------- */

// Création de l'élément h1
var monH1 = document.createElement("h1");

// Création de l'élément a
var a = document.createElement('a');

// Ajout du titre 
a.textContent = "Titre de mon article";

// Ajout du href
a.href = "https://www.youtube.com";

// Ajout de a dans h1
monH1.appendChild(a);

// Ajout de h1 a dans le body
document.body.appendChild(monH1);

// Changement du style couleur
a.style.color = "#123456";

// Changement du soulignage 
a.style.textDecoration = "none";

