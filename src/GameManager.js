import { map as SquadMap } from "./squad/map" 

export const GameManager = {
    updateSquad: function (squad) {
        squad.creeps = squad.creeps.filter((creepName) => {
            let creep = Game.creeps[creepName]
            if (creep) {
                SquadMap[squad.type].whip(creep)
            } else {
                delete Memory.creeps[creepName]
                console.log('Clearing non-existing creep memory:', creepName)
            }
            return creep
        })
    }
}