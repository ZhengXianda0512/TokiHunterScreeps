export class Squad {
    constructor(mods, limit, name) {
        this.name = name
        this.static = {
            type: this.constructor.name,
            mods: mods,
            limit: limit,
        }
        this.dynamic = {
            creeps: []
        }
    }

    /**
    * 让小队成员工作
    * @param {Creep} creep 
    */
    static whip(creep) {
    
    }

    /**
     * 让小队成员采矿
     * @param {Creep} creep 
     */
    static harvest(creep) {
        var source = creep.pos.findClosestByRange(FIND_SOURCES)
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#ff0000'}})
        }
    }

    toString() {
        return `[${this.name}:${this.static.type}] mods=${this.static.mods}, limit=${this.static.limit}, creepsCount=${this.dynamic.creeps.length}`
    }
}