import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fourth-step-form',
  templateUrl: './fourth-step-form.component.html',
  styleUrls: ['./fourth-step-form.component.css']
})
export class FourthStepFormComponent {

  @Output() submit = new EventEmitter();

  public fourthStepForm = new FormGroup({
    password: new FormControl<string | undefined>(undefined),
    confirm_password: new FormControl<string | undefined>(undefined)
  });

  public next(): void{
    this.submit.emit(this.fourthStepForm);
  }

  @Output() backStep = new EventEmitter();

  public back(): void{

    this.backStep.emit()

  }

}
