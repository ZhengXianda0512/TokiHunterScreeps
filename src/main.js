import "./structure/spawn/spawn"

import { GameManager } from "./GameManager"
import { init } from "./init"

init()

export const loop = function () {
    //spawning
    let spawn = Game.spawns["Spawn1"]
    
    spawn.notice()

    Memory.squads.forEach((squad) => {
        //Squads budedUp
        if (!spawn.spawning) spawn.beefedUp(squad)
        //Squads update
        GameManager.updateSquad(squad)
    })
}