import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChemicalAnalysisEmitter } from 'src/app/interfaces/chemical-analysis-emitter';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { GetEmployeeListFromReport } from 'src/app/interfaces/get-employee-list-from-report';
import { PhysicalAnalysisEmitter } from 'src/app/interfaces/physical-analysis-emitter';
import { ReportSettingsEmitter } from 'src/app/interfaces/report-settings-emitter';
import { Client } from 'src/app/models/client';
import { Employee } from 'src/app/models/employee';
import { PhosphorValue } from 'src/app/models/phosphorValue';
import { Report } from 'src/app/models/report';
import { ReportPdf } from 'src/app/models/reportPdf';
import { ErrorModalComponent } from '../../modals/error-modal.component';
import { ChemicalAnalysisComponent } from './chemical-analysis/chemical-analysis.component';
import { PhysicalAnalysisComponent } from './physical-analysis/physical-analysis.component';
import { ReportSettingsComponent } from './report-settings/report-settings.component';
import { ReportPreviewComponent } from './report-preview/report-preview.component';

@Component({
  selector: 'app-modal-new-report',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent, 
    ReactiveFormsModule,
    ChemicalAnalysisComponent,
    PhysicalAnalysisComponent,
    ReportSettingsComponent,
    ReportPreviewComponent
  ],
  templateUrl: '../../../pages/components/modals/report/modal-new-report/modal-new-report.component.html',
})
export class ModalNewReportComponent {

  @Input({required:true}) clientList:Client[] = new Array<Client>()
  @Input({required:true}) technicalResponsibleList:Employee[] = new Array<Employee>()
  @Input({required:false}) lastPhosphorValue:PhosphorValue | undefined
  @Input({required:false}) scales:number[][] | undefined
  @Input({required:true}) isTechnicalResponsible!: boolean
  @Input({required:true}) employee!:Employee

  @Output() reportConfigEmitter = new EventEmitter<boolean>();
  @Output() getPhosphorValueEmitter = new EventEmitter();
  @Output() getScalesEmitter = new EventEmitter();
  @Output() createReportEmitter = new EventEmitter<Report>();

  public depth:number = 20
  public reportDate: Date = new Date()
  public hasError:boolean = false
  public error:ErrorHandler | null = null 
  public hasMicronutrients:boolean = false
  public isReportColored:boolean = true
  public modalProgress:number = 1
  public report:ReportPdf = new ReportPdf()
  public employeeList:GetEmployeeListFromReport[] = new Array<GetEmployeeListFromReport>()
  public setReportConfigEmitter(){
    this.reportConfigEmitter.emit(false)
  }

  public setHasMicronutrients(){
    this.hasMicronutrients = !this.hasMicronutrients
  }

  public setIsReportColored(){
    this.isReportColored = !this.isReportColored
  }

  public next(){

    this.modalProgress++

    if(this.modalProgress === 2){
      this.getPhosphorValueEmitter.emit()
    }

    if(this.modalProgress === 5){
      this.getScalesEmitter.emit()
    }

  }

  public formatDate(date: Date): string {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
}

  public doubleNext(){
    this.modalProgress+=2
  }

  public back(){
    this.modalProgress--
  }

  public doubleBack(){
    this.modalProgress-=2
  }

  public getReportSettings(reportSettings:ReportSettingsEmitter){
    let client = this.clientList.find(client => client.id === reportSettings.clientId)
    if(client == null){
      this.setError({
        errorCode: 400,
        errorMessage: "Cliente inválido"
      })

    }else{

      let technicalResponsible
      if(!this.isTechnicalResponsible){
        
        technicalResponsible = this.clientList.find(technical => technical.id === reportSettings.technicalResponsibleId)
        
        if(technicalResponsible == null){
          this.setError({
            errorCode: 400,
            errorMessage: "Funcionário inválido"
          })
        }
    
        
      }

      this.report.employeeEmail = this.employee.email
      this.report.technicalResponsibleEmail = this.isTechnicalResponsible ? this.employee.email : technicalResponsible!.email
      this.report.landName = reportSettings.landName    
      this.report.field = reportSettings.field
      this.report.depth = reportSettings.depth
      this.report.city = reportSettings.city
      this.report.lat = reportSettings.lat
      this.report.lng = reportSettings.lng
      this.report.client = client

      console.log(this.report)
    
    }

  }

  public getPhysicalAnalysis(physicalAnalysisEmitter:PhysicalAnalysisEmitter){
 
    this.report.physicalAnalysis = physicalAnalysisEmitter.physicalAnalysis
    this.report.phosphor = physicalAnalysisEmitter.phosphor
    this.report.phosphorAbsorbance = physicalAnalysisEmitter.phosphorAbsorbance

    console.log(this.report)
    
  }

  public getChemicalAnalysis(chemicalAnalysisEmitter:ChemicalAnalysisEmitter){

    this.report.chemicalAnalysis = chemicalAnalysisEmitter.chemicalAnalysis
    this.report.ctc = chemicalAnalysisEmitter.ctc
    this.report.bases = chemicalAnalysisEmitter.bases
    this.report.acidity = chemicalAnalysisEmitter.acidity
    this.report.saturation = chemicalAnalysisEmitter.saturation
    console.log(this.report)
    

  }

  public setError(error:ErrorHandler){

    this.hasError = true
    this.error = error
    setTimeout(() =>  this.hasError = false, 2000)

  }

  public createReport(report:Report){

    this.createReportEmitter.emit(report)

  }

}
