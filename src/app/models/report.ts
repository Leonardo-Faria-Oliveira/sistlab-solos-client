import { GetEmployeeListFromReport } from "../interfaces/get-employee-list-from-report";
import { ChemicalAnalysis } from "./chemicalAnalysis";

import { Client } from "./client";
import { PhosphorValue } from "./phosphorValue";
import { PhysicalAnalysis } from "./physicalAnalysis";
import { Saturation } from "./saturation";

export class Report{

    public reportId?: string | undefined
    public landName: string | undefined;
    public city: string | undefined;
    public field: string | undefined;
    public createdAt: Date | undefined;
    public acidity: number | undefined;
    public depth:number | undefined;
    public phosphor: number | undefined;
    public phosphorAbsorbance:number | undefined;
    public ctc: number | undefined;
    public bases: number| undefined;
    public saturation: Saturation | undefined;
    public physicalAnalysis: PhysicalAnalysis | undefined;
    public chemicalAnalysis: ChemicalAnalysis | undefined;
    public phosphorValue: PhosphorValue | undefined;
    public micronutrients: number | undefined;
    public employeesList: GetEmployeeListFromReport[] | any;
    public client: Client | undefined;
    public lat: number | undefined
    public lng: number | undefined

    constructor(
        landName?: string,
        phosphorAbsorbance?:number,
        city?: string,
        field?: string,
        createdAt?: Date,
        acidity?: number,
        phosphor?: number,
        ctc?: number,
        bases?: number,
        depth?:number,
        saturation?: Saturation | any,
        physicalAnalysis?: PhysicalAnalysis | any,
        chemicalAnalysis?: ChemicalAnalysis | any,
        phosphorValue?: PhosphorValue | any,
        micronutrients?: number,
        employeesList?: GetEmployeeListFromReport[] | any,
        client?: Client | any,
        lat?: number,
        lng?: number,
        reportId?: string | undefined,

    ){

        this.landName =landName,
        this.phosphorAbsorbance = phosphorAbsorbance
        this.city =city,
        this.field =field,
        this.createdAt =createdAt,
        this.acidity = acidity,
        this.phosphor =phosphor ,
        this.ctc =  ctc,
        this.bases = bases,
        this.saturation = saturation,
        this.physicalAnalysis =physicalAnalysis,
        this.chemicalAnalysis =chemicalAnalysis,
        this.phosphorValue =phosphorValue,
        this.micronutrients = micronutrients,
        this.employeesList =employeesList ,
        this.client =client,
        this.reportId =reportId
        this.depth = depth
        this.lat =  lat
        this.lng = lng
    }
   

}