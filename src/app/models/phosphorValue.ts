export class PhosphorValue{


    X1: number
    X2: number
    X3: number
    X4: number
    X5: number
    Y1: number
    Y2: number
    Y3: number
    Y4: number
    Y5: number
    absorbanceValue?:number 

    constructor(
        X1: number,
        X2: number,
        X3: number,
        X4: number,
        X5: number,
        Y1: number,
        Y2: number,
        Y3: number,
        Y4: number,
        Y5: number,
        absorbanceValue?:number 
    ){
        this.X1 = X1
        this.X2 = X2
        this.X3= X3
        this.X4 = X4
        this.X5 = X5
        this.Y1 = Y1
        this.Y2 = Y2
        this.Y3= Y3
        this.Y4 = Y4
        this.Y5 = Y5
        this.absorbanceValue = absorbanceValue
    }
}