import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetReports } from 'src/app/interfaces/get-reports';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }


  public getReports(): Observable<GetReports>{
    let labName = localStorage.getItem("labName")
    return this.httpClient.get<GetReports>(this.url+"/lab/"+labName+"/reports",
      this.httpOptions
    ) 

  }
  
}
