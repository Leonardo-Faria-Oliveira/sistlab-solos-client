export class PhysicalAnalysis{

    sand:number
    silt:number
    carbon:number
    clay:number
    organicMatter: number
    totalOrganicCarbon:number

    constructor(
        sand:number,
        silt:number,
        clay:number,
        carbon:number,
        organicMatter: number,
        totalOrganicCarbon:number

    ){
        
        this.sand = sand
        this.silt = silt
        this.clay = clay
        this.carbon = carbon
        this.organicMatter = organicMatter
        this.totalOrganicCarbon = totalOrganicCarbon

    }
}