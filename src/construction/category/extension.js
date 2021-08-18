import { Construction } from "../base/base";

export class Extension extends Construction {
    constructor(offset_x, offset_y) {
        super(offset_x, offset_y, STRUCTURE_EXTENSION);
    }
}