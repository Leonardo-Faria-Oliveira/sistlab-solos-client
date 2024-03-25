import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fourth-step-form',
  templateUrl: './fourth-step-form.component.html',
  styleUrls: ['./fourth-step-form.component.css']
})
export class FourthStepFormComponent {

  @Output() backStep = new EventEmitter();


  public back(): void{

    this.backStep.emit()

  }

}
