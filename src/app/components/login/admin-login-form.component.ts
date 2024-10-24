import { Component, Output, EventEmitter } from '@angular/core';
import { AdminLoginFormService } from '../../services/admin-login-form.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Access } from '../../models/access';
import { Router } from '@angular/router';
import { ErrorHandler } from '../../interfaces/error-handler';
import { catchError, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'admin-login-form',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/forms/admin-login-form/admin-login-form.component.html',
})
export class AdminLoginFormComponent{
 
  constructor(
    private adminLoginFormService: AdminLoginFormService,
    private router: Router
  ){}
  
  @Output() hasErrorEvent = new EventEmitter<boolean>();
  @Output() errorEvent = new EventEmitter<ErrorHandler>();

  public token:string | null = null
 
  public adminLoginForm = new FormGroup({
    email: new FormControl<string | undefined>(undefined),
    password: new FormControl<string | undefined>(undefined)
  })



  public onSubmit(){
    
    if((this.adminLoginForm.value.email === undefined || 
    this.adminLoginForm.value.email === null ||
    this.adminLoginForm.value.email === "") 
    || 
    (this.adminLoginForm.value.password === undefined ||
    this.adminLoginForm.value.password === null ||
    this.adminLoginForm.value.password === "")){

      this.hasErrorEvent.emit(true)
      this.errorEvent.emit({
        errorCode: 400,
        errorMessage: "Email e senha são obrigatorios" 
      })
      setTimeout(() => this.hasErrorEvent.emit(false), 1500)
      
    }
    else if(this.adminLoginForm.value.email.match(/^[\S]*@[\S].[\S]/g) == null){

      this.hasErrorEvent.emit(true);
      this.errorEvent.emit({
        errorCode: 400,
        errorMessage: "Campo deve ser um email" 
      })
      setTimeout(() => this.hasErrorEvent.emit(false), 2000)

    }
    else{

        this.adminLoginFormService.logIn(
          new Access(this.adminLoginForm.value.email, this.adminLoginForm.value.password, this.router)
        ).pipe(catchError(err => {
            try {
              this.hasErrorEvent.emit(true);
              this.errorEvent.emit({
                errorCode: 400,
                errorMessage: err.error.errorMessage ?? "Houve um erro"
              })
              setTimeout(() => this.hasErrorEvent.emit(false), 2000)
            } catch (error:any) {
              this.hasErrorEvent.emit(true);
              this.errorEvent.emit({
                errorCode: 400,
                errorMessage: "Houve um erro, tente novamente"
              })
              setTimeout(() => this.hasErrorEvent.emit(false), 2000)
            } finally{
              return throwError(() => new Error(err));
            }
            
        }))
        .subscribe(res => {
          if(res != null){
            
            this.token = res.token;
            localStorage.setItem("loggedUserToken", this.token!)
            localStorage.setItem("userEmail", this.adminLoginForm.value.email!)
            console.log(localStorage.getItem("loggedUserToken"))
            localStorage.setItem("loginPath", "admin/2212vfoq")
            this.router.navigate([`/dashboard/${this.adminLoginForm.value.email}`])
          }

        })
        
          
    }

  }

}
