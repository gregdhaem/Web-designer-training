/**
 * Les sélecteurs JQUERY
 */

 // Format par coeur ! : $('selecteur')
 // En Jquery tous les selecteurs CSS sont disponibles...
 l = e=> console.log(e);
 $(function() {
    
    l(document.getElementsByTagName('span'));
    l($('span'));
    l('____');


 // Sélectionner le menu grâce à son ID
    l(document.getElementById('menu'));
    l($('#menu'));
    l('____');

// Sélectionner par rapport à sa class
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));
    l('____');

// Sélectionner un attribut
    l($('[href="#"]'));
    l('____');
});

                             