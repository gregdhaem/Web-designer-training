// VARIABLES
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
var pseudo          = document.getElementById('pseudo');
var age             = document.getElementById('age');
var email           = document.getElementById('email');
var mdp             = document.getElementById('mdp');
var submit          = document.getElementById('submit');
var bienvenue       = document.getElementById('Bienvenue');
var inscriptionform = document.getElementById('InscriptionForm');

var pseudoerror = document.getElementsByClassName('pseudoError')[0];
var ageerror    = document.getElementsByClassName('ageError')[0];

// ETAPE 1 ET 3

pseudo.addEventListener('input', function(){ // function anonyme (sans nom)
    //console.log(pseudo.value); // affiche l'édition de l'utilisateur
    for (let i = 0 ; i < membres.length ; i++){
    // console.log(membres.length);
    // console.log(membres[i]);
        if(pseudo.value === membres[i].pseudo){
            // J'affiche pseudoError (alerte)
            pseudoerror.style.display = "block";
            // console.log(pseudoerror.style.display);
            submit.disabled = true;
            bienvenue.textContent = ' ';
            break;
        } else {
            submit.disabled = false;
            pseudoerror.style.display = "none";
            bienvenue.textContent = 'Bienvenue ' + pseudo.value + ' !';
        }
    }
});

// ETAPE 2

age.addEventListener('change', function (){
    if(age.value < 18){
        ageerror.style.display = 'block';
        submit.disabled = true;
    } else {
        ageerror.style.display = 'none';
        submit.disabled = false;       
    }
});

// ETAPE 4
// Lors de la soumission du formulaire; ma fonction anonyme dsera exécutée
// et recevra de js en paramètre "event" l'événement submit
inscriptionform.addEventListener('submit', function(event){ 
    // function 
    console.log(event);
    event.preventDefault();

    //créer un objet membre à partir 

    let newMembre = {
        pseudo      : pseudo.value,
        age         : age.value,
        email       : email.value,
        mdp         : mdp.value
    };

    console.log(newMembre);
    membres.push(newMembre);
    console.log(membres);

    // ETAPE 4 B

    var p = document.createElement('p');
    p.innerHTML = "Merci " + pseudo.value + "! <br><strong>Tu es maintenant inscrit.</strong><br><br><u>Voici la liste de nos membres :</u>";

    document.body.appendChild(p);

    // -- Générer la liste des membres
    var ul = document.createElement('ul');
    for(let i = 0 ; i < membres.length ; i++) {

    let li = document.createElement('li');
    let liste = membres[i].pseudo + " : " + membres[i].age + " ans";

    li.textContent = liste;
    ul.appendChild(li);
    }

    document.body.appendChild(ul);
        

});



























