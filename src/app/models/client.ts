

export class Client{

    public id?:string | undefined
    public name: string
    public email: string
    public city: string
    public contact?: string | null | undefined;
    public labName?:string

    constructor(
        name: string,
        email: string,
        city:string,
        id?:string,
        contact?:string,
        labName?:string
    ){
        this.id = id
        this.name = name
        this.email = email
        this.city = city
        this.contact = contact
        this.labName = labName
    }




}