import { Squad } from "../base/base";

export class Builder extends Squad {
    constructor(limit) {
        super([WORK,CARRY,MOVE], limit);
    }

    static whip (creep) {
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false
            creep.say('🔄 harvest')
        }
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true
            creep.say('🚧 build')
        }
    
        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES)
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}})
                }
            } else {
                let parkIndex = creep.memory.number % Memory.parks.length
                creep.moveTo(Memory.parks[parkIndex], {visualizePathStyle: {stroke: '#00ffff'}})
            }
        } else {
            this.harvest(creep)
        }
    }
}