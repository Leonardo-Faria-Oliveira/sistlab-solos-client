export interface LabSignUpRequest{

    name:string
    email:string
    markUrl?:string | null
    contact?: string | null
    city:string
    country:"Brasil"
    state:"Paraná"
    number:number
    zipCode?: number | null
	pricingName: string
	employeeName: string
	employeeEmail: string
	password: string
	employeeContact: string
	employeeJob: string
  
}