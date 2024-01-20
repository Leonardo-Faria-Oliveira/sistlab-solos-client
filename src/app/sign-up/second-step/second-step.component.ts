import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent {

  
  @Output() nextStep = new EventEmitter();
  @Output() backStep = new EventEmitter();


  public next(): void{

    this.nextStep.emit()
  }


  public back(): void{

    this.backStep.emit()

  }

}
