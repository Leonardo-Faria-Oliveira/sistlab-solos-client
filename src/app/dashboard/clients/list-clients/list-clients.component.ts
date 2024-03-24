import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
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
