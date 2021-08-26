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
}