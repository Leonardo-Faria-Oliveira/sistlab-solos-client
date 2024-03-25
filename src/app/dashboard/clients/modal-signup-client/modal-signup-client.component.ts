import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorHandler } from 'src/app/interfaces/error-handler';

@Component({
  selector: 'app-modal-signup-client',
  templateUrl: './modal-signup-client.component.html',
  styleUrls: ['./modal-signup-client.component.css']
})
export class ModalSignupClientComponent {

  
  @Output() modalSignUpClient = new EventEmitter<boolean>();

  @Output() clientOutputForm = new EventEmitter();


  @Output() functionEmitter = new EventEmitter();

  public hasError:boolean = false
  public error:ErrorHandler | null = null 
 
  public clientSignUpForm = new FormGroup({
    email: new FormControl<string | undefined>(undefined),
    city: new FormControl<string | undefined>(undefined),
    contact: new FormControl<string | undefined>(undefined),
    name: new FormControl<string | undefined>(undefined)
  })


  public setModalSignUpClient(event:boolean){
    this.modalSignUpClient.emit(event)
  }

  public emitForm(){
    this.clientOutputForm.emit(this.clientSignUpForm);
  }


  public setHasError(hasError:boolean){
    this.hasError = hasError
  }

  public setError(error:ErrorHandler | null){
    this.error = error
  }


  public createClient(){
    if((this.clientSignUpForm.value.email === undefined || 
    this.clientSignUpForm.value.email === null ||
    this.clientSignUpForm.value.email === "") 
    || 
    (this.clientSignUpForm.value.name === undefined ||
    this.clientSignUpForm.value.name === null ||
    this.clientSignUpForm.value.name === "")
    || 
    (this.clientSignUpForm.value.city === undefined ||
    this.clientSignUpForm.value.city === null ||
    this.clientSignUpForm.value.city === "")){

      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Nome, email e função são obrigatorios" 
      })
      setTimeout(() => this.setHasError(false), 1500)
      
    }
    else if(!this.clientSignUpForm.value.email.toLocaleLowerCase().match(/^([a-z0-9]+[.]*[a-z0-9]+)@[a-z]+[.]+[a-z]+/g)){

      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "Campo deve ser um email" 
      })
      setTimeout(() => this.setHasError(false), 2000)

    }  
    else{

      this.emitForm()
      this.functionEmitter.emit()
      
    }

  }


}
