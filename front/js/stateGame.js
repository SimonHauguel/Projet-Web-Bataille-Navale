const Events = require("./events");

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


module.exports.BackGame = class {

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
