const bonusDefenseMap = {
    "1": 28,
    "2": 37,
    "3": 49,
    "4": 64,
    "5": 84,
    "6": 110,
    "7": 143,
    "8": 186,
    "9": 242,
    "10": 315
}
const bonusMagicDefenseMap = {
    "1": 13,
    "2": 17,
    "3": 23,
    "4": 30,
    "5": 39,
    "6": 51,
    "7": 67,
    "8": 88,
    "9": 115,
    "10": 150
}

export const id = "dampenshock"
export function description(data) {
    const level = data["level"]
    return `When in use, provides ${bonusDefenseMap[level]} Physical Defense and ${bonusMagicDefenseMap[level]} Magic Defense.`
}