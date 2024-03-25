import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent {

  @Output() nextStep = new EventEmitter();

  public next(): void{

    this.nextStep.emit()
    
  }

}
