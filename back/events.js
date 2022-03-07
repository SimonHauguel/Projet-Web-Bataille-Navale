export const Weapon = {
    Rocket  : "Rocket",
    Radar   : "Radar",
    Torpedo : "Torpedo",
    Bomb    : "Bomb"
}

export const EventGame = {
    MISS        : "MISS",
    TOUCHED     : "TOUCHED",
    BOATDESTROY : "BOATDESTROY",
    ENDGAME     : "ENDGAME",
    HIT         : "HIT",
    WEAPON      : "WEAPON"
}

export const BuildContextEvent = (event, context) => {
    return {
        name   : event,
        values : context
    }
}