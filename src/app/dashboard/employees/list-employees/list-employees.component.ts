import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderBasic } from 'src/app/interfaces/order-basic';
import { SearchBasic } from 'src/app/interfaces/search-basic';
import { SelectBasic } from 'src/app/interfaces/select-basic';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
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
