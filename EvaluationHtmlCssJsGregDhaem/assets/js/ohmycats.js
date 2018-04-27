$(function () {
    // DOM chargé je peux procéder à mon code JQuery
    $("#choix").submit(function (e) {
        e.preventDefault(); //Désactivation du boton submit avec l'id choix
        console.log("Vérification du formulaire"); //
        var contenuSaisi = $('#contenuDuMessage');
        console.log(contenuSaisi.val()); //contenu du testarea
        

        function validcontenu(){
        var contenuReg = new RegExp('/^[a-zA-Z0-9-,\.\:\;\_\!\@\#\$\%\^&\*]{16}+$/')
        // il faut cérifier par une expression régulière que le contenu du formulaire contient au moins 16 charactères
        // par une boucle supérieur à 15 ...
        };

    })
    $('.carousel').carousel(); // Démarage du caroussel
    
});

