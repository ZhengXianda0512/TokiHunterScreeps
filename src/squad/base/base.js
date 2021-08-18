export class Squad {
    constructor(mods, limit) {
        this.type = this.constructor.name;
        this.mods = mods;
        this.limit = limit;
        this.creeps = _
        .filter(Game.creeps, (creep) => creep.memory.squad == this.type)
        .map((creep) => creep.name);
    }
    
    static whip (creep) {
        
    }

    static harvest (creep) {
        var source = creep.pos.findClosestByRange(FIND_SOURCES)
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#ff0000'}})
        }
    }

    toString() {
        return `[${this.type}] mods=${this.mods}, limit=${this.limit}, creepsCount: ${this.creeps.length}`
    }
}