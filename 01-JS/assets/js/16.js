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

l(membres);

var userInputPseudo = document.getElementById("pseudo");

l(userInputPseudo);

var pseudArray = false;
function checkUserInputPseudoData(){
    for( i = 0 ; i < membres.length ; i++ ){
        if (membres.pseudo === userInputPseudo){
            pseudoArray = true;
            // Bonjour
            
            document.getElementsByClassName("pseudoError").style.display = "initial";
            
            break;
        }
    }
}

userInputPseudo.addEventListener('input', checkUserInputPseudoData);

if( pseudoArray = false ){
    document.getElementById("Bienvenu").innerHTML = '"Bienvenu" : Bonjour ' + userInputPseudo;
}


function mess(){
    console.log(userInputPseudo.value);
}
userInputPseudo.addEventListener("input", mess);