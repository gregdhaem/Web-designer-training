/*----------------------------------------------------
                    LES CONDITIONS
----------------------------------------------------*/

var MajoriteLegale = 18;

// if(14 >= MajoriteLegale) {
//         alert("Bienvenu sur notre site !")
//     } 
//     else {
//         alert("Va jouer aux billes !")
//     }

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

/* 
let minimumAge = 21;
let visitorAge = parseInt(prompt("How old are you please enter ? ", "<Right here now please>"));

if (visitorAge >= minimumAge) {
        alert("Welcome to the Victoria's Secret web site !");
        document.location.href="https://www.victoriassecret.com/";
    }
    else {
        alert ("You are not welcomed here. Go to Disney.com... ");
        document.location.href="http://www.disney.com";
    }
 */

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */
 
// -- 1. Déclarer la Majorité Légale
// var MajoriteLegaleFR = 18;

// // -- 2. Créer une fonction pour vérifier son age.

// /**
//  * Retourne VRAI si majeur.
//  * FAUX sinon.
//  * @param {Number} age 
//  */
// function estMajeur(age) {
//     if(age >= MajoriteLegaleFR) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // -- 3. Je demande à l'utilisateur son age
// var ageSaisieParMonUtilisateur = parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));

// // -- 4. Vérification de l'age du visiteur....
// if( estMajeur(ageSaisieParMonUtilisateur) ) {

//     // -- 4a. J'affiche un message de bienvenue
//     alert('Bienvenue sur mon site internet réservé aux majeurs...');
//     document.write("0_0 !!!");

// } else {
    
//     // -- 4b. J'effectue une redirection
//     document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

// }


/**
 * 
 * LES OPERATEURS DE COMPARAISON
 * 
 * " == " signifie égal à et permet de vérifier que deux variables sont identiques.
 * 
 * " === " signifie strictement égal. Il compare la valeur et le type !
 * 
 * " != " différent de.
 * 
 * " !== " strictement différent de.
 * 
 * 
 */

 /* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;
email = "wf3@hl-media.fr";
mdp = "wf3";



/**
 * 1 prompt mail
 * 2 prompt mdp
 * 3a verification du mail
 * 3a1 si erreur prévenir
 * sinon
 * 3b verification du mdp
 * 3b1 si erreur prévenir
 * sinon 
 * 4 Message de bienvenue

 */
var mailUserEntry   = prompt("Enter Email adress ", "<Valid mail>")
var passwdUserEntry = prompt("Enter Password ", "<Valid Psswd>")

function checkEmailPasswd(emailDeLaFonction, mdpDeLaFonction){
    if((email != mailUserEntry) && (mdp != passwdUserEntry)){
        return true;
        } else {
        return false;
    }
}

if (checkEmailPasswd(mailUserEntry, passwdUserEntry)){
    alert("try again");  
} else {
    alert("Welcome");
}





