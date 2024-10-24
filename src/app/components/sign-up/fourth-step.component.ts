import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';

@Component({
  selector: 'app-fourth-step',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/forms/sign-up/fourth-step/fourth-step.component.html',
})

export class FourthStepComponent {

  @Output() backStep = new EventEmitter();

  public back(): void{

    this.backStep.emit()

  }

}
