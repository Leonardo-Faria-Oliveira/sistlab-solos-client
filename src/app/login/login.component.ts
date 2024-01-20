import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandler } from '../interfaces/error-handler';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private activatedRoute : ActivatedRoute,
    ) { }
  
    public hasError:boolean = false
    public error:ErrorHandler | null = null

    public route = this.activatedRoute.snapshot.routeConfig?.path
    public loginFormRole!: String
     
    public ngOnInit(): void {
      
      if(this.route === "admin/2212vfoq")
        this.loginFormRole = "admin"
      else 
        this.loginFormRole = "employee"
      
    }

    public setHasError(hasError:boolean){
      this.hasError = hasError
    }

    public setError(error:ErrorHandler | null){
      this.error = error
    }

}
