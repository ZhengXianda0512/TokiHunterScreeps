import "./toki"
import "./structure/spawn/spawn"

import { GameManager } from "./GameManager"
import { init } from "./init"

init()

export const loop = function () {
    Memory.extensions.forEach((extension) => {
        GameManager.createConstruction(extension)
    })
    Memory.roads.forEach((road) => {
        GameManager.createConstruction(road)
    })

    //spawning
    GameManager.spawn.prepare()

    _.forEach(Toki.squads, (squad) => {
        //Squads budedUp
        Toki.beefedUpSquad(squad)
        //Squads update
        Toki.dispatchSquad(squad)
    });
}