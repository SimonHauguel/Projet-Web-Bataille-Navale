const socket = io();
const tohide = document.getElementById('container')
console.log(tohide)

let game = undefined;

const SIZE = 10;

Weapon = {
    Rocket  : "Rocket",
    Radar   : "Radar",
    Torpedo : "Torpedo",
    Bomb    : "Bomb"
}

EventGame = {
    MISS        : "MISS",
    TOUCHED     : "TOUCHED",
    BOATDESTROY : "BOATDESTROY",
    ENDGAME     : "ENDGAME",
    HIT         : "HIT",
    WEAPON      : "WEAPON"
}

BuildContextEvent = (event, context) => {
    return {
        name   : event,
        values : context
    }
}


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

class Game {

    constructor(){
        this.state = newState();
        this.radar = 1;
        this.rocket = 1;
        this.torpedo = 1;
        this.bomb = 1;
    }

    useRadar(location) {
        if (!this.radar) return;


    }

}



socket.on('wannaplay', n => {
    if (n == 2) {
        game = new gameState.Game()
    }
})

socket.on('gamefound', () => tohide.hidden = true)