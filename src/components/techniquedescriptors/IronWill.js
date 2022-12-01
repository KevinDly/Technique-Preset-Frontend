import { skillDescriptionAddons } from "./TechniqueDescriptionHelpers"
const activeDurationSeconds = {
    "1": 30,
    "2": 40,
    "3": 50,
    "4": 60,
    "5": 80,
    "6": 100,
    "7": 120,
    "8": 140,
    "9": 160,
    "10": 180
}

export const id = "ironwill"
export function description(data) {
    const level = data["level"]
    const description = `Upon activation, grants the user Advanced Heavy Stander, rendering the user immune to stunning, knockback, and knockdown for a set duration. Duration increases with level.`
    return skillDescriptionAddons({description: description, 
                                    type: "active",
                                    level: level, 
                                    duration: activeDurationSeconds[level.toString()], 
                                    cooldown: 10,
                                    cooldownUnit: "minutes"
                                    })
}