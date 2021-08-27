import "./toki"

import { init } from "./init"

init()

export const loop = function () {
    Toki.showGameInfo()

    _.forEach(Toki.blueprints, (blueprint) => {
        Toki.realizeBlueprint(blueprint)
    })

    _.forEach(Toki.squads, (squad) => {
        Toki.beefedUpSquad(squad)
        Toki.dispatchSquad(squad)
    })
}