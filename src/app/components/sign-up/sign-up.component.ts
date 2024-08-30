import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from '../modals/error-modal.component';
import { FirstStepComponent } from './first-step.component';
import { SecondStepComponent } from './second-step.component';
import { ThirdStepComponent } from './third-step.component';
import { FourthStepComponent } from './fourth-step.component';

@Component({
  selector: 'app-sign-up',
  standalone:true,
  templateUrl: '../../pages/sign-up/sign-up.component.html',
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent
  ],
})
export class SignUpComponent {

  public step: 1 | 2 | 3 | 4 = 1

  public labSignupForm = new FormGroup({
    
  })
  
  public next(): void{

    this.step++;

  }

  public back(): void{

    this.step--;

  }

}
