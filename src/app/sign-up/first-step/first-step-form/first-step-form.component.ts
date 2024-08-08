import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-step-form',
  templateUrl: './first-step-form.component.html',
  styleUrls: ['./first-step-form.component.css']
})
export class FirstStepFormComponent {

  @Output() nextStep = new EventEmitter();

  public firstStepForm = new FormGroup({
    name: new FormControl<string | undefined>(undefined),
    email: new FormControl<string | undefined>(undefined),
    contact: new FormControl<string | undefined>(undefined)
  });

  public next(): void{
    this.nextStep.emit(this.firstStepForm);
  }


}
