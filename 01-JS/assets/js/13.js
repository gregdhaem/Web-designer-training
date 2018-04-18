  /*-----------------------------------------------------*\
 /                      Le DOM                             \
/___________________________________________________________\
    |                                                   | 
    |       Interface de dev. en JS pour html.          |
    |       Accéder ou modifier mon html                |
    |                                                   |
    |       l'Objet document : point d'entrée vers      |
    |       contenu html.                               |
    |                                                   |
    |       Chaque page du navigateur a un objet        |
    |       document.                                   |
    |___________________________________________________|
    */
    /**
     *   Comment faire pour récupérer les différentes
     *   informations de la page html ?
     * 
     *   1-  document.getElementById
     *       permet de récupérer un élément html à 
     *       partir de son ientifiant unique : ID
     */

     var bonjour = document.getElementById("bonjour");
     console.log(bonjour);
     console.log("-------------------------------------")
     /**   
     *    2-  document.getElementsByClassName
     *        permet de récupérer un ou plusieurs 
     *        éléments html à partir de leur classe
     */

     var contenu = document.getElementsByClassName("contenu");
     console.log(contenu);
     console.log("-------------------------------------")
     // Renvoi un tableau JS !!!

     /**   
     *    3-  document.getElementsByTagName
     *        permet de récupérer un ou plusieurs 
     *        éléments html à partir de leur nom de balise
     */

     var balise = document.getElementsByTagName("span");
     console.log(balise)
     console.log("-------------------------------------")
