/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créer au minimum 5 étudiants ****

 II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        moyenne : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14,
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        moyenne : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6,
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    },
];

// var etudiant = 0; 
// var moy = 0;
// while(etudiant < PremierTrimestre.length) {
//     document.write("<ol>" + PremierTrimestre[etudiant].prenom + " " + PremierTrimestre[etudiant].nom + "</ol>");
//     // while(moy < PremierTrimestre.moyenne.length){
//     //     document.write("<li>" + PremierTrimestre[etudiant].moyenne + "</li>" )
//     //     moy++;
//     // }
//     etudiant++;
// }

// console.log(PremierTrimestre[0].moyenne);

function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

// afficher la liste des étudiants 
w('<ol>');
for (let i = 0 ; i < PremierTrimestre.length ; i++){

    let etudiant = PremierTrimestre[i];
    l(etudiant);
    var sommeDesNotes = 0, nombreDeMatiere = 0;
            
    w('<li>');
        w(etudiant.nom + ' ' + etudiant.prenom);
        w('<ul>');
        // Afficher les matières d'un étudiant
        for(let matiere in etudiant.moyenne){
            l(matiere);
            w('<li>');
                w(matiere + ' : ' + etudiant.moyenne[matiere]);
            w('</li>');
            sommeDesNotes += etudiant.moyenne[matiere];
            nombreDeMatiere++;
        }        
            l(nombreDeMatiere);
            l(sommeDesNotes);
            w('<li>');
                w('<strong>Moyenne Générale : </strong>' + (sommeDesNotes / nombreDeMatiere).toFixed(2));
            w('</li>');
        w('</ul>');
    w('</li><br>');
}
w('</ol>');