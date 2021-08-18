import { map as SquadMap } from "./squad/map" 

export const GameManager = {
    get room() {
        if (!this._room) {
            this._room = _.filter(Game.rooms, (room) => true)[0]
        }
        return this._room
    },

    get spawn() {
        if (!this._spawn) {
            this._spawn = _.filter(Game.spawns, (spawn) => true)[0]
        }
        return this._spawn
    },

    createConstruction: function (construction) {
        this.room.createConstructionSite(
            this.spawn.pos.x + construction.offset.x,
            this.spawn.pos.y + construction.offset.y,
            construction.type,
            construction.name
        )
    },

    beefedUpSquad: function (squad) {
        if (!this.spawn.spawning) {
            this.spawn.beefedUp(squad)
        }
    },

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