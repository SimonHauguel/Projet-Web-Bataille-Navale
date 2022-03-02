import { EventGame, Weapon, BuildContextEvent } from "events";

const SIZE = 10;

const newState = () => {
    const makeSub = () => new Array(10).fill(undefined).map(() => Math.random() > 0.5);
    return new Array(10).fill(undefined).map(makeSub);
}

const Coordonate = (x, y) => {
    let xC = x
    let yC = y
    return {
        getX : () => xC,
        getY : () => yC,
        setX : nx => xC = nx,
        setY : ny => yC = ny,
    }
}

const toCoordonate = n => Coordonate(
        Math.floor(n / 10),
        Math.floor(n % 10)
    )


class FrontGame {

    constructor(name){
        this.name = name;
        this.ownState = newState();
        this.otherState = newState();
        this.radar = 1;
        this.rocket = 1;
        this.torpedo = 1;
        this.bomb = 1;
    }
    
    runEvent(event){
        switch (event.name) {
            case EventGame.WEAPON: this.runEventWeapon(event.value.weapon, event.value.context)
            case EventGame.HIT: {
                // TODO
            } 
        }
    }


    runEventWeapon(weapon, location){
        switch (weapon) {
            case Weapon.Rocket:
                if (this.rocket) { 
                    this.rocket -= 1; 
                    // TODO
                }
            case Weapon.Radar:   console.log("Radar Launched !")   ; break;
            case Weapon.Torpedo: console.log("Torpedo Launched !") ; break;
            case Weapon.Bomb:    console.log("Bomb Launched !")    ; break;
            default: console.error("Unknow Weapon") 
        }
    }

    render(listOfOwnersTab, listOfOthersTab) {

        if (listOfOwnersTab.length != 100 || listOfOwnersTab.length != listOfOthersTab.length) { 
            console.log("Error : Length MissMatch")
            return null
        }

        for (let i = 0; i < SIZE * SIZE; i++) {
            const coo = toCoordonate(i);
            listOfOwnersTab[i].innerText = this.ownState[coo.getX()][coo.getY()] ? "O" : "X";
            listOfOthersTab[i].innerText = this.otherState[coo.getX()][coo.getY()] ? "O" : "X";
        }
        
    }

}