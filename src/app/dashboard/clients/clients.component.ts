import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ClientsService } from './clients.service';
import { Client } from 'src/app/models/client';
import { ErrorHandler } from 'src/app/interfaces/error-handler';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(
    private clientsService : ClientsService,
  ){}


  public clients:Client[] = new Array<Client>();

  public newClient:Client  | null = null;

  public modalSignUpClient:boolean = false

  public hasSuccess:boolean = false
  public hasError:boolean = false
  public error:ErrorHandler | null = null 

  public setHasError(hasError:boolean){
    this.hasError = hasError
  }

  public setError(error:ErrorHandler | null){
    this.error = error
  }

  public ngOnInit(): void {
    this.clientsService.getClients()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      
      let limit  = res.clients.length < 5 ? res.clients.length : 5
      for(let i = 0; i<limit; i++){

        this.clients.push(res.clients[i])
      
      }
     
    })

  }

  public setModalSignUpClient(event:boolean){

    this.modalSignUpClient = event

  }



  public setClientForm(form:FormGroup){
    
    const labName = localStorage.getItem("labName")

    this.newClient = {
      name: form.value.name,
      email: form.value.email,
      city: form.value.city,
      contact: form.value.contact,
      labName: labName!,
    }

  }
  

  public createClient(){

    this.clientsService.createClient(this.newClient!)
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.setModalSignUpClient(false)
      this.hasSuccess = true
      setTimeout(() => this.hasSuccess =false , 2000)
      setTimeout(() => window.location.reload() , 2000)
      
      
    })

  }

}
