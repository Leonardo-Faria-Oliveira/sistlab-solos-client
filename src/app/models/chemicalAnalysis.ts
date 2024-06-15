
export class ChemicalAnalysis{
    ph: number
    sulfur: number
    potencialAcidity: number
    potassium: number
    magnesium: number
    aluminum: number
    sodium: number
    calcium: number

    constructor(
        ph: number,
        sulfur: number,
        potencialAcidity: number,
        potassium: number,
        magnesium: number,
        aluminum: number,
        sodium: number,
        calcium: number,

    ){
        this.ph = ph
        this.sulfur = sulfur
        this.potencialAcidity = potencialAcidity
        this.potassium = potassium
        this.magnesium = magnesium
        this.aluminum = aluminum
        this.sodium = sodium
        this.calcium = calcium

    }
}