import { Admin } from "../models/admin"
import { Employee } from "../models/employee"

export interface GetAccountByEmail{

    account: Employee | Admin | null
    errorMessage: string | null

}