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

/*
* 补充兵力直到满额
* @spawn 出生点
*/
Spawn.prototype.beefedUp = function (squad) {
    if (squad.creeps.length < squad.limit && !this.memory.isSpawning) {
        let number = Game.time
        let creepName = squad.type+number
        let code = this.spawnCreep(squad.mods, creepName, {
            memory: {
                squad: squad.type,
                number: number
            }
        })
        if (code == OK) {
            this.memory.isSpawning = true
            squad.creeps.push(creepName)
        }
    }
}