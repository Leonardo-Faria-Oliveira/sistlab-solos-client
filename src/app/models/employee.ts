import { EmployeeSignUp } from "../interfaces/employee-signup";
import { Role } from "./role";

export class Employee implements EmployeeSignUp{

    public id?:string | undefined
    public name: string
    public email: string
    public password: string
    public contact?: string | null | undefined;
    public job: string;
    public role: Role;
    public labName?: string | null | undefined;
    institution = null

    constructor(
        name: string,
        email: string,
        password: string,
        job: string,
        roleName: "labAdminEmployee" | "employee",
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