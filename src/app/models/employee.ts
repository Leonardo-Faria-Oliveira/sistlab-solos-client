import { EmployeeSignIn } from "../interfaces/employee-signin";
import { Role } from "./role";

export class Employee implements EmployeeSignIn{

    public id?:string | undefined
    public name: string
    public email: string
    public password: string
    public active: boolean | null | undefined
    public contact?: string | null | undefined;
    public job: string | null | undefined;
    public role: Role;
    public labName?: string | null | undefined;
    public crea: string | null | undefined;
    institution = null

    constructor(
        name: string,
        email: string,
        password: string,
        job: string,
        roleName: string,
        crea: string | null | undefined,
        contact?: string | null | undefined,
        
    ){
        this.name = name
        this.email = email
        this.password = password
        this.contact = contact
        this.job = job
        this.role = new Role(roleName)
    }

}