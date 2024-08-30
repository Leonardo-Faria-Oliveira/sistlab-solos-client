import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: '../../pages/components/modals/client/list-clients/list-clients.component.html',
})
export class ListClientsComponent {

  @Input({required:true}) clients:Client[] = new Array<Client>();

  @Input({required:true}) public isSearchMode: boolean | undefined

  @Output() modalEmitter = new EventEmitter<boolean>();

  @Output() searchEmitter = new EventEmitter<boolean>();

  public setSearchMode(event:boolean){
    this.searchEmitter.emit(event)
  }

  public setModalSignUpClient(event:boolean){

    this.modalEmitter.emit(event)

  }


}
