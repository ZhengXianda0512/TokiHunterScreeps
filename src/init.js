import "./toki"
import "./squad/toki+squad"
import "./blueprint/toki+blueprint"

//init
export function init() {
    console.log("Restart: "+Game.time)

    let forcibly = true

    let squads = [
        new Toki.squadMap.Harvester(1, "Harvester1"),
        new Toki.squadMap.Upgrader(8, "Upgrader1"),
        new Toki.squadMap.Builder(8, "Builder1"),
    ]

    squads.forEach(squad => Toki.buildSquad(squad, forcibly))

    let extensions = [
        //left-up
        new Toki.blueprintMap.Extension(-1,-1),
        new Toki.blueprintMap.Extension(-2,-1),
        new Toki.blueprintMap.Extension(-3,-1),
        new Toki.blueprintMap.Extension(-2,-2),
        new Toki.blueprintMap.Extension(-1,-3),
        //right-up
        new Toki.blueprintMap.Extension(1,-1),
        new Toki.blueprintMap.Extension(2,-1),
        new Toki.blueprintMap.Extension(3,-1),
        new Toki.blueprintMap.Extension(2,-2),
        new Toki.blueprintMap.Extension(1,-3),
        //left-bottom
        new Toki.blueprintMap.Extension(-1,1),
        new Toki.blueprintMap.Extension(-2,1),
        new Toki.blueprintMap.Extension(-3,1),
        new Toki.blueprintMap.Extension(-2,2),
        new Toki.blueprintMap.Extension(-1,3),
        //right-bottom
        new Toki.blueprintMap.Extension(1,1),
        new Toki.blueprintMap.Extension(2,1),
        new Toki.blueprintMap.Extension(3,1),
        new Toki.blueprintMap.Extension(2,2),
        new Toki.blueprintMap.Extension(1,3),
    ]

    let roads = [
        //left
        new Toki.blueprintMap.Road(-1,0),
        new Toki.blueprintMap.Road(-2,0),
        new Toki.blueprintMap.Road(-3,0),
        new Toki.blueprintMap.Road(-4,0),
        new Toki.blueprintMap.Road(-5,0),
        //right
        new Toki.blueprintMap.Road(1,0),
        new Toki.blueprintMap.Road(2,0),
        new Toki.blueprintMap.Road(3,0),
        new Toki.blueprintMap.Road(4,0),
        new Toki.blueprintMap.Road(5,0),
        //top            
        new Toki.blueprintMap.Road(0,-1),
        new Toki.blueprintMap.Road(0,-3),
        new Toki.blueprintMap.Road(0,-5),
        //bottom
        new Toki.blueprintMap.Road(0,1),
        new Toki.blueprintMap.Road(0,3),
        new Toki.blueprintMap.Road(0,5),
        //left-up
        new Toki.blueprintMap.Road(-4,-1),
        new Toki.blueprintMap.Road(-1,-2),
        new Toki.blueprintMap.Road(-3,-2),
        new Toki.blueprintMap.Road(-2,-3),
        new Toki.blueprintMap.Road(-1,-4),
        //right-up
        new Toki.blueprintMap.Road(4,-1),
        new Toki.blueprintMap.Road(1,-2),
        new Toki.blueprintMap.Road(3,-2),
        new Toki.blueprintMap.Road(2,-3),
        new Toki.blueprintMap.Road(1,-4),
        //left-bottom
        new Toki.blueprintMap.Road(-4,1),
        new Toki.blueprintMap.Road(-1,2),
        new Toki.blueprintMap.Road(-3,2),
        new Toki.blueprintMap.Road(-2,3),
        new Toki.blueprintMap.Road(-1,4),
        //right-bottom
        new Toki.blueprintMap.Road(4,1),
        new Toki.blueprintMap.Road(1,2),
        new Toki.blueprintMap.Road(3,2),
        new Toki.blueprintMap.Road(2,3),
        new Toki.blueprintMap.Road(1,4),
    ]

    let blueprints = []
    blueprints = blueprints.concat(extensions)
    blueprints = blueprints.concat(roads)

    blueprints.forEach(blueprint => Toki.buildBlueprint(blueprint, forcibly))
}