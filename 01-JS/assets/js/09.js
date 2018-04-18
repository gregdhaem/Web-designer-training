/*-------------------------------------------------------------------
|                       LES BOUCLES (LOOPS)
 ------------------------------------------------------------------*/

 // la boucle FOR

 for(let i = 0 ; i <= 10 ; i++){
     document.write("<p>Instruction exécutée par la boucle FOR : <strong>" + i + "</strong></p>");
 }

 document.write('<hr>');

 // la boucle WHILE

 var j = 0
 while(j <= 10) {
    document.write("<p>Instruction exécutée par la boucle WHILE : <strong>" + j + "</strong></p>");
    // Attention à ne pas oublier l'incrémentation
    j++;
 }

 /* -----------------------------
            EXERCICE
------------------------------ */
document.write('<hr>');
// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

console.log('__ARRAY.length____________________')
var z = Prenoms.length; // Déclaré à l'extérieur

for(let i = 0 ; i < z ; i++){
    document.write("Les prénoms du tableau de l'exercice sont : <strong>" + Prenoms[i] + "</strong><br><br>");
}

for(let k = 0 ; k < Prenoms.length ; k++){
    console.log("Les prénoms du tableau de l'exercice sont : " + Prenoms[k]);
}
console.log('__Avec boucle while______________')
var x = 0; // Avec boucle while
while(x < Prenoms.length) {
    console.log(Prenoms[x]);
    x++;
}
document.write('<hr>');
console.log('__Boucle forEach__________________')
// Boucle forEach
Prenoms.forEach(displayName);

function displayName(value, increment){
    console.log("Position n° " + increment + ' : ' + value);
}
console.log('__Boucle for of____________________')
// Boucle for of Nouvelle boucle efficace !
for(apostle of Prenoms){
    console.log(apostle);
}
/**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  */

// Boucle inverse
console.log('__Boucle for inverse____________________')
for(let r = Prenoms.length ; r--;) {
    console.log(Prenoms[r])
}

/**
https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/
 */