import { EmployeeSignUp } from "../interfaces/employee-signup";

export class Employee implements EmployeeSignUp{

    public id?:String | undefined
    public name: String
    public email: String
    public password: String
    public contact?: String | null | undefined;
    public job: String;
    public roleName: "labAdminEmployee" | "employee";
    public labName?: String | null | undefined;

    constructor(
        name: String,
        email: String,
        password: String,
        job: String,
        roleName: "labAdminEmployee" | "employee",
        contact?: String | null | undefined,
    ){
        this.name = name
        this.email = email
        this.password = password
        this.contact = contact
        this.job = job
        this.roleName = roleName
    }

}