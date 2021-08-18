export class Construction {
    constructor(offset_x, offset_y, structureType, name) {
        this.offset = {x:offset_x, y:offset_y}
        this.type = structureType
        this.name = name
    }
    
    toString() {
        return `[${this.type}] offset=${this.offset}, name=${this.name}}`
    }
}