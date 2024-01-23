import { Institution } from "../models/institution"
import { Role } from "../models/role"

export interface AdminSignUp{

    name: string
    email: string
    password: string
    contact?: string | null
    role: Role,
    institution: Institution

}