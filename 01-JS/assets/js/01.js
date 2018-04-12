// alert('WOW ! Tu es toujours avec moi !')

// Deux slash pour faire un commentaire uniligne.

/* 
    Ici, je peux le faire comme en css 
    pour le multiligne

    CTRL + : ou ALT + SHIFT + A
*/

// -- Declaration de variable
var Prenom;
// -- Affetation d'une valeur à la variable
Prenom = "Gregory";
// -- Affichage de la valeur dans la console
console.log('---');
console.log(Prenom);

/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/
// -- typeof permet de connaitre le type de la variable 
console.log(typeof Prenom);
// -- Declaration d'un nombre
var Age = 40;
// -- Affichage de la valeur dans la console
console.log('---');
console.log(Age);
// -- Affichage du type de la variable dans la console
console.log(typeof Age);


/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------
| Les variables déclarées directement à la racine du 
| fichier js sont appellés variables GLOBALES
| 
| Elles sont disponibles dans l'ensamble de votre do-
| -cument, y compris dans les fonctions.
|
| ###
|
| Les variables déclarées à l'intérieur d'une fonction 
| sont appelées des variables LOCALES.
|
| Elles sont disponibles uniquement dans le context de 
| la fonction ou du bloc qui les contient.
|
| Depuis ECMA 6 vous pouvez déclarer une variable 
| avec le mot clef "let". (const)
|
| Alors elle sera lors accéssible uniquement dans le bloc
| dans lequel elle est contenue. C.a.d. 
|
| Si elle est déclarée dans une condition, elle ne sera
| disponible que dans le bloc de la conditiion.
*/

// -- Les variables de type float
var uneDecimal = -2.365;
console.log('---');
console.log("uneDecimal");
console.log(uneDecimal);
console.log(typeof uneDecimal);

var totoenvelo = true;// false ou true
console.log('---');
console.log("totoenvelo");
console.log(totoenvelo);
console.log(typeof totoenvelo);

// Les constantes

/* 
La déclarations CONST permet de créer une constante 
uniquement en lecture. Sa valeur ne pourra pas être
modifiée par des réaffectations ultérieures. Une 
constante ne peut pas être déclarée à nouveau.

Généralement, par convention sont en majuscule.

Depuis ECMA 6 on recommande l'utilisation des constan-
-tes plutôt que var ou let s'il n'y a pas de modif
de valeur.
*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql"

console.log('---');
console.log(HOST);
console.log(USER);
console.log(PASSWORD);
// -- Je ne peux pas faire cela

// const USER = "greg";

// Uncaught SyntaxError: Identifier 'USER' has already 
// been declared        01.js:99

/*-------------------------------------------------- 
| ~ ~ ~ ~ ~       LA MINUTE INFO       ~ ~ ~ ~ ~ ~ |
---------------------------------------------------
Au fur et à mesure que l'on affecte des valeuirs à
une variable, celle-ci prend la nouvelle valeur et
le nouveau type.

En JS ECMA Script ; les variables sont auto-typées.

Pour convertir une variable de type number en string
et inversement j'utilise les fonctions natives de JS. 
*/

var unNombre = "24";
console.log('---');
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseInt(unNombre);
console.log('---');
console.log(unNombre);
console.log(typeof unNombre);

// Je réaffecte une valeur à ma variable

unNombre = "12.5478"

console.log('---');
console.log(unNombre);
console.log(typeof unNombre);
unNombre = parseFloat(unNombre);
console.log('avec parseFloat()');
console.log(unNombre);
console.log(typeof unNombre);

// Convertir un nombre en stroing avec toString()

unNombre = 10;
var monNombreEnString = unNombre.toString();
console.log('---');
console.log(unNombre);
console.log(typeof unNombre);
console.log(monNombreEnString);
console.log(typeof monNombreEnString);

