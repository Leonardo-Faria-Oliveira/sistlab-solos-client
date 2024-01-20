import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-third-step-form',
  templateUrl: './third-step-form.component.html',
  styleUrls: ['./third-step-form.component.css']
})
export class ThirdStepFormComponent {

  @Output() nextStep = new EventEmitter();

  public next(): void{

    this.nextStep.emit()
  
  }

}
