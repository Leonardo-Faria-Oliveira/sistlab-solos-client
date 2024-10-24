import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { ReportSettingsEmitter } from 'src/app/interfaces/report-settings-emitter';
import { Client } from 'src/app/models/client';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-report-settings',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
  ],
  templateUrl: '../../../../pages/components/modals/report/modal-new-report/report-settings/report-settings.component.html',
})
export class ReportSettingsComponent {

  @Input({required:true}) clientList:Client[] = new Array<Client>()

  @Input({required:true}) technicalResponsibleList:Employee[] | null = new Array()


  @Input({required:true}) isTechnicalResponsible!:boolean

  public hasMicronutrients:boolean = false
  public isReportColored:boolean = true

  @Output() nextEmitter = new EventEmitter<void>();
  @Output() formEmitter = new EventEmitter<ReportSettingsEmitter>();
  @Output() errorEmitter = new EventEmitter<ErrorHandler>();

  public reportSettingsForm = new FormGroup({
    clientId: new FormControl(),
    technicalResponsibleId: new FormControl(),
    landName: new FormControl<string | undefined>(undefined),
    field: new FormControl<string | undefined>(undefined),
    city: new FormControl<string | undefined>(undefined),
    depth: new FormControl<string | undefined>(undefined),
    lat: new FormControl<string | undefined>(undefined),
    lng: new FormControl<string | undefined>(undefined)

  })
  
  public setHasMicronutrients(){
    this.hasMicronutrients = !this.hasMicronutrients
  }

  public setIsReportColored(){
    this.isReportColored = !this.isReportColored
  }

  public next(){
    if(
    !(this.reportSettingsForm.value.clientId === undefined ||
      this.reportSettingsForm.value.clientId === null)
    ||
    !(this.reportSettingsForm.value.landName === undefined ||
      this.reportSettingsForm.value.landName === null ||
      this.reportSettingsForm.value.landName === " ")
    ||
    !(this.reportSettingsForm.value.field === undefined ||
      this.reportSettingsForm.value.field === null ||
      this.reportSettingsForm.value.field === " ")
    ||
    !(this.reportSettingsForm.value.depth === undefined ||
      this.reportSettingsForm.value.depth === null ||
      parseFloat(this.reportSettingsForm.value.depth) <= 0)
    ||
    !(this.reportSettingsForm.value.city === undefined ||
      this.reportSettingsForm.value.city === null ||
      this.reportSettingsForm.value.city === " ")
    ||
    !(this.reportSettingsForm.value.lat === undefined ||
      this.reportSettingsForm.value.lat === null ||
      parseFloat(this.reportSettingsForm.value.lat!) <= 0)
    ||
    !(this.reportSettingsForm.value.lng === undefined ||
      this.reportSettingsForm.value.lng === null ||
      parseFloat(this.reportSettingsForm.value.lng!) <= 0)
    ){

      this.formEmitter.emit({
        clientId: this.reportSettingsForm.value.clientId!,
        technicalResponsibleId:this.reportSettingsForm.value.technicalResponsibleId!,
        landName: this.reportSettingsForm.value.landName!,
        field: this.reportSettingsForm.value.field!,
        depth: parseFloat(this.reportSettingsForm.value.depth!),
        city: this.reportSettingsForm.value.city!,
        lat: parseFloat(this.reportSettingsForm.value.lat!),
        lng: parseFloat(this.reportSettingsForm.value.lng!)
      })
      this.nextEmitter.emit()
    }else{
      this.errorEmitter.emit({
        errorCode: 400,
        errorMessage: "Preencha todos os campos" 
      })
    }
   
  }

}
