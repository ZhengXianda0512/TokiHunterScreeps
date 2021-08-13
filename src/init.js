import { map as SquadMap } from "./squad/map";

//init
export function init() {
    if (!Memory.squads) {
        Memory.squads = [
            new SquadMap.Harvester(2),
            new SquadMap.Upgrader(2),
            new SquadMap.Builder(2),
        ]
    }
}