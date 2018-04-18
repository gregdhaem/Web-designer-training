/* 

Aujourd'hui 16/04/2018, sont présents : 12 apprenants.

*/

var DebutDePhrase = "Aujourd'hui ";
var DateDuJour    = new Date();
var SuiteDePhrase = ", sont présents : ";
var NbApprenants  = 12;
var FinDePhrase   = " apprenants.<br>";

/* 

Nous souhaitons afficher tout en un morceau

*/

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NbApprenants + FinDePhrase);


var phrase1 = "Je m'appelle ";
var phrase2 = "Greg et j'ai ";
var age     = 2857;
var phrase3 = " ans !";

document.write("<p>" + phrase1 +  phrase2 + "<strong>" + age + phrase3 + "</p>" + "<br>")