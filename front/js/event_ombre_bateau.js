let bateau_selectionne = "sous-marrin";
let direction = "horizontal";

let event_ombre_bateau = (function() {

    let id = this.getAttribute("id");
    let unite = id[1];
    if (unite == undefined){
        unite = id[0];
    }

    let dizaine = id[0];
    if (id[1] == undefined){
        dizaine = 0;
    }
    id = parseInt(id,10);
    unite = parseInt(unite,10);
    dizaine = parseInt(dizaine,10);

    //si bon choix d'arme
    if(bateau_selectionne == "contre-torpilleur" || bateau_selectionne == "sous-marrin"){

        this.style.backgroundColor = "#ffe6b3";
        this.style.opacity = "0.5";

        if (direction == "horizontal"){
            
            //changement couleur case gauche
            if (unite > 0 ){
                //let newid = id-1;
                let element =  document.getElementById("friendly").firstChild.children[dizaine].children[unite-1];
                element.style.backgroundColor = "#ffe6b3";
                element.style.opacity = "0.5";
            }
            //changement couleur case droite
            if (unite < 9 ){
                let element =  document.getElementById("friendly").firstChild.children[dizaine].children[unite+1];
                element.style.backgroundColor = "#ffe6b3";
                element.style.opacity = "0.5";
            }
        }
        else {
            //changement couleur case dessus
            if (dizaine > 0 ){
                let element =  document.getElementById("friendly").firstChild.children[dizaine-1].children[unite];
                element.style.backgroundColor = "#ffe6b3";
                element.style.opacity = "0.5";
            }
            //changement couleur case en dessous
            if (dizaine < 9 ){
                let element =  document.getElementById("friendly").firstChild.children[dizaine+1].children[unite];
                element.style.backgroundColor = "#ffe6b3";
                element.style.opacity = "0.5";
            }

        }
    }
    
    //si bon choix d'arme
    if (bateau_selectionne == "torpilleur"){

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

    
    
});

//fonction opposée à event_ombre
//annule les modifications de couleur de fond des cases autours de la case
let event_ombre_bateau_fin = (function(){
    let id = this.getAttribute("id");
    let unite = id[1];
    if (unite == undefined){
        unite = id[0];
    }

    let dizaine = id[0];
    if (id[1] == undefined){
        dizaine = 0;
    }
    id = parseInt(id,10);
    unite = parseInt(unite,10);
    dizaine = parseInt(dizaine,10);

    // case où l'on est
    this.style.backgroundColor = "";

    //case au dessus
    //changement couleur case dessus
    if (dizaine > 0 ){
        let element =  document.getElementById("friendly").firstChild.children[dizaine-1].children[unite];
        element.style.backgroundColor = "";
    }

    //changement couleur case en dessous
    if (dizaine < 9 ){
        let element =  document.getElementById("friendly").firstChild.children[dizaine+1].children[unite];
        element.style.backgroundColor = "";
    }

    //changement couleur case gauche
    if (unite > 0 ){
        //let newid = id-1;
        let element =  document.getElementById("friendly").firstChild.children[dizaine].children[unite-1];
        element.style.backgroundColor = "";
    }

    //changement couleur case droite
    if (unite < 9 ){
        let element =  document.getElementById("friendly").firstChild.children[dizaine].children[unite+1];
        element.style.backgroundColor = "";
    }
    
})