import { Address } from '../models/address'
import { Employee } from '../models/employee'

export interface LabSignUp{

    name:String
    email:String
    markUrl?:String | null
    contact?: String | null
    address: Address
    employee: Employee

}