import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetClients } from 'src/app/interfaces/get-clients';
import { OrderBasic } from 'src/app/interfaces/order-basic';
import { SearchBasic } from 'src/app/interfaces/search-basic';
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

  public searchClients(search:SearchBasic): Observable<GetClients>{
      
    return this.httpClient.get<GetClients>(
      this.url+"/client/search/"+search.header+"/"+search.search,
      this.httpOptions
    ) 

  }

  public orderClients(filter:OrderBasic): Observable<GetClients>{

    return this.httpClient.get<GetClients>(this.url+"/client/"+filter.header+"/"+filter.orderBy,
      this.httpOptions
    ) 

  }

}
