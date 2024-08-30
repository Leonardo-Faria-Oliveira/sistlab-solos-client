import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReportPdf } from 'src/app/models/reportPdf';
import { ErrorModalComponent } from '../modals/error-modal.component';


@Component({
  selector: 'app-list-reports',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
  ],
  templateUrl: '../../pages/components/modals/report/list-reports/list-reports.component.html', 
})
export class ListReportsComponent {

  @Input({required:true}) reports:ReportPdf[] = new Array<ReportPdf>();

  @Output() configEmitter = new EventEmitter<boolean>();

  @Output() modalNewReportEmitter = new EventEmitter<boolean>();

  public dateParser(date:Date) : string{
    let p = date.toString().split("-")
    let a = p[0]
    let r = p[1]
    let s = p[2]
    let e = s.slice(0,2)
    
    return e+"/"+r+"/"+a
  }

  public nameParser(landName:string) : string{
    
    let pa = landName.slice(0,1)
    let r = pa.toUpperCase()
    let s = landName.split("")
    let er = landName.substring(1, s.length)

    return r+er.slice(0, 20)
  }

  public setConfigEmitter(){
    this.configEmitter.emit(true)
  }

  public sethasModalNewReport(){
    this.modalNewReportEmitter.emit(true)
  }

}
