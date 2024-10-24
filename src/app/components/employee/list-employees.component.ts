import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/modals/employee/list-employees/list-employees.component.html',
})
export class ListEmployeesComponent {
  
  @Input({required:true}) employees:Employee[] = new Array<Employee>();

  @Input({required:true}) public isSearchMode: boolean | undefined

  @Output() modalEmitter = new EventEmitter<boolean>();

  @Output() searchEmitter = new EventEmitter<boolean>();

  public setSearchMode(event:boolean){
    this.searchEmitter.emit(event)
  }

  public setModalSignUpEmployee(event:boolean){

    this.modalEmitter.emit(event)

  }

  



}
