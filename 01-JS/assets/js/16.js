var membres = [{
    'pseudo': 'Hugo',
    'age': 26,
    'email': 'wf3@hl-media.fr',
    'mdp': 'wf3'
},
{
    'pseudo': 'Rodrigue',
    'age': 56,
    'email': 'rodrigue@hl-media.fr',
    'mdp': 'roro'
},
{
    'pseudo': 'James',
    'age': 78,
    'email': 'james@hl-media.fr',
    'mdp': 'james8862'
},
{
    'pseudo': 'Emilio',
    'age': 18,
    'email': 'milio@hl-media.fr',
    'mdp': 'milioDu62'
}
];
l = e => console.log(e);
// 1 vérifier la saisie utilisateur du pseudo avec un eventlistener
// quel event listener ?
// mettre à jour le display si l'utilisateur vient de l'étape 1-2
// L'étape 3 se déroule en parallele
var pseudArray = false;
function checkUserInputPseudoData(){
    for( i = 0 ; i < membres.length ; i++ ){
        if (membres.pseudo !== userInputPseudo){
            pseudoArray = true;          
            break;
        } else {
            var x = document.getElementsByClassName("pseudoError");
            x[0].style.display = "block";
        }
    }
}
var userInputPseudo = document.getElementById("pseudo").value;
l(userInputPseudo);
userInputPseudo[0].addEventListener('change', checkUserInputPseudoData);

// function checkUserInputPseudoData() 

// var pseudArray = false;
// function checkUserInputPseudoData(){
//     for( i = 0 ; i < membres.length ; i++ ){
//         if (membres.pseudo !== userInputPseudo){
//             pseudoArray = true;          
//             break;
//         } else {
//             var x = document.getElementsByClassName("pseudoError");
//             x[0].style.display = "block";
//         }
//     }
// }


// 1-1 si le pseudo n'est pas dans la base de données (array) l'utilisateur 
// peut passer à l'étape 2


// 1-2 le pseudo est déjà présent dans l'array alors modifier le style de div 
// class pseudoError : display = block retourner à l'étape 1


// 2 vérifier la saisie utilisateur de l'age avec un eventlistener
// quel event listener ?
// mettre à jour le display si l'utilisateur vient de l'étape 2-2


// 2-1 Si l'age est supérieur > à 18 lors de la saisie passer à l'étape 
// suivante : étape 3


// 2-2 si l'age est < à 18 alors modifier le style de la div class ageError : 
// retourner à l'étape 2 display = block
var inputAge = document.getElementById("age").value;
    if(inputAge < 22){
        var xx = document.getElementsByClassName("ageError");
        console.log(xx);
        var yy = xx.length;
        console.log(yy);
        xx[0].style.display = "block";
    }

// 3 en parallele à l'étape 1 le pseudo entré par l'utilisateur est affiché
// en temps réel dans le titre id Bienvenue


// 4-1 Ajouter le nouveau pseudo dans la base de données avec son age, email et
// mot de passe

// 4-2 modifier l'action de la form id InscriptionForm par une fonction qui liste 
// le contenu de la base de données : pseudo et age seulement
// liste ul li à ajouter dans le body































// l(membres);

// var userInputPseudo = document.getElementById("pseudo").value;

// l(userInputPseudo);

// var pseudArray = false;
// function checkUserInputPseudoData(){
//     for( i = 0 ; i < membres.length ; i++ ){
//         if (membres.pseudo !== userInputPseudo){
//             pseudoArray = true;
//             // Bonjour
            
//             // document.getElementsByClassName("pseudoError").style.display = "initial";
            
//             break;
//         }
//     }
// }



// if( pseudoArray = false ){
//     document.getElementById("Bienvenue").innerHTML = '"Bienvenue" : Bonjour ' + userInputPseudo;
// }


