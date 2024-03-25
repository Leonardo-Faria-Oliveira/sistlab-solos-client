import { Component } from '@angular/core';
import { ErrorHandler } from '../interfaces/error-handler';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstAccessService } from './first-access.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-first-access',
  templateUrl: './first-access.component.html',
  styleUrls: ['./first-access.component.css']
})
export class FirstAccessComponent {

  constructor(
    private firstAccessService: FirstAccessService,
    private router:Router
  ){}

  public hasError:boolean = false
  public error:ErrorHandler | null = null 

  public success:boolean = false

  public step:number = 1

  public setHasError(hasError:boolean){
    this.hasError = hasError
  }

  public setError(error:ErrorHandler | null){
    this.error = error
  }

  public firstAccessForm = new FormGroup({
    email: new FormControl<string | undefined>(undefined),
    password: new FormControl<string | undefined>(undefined),
    confirmPassword: new FormControl<string | undefined>(undefined),
  })

  public next(){
    if(!this.firstAccessForm.value.email?.toLocaleLowerCase().match(/^([a-z0-9]+[.]*[a-z0-9]+)@[a-z]+[.]+[a-z]+/g)){

      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Preencha o email" 
      })
      setTimeout(() => this.setHasError(false), 1500)

    }
    else
    this.step++;
  }

  public back(){
    this.step--;
  }

  public backLogin(){
    this.router.navigate(['login'])
  }

  public onSubmit(){

    if(this.firstAccessForm.value.password != this.firstAccessForm.value.confirmPassword){
            this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Senhas devem ser iguais" 
      })
      setTimeout(() => this.setHasError(false), 1500)
    }
    if(this.firstAccessForm.value.password === undefined)
    {
      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Preencha com a nova senha" 
      })
      setTimeout(() => this.setHasError(false), 1500)
    }
    if(this.firstAccessForm.value.password === null)
    {
      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Preencha com a senha" 
      })
      setTimeout(() => this.setHasError(false), 1500)
    }
    else if(this.firstAccessForm.value.password!.length < 7){

      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Senha deve possuir no mínimo 7 caracteres" 
      })
      setTimeout(() => this.setHasError(false), 1500)
      
    }
    else if(!this.firstAccessForm.value.password!.match(/^[a-z]+[0-9]+/g)){
      this.setHasError(true)
      this.setError({
        errorCode: 400,
        errorMessage: "Senha deve possuir somente letras minúsculas e numeros" 
      })
      setTimeout(() => this.setHasError(false), 1500)
    }
    else{
      this.firstAccessService.updateEmployee(
        this.firstAccessForm.value.email!, 
        this.firstAccessForm.value.password!).pipe(catchError(err => {
          try {
            this.setHasError(true);
            this.setError({
              errorCode: 400,
              errorMessage: err.error.errorMessage ?? "Houve um erro"
            })
            setTimeout(() => this.setHasError(false), 2000)
          } catch (error:any) {
            this.setHasError(true);
            this.setError({
              errorCode: 400,
              errorMessage: err.error.errorMessage ?? "Houve um erro"
            })
            setTimeout(() => this.setHasError(false), 2000)
          } finally{
            return throwError(() => new Error(err));
          }
          
      }))
      .subscribe(res => {
        console.log(res)
        if(res != null){
          
          this.next()
          setTimeout(() => this.router.navigate(['login']), 2000)

        }

      })
    }


  }

}
