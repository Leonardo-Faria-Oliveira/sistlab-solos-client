import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-step-form',
  templateUrl: './first-step-form.component.html',
  styleUrls: ['./first-step-form.component.css']
})
export class FirstStepFormComponent {

  @Output() nextStep = new EventEmitter();

  public next(): void{

    this.nextStep.emit()

  }


}
