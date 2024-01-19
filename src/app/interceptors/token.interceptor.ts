import { Injectable,} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError, } from 'rxjs';
import { Access } from '../login/access';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private access: Access
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token: String | undefined = this.access.token

    if(token === undefined){
      return throwError("Não autorizado")
    }

    
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer: ${token}`,
        token: `${token}`
      }
    })
    
    return next.handle(request).pipe(catchError(error => {

      if(error instanceof HttpErrorResponse && error.status === 401){

        this.access.logOff

      }
      return throwError(error.message)

    }));
  }
}
 