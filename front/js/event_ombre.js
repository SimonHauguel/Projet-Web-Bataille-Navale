// radar torpille bombe
let arme_selectionnée = "bombe";


let event_ombre = (function() {

    let id = this.getAttribute("id");
    let unite = id[1];
    id = parseInt(id,10);

    //si bon choix d'arme
    if(arme_selectionnée == "missile"){

        this.style.backgroundColor = "#ffe6b3";
        this.style.opacity = "0.5";
    }
    
    if (arme_selectionnée == "bombe"){

        this.style.backgroundColor = "#ffe6b3";
        if (id > 9){
            let newid = id-10;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
        }
    
        if (id < 90){
            let newid = id+10;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
        }
    
        if (unite > 0 && id > 0){
            let newid = id-1;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
        }
    
        if (unite < 9 && id !=9){
            let newid = id+1;
            let element = document.getElementById(newid);
            element.style.backgroundColor = "#ffe6b3";
        }
    }
    
    
    
});

let event_ombre_fin = (function(){
    let id = this.getAttribute("id");
    let unite = id[1];
    id = parseInt(id,10);

    this.style.backgroundColor = "";
    if (id > 9){
        let newid = id-10;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    if (id < 90){
        let newid = id+10;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    if (unite > 0 && id > 0){
        let newid = id-1;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }

    if (unite < 9 && id !=9){
        let newid = id+1;
        let element = document.getElementById(newid);
        element.style.backgroundColor = "";
    }
    
})