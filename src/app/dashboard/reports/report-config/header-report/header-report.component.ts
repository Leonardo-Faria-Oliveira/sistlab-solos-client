import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-report',
  templateUrl: './header-report.component.html',
  styleUrls: ['./header-report.component.css']
})
export class HeaderReportComponent {

  @Output() modalReportConfig = new EventEmitter<number>();

  public hasUploaded:boolean = false

  public headerForm = new FormGroup({
    header1: new FormControl<File | undefined>(undefined),
    header2: new FormControl<File | undefined>(undefined),
    header3: new FormControl<File | undefined>(undefined),
  })

  public setModalReportConfig(){
    this.modalReportConfig.emit(1)
  }

  public setHasUploaded(){
    if(this.headerForm.value.header1 !== null 
      && this.headerForm.value.header2 !== null
      && this.headerForm.value.header3 !== null 
    ){
      this.hasUploaded = true
    }
  }

  
}
