import { Router } from "@angular/router";
import { LogInRequest } from "../interfaces/login-request";
import { Injectable } from "@angular/core";


export class Access implements LogInRequest{

    email: string = "";
    password: string
    token?: string | undefined;
    loginPath?: string | undefined | null;

    constructor (
        email:string,
        password:string,
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