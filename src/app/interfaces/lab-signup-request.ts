export interface LabSignUpRequest{

    name:String
    email:String
    markUrl?:String | null
    contact?: String | null
    city:String
    country:"Brasil"
    state:"Paraná"
    number:number
    zipCode?: number | null
	pricingName: String
	employeeName: String
	employeeEmail: String
	password: String
	employeeContact: String
	employeeJob: String
  
}