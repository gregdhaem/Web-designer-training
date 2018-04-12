// -- Déclarer un tableau indexé

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Rahma";
monTableau[1] = "Freddy";
monTableau[2] = "Ousman";

// -- Affiche toutes les données
console.log(monTableau);

// -- Affiche l'index 1 : Freddy
console.log(monTableau[1]);

var  nosPrenoms = ["Salim", "Greg", "Cheffia", "Glenn", "Julien"]
console.log(nosPrenoms);

// -- Déclarer et affecter des valeurs à un objet.
// Pas de tableaux associatifs en JavaScript

var Coordonnee = {
    prenom  : "Gregory",
    nom     : "D'Haem",
    age     : 57
};

console.clear();
console.log('---');
console.log(Coordonnee);
console.log(Coordonnee["prenom"]);
console.log(Coordonnee.prenom);
console.log(Coordonnee.nom);
console.log(Coordonnee.nom + ' ' + Coordonnee.prenom + ' ' + Coordonnee.age);

// -- Je vais créer deux tableaux indexés

var listeDePrenoms = ["Ousmane", "Cheffia", "Hugo"];
var listeDeNoms = ["MAMA", "BANALLAL", "LIEGEARD"];
var annuaire = [listeDePrenoms, listeDeNoms];
console.log(annuaire);

// document.write( annuaire[0][1] );
// document.write( ' ' )
// document.write( annuaire[1][1] );

/* -------------------------------------------------\
|                    EXERCICE :-)                   |   
|   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
|   Créez un Tableau à 2 dimensions appelé          |
|   "AnnuaireDesStagiaires" qui contiendra          |
|   toutes les coordoonnées pour chaque stagiaire.  |
|                                                   |
|   Ex. Nom, Prénom, Tel                            |
\------------------------------------------------- */
var nom = ["MAMA", "CANTAT", "SALIM", "PETERSON"];
var prenom = ["Ousmane", "Pascal", "Rachma", "Glenn"];
var tel = ["0662453558", "0612118277", "07AABBCCDD", "06AABBCCDD"];
var AnnuaireDesStagiaires = [nom, prenom, tel];
console.clear();
// console.log('---');
// console.log(AnnuaireDesStagiaires);
// console.log( AnnuaireDesStagiaires[0][1]);
// console.log( AnnuaireDesStagiaires[1][1]);
// console.log( AnnuaireDesStagiaires[2][1]);
// document.write( AnnuaireDesStagiaires[0][1] );
// document.write( ' ' )
// document.write( AnnuaireDesStagiaires[1][1] );
// document.write( ' ' )
// document.write( AnnuaireDesStagiaires[2][1] );

// var AnnuaireDesStagiaires = [
//     { prenom : "Hugo", nom : "LIEGEARD", tel : "0783 97 15 15" },    
//     { prenom : "Salim", nom : "SOUMARE", tel : "XXXX XX XX XX" },
//     { prenom : "Pransun", nom : "BALASUBRAMANIAM", tel : "XXXX XX XX XX" },
// ];

// console.log(AnnuaireDesStagiaires);

// -- Exemple 3D

var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Laura",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "lauradhaem@gmail.com",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "04 01 02 03 04",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "Lyon",
                cp      :   "69006",
                region  :   "Rhone Alpes",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);
console.log(Contacts[0].coordonnees.tel.port.prive);
console.log(Contacts[3].nom);
console.log(Contacts[3].prenom);
console.log(Contacts[3].coordonnees.adresse.cp);
document.write(Date());
document.writeln( ' toto');
document.write(Contacts[3].coordonnees.tel.port.prive);
document.write( ' ' );
document.write(Contacts[3].nom);
document.write( ' ' );
document.write(Contacts[3].prenom);
document.write( ' ' );
document.write(Contacts[3].coordonnees.adresse.cp);


// console.log(Contacts[0].coordonnees.adresse.pays.nom);

var Couleur = ['red', 'yellow', 'blue']

/* Si je souhaite ajouter un élément à mon tableau, je fais 
appel à la fonction push() qui me renvoie le nombre 
d'éléments*/

console.clear();
console.log(Couleur);
console.log(Couleur.length);
var nbElementsDeMonTableau = Couleur.push('Orange');
console.log(Couleur);
console.log(nbElementsDeMonTableau);

/* NB : La fonction unshift() permet d'ajouter un  ou plusieurs
éléments au début de mon tableau et d'en récupérer  la valeur. 
Je peux accéssoirement récupérer cette valeur dans une variable.

 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
 
 */

 /* La fonction pop() me permet de supprimer un ou plusieurs 
 éléments de mon tableau et d'en récupérer la valeur. Je peux 
 accessoirement récupérer cette valeur dans une variable.
 */

//  shift() 
//  pop()
//  unshift()
//  push()

var monDernierElement = Couleur.pop();
console.log(Couleur);
console.log(monDernierElement);

/* La même chose est possible avec le premier élément avec la 
fonction shift()

NB : splice() permet de sortir des éléments du tableau.

*/