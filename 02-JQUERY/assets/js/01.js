// La disponiblité du DOM
//
//


// A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescense 
// de ma page HTML est complétement chargé ; je peux commencer à utiliser 
// JQuery.

// Je vais mettre l'ensemble de mon code dans une fonction, cette fonction 
// sera appelé automatiquement par JQuery lorsque le DOM sera entièrement 
// défini.

// 3 façons de faire

// 1-
jQuery(document).ready(function () {
    // DOM chargé je peux procéder à mon code JQuery
});

// 2-
$(document).ready(function () {
    // DOM chargé je peux procéder à mon code JQuery
});

// 3-
$(function () {
    // DOM chargé je peux procéder à mon code JQuery
});

// 3-bis
$(() => {
    alert("Bienvenue dans ce cours jQuery !");
    // En JS
    document.getElementById('TexteEnJavaScript').innerHTML = ("<strong>Mon text en Java Script</strong>");
    // En JQ les sélecteurs sont les mêmes qu'en css
    $('#TexteEnJquery').html("<strong>Mon text en JQ</strong>");

});