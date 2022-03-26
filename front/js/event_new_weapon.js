// variable globale qui change en fonction de la dernière arme selectionnée
let arme_selectionnée = "missile";

let new_weapon = (function(){

    arme_selectionnée = this.id;
})