import { AdminSignIn } from "../interfaces/admin-signin";
import { Institution } from "./institution";
import { Role } from "./role";

export class Admin implements AdminSignIn{
    
    public id: string | undefined
    public name: string
    public email: string
    public password: string
    public job: string | null | undefined;
    public contact?: string | null | undefined
    public role = new Role("admin")
    public institution: Institution
    public crea: string | null | undefined;

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