import { Component, EventEmitter, Output } from '@angular/core';
import { ErrorHandler } from 'src/app/interfaces/error-handler';

@Component({
  selector: 'app-modal-new-report',
  templateUrl: './modal-new-report.component.html',
  styleUrls: ['./modal-new-report.component.css']
})
export class ModalNewReportComponent {

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

  @Output() reportConfigEmitter = new EventEmitter<boolean>();

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

}
