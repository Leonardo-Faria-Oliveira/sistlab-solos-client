import { Component, EventEmitter, Output } from '@angular/core';
import { cities } from './cities';

@Component({
  selector: 'app-second-step-form',
  templateUrl: './second-step-form.component.html',
  styleUrls: ['./second-step-form.component.css']
})
export class SecondStepFormComponent {

    public cities = cities

    @Output() backStep = new EventEmitter();
    @Output() nextStep = new EventEmitter();

    public next(): void{

      this.nextStep.emit()
    }


    public back(): void{

      this.backStep.emit()
  
    }

}
