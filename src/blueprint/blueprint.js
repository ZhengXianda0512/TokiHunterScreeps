export class Blueprint {
    constructor(x, y, absolute, type, name) {
        let absolute_x = x + (absolute ? 0 : Toki.spawn.pos.x)
        let absolute_y = y + (absolute ? 0 : Toki.spawn.pos.y)
        this.pos = `(${absolute_x},${absolute_y})`
        this.static = {
            x: absolute_x,
            y: absolute_y,
            type: type,
            name: name,
        }
    }
    
    toString() {
        let name = this.static.name?`, name=${this.static.name}`:""
        return `[${this.static.type}] position=pos${name}`
    }
}