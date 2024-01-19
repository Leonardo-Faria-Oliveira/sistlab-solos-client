import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access } from '../login/access';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { LogInResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginFormService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/v1"

  

  httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
  
  }

  public logIn(access: Access): Observable<LogInResponse>{

    return this.httpClient.post<LogInResponse>(this.url+"/admin/auth/login",
     JSON.stringify({email:access.email, password: access.password}),
     this.httpOptions
    )



  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.error.errorMessage}`;
    }

    return throwError(() => new Error(error.error.errorMessage));
  };




}
