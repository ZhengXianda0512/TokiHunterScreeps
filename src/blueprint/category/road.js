import { Blueprint } from "../blueprint";

export class Road extends Blueprint {
    constructor(x, y, absolute) {
        super(x, y, absolute, STRUCTURE_ROAD);
    }
}