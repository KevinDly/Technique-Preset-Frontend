const physicalProtectionBonusMapping = {
    "7": 8,
    "8": 10,
    "9": 12,
    "10": 15
}

function calculatePhysicalProtectionBonus(level) {
    let physicalProtectionBonus;
    if(level <= 6) {
        physicalProtectionBonus = level
    }
    else {
        physicalProtectionBonus = physicalProtectionBonusMapping[level.toString()]
    }
    return physicalProtectionBonus
}

const magicProtectionBonusMapping = {
    "1": 10,
    "2": 12,
    "3": 15,
    "4": 18,
    "5": 22,
    "6": 27,
    "7": 33,
    "8": 40,
    "9": 48,
    "10": 58
}

function calculateMagicProtectionBonus(level) {
    return magicProtectionBonusMapping[level.toString()]
}

export const id = "bluntingfield";
export function description(data) {
    const level = data["level"]
    const physicalProtectionBonus = calculatePhysicalProtectionBonus(level)
    const magicProtectionBonusMapping = calculateMagicProtectionBonus(level)

    const description = `When in use, provides a Physical Protection bonus of ${physicalProtectionBonus} and a Magic Protection bonus of ${magicProtectionBonusMapping}`
    return description;

}