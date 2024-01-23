
export class Institution{

    idInstitution?: string | undefined
    name: string
    code?: string | undefined

    constructor(name:string){
        this.name = name
    }
}