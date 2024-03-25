import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.css']
})
export class FourthStepComponent {

  @Output() backStep = new EventEmitter();


  public back(): void{

    this.backStep.emit()

  }

}
