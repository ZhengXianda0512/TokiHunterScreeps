import { Blueprint } from "../blueprint";

export class Container extends Blueprint {
    constructor(x, y, absolute, source) {
        super(x, y, absolute, STRUCTURE_CONTAINER);
        this.dynamic = {
            source: source
        }
    }
}