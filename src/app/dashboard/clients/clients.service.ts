import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetClients } from 'src/app/interfaces/get-clients';
import { GetEmployees } from 'src/app/interfaces/get-employees';
import { Client } from 'src/app/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }


  public getClients(): Observable<GetClients>{

    return this.httpClient.get<GetClients>(this.url+"/client",
      this.httpOptions
    ) 

  }


  public createClient(client: Client):Observable<Client>{

    return this.httpClient.post<Client>(this.url+"/client", JSON.stringify(client), this.httpOptions)
  }
}
