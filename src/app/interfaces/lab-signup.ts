import { Address } from '../models/address'
import { Employee } from '../models/employee'

export interface LabSignUp{

    name:string
    email:string
    markUrl?:string | null
    contact?: string | null
    address: Address
    employee: Employee

}