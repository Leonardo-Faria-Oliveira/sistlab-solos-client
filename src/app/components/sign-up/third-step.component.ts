import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'app-third-step',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/forms/sign-up/third-step/third-step.component.html',
})
export class ThirdStepComponent {

  @Output() nextStep = new EventEmitter();

  public next(): void{

    this.nextStep.emit()
    
  }

}
