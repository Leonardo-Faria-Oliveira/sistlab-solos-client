import { Component, Input, OnInit } from '@angular/core';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { ReportsService } from '../../services/reports.service';
import { catchError, throwError } from 'rxjs';
import {Report} from "../../models/report"
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/models/client';
// import { PhosphorValueConfigService } from '../../dashboard/reports/report-config/phosphor-value-config/phosphor-value-config.service';
import { PhosphorValue } from 'src/app/models/phosphorValue';
import { ScalesService } from '../../services/scales.service';
import { Scale } from 'src/app/models/scale';
import { Employee } from 'src/app/models/employee';
import { Access } from 'src/app/models/access';
import { Admin } from 'src/app/models/admin';
import { EmployeesService } from '../../services/employees.service';
import { ReportPdf } from 'src/app/models/reportPdf';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';
import { ReportConfigComponent } from './report-config/report-config.component';
import { ListReportsComponent } from './list-reports.component';
import { PhosphorValueConfigService } from 'src/app/services/phosphor-value-config.service';
import { ModalNewReportComponent } from './modal-new-report/modal-new-report.component';

@Component({
  selector: 'app-reports',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    ReportConfigComponent,
    ListReportsComponent,
    ModalNewReportComponent
  ],
  templateUrl: '../../pages/dashboard/reports/reports.component.html',
})
export class ReportsComponent  implements OnInit {

  constructor(
    private scalesService: ScalesService,
    private phosphorValueService : PhosphorValueConfigService,
    private clientsService: ClientsService,
    private employeesService: EmployeesService,
    private reportsService : ReportsService,
  ){}

  public clientList:Client[] = new Array<Client>()

  @Input({required:true}) isTechnicalResponsible!:boolean

  @Input({required:true}) account!:Employee | Admin

  public employee:Employee | undefined

  public technicalResponsibleList:Employee[] =  new Array()


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

  public reports:ReportPdf[] = new Array<ReportPdf>();

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


  public createReport(report:Report){
    // console.log(report)
    this.reportsService.createReport(report).pipe(catchError(err => {
        return throwError(() => new Error(err));
      }
    ))
    .subscribe(res => {
      console.log(res)
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
      
      this.isTechnicalResponsible ? null : this.employeesService.getEmployees().pipe(catchError(err => {
        return throwError(() => new Error(err));
      }))
      .subscribe(res => {
        res.employees.forEach(employee => {
          if(employee.crea !== null && employee.crea !== undefined)
            this.technicalResponsibleList.push(employee)
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

    this.employee = new Employee(
      this.account.name,
      this.account.email,
      this.account.password,
      this.account.job!, 
      this.account.role.name,
      this.account.crea, 
      this.account.contact
    )

// 
  }

  public setHasConfig(event:boolean){
    this.hasConfig = event
  }

  public sethasModalNewReport(event:boolean){
    this.hasModalNewReport = event
  }

}
