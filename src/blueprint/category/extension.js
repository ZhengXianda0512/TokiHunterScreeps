import { Blueprint } from "../blueprint";

export class Extension extends Blueprint {
    constructor(x, y, absolute) {
        super(x, y, absolute, STRUCTURE_EXTENSION);
    }
}