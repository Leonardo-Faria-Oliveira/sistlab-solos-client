import { LabSignUp } from "../interfaces/lab-signup";
import { Address } from "./address";
import { Employee } from "./employee";

export class Lab implements LabSignUp{
    
    public id?: String | undefined
    public name: String;
    public email: String;
    public markUrl?: String | null | undefined;
    public contact?: String | null | undefined;
    public address: Address;
    public employee: Employee;

    constructor(
        name: String,
        email: String,
        address: Address,
        employee: Employee,
        contact?: String | null | undefined,
    ){
        this.name = name
        this.email = email
        this.contact = contact,
        this.address = address,
        this.employee = employee
    }
    
}