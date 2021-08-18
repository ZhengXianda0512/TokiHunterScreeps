import { Construction } from "../base/base";

export class Road extends Construction {
    constructor(offset_x, offset_y) {
        super(offset_x, offset_y, STRUCTURE_ROAD);
    }
}