// on va definir ici les differents bateaux a l'aide de classes

class Boat{

    constructor(id , name, lenght)
    {
        this.id =id;
        this.name=name;
        this.lenght=lenght;
    }

}

// torpilleur

class torpedo extends Boat{
    constructor()
    {
        super("torpedo","torpilleur",2) ;
    }
}

class submarine extends Boat{

     constructor(){

        super("submarine","sous-marrin",3) ;
     }
}

class destroyer extends Boat{

    constructor(){

       super("destroyer","contre-torpilleur",3) ;
    }
}

class cruiser extends Boat{

    constructor(){

       super("cruiser","croiseur",4) ;
    }
}

class aircraftCarrier  extends Boat{

    constructor(){

       super("aircraft-carrier","porte avion",5) ;
    }
}