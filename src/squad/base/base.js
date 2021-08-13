export class Squad {
    constructor(mods, limit) {
        this.type = this.constructor.name;
        this.mods = mods;
        this.limit = limit;
        this.creeps = [];
    }
    
    static whip (creep) {
        
    }

    toString() {
        return `[${this.type}] mods=${this.mods}, limit=${this.limit}, creepsCount: ${this.creeps.length}`
    }
}