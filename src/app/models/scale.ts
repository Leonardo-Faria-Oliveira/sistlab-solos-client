export class Scale{
    propertyName:string
    higher:number
    high:number
    medium:number
    low:number
    lower:number
    createdAt: Date

    constructor(    
        propertyName:string,
        higher:number,
        high:number,
        medium:number,
        low:number,
        lower:number,
        createdAt: Date
    ){
        this.propertyName = propertyName
        this.higher = higher
        this.high = high
        this.medium = medium
        this.low = low
        this.lower = lower
        this.createdAt = createdAt
    }
}