import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access } from '../../models/access';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { LogInResponse } from '../../interfaces/login-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginFormService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  

  httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
  
  }

  public logIn(access: Access): Observable<LogInResponse>{

    return this.httpClient.post<LogInResponse>(this.url+"/admin/auth/login",
     JSON.stringify({email:access.email, password: access.password}),
     this.httpOptions
    )

  }

}
