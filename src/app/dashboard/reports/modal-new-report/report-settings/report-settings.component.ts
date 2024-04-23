import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report-settings',
  templateUrl: './report-settings.component.html',
  styleUrls: ['./report-settings.component.css']
})
export class ReportSettingsComponent {

  public hasMicronutrients:boolean = false
  public isReportColored:boolean = true

  @Output() nextEmitter = new EventEmitter<void>();

  
  public setHasMicronutrients(){
    this.hasMicronutrients = !this.hasMicronutrients
  }

  public setIsReportColored(){
    this.isReportColored = !this.isReportColored
  }

  public next(){
    this.nextEmitter.emit()
  }

}
