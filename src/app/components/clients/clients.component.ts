import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/models/client';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { OrderBasic } from 'src/app/interfaces/order-basic';
import { SearchBasic } from 'src/app/interfaces/search-basic';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from '../modals/error-modal.component';
import { ListClientsComponent } from './list-clients.component';
import { ModalSignupClientComponent } from './modal-signup-client.component';
import { SearchClientComponent } from './search-client.component';

@Component({
  standalone:true,
  imports: [
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    ListClientsComponent,
    SearchClientComponent,
    ModalSignupClientComponent
  ],
  selector: 'app-clients',
  templateUrl: '../../pages/dashboard/clients/clients.component.html',
  styleUrls: ['../../pages/dashboard/clients/clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(
    private clientsService : ClientsService,
  ){}


  public clients:Client[] = new Array<Client>();

  public newClient:Client  | null = null;

  public modalSignUpClient:boolean = false

  public userEmail:string = localStorage.getItem("userEmail")!

  public hasSuccess:boolean = false
  public hasError:boolean = false
  public error:ErrorHandler | null = null 

  public isSearchMode:boolean = false

  public orderBy:string = "asc"

  public setHasError(hasError:boolean){
    this.hasError = hasError
  }

  public setError(error:ErrorHandler | null){
    this.error = error
  }

  public setSearchMode(searchMode:boolean){
    this.isSearchMode = searchMode
  }

  public ngOnInit(): void {
    this.clientsService.getClients()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {


      this.clients = res.clients;

     
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
      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "Campo deve ser um email" 
      })
      setTimeout(() => this.setHasError(false), 2000)
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.setModalSignUpClient(false)
      this.hasSuccess = true
      setTimeout(() => this.hasSuccess =false , 2000)
      setTimeout(() => window.location.reload() , 2000)
      
      
    })

  }

  
  public orderClients(event: OrderBasic){

    this.clientsService.orderClients(event) 
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.clients.length = 0
      
      res.clients.map(client =>{

        if(!(this.userEmail === client.email))
          this.clients.push(client)

      })
      
    })   

  }

  public searchClients(event:SearchBasic){

    this.clientsService.searchClients(event)   
    .pipe(catchError(err => {
      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "Campo deve ser um email" 
      })
      setTimeout(() => this.setHasError(false), 2000)
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.clients.length = 0
      
      res.clients.map(client =>{

        if(!(this.userEmail === client.email))
          this.clients.push(client)

      })
      
    })  

  }


}
