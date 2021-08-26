import { Squad } from "./squad"
import { Harvester } from "./category/harvester"
import { Upgrader } from "./category/upgrader"
import { Builder } from "./category/builder"

/**
 * 特种小队类型列表
 * @returns 当前特种小队名称和类型的映射表 [className: class]
 */
Object.defineProperty(Toki, 'squadMap', {
    get: function() {
        return {
            Harvester,
            Upgrader,
            Builder,
        }
    },
})

/**
 * 获取所有小队名映射表
 * @returns 当前所有小队映射表 [name: squad]
 */
Object.defineProperty(Toki, 'squads', {
    get: function() {
        return Memory.squads
    },
    set: function(squads) {
        Memory.squads = squads
    }
})

/**
 * 创建小队，重复创建同名小队会实现覆盖
 */
Toki.buildSquad = function(squad, forcibly = false) {
    let name = squad.name
    let squads = this.squads ?? (this.squads = {})
    let localSquad = squads[name] ?? (squads[name] = {})

    //若 (当前队伍已存在) 且 (非强制创建) => 返回
    if (localSquad.type && !forcibly) return
    
    for (let key in squad.static) {
        localSquad[key] = squad.static[key]
    }
    for (let key in squad.dynamic) {
        if (!localSquad[key]) localSquad[key] = squad.dynamic[key]
    }
}

/**
 * 补充兵员
 */
Toki.beefedUpSquad = function (squad) {
    if (!this.spawn.spawning) {
        if (squad.creeps.length < squad.limit && !this.spawn.memory.isSpawning) {
            let number = Game.time
            let creepName = squad.type+number
            let code = this.spawn.spawnCreep(squad.mods, creepName, {
                memory: {
                    squad: squad.type,
                    number: number
                }
            })
            if (code == OK) {
                this.spawn.memory.isSpawning = true
                squad.creeps.push(creepName)
            }
        }
    }
},

/**
 * 派遣队伍执行任务
 */
Toki.dispatchSquad = function (squad) {
    squad.creeps = squad.creeps.filter((creepName) => {
        let creep = Game.creeps[creepName]
        if (creep) {
            this.squadMap[squad.type].whip(creep)
        } else {
            delete Memory.creeps[creepName]
            console.log('Clearing non-existing creep memory:', creepName)
        }
        return creep
    })
}