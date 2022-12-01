import {skillDescriptionAddons } from './TechniqueDescriptionHelpers'

function calcHPBonus(level) {
    return level * 1000
}

export const id = "vitalsurge";
export function description(data) {
    const cooldown = 3;
    const duration = 10;
    var description = `Upon activation, grants an additional maximum HP bonus of ${calcHPBonus(data.level)}.`

    return skillDescriptionAddons({cooldown: cooldown,
        duration: duration,
        type: "active",
        description: description,
        cooldownUnit: "minutes",
        durationUnit: "minutes"});

}