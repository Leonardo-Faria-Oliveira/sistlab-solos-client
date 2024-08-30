import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPhosphorValue } from 'src/app/interfaces/get-phophor-values';
import { PhosphorValue } from 'src/app/models/phosphorValue';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhosphorValueConfigService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }

  public getLastPhosphorValue():Observable<GetPhosphorValue>{
    let labName = localStorage.getItem("labName");
    return this.httpClient.get<GetPhosphorValue>(this.url+"/phosphorValue/lab/"+labName, this.httpOptions)
  }


  public createPhosphorValues(arr_x: number[], arr_y:number[], absorbanceValue:number):Observable<void>{
    let labName = localStorage.getItem("labName");
    let formRequest = {
      X1: arr_x[0],
      X2: arr_x[1],
      X3: arr_x[2],
      X4: arr_x[3],
      X5: arr_x[4],
      Y1: arr_y[0],
      Y2: arr_y[1],
      Y3: arr_y[2],
      Y4: arr_y[3],
      Y5: arr_y[4],
      absorbanceValue: absorbanceValue
    }
    return this.httpClient.post<void>(this.url+"/phosphorValue/lab/"+labName+"/create", JSON.stringify(formRequest), this.httpOptions)
  }

}
