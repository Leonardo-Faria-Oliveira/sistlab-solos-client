import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-physical-analysis',
  templateUrl: './physical-analysis.component.html',
  styleUrls: ['./physical-analysis.component.css']
})
export class PhysicalAnalysisComponent {

  @Output() nextEmitter = new EventEmitter<void>();




  public next(){
    this.nextEmitter.emit()
  }

  


}
