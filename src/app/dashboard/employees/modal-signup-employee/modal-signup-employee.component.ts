import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-signup-employee',
  templateUrl: './modal-signup-employee.component.html',
  styleUrls: ['./modal-signup-employee.component.css']
})
export class ModalSignupEmployeeComponent {

  public isTechnicalResponsible:boolean = false

  public setIsTechnicalResponsible(event:boolean){
    this.isTechnicalResponsible = event
  }

}
