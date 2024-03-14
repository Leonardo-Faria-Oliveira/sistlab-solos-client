import { Admin } from "../models/admin"
import { Employee } from "../models/employee"

export interface GetAccountByEmail{

    account: Employee | Admin | null,
    labName: string,
    errorMessage: string | null

}