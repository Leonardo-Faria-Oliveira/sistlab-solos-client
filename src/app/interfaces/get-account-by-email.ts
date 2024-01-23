import { Admin } from "../models/admin"
import { Employee } from "../models/employee"

export interface GetAccountByEmail{

    account: Admin | Employee | null
    errorMessage: string | null

}