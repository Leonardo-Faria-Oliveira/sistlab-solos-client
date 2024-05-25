import { Component, OnInit } from '@angular/core';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { ReportsService } from './reports.service';
import { catchError, throwError } from 'rxjs';
import {Report} from "../../models/report"
import { ClientsService } from '../clients/clients.service';
import { Client } from 'src/app/models/client';
import { PhosphorValueConfigService } from './report-config/phosphor-value-config/phosphor-value-config.service';
import { PhosphorValue } from 'src/app/models/phosphorValue';
import { ScalesService } from '../charts/scales/scales.service';
import { Scale } from 'src/app/models/scale';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  implements OnInit {

  constructor(
    private scalesService: ScalesService,
    private phosphorValueService : PhosphorValueConfigService,
    private clientsService: ClientsService,
    private reportsService : ReportsService,
  ){}

  public clientList:Client[] = new Array<Client>()

  public lastPhosphorValue:PhosphorValue | undefined
  
  public properties:string[] = [
    "totalOrganicCarbon",
    "organicMatter",
    "ph",
    "potassium",
    "calcium",
    "magnesium",
    "aluminum",
    "acidity",
    "bases",
    "ctc",
    "sulfur",
    "sand",
    "silt",
    "clay",
    "sodium",
  ]

  public scales = new Array()

  public hasSuccess:boolean = false

  public hasConfig:boolean = false

  public hasModalNewReport:boolean = true

  public reports:Report[] = new Array<Report>();

  public hasError:boolean = false
  public error:ErrorHandler | null = null 


  public getLastPhosphorValue(){
    this.phosphorValueService.getLastPhosphorValue()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      this.lastPhosphorValue = res.phosphorValue
    })
  }

  public getScales(){
    this.properties.forEach(property => {
      this.getScaleByProperty(property)
    })
  }

  public getScaleByProperty(propertyName:string){

    this.scalesService.getScaleByProperty(propertyName)
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
    
      this.scales.push(
        [
          res.scale.lower,
          res.scale.low,
          res.scale.medium,
          res.scale.high,
          res.scale.higher
        ]
      )
    })

  }



  public ngOnInit(): void {
    
    Promise.all([
      this.clientsService.getClients().pipe(catchError(err => {
        return throwError(() => new Error(err));
      }))
      .subscribe(res => {
        res.clients.forEach(client => {
          this.clientList.push(client)
        });
      }),
  
      this.reportsService.getReports()
      .pipe(catchError(err => {
        return throwError(() => new Error(err));
      }))
      .subscribe(res => {
        this.reports = res.reports;
        console.log(this.reports)
      }),
      
      this.getScales()
    ])


// 
  }

  public setHasConfig(event:boolean){
    this.hasConfig = event
  }

  public sethasModalNewReport(event:boolean){
    this.hasModalNewReport = event
  }

}
