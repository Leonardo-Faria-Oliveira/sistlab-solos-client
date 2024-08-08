import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Lab } from 'src/app/models/lab';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabsService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }

  public createLab(lab: Lab):Observable<Lab>{
    const formatedLab = {
      employeeJob: lab.employee.job,
      password: lab.employee.password,
      name: lab.name,
      employeeEmail: lab.employee.email,
      employeeName: lab.employee.name,
      pricingName: "basico",
      number: lab.address.number,
      country: lab.address.country,
      state: lab.address.state,
      city: lab.address.city,
      email: lab.email
    }
    return this.httpClient.post<Lab>(this.url+"/lab/create", JSON.stringify(formatedLab), this.httpOptions)
  }
}
