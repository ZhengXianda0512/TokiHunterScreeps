Spawn.prototype.prepare = function () {
    let spawning = this.spawning
    if(spawning) {
        var spawningCreep = Game.creeps[spawning.name]
        this.room.visual.text(
            '🛠️ ' + spawningCreep.memory.squad,
            this.pos.x + 1, 
            this.pos.y, 
            {align: 'left', opacity: 0.8})
    }

    this.memory.isSpawning = !!spawning
}