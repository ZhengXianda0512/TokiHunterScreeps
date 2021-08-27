/**
 * 游戏管理器
 */
global.Toki = {
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

    get controller() {
        if (!this._controller) {
            this._controller = this.room.controller
        }
        return this._controller
    },

    prepare: function() {
        let room = this.room
        let spawn = this.spawn
        let controller = this.controller

        //spawning
        let spawning = spawn.spawning
        if(spawning) {
            var spawningCreep = Game.creeps[spawning.name]
            room.visual.text(
                '🛠️ ' + spawningCreep.memory.squad,
                spawn.pos.x + 1, 
                spawn.pos.y, 
                {align: 'left', opacity: 0.8}
            )
        }
        spawn.memory.isSpawning = !!spawning

        //面板
        let rowCount = 1
        for (var i=0; i< rowCount; i++) {
            room.visual.rect(-0.5,i-0.5,20,1, {stroke: '#000000'})
        }
        //控制器数据
        let increase = controller.progress - room.memory.controller.progress
        let describe = `Level: ${controller.level} [${controller.progress}(${increase})/${controller.progressTotal}] << ${controller.ticksToDowngrade}`
        room.visual.text(
            describe,
            0,0.2+0,
            {align: 'left', opacity: 0.8, color: '#000000'}
        )
        room.memory.controller = controller
    },
}