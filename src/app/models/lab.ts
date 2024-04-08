import { LabSignUp } from "../interfaces/lab-signup";
import { Address } from "./address";
import { Employee } from "./employee";

export class Lab implements LabSignUp{
    
    public id?: string | undefined
    public name: string;
    public email: string;
    public markUrl?: string | null | undefined;
    public contact?: string | null | undefined;
    public header1?: string | null | undefined;
    public header2?: string | null | undefined;
    public header3?: string | null | undefined;
    public address: Address;
    public employee: Employee;

    constructor(
        name: string,
        email: string,
        address: Address,
        employee: Employee,
        contact?: string | null | undefined,
    ){
        this.name = name
        this.email = email
        this.contact = contact,
        this.address = address,
        this.employee = employee
    }
    
}