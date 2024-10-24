import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetScale } from 'src/app/interfaces/get-scale';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScalesService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }

public getScaleByProperty(propertyName:string):Observable<GetScale>{

  return this.httpClient.get<GetScale>(this.url+"/scale/propertyName/"+propertyName,
    this.httpOptions
  ) 

}


}
