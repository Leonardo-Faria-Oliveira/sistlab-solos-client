import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandler } from '../../interfaces/error-handler';
import { Access } from '../../models/access';
import { catchError, throwError } from 'rxjs';
import { EmployeeLoginFormService } from './employee-login-form.service';

@Component({
  selector: 'employee-login-form',
  templateUrl: './employee-login-form.component.html',
  styleUrls: ['./employee-login-form.component.css']
})
export class EmployeeLoginFormComponent {

  constructor(
    private router: Router,
    private employeeLoginFormService: EmployeeLoginFormService
  ){}

  @Output() hasErrorEvent = new EventEmitter<boolean>();
  @Output() errorEvent = new EventEmitter<ErrorHandler>();

  public token:String | null = null

  public employeeLoginForm = new FormGroup({
    email: new FormControl<String | undefined>(undefined),
    password: new FormControl<String | undefined>(undefined)
  })

  public onSubmit(){
        
    if((this.employeeLoginForm.value.email === undefined || 
      this.employeeLoginForm.value.email === null ||
      this.employeeLoginForm.value.email === "") 
      || 
      (this.employeeLoginForm.value.password === undefined ||
      this.employeeLoginForm.value.password === null ||
      this.employeeLoginForm.value.password === "")){
  
        this.hasErrorEvent.emit(true)
        this.errorEvent.emit({
          errorCode: 400,
          errorMessage: "Email e senha são obrigatorios" 
        })
        setTimeout(() => this.hasErrorEvent.emit(false), 1500)
        
      }
      else if(this.employeeLoginForm.value.email.match(/^[\S]*@[\S].[\S]/g) == null){
  
        this.hasErrorEvent.emit(true);
        this.errorEvent.emit({
          errorCode: 400,
          errorMessage: "Campo deve ser um email" 
        })
        setTimeout(() => this.hasErrorEvent.emit(false), 2000)
  
      }
      else{
  
          this.employeeLoginFormService.logIn(
            new Access(this.employeeLoginForm.value.email, this.employeeLoginForm.value.password, this.router)
          ).pipe(catchError(err => {
              this.hasErrorEvent.emit(true);
              this.errorEvent.emit({
                errorCode: 400,
                errorMessage: err.error.errorMessage 
              })
              setTimeout(() => this.hasErrorEvent.emit(false), 2000)
              return throwError(() => new Error(err));
          }))
          .subscribe(res => {
            if(res != null){
              
              this.token = res.token;
              localStorage.setItem("loggedUserToken", this.token!.toString())
              localStorage.setItem("loginPath", "login")
              this.router.navigateByUrl(`/dashboard/${this.employeeLoginForm.value.email}`)
            }
  
          })
            
      }
  
    }
  
  }


