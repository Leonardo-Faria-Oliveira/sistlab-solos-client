import { Component, OnInit } from '@angular/core';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { ReportsService } from './reports.service';
import { catchError, throwError } from 'rxjs';
import {Report} from "../../models/report"

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  implements OnInit {

  constructor(
    private reportsService : ReportsService,
  ){}

  public hasSuccess:boolean = false

  public hasConfig:boolean = false

  public reports:Report[] = new Array<Report>();

  public hasError:boolean = false
  public error:ErrorHandler | null = null 

  public ngOnInit(): void {
    
    this.reportsService.getReports()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      

      this.reports = res.reports;
      console.log(this.reports)
     
    })
// 
  }

  public setHasConfig(event:boolean){
    this.hasConfig = event
  }

}
