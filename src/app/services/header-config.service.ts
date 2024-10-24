import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lab } from 'src/app/models/lab';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderConfigService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': localStorage.getItem("loggedUserToken")!,
    })
  
  }


  public addHeaders(headers: File[]):Observable<Lab>{
    let labName = localStorage.getItem("labName");
    const formData = new FormData();
    console.log(typeof(headers[0]))
    formData.append('header1', headers[0]);
    formData.append('header2', headers[1]);
    formData.append('header3', headers[2]);

    return this.httpClient.put<Lab>(`${this.url}/lab/${labName}/headers`, formData);
  }
}
