import { Role } from "../models/role"

export interface EmployeeSignUp{

    name: string
    email: string
    password: string
    contact?: string | null
    job: string
    role: Role,
    labName?: string |  null

}