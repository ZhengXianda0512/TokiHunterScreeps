import { Position } from "./utils/position"

import { map as SquadMap } from "./squad/map"
import { map as ConstructionMap } from "./construction/map"

//init
export function init() {
    console.log("Restart: "+Game.time)

    let forcibly = false

    if (forcibly || !Memory.squads) {
        Memory.squads = [
            new SquadMap.Harvester(2),
            new SquadMap.Upgrader(4),
            new SquadMap.Builder(6),
        ]
    }

    if (forcibly || !Memory.extensions) {
        Memory.extensions = [
            //left-up
            new ConstructionMap.Extension(-1,-1),
            new ConstructionMap.Extension(-2,-1),
            new ConstructionMap.Extension(-3,-1),
            //right-up
            new ConstructionMap.Extension(1,-1),
            new ConstructionMap.Extension(2,-1),
            new ConstructionMap.Extension(3,-1),
            //left-bottom
            new ConstructionMap.Extension(-1,1),
            new ConstructionMap.Extension(-2,1),
            new ConstructionMap.Extension(-3,1),
            new ConstructionMap.Extension(-1,2),
            new ConstructionMap.Extension(-2,2),
            new ConstructionMap.Extension(-1,3),
            //right-bottom
            new ConstructionMap.Extension(1,1),
            new ConstructionMap.Extension(2,1),
            new ConstructionMap.Extension(3,1),
            new ConstructionMap.Extension(1,2),
            new ConstructionMap.Extension(2,2),
            new ConstructionMap.Extension(1,3),
        ]
    }

    if (forcibly || !Memory.roads) {
        Memory.roads = [
            //left
            new ConstructionMap.Road(-1,0),
            new ConstructionMap.Road(-2,0),
            new ConstructionMap.Road(-3,0),
            new ConstructionMap.Road(-4,0),
            new ConstructionMap.Road(-5,0),
            new ConstructionMap.Road(-4,1),
            new ConstructionMap.Road(-4,-1),
            //right
            new ConstructionMap.Road(1,0),
            new ConstructionMap.Road(2,0),
            new ConstructionMap.Road(3,0),
            new ConstructionMap.Road(4,0),
            new ConstructionMap.Road(5,0),
            new ConstructionMap.Road(4,1),
            new ConstructionMap.Road(4,-1),
            //top            
            new ConstructionMap.Road(0,-1),
            new ConstructionMap.Road(0,-2),
            new ConstructionMap.Road(0,-3),
            new ConstructionMap.Road(0,-4),
            new ConstructionMap.Road(1,-3),
            new ConstructionMap.Road(-1,-3),
            new ConstructionMap.Road(1,-5),
            new ConstructionMap.Road(-1,-5),
            //bottom
            new ConstructionMap.Road(0,1),
            new ConstructionMap.Road(0,2),
            new ConstructionMap.Road(0,3),
            new ConstructionMap.Road(0,4),
            new ConstructionMap.Road(1,5),
            new ConstructionMap.Road(-1,5),
        ]
    }

    if (forcibly || !Memory.parks) {
        Memory.parks = [
            //left
            new Position(-4,0),
            //right
            new Position(4,0),
        ]
    }
}