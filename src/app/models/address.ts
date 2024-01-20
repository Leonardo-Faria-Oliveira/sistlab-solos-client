
export class Address{

    public zipCode?:number | null
    public city:String
    public country:String = "Brasil"
    public state:String = "Paraná"
    public number:number

    constructor(
        zipCode:number,
        city:String,
        number:number
    ){

        this.zipCode = zipCode
        this.city = city,
        this.number = number

    }

    


}