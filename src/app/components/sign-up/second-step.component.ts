import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { cities } from 'src/app/utils/cities';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'app-second-step',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/forms/sign-up/second-step/second-step.component.html',
})
export class SecondStepComponent {

  
  @Output() nextStep = new EventEmitter();
  @Output() backStep = new EventEmitter();

  public cities = cities

  public next(): void{

    this.nextStep.emit()
  }


  public back(): void{

    this.backStep.emit()

  }

}
