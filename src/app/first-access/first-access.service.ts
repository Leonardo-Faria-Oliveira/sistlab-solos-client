import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstAccessService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }

  
  public updateEmployee(email: string, password:string):Observable<Employee>{
  
    return this.httpClient.patch<Employee>(this.url+"/employee/first-access/"+email, password, this.httpOptions)
  }
}
