import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent {

  @Output() nextStep = new EventEmitter();

  public next(): void{

    this.nextStep.emit()
  }



}
