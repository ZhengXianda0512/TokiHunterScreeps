import './array+limit'

global.CollectorRule = class {
    constructor(lookType, filter) {
        this.lookType = lookType;
        this.filter = filter;
    }
}

/**
 * 查找相邻范围，并根据采集器规则将结果存入采集器
 * @param {int} x 
 * @param {int} y 
 * @param {Collector} collector collector{ plain: { lookType; filter; } }
 * @returns {Collector} collector{ plain: { lookType; filter; objects; } }
 */
Room.prototype.lookAtNeighbor = function (x, y, collector) {
    let area = this.lookAtArea(y - 1, x - 1, y + 1, x + 1, true)

    _.forEach(collector, (rule) => {
        rule.objects = area.filter((object) => 
        (object.type == rule.lookType) && rule.filter(object[object.type])
        )
    })

    return collector
}

/**
 * 查询资源周围的建筑配置, 寻找到适合建设采集点的位置
 * @param {Source} source 
 * @returns {RoomObject} RoomObject.assign{source;}
 */
Room.prototype.lookAtSourceMinnigPlace = function (source) {
    let sourceNeighbor = Toki.room.lookAtNeighbor(source.pos.x, source.pos.y, {
        plain: new CollectorRule(LOOK_TERRAIN, (object) => object == TERRAIN_PLAIN),
        container: new CollectorRule(LOOK_STRUCTURES, (object) => object.structureType == STRUCTURE_CONTAINER),
    })

    let containers = sourceNeighbor.container.objects
    let plains = sourceNeighbor.plain.objects

    var area = containers.length > 0 ?
        containers[0]:
        plains.min((plain) => 
            Toki.room.findPath(
                Toki.spawn.pos,
                new RoomPosition(plain.x, plain.y,
                Toki.room.name)
            ).length
        )

    return Object.assign(area, {
        source: source
    })
}