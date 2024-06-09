import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetReports } from 'src/app/interfaces/get-reports';
import { Report } from 'src/app/models/report';
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

  public createReport(report: Report):Observable<Report>{
    console.log(report)
    return this.httpClient.post<Report>(this.url+"/client/"+report.client.id+"/report/chemical_physical", JSON.stringify(report), this.httpOptions)
  
  }
  
}
