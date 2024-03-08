import { Role } from "../models/role"

export interface EmployeeSignUp{

    name: string
    email: string
    password: string
    contact?: string | null
    job: string | null | undefined
    role: Role,
    labName?: string |  null

}