import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandler } from '../../interfaces/error-handler';
import { Access } from '../../models/access';
import { catchError, throwError } from 'rxjs';
import { EmployeeLoginFormService } from '../../services/employee-login-form.service';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'employee-login-form',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/forms/employee-login-form/employee-login-form.component.html',
})
export class EmployeeLoginFormComponent {

  constructor(
    private router: Router,
    private employeeLoginFormService: EmployeeLoginFormService
  ){}

  @Output() hasErrorEvent = new EventEmitter<boolean>();
  @Output() errorEvent = new EventEmitter<ErrorHandler>();

  public token:string | null = null

  public employeeLoginForm = new FormGroup({
    email: new FormControl<string | undefined>(undefined),
    password: new FormControl<string | undefined>(undefined)
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
              localStorage.setItem("userEmail", this.employeeLoginForm.value.email!)
              localStorage.setItem("loginPath", "login")
              this.router.navigateByUrl(`/dashboard/${this.employeeLoginForm.value.email}`)
            }
  
          })
            
      }
  
    }
  
  }


