import { Component } from '@angular/core';
import { ErrorHandler } from 'src/app/interfaces/error-handler';

@Component({
  selector: 'app-modal-new-report',
  templateUrl: './modal-new-report.component.html',
  styleUrls: ['./modal-new-report.component.css']
})
export class ModalNewReportComponent {

  public hasError:boolean = false
  public error:ErrorHandler | null = null 
  public hasMicronutrients:boolean = false
  public isReportColored:boolean = true
  public modalProgress:number = 5

  public setHasMicronutrients(){
    this.hasMicronutrients = !this.hasMicronutrients
  }

  public setIsReportColored(){
    this.isReportColored = !this.isReportColored
  }

  public next(){
    this.modalProgress++
  }

  public doubleNext(){
    this.modalProgress+=2
  }

  public back(){
    this.modalProgress--
  }

}
