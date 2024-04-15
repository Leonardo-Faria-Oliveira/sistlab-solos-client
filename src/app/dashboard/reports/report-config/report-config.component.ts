import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report-config',
  templateUrl: './report-config.component.html',
  styleUrls: ['./report-config.component.css']
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
