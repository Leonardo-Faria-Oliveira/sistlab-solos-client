import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChemicalAnalysisEmitter } from 'src/app/interfaces/chemical-analysis-emitter';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { PhysicalAnalysisEmitter } from 'src/app/interfaces/physical-analysis-emitter';
import { ReportSettingsEmitter } from 'src/app/interfaces/report-settings-emitter';
import { ChemicalAnalysis } from 'src/app/models/chemicalAnalysis';
import { Client } from 'src/app/models/client';
import { PhosphorValue } from 'src/app/models/phosphorValue';
import { Report } from 'src/app/models/report';

@Component({
  selector: 'app-modal-new-report',
  templateUrl: './modal-new-report.component.html',
  styleUrls: ['./modal-new-report.component.css']
})
export class ModalNewReportComponent {

  @Input({required:true}) clientList:Client[] = new Array<Client>()
  @Input({required:false}) lastPhosphorValue:PhosphorValue | undefined
  @Input({required:false}) scales:number[][] | undefined

  @Output() reportConfigEmitter = new EventEmitter<boolean>();
  @Output() getPhosphorValueEmitter = new EventEmitter();
  @Output() getScalesEmitter = new EventEmitter();

  public clientName:string = "Gabriel Pereira"
  public city:string = "Maringá"
  public depth:number = 20
  public reportDate:string = "22/07/2023"
  public landName:string = "Sítio Iguatemi"
  public hasError:boolean = false
  public error:ErrorHandler | null = null 
  public hasMicronutrients:boolean = false
  public isReportColored:boolean = true
  public modalProgress:number = 1
  public report:Report = new Report()
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

}
