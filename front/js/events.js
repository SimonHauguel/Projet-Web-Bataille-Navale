module.exports.Weapon = {
    Rocket  : "Rocket",
    Radar   : "Radar",
    Torpedo : "Torpedo",
    Bomb    : "Bomb"
}

module.exports.EventGame = {
    MISS        : "MISS",
    TOUCHED     : "TOUCHED",
    BOATDESTROY : "BOATDESTROY",
    ENDGAME     : "ENDGAME",
    HIT         : "HIT",
    WEAPON      : "WEAPON"
}

module.exports.BuildContextEvent = (event, context) => {
    return {
        name   : event,
        values : context
    }
}