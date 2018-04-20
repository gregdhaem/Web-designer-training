// $(function(){
//     $('[type="text"]').on('input');
//     $('[type="submit"]').click(function() {
//     $('form').hide(1000); //to hide the form
//     $('body').add('p').text("Bonjour " + $('[type="text"]').val()); //to add the paragraph text
//     });
// });

// 

$('#MonFormulaire').on('submit', function(e) {

    // -- Permet d'annuler l'action par défaut du submit (La redirection HTML)
    e.preventDefault();
    
    // -- Version Courte
    // console.log($(this));

    $(this).replaceWith('<p>Bonjour ' + $('#nomcomplet').val() + ' !</p>');

    // -- Version Longue
    $('#MonFormulaire').hide();

    // -- Exemple 1
    // document.createElement('p')

    // $('<p>').append('Bonjour ' + $('#nomcomplet').val() + ' !').appendTo($('body'))

    // -- Exemple 2
    // $('<p>Bonjour ' + $('#nomcomplet').val() + ' !</p>').appendTo('body');

});

    
   



