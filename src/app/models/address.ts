
export class Address{

    public zipCode?:number | null
    public city:string
    public country:string = "Brasil"
    public state:string = "Paraná"
    public number:number

    constructor(
        zipCode:number,
        city:string,
        number:number
    ){

        this.zipCode = zipCode
        this.city = city,
        this.number = number

    }

    


}