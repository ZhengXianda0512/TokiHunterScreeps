Spawn.prototype.notice = function () {
    let spawning = this.spawning
    if(spawning) { 
        var spawningCreep = Game.creeps[spawning.name]
        this.room.visual.text(
            '🛠️ ' + spawningCreep.memory.squad,
            this.pos.x + 1, 
            this.pos.y, 
            {align: 'left', opacity: 0.8})
    }
}

/*
* 补充兵力直到满额
* @spawn 出生点
*/
Spawn.prototype.beefedUp = function (squad) {
    if (squad.creeps.length < squad.limit) {
        let creepName = squad.type+Game.time
        let code = this.spawnCreep(squad.mods, creepName, {
            memory: {
                squad: squad.type
            }
        })
        if (code == OK) {
            squad.creeps.push(creepName)
        }
    }
}