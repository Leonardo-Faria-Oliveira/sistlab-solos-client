import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Access } from '../models/access';
import { Observable } from 'rxjs';
import { LogInResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginFormService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl


  httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
  
  }

  public logIn(access: Access): Observable<LogInResponse>{

    return this.httpClient.post<LogInResponse>(this.url+"/employee/auth/login",
     JSON.stringify({email:access.email, password: access.password}),
     this.httpOptions
    )

  }

}
