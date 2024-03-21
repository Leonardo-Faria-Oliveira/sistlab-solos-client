import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEmployee } from 'src/app/interfaces/create-employee';
import { OrderBasic } from 'src/app/interfaces/order-basic';
import { GetEmployees } from 'src/app/interfaces/get-employees';
import { SearchBasic } from 'src/app/interfaces/search-basic';
import { Employee } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }


  public getEmployees(): Observable<GetEmployees>{

    return this.httpClient.get<GetEmployees>(this.url+"/employee",
      this.httpOptions
    ) 

  }


  public createEmployee(employee: CreateEmployee):Observable<Employee>{
    let path = employee.roleName.includes("echnical") ? "/technical" : ""
    return this.httpClient.post<Employee>(this.url+"/employee"+path, JSON.stringify(employee), this.httpOptions)
  }

  public searchEmployees(search:SearchBasic): Observable<GetEmployees>{
      
    return this.httpClient.get<GetEmployees>(
      this.url+"/employee/search/"+search.header+"/"+search.search,
      this.httpOptions
    ) 

  }

  public orderEmployees(filter:OrderBasic): Observable<GetEmployees>{

    return this.httpClient.get<GetEmployees>(this.url+"/employee/"+filter.header+"/"+filter.orderBy,
      this.httpOptions
    ) 

  }

}
