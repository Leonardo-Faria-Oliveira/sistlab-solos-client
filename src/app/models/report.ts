import { Client } from "./client";
import { PhosphorValue } from "./phosphorValue";

export class Report{

    public reportId?: string | undefined
    public landName: string;
    public labName: string; 
    public city: string;
    public field: string;
    public createdAt: Date;
    public acidity: number;
    public depth:number;
    public phosphor: number;
    public phosphorAbsorbance:number;
    public ctc: number;
    public bases: number;
    public aluminumPercent:number;
    public calciumPercent:number;
    public potassiumPercent:number;
    public magnesiumPercent:number;
    public basesPercent:number;
    public sand:number
    public silt:number
    public carbon:number
    public clay:number
    public organicMatter: number
    public totalOrganicCarbon:number
    public ph: number
    public sulfur: number
    public potencialAcidity: number
    public potassium: number
    public magnesium: number
    public aluminum: number
    public sodium: number
    public calcium: number
    public phosphorValue: PhosphorValue;
    public employeeEmail:string;
    public technicalResponsibleEmail: string;
    public client: Client;
    public lat: number
    public lng: number

    constructor(
        labName: string,
        landName: string,
        phosphorAbsorbance:number,
        ph: number,
        city: string,
        field: string,
        createdAt: Date,
        acidity: number,
        phosphor: number,
        ctc: number,
        bases: number,
        depth:number,
        aluminumPercent:number,
        calciumPercent:number,
        potassiumPercent:number,
        magnesiumPercent:number,
        basesPercent:number,
        sand:number,
        sulfur: number,
        silt:number,
        carbon:number,
        clay:number,
        sodium:number,
        aluminum:number,
        calcium: number,
        potassium:number,
        magnesium: number,
        organicMatter: number,
        totalOrganicCarbon:number,
        potencialAcidity: number,
        phosphorValue: PhosphorValue | any,
        employeeEmail:string,
        technicalResponsibleEmail: string,
        client: Client | any,
        lat: number,
        lng: number,
        reportId?: string | undefined,

    ){

        this.organicMatter = organicMatter
        this.clay = clay;
        this.carbon = carbon;
        this.silt = silt;
        this.calcium = calcium;
        this.sodium = sodium;
        this.aluminum = aluminum;
        this.magnesium = magnesium;
        this.potassium = potassium;
        this.potencialAcidity = potencialAcidity;
        this.sulfur = sulfur;
        this.ph = ph;
        this.totalOrganicCarbon = totalOrganicCarbon;
        this.organicMatter = organicMatter
        this.clay = clay
        this.carbon = carbon
        this.silt = silt
        this.basesPercent = basesPercent;
        this.aluminumPercent = aluminumPercent;
        this.calciumPercent = calciumPercent
        this.potassiumPercent = potassiumPercent
        this.magnesiumPercent = magnesiumPercent
        this.landName =landName,
        this.labName = labName
        this.phosphorAbsorbance = phosphorAbsorbance
        this.city =city,
        this.field =field,
        this.createdAt =createdAt,
        this.acidity = acidity,
        this.phosphor =phosphor ,
        this.ctc =  ctc,
        this.bases = bases,
        this.sand = sand
        this.phosphorValue =phosphorValue,
        this.client =client,
        this.reportId =reportId
        this.depth = depth
        this.lat =  lat
        this.lng = lng
        this.employeeEmail = employeeEmail
        this.technicalResponsibleEmail = technicalResponsibleEmail

    }
   
}