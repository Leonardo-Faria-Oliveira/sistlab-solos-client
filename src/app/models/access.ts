import { Router } from "@angular/router";
import { LogInRequest } from "../interfaces/login-request";

export class Access implements LogInRequest{

    email: String = "";
    password: String
    token?: String | undefined;
    loginPath?: String | undefined | null;

    constructor (
        email:String,
        password:String,
        private router: Router){

        this.email = email
        this.password = password
    
    }

    public isUserLogged() : boolean{

        return localStorage.getItem("loggedUserToken") === null ? true : false
      
    }

    public logOff(): void{

        this.loginPath = localStorage.getItem("loginPath")
        localStorage.clear()
        this.router.navigate([this.loginPath])

    }

}