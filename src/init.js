import "./constant"
import "./category/room+look"

import "./toki"
import "./squad/toki+squad"
import "./blueprint/toki+blueprint"

//init
export function init() {
    console.log("Restart: "+Game.time)

    let forcibly = true

    //检查地图
    if (forcibly || !Memory.sources) {
        Memory.sources = Toki.room.find(FIND_SOURCES)
    }
    
    //配置蓝图
    if (forcibly || !Memory.blueprintPlan) {
        Memory.blueprintPlan = {}
    }
    ///资源矿井蓝图
    if (forcibly || !Memory.blueprintPlan.containers) {
        let sourceMinnigPlaces = Memory.sources.map((source) => Toki.room.lookAtSourceMinnigPlace(source))
        Memory.blueprintPlan.containers = sourceMinnigPlaces.map((minnigPlace) => 
            new Toki.blueprintMap.Container(minnigPlace.x, minnigPlace.y, true, minnigPlace.source))
    }
    ///能源扩展蓝图
    if (forcibly || !Memory.blueprintPlan.extensions) {
        Memory.blueprintPlan.extensions = [
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
    }
    ///道路蓝图
    if (forcibly || !Memory.blueprintPlan.roads) {
        Memory.blueprintPlan.roads = [
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
    }

    _.forEach(Memory.blueprintPlan, (plan) => 
        plan.forEach(blueprint => 
            Toki.buildBlueprint(blueprint, forcibly)))

    //配置小队
    let squads = [
        new Toki.squadMap.Harvester(Memory.sources.length, "Harvester"),
        new Toki.squadMap.Upgrader(8, "Upgrader"),
        new Toki.squadMap.Builder(8, "Builder"),
    ]

    squads.forEach(squad => Toki.buildSquad(squad, forcibly))
}