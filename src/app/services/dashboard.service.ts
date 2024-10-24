import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetAccountByEmail } from '../interfaces/get-account-by-email';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }

  public getAccountByEmail(email:string): Observable<GetAccountByEmail>{

    const typeRole = this.getTypeRole()
    let urlPath = typeRole === "admin" ? "/admin/email/" : "/employee/email/"
    return this.httpClient.get<GetAccountByEmail>(this.url+urlPath+email,
      this.httpOptions
    ) 

  }


  public getTypeRole(): String{

    const loginPath = localStorage.getItem("loginPath")
    if(loginPath === "admin/2212vfoq"){
      return "admin"
    }
    else{
      return "employee"
    }

  }

}
