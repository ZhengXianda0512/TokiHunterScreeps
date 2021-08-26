import "./toki"
import "./squad/toki+squad"
import { Position } from "./utils/position"

import { map as ConstructionMap } from "./construction/map"

//init
export function init() {
    console.log("Restart: "+Game.time)

    let forcibly = true

    Toki.buildSquad(new Toki.squadMap.Harvester(1, "Harvester1"), forcibly)
    Toki.buildSquad(new Toki.squadMap.Upgrader(8, "Upgrader1"), forcibly)
    Toki.buildSquad(new Toki.squadMap.Builder(8, "Builder1"), forcibly)

    if (forcibly || !Memory.extensions) {
        Memory.extensions = [
            //left-up
            new ConstructionMap.Extension(-1,-1),
            new ConstructionMap.Extension(-2,-1),
            new ConstructionMap.Extension(-3,-1),
            new ConstructionMap.Extension(-2,-2),
            new ConstructionMap.Extension(-1,-3),
            //right-up
            new ConstructionMap.Extension(1,-1),
            new ConstructionMap.Extension(2,-1),
            new ConstructionMap.Extension(3,-1),
            new ConstructionMap.Extension(2,-2),
            new ConstructionMap.Extension(1,-3),
            //left-bottom
            new ConstructionMap.Extension(-1,1),
            new ConstructionMap.Extension(-2,1),
            new ConstructionMap.Extension(-3,1),
            new ConstructionMap.Extension(-2,2),
            new ConstructionMap.Extension(-1,3),
            //right-bottom
            new ConstructionMap.Extension(1,1),
            new ConstructionMap.Extension(2,1),
            new ConstructionMap.Extension(3,1),
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
            //right
            new ConstructionMap.Road(1,0),
            new ConstructionMap.Road(2,0),
            new ConstructionMap.Road(3,0),
            new ConstructionMap.Road(4,0),
            new ConstructionMap.Road(5,0),
            //top            
            new ConstructionMap.Road(0,-1),
            new ConstructionMap.Road(0,-3),
            new ConstructionMap.Road(0,-5),
            //bottom
            new ConstructionMap.Road(0,1),
            new ConstructionMap.Road(0,3),
            new ConstructionMap.Road(0,5),
            //left-up
            new ConstructionMap.Road(-4,-1),
            new ConstructionMap.Road(-1,-2),
            new ConstructionMap.Road(-3,-2),
            new ConstructionMap.Road(-2,-3),
            new ConstructionMap.Road(-1,-4),
            //right-up
            new ConstructionMap.Road(4,-1),
            new ConstructionMap.Road(1,-2),
            new ConstructionMap.Road(3,-2),
            new ConstructionMap.Road(2,-3),
            new ConstructionMap.Road(1,-4),
            //left-bottom
            new ConstructionMap.Road(-4,1),
            new ConstructionMap.Road(-1,2),
            new ConstructionMap.Road(-3,2),
            new ConstructionMap.Road(-2,3),
            new ConstructionMap.Road(-1,4),
            //right-bottom
            new ConstructionMap.Road(4,1),
            new ConstructionMap.Road(1,2),
            new ConstructionMap.Road(3,2),
            new ConstructionMap.Road(2,3),
            new ConstructionMap.Road(1,4),
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