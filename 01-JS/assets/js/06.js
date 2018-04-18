/**
 * 
 * 
 *                      LES FONCTIONS
 * ****************************************************************
 * 
 *      Déclarer une fontion simple qui ne retourne aucune valeur 
*/
function Bonjour() { 
    alert("Bonjour, bosse ton JavaScript et écoute ce qu'on te dit, sale gosse ! Tu as intérêt sinon gare !");
}
/**
 * 
 *      Exécution de la fonction
 *
*/
Bonjour();
/**
 *      Déclarer une fonction qui prend des variables en paramètre
 *  @param {string} Prenom
 *  @param {string} Nom
 */

function ditBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + " </strong> comment va ?!!<p>");
}
/**
 * 
 *      Appeler une fonction avec desparamètres
 * 
 */
ditBonjour("Greg", "D'HAEM");

function add(nb1, nb2) {
    result = nb1 + nb2;
}
    document.write("l'addition de " + nb1 + " et " + nb2 + " est <strong>" + result + " </strong><br>");
    console.log("l'addition de " + nb1 + " et " + nb2 + " est <strong>" + result + "</strong><br>");


add(12, 13);
add(41.235,59.870);
add(4115645426,598713564);

function addbis(nb1, nb2) {
    return nb1 + nb2;
}
    document.write("l'addition addbis de " + nb1 + " et " + nb2 + " est <strong>" + result + " </strong><br>");
    console.log("l'addition addbis de " + nb1 + " et " + nb2 + " est <strong>" + result + "</strong><br>");

addbis(12, 13);
addbis(41.235,59.870);
addbis(4115645426,598713564);
