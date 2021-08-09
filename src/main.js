import { roleHarvester } from './Creeps/Role/harvester'
import { roleUpgrader } from './Creeps/Role/upgrader'

export const loop = function () {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name]
            console.log('Clearing non-existing creep memory:', name)
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')

    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name]
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8})
    } else {
        if(harvesters.length < 2) {
            var newName = 'Harvester' + Game.time
            console.log('Spawning new harvester: ' + newName)
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}})
        }
    
        if(upgraders.length < 2) {
            var newName = 'Upgraders' + Game.time
            console.log('Spawning new upgrader: ' + newName)
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'upgrader'}})
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name]
        if(creep.memory.role == 'harvester') {
            roleHarvester(creep)
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader(creep)
        }
    }
}