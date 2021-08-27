import { Container } from "./category/container"
import { Extension } from "./category/extension"
import { Road } from "./category/road"

/**
 * 建筑蓝图类型列表
 * @returns 当前建筑蓝图名称和类型的映射表 [className: class]
 */
Object.defineProperty(Toki, 'blueprintMap', {
    get: function() {
        return {
            Container,
            Extension,
            Road,
        }
    },
})

/**
 * 获取所有蓝图映射表
 * @returns 当前所有蓝图映射表 [name: blueprint]
 */
Object.defineProperty(Toki, 'blueprints', {
    get: function() {
        return Memory.blueprints
    },
    set: function(blueprints) {
        Memory.blueprints = blueprints
    }
})

/**
 * 规划建筑物蓝图
 */
Toki.buildBlueprint = function (blueprint, forcibly = false) {
    let pos = blueprint.pos
    let blueprints = this.blueprints ?? (this.blueprints = {})
    let localBlueprint = blueprints[pos] ?? (blueprints[pos] = {})

    //若 (当前队伍已存在) 且 (非强制创建) => 返回
    if (localBlueprint.type && !forcibly) return
    
    for (let key in blueprint.static) {
        localBlueprint[key] = blueprint.static[key]
    }
    for (let key in blueprint.dynamic) {
        if (!localBlueprint[key]) localSquad[key] = blueprint.dynamic[key]
    }
}

Toki.realizeBlueprint = function (blueprint) {
    this.room.createConstructionSite(
        blueprint.x,
        blueprint.y,
        blueprint.type,
        blueprint.name
    )    
}