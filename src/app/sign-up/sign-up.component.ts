import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
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
