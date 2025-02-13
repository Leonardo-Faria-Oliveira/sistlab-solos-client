import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'app-modal-signup-employee',
  standalone:true,
  templateUrl: '../../pages/components/modals/employee/modal-signup-employee/modal-signup-employee.component.html',
  styleUrls: ['../../pages/components/modals/employee/modal-signup-employee/modal-signup-employee.component.css'],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    ErrorModalComponent,
  ],
})
export class ModalSignupEmployeeComponent {

  @Output() modalSignUpEmployee = new EventEmitter<boolean>();

  @Output() employeeOutputForm = new EventEmitter();

  @Output() roleEmitter = new EventEmitter();

  @Output() functionEmitter = new EventEmitter();

  public hasError:boolean = false
  public error:ErrorHandler | null = null 
 
  public employeeSignUpForm = new FormGroup({
    email: new FormControl<string | undefined>(undefined),
    job: new FormControl<string | undefined>(undefined),
    contact: new FormControl<string | undefined>(undefined),
    name: new FormControl<string | undefined>(undefined),
    crea: new FormControl<string | null | undefined>(undefined)
  })

  public isTechnicalResponsible:boolean = false
  public isLabAdmin:boolean = false

  public setIsTechnicalResponsible(event:boolean){
    this.isTechnicalResponsible = event
  }

  public setIsLabAdmin(event:boolean){
    this.isLabAdmin = event
  }

  public setModalSignUpEmployee(event:boolean){
    this.modalSignUpEmployee.emit(event)
  }

  public emitForm(){
    this.employeeOutputForm.emit(this.employeeSignUpForm);
  }

  public emitRole(){
    this.roleEmitter.emit({
      technicalResponsible: this.isTechnicalResponsible,
      labAdmin: this.isLabAdmin
    });
  }

  public setHasError(hasError:boolean){
    this.hasError = hasError
  }

  public setError(error:ErrorHandler | null){
    this.error = error
  }


  public createEmployee(){
    if((this.employeeSignUpForm.value.email === undefined || 
    this.employeeSignUpForm.value.email === null ||
    this.employeeSignUpForm.value.email === "") 
    || 
    (this.employeeSignUpForm.value.name === undefined ||
    this.employeeSignUpForm.value.name === null ||
    this.employeeSignUpForm.value.name === "")
    || 
    (this.employeeSignUpForm.value.job === undefined ||
    this.employeeSignUpForm.value.job === null ||
    this.employeeSignUpForm.value.job === "")){

      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Nome, email e função são obrigatorios" 
      })
      setTimeout(() => this.setHasError(false), 1500)
      
    }
    else if(!this.employeeSignUpForm.value.email.toLocaleLowerCase().match(/^([a-z0-9]+[.]*[a-z0-9]+)@[a-z]+[.]+[a-z]+/g)){

      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "Campo deve ser um email" 
      })
      setTimeout(() => this.setHasError(false), 2000)

    }  
    else{

      if(this.isTechnicalResponsible){
        if(this.employeeSignUpForm.value.crea === undefined || 
          this.employeeSignUpForm.value.crea === null ||
          this.employeeSignUpForm.value.crea === "") {
            this.setHasError(true);
            this.setError({
              errorCode: 400,
              errorMessage: "CREA é obrigatório" 
            })
            setTimeout(() => this.setHasError(false), 2000)
      
          }
          else{
            this.emitRole()
            this.emitForm()
            this.functionEmitter.emit()
          }
          
      }else{
        this.emitRole()
        this.emitForm()
        this.functionEmitter.emit()
      }

    }

  }

  

}
