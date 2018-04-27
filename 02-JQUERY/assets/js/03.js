/*

LE CHAINAGE DE METHODE 
*/
$(function(){
    console.log($('div'));
    // Je souhaite cacher toutes les div de ma classe
    $('div').hide('slow', function(){
        // Une fois que la méthode hide() est terminée, 
        // mon alerte est exécutée
        // La fonction s'exécute à chaque élément sélectionné
        // (Ici deux div)
        // alert('Fin du Hide');
        // $('div').css('background', 'pink');
        // $('div').css('color', 'purple');
        // $('div').show('slow');

        $('p').hide(1000).css({
            'color'             : 'crimson',
            'font-size'         : '25px',
            'text-align-last'   : 'right'
        }).delay(2500).show(500);


    });// Fin du hide
    $('div').show('slow');


});// Fin de $()