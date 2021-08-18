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

    Memory.squads.forEach((squad) => {
        //Squads budedUp
        GameManager.beefedUpSquad(squad)
        //Squads update
        GameManager.updateSquad(squad)
    })
}