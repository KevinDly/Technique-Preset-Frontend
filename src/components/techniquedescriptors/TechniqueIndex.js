import * as VitalSurge from "./VitalSurge"
import * as BluntingField from "./BluntingField"
import * as DampenShock from "./DampenShock"
import * as IronWill from "./IronWill"
export const techniqueDescriptionMap = {
    [VitalSurge.id]: (data) => (VitalSurge.description(data)),
    [BluntingField.id]: (data) => (BluntingField.description(data)),
    [DampenShock.id]: (data) => (DampenShock.description(data)),
    [IronWill.id]: (data) => (IronWill.description(data))
}

/*module.exports = {
    techniqueDescriptionMap: {
        [VitalSurge.id]: (data) => (VitalSurge.description(data))
    }
}*/