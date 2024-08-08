import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third-step-form',
  templateUrl: './third-step-form.component.html',
  styleUrls: ['./third-step-form.component.css']
})
export class ThirdStepFormComponent {

  @Output() nextStep = new EventEmitter();

  public thirdStepForm = new FormGroup({
    employee_name: new FormControl<string | undefined>(undefined),
    employee_email: new FormControl<string | undefined>(undefined),
    employee_contact: new FormControl<string | undefined>(undefined),
    job: new FormControl<string | undefined>(undefined),
  });

  public next(): void{
    this.nextStep.emit(this.thirdStepForm)
  }

}
