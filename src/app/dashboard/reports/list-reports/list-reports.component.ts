import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report } from "../../../models/report";
import { ReportPdf } from 'src/app/models/reportPdf';


@Component({
  selector: 'app-list-reports',
  templateUrl: './list-reports.component.html',
  styleUrls: ['./list-reports.component.css']
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
