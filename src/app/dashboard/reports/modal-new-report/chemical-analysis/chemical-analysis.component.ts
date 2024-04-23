import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chemical-analysis',
  templateUrl: './chemical-analysis.component.html',
  styleUrls: ['./chemical-analysis.component.css']
})
export class ChemicalAnalysisComponent {

  @Input({required:true}) hasMicronutrients:boolean = false
  @Output() nextEmitter = new EventEmitter<void>();
  @Output() doubleNextEmitter = new EventEmitter<void>();


  public next(){
    this.nextEmitter.emit()
  }

  public doubleNext(){
    this.doubleNextEmitter.emit()
  }

}
