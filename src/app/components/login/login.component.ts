import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandler } from '../../interfaces/error-handler';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';
import { AdminLoginFormComponent } from './admin-login-form.component';
import { EmployeeLoginFormComponent } from './employee-login-form.component';

@Component({
  selector: 'login',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    AdminLoginFormComponent,
    EmployeeLoginFormComponent
  ],
  templateUrl: '../../pages/login/login.component.html', 
})
export class LoginComponent implements OnInit{

  constructor(
    private activatedRoute : ActivatedRoute,
    ) { }
  
    public hasError:boolean = false
    public error:ErrorHandler | null = null

    public route = this.activatedRoute.snapshot.routeConfig?.path
    public loginFormRole!: string
     
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
