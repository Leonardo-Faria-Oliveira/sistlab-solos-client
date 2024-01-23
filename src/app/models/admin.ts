import { AdminSignUp } from "../interfaces/admin-signup";
import { Institution } from "./institution";
import { Role } from "./role";

export class Admin implements AdminSignUp{
    
    public id: string | undefined
    public name: string
    public email: string
    public password: string
    public contact?: string | null | undefined
    public role = new Role("admin")
    public institution: Institution

    constructor(
    name: string,
    email: string,
    password: string,
    roleName: string,
    institutionName: string,
    contact?: string | null | undefined
    ){

        this.name = name
        this.email = email
        this.password = password
        this.institution = new Institution(institutionName)
        this.contact = contact

    }

    

}