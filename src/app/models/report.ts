import { GetEmployeeListFromReport } from "../interfaces/get-employee-list-from-report";
import { LabSignUp } from "../interfaces/lab-signup";
import { Address } from "./address";
import { Client } from "./client";
import { Employee } from "./employee";

export class Report{

    public reportId?: string | undefined
    public landName: string;
    public city: string;
    public field: string;
    public createdAt: Date;
    public acidity: number;
    public depth:number;
    public phosphor: number;
    public ctc: number;
    public bases: number;
    public saturation: any;
    public physicalAnalysis: any;
    public chemicalAnalysis: any;
    public phosphorValue: any;
    public micronutrients: number;
    public employeesList: GetEmployeeListFromReport[];
    public client: Client;

    constructor(
        landName: string,
        city: string,
        field: string,
        createdAt: Date,
        acidity: number,
        phosphor: number,
        ctc: number,
        bases: number,
        depth:number,
        saturation: any,
        physicalAnalysis: any,
        chemicalAnalysis: any,
        phosphorValue: null,
        micronutrients: number,
        employeesList: GetEmployeeListFromReport[],
        client: Client,
        reportId?: string | undefined
    ){

        this.landName =landName,
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
    }
   

}