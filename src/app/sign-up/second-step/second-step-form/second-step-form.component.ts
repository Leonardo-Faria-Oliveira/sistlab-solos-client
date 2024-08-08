import { Component, EventEmitter, Output } from '@angular/core';
import { cities } from './cities';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-step-form',
  templateUrl: './second-step-form.component.html',
  styleUrls: ['./second-step-form.component.css']
})
export class SecondStepFormComponent {

    public cities = cities

    @Output() backStep = new EventEmitter();
    @Output() nextStep = new EventEmitter();

    public secondStepForm = new FormGroup({
      zipcode: new FormControl<string | undefined>(undefined),
      city: new FormControl<string | undefined>(undefined),
      street: new FormControl<string | undefined>(undefined),
      bairro: new FormControl<string | undefined>(undefined),
      number: new FormControl<string | undefined>(undefined),
    });

    public next(): void{

      this.nextStep.emit(this.secondStepForm);
    }

    public back(): void{

      this.backStep.emit()
  
    }

}
