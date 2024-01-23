import { Injectable,} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, throwError, } from 'rxjs';
import { Access } from '../models/access';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public access = new Access("", "", new Router())
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token: string | null = localStorage.getItem("loggedUserToken")
    
    if(request.url.includes("auth") || request.url.includes("create")){
      return next.handle(request)
    }
    if(token === null){
      return throwError(() => new Error("Não autorizado"))
    }

    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token.toString()}`
      } 
    })
    
    // console.log(request)
    return next.handle(request).pipe(catchError(error => {
      if(error instanceof HttpErrorResponse && error.status === 401){

        this.access.logOff

      }
      return throwError(() => new Error(error.message))

    }));
  }
}
 