import { Institution } from "../models/institution"
import { Role } from "../models/role"

export interface AdminSignUp{

    name: string
    email: string
    password: string
    contact?: string | null
    job: string | null | undefined
    role: Role,
    institution: Institution
    crea: string | null | undefined

}