
export function skillDescriptionAddons(data) {
    let description = data["description"]
    const cooldownUnit = "cooldownUnit" in data ? data["cooldownUnit"] : "secs"
    const durationUnit = "durationUnit" in data ? data["durationUnit"] : "secs"
    if(data["type"] === "active") {
        const cooldown = data["cooldown"]
        const duration = data["duration"]
        description = `${description}
                        Cooldown: ${cooldown.toString()} ${cooldownUnit} 
                        Duration: ${duration.toString()} ${durationUnit}`
    }

    return description
}