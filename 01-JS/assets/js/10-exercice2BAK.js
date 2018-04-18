/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var students = [
    
        {
            prenom  : "hughes",
            nom     : "Liegeard",
            matieres : {
                fra         :   {
                    nom     : "Français",
                    note    : 12
                },
                math        :   {
                    nom     : "Mathématique",
                    note    : 19
                },
                phys        :   {
                    nom     : "Physique",
                    note    : 4
                },
                inf         :   {
                    nom     : "Informatique",
                    note    : 19.5
                },
            },
        },
        {
            prenom  : "Greg",
            nom     : "D'haem",
            matieres : {
                fra         :   {
                    nom     : "Français",
                    note    : 3
                },
                math        :   {
                    nom     : "Mathématique",
                    note    : 2
                },
                phys        :   {
                    nom     : "Physique",
                    note    : 1
                },
                ang         :   {
                    nom     : "Anglais",
                    note    : 21
                },
            },
        },
        {
            prenom  : "John",
            nom     : "Doe",
            matieres : {
                fra         :   {
                    nom     : "Français",
                    note    : 18
                },
                math        :   {
                    nom     : "Mathématique",
                    note    : 17
                },
                phys        :   {
                    nom     : "Physique",
                    note    : 15
                },
                esp         :   {
                    nom     : "Espagnol",
                    note    : 16
                },
            },
        },
        {
            prenom  : "Janette",
            nom     : "Doe",
            matieres : {
                fra         :   {
                    nom     : "Français",
                    note    : 18
                },
                math        :   { 
                    nom     : "Mathématique",
                    note    : 17
                },
                phys        :   {
                    nom     : "Physique",
                    note    : 15
                },
                esp         :   {
                    nom     : "Espagnol",
                    note    : 16
                },
            },
        },
        {
            prenom  : "Johny",
            nom     : "Begood",
            matieres : {
                fra         :   {
                    nom     : "Français",
                    note    : 8
                },
                math        :   {
                    nom     : "Mathématique",
                    note    : 7
                },
                phys        :   {
                    nom     : "Physique",
                    note    : 5
                },
                eps         :   {
                    nom     : "E.P.S.",
                    note    : 16
                },
                mus         :   {
                    nom     : "Musique",
                    note    : 20
                },
            },
        }
    
    
];

console.log(students.length);
console.log(students);
