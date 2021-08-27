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

    prepare: function() {
        let spawning = this.spawn.spawning
        if(spawning) {
            var spawningCreep = Game.creeps[spawning.name]
            this.spawn.room.visual.text(
                '🛠️ ' + spawningCreep.memory.squad,
                this.spawn.pos.x + 1, 
                this.spawn.pos.y, 
                {align: 'left', opacity: 0.8})
        }

        this.spawn.memory.isSpawning = !!spawning
    },
}