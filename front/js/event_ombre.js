// variable globale qui change en fonction de la dernière arme seléctionnée
let arme_selectionnée = "radar";


// event qui affiche "l'ombre" du prochain coup
let event_ombre = (function() {

    let id = this.getAttribute("id");
    let unite = id[1];
    if (unite == undefined){
        unite = id[0];
    }
    id = parseInt(id,10);

    //si bon choix d'arme
    if(arme_selectionnée == "missile"){

        this.style.backgroundColor = "#ffe6b3";
        this.style.opacity = "0.5";
    }
    
    //si bon choix d'arme
    if (arme_selectionnée == "bombe"){

        //changement couleur case de fond
        this.style.backgroundColor = "#ffe6b3";
        this.style.opacity = "0.5";

        //changement couleur case au dessus
        if (id > 9){
            let newid = id-10;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    
        //changement couleur case en dessous
        if (id < 90){
            let newid = id+10;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    
        //changement couleur case gauche
        if ((unite > 0 || (id > 0 && id < 10))){
            let newid = id-1;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    
        //changement couleur case droite
        if (unite < 9  ||  id <9){
            let newid = id+1;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }

        
    }

    //si bon choix d'arme
    if (arme_selectionnée == "radar"){

        //changement couleur case de fond
        this.style.backgroundColor = "#ffe6b3";
        this.style.opacity = "0.5";

        //changement couleur case au dessus
        if (id > 9){
            let newid = id-10;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    
        //changement couleur case en dessous
        if (id < 90){
            let newid = id+10;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    
        //changement couleur case gauche
        if (unite > 0 || (id > 0 && id < 10)){
            let newid = id-1;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    
        //changement couleur case droite
        if (unite < 9  ||  id <9){
            let newid = id+1;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }

        //changement couleur case en haut à droite
        if (unite < 9 && id > 9){
            let newid = id-9;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }

        //changement couleur case en haut à gauche
        if (unite > 0 && id > 9){
            let newid = id-11;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }

        //changement couleur case en bas à gauche
        if (unite > 0 && id < 90){
            let newid = id+9;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }

        //changement couleur case en bas à droite
        if (unite < 9 && id < 90){
            let newid = id+11;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
            element.style.opacity = "0.5";
        }
    }
    
    
    
});

//fonction opposée à event_ombre
//annule les modifications de couleur de fond des cases autours de la case
let event_ombre_fin = (function(){
    let id = this.getAttribute("id");
    let unite = id[1];
    id = parseInt(id,10);

    // case où l'on est
    this.style.backgroundColor = "";

    //case au dessus
    if (id > 9){
        let newid = id-10;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //case en dessous
    if (id < 90){
        let newid = id+10;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //case à gauche
    if ((unite > 0 || (id > 0 && id < 10))){
        let newid = id-1;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //case à droite
    if (unite < 9  ||  id < 9){
        let newid = id+1;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //changement couleur case en haut à droite
    if (unite < 9 && id > 9){
        let newid = id-9;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //changement couleur case en haut à gauche
    if (unite > 0 && id > 9){
        let newid = id-11;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //changement couleur case en bas à gauche
    if ((unite > 0 && id < 90) || (unite == undefined )){
        let newid = id+9;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    //changement couleur case en bas à droite
    if ((unite < 9 && id < 90) || (unite == undefined)){
        let newid = id+11;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }
    
})