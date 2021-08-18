import { Squad } from "../base/base";

export class Harvester extends Squad {
    constructor(limit) {
        super([WORK,CARRY,MOVE], limit);
    }

    static whip (creep) {
        if(creep.store.getFreeCapacity() > 0) {
            this.harvest(creep)
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
                    }
            })
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}})
                }
            } else {
                let parkIndex = creep.memory.number % Memory.parks.length
                creep.moveTo(Memory.parks[parkIndex], {visualizePathStyle: {stroke: '#00ffff'}})
            }
        }
    }
}