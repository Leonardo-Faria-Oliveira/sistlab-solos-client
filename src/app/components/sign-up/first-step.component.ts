import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'app-first-step',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/forms/sign-up/first-step/first-step.component.html',
})
export class FirstStepComponent {

  @Output() nextStep = new EventEmitter();

  public next(): void{

    this.nextStep.emit()
  }



}
