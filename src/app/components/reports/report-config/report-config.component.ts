import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../../modals/error-modal.component';
import { PhosphorValueConfigComponent } from './phosphor-config/phosphor-value-config.component';
import { HeaderConfigComponent } from './header/header-config.component';

@Component({
  selector: 'app-report-config',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    PhosphorValueConfigComponent,
    HeaderConfigComponent
  ],
  templateUrl: '../../../pages/components/modals/report/report-config/report-config.component.html',
  styleUrls: ['../../../pages/components/modals/report/report-config/report-config.component.css']
})
export class ReportConfigComponent {

  @Output() reportConfigEmitter = new EventEmitter<boolean>();

  public modalReportConfig:number = 1

  public setReportConfigEmitter(){
    this.reportConfigEmitter.emit(false)
  }

  public setModalReportConfig(modalNumber:number){
    this.modalReportConfig = modalNumber
  }

}
