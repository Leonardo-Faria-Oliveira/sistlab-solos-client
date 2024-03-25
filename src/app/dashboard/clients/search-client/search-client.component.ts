import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderBasic } from 'src/app/interfaces/order-basic';
import { SearchBasic } from 'src/app/interfaces/search-basic';
import { SelectBasic } from 'src/app/interfaces/select-basic';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent {
  
  @Input({required:true}) clients:Client[] = new Array<Client>();


  @Input({required:true}) public orderBy: string | undefined
  
  @Output() isSearchMode = new EventEmitter<boolean>();

  @Output() orderByEmitter = new EventEmitter<OrderBasic>();

  @Output() searchEmitter = new EventEmitter<SearchBasic>();


  public headerSearch:SelectBasic[] = [
    {
      name: "Nome",
      value: "name"
    },
    {
      name: "Email",
      value: "email"
    },
    {
      name: "Função",
      value: "job"
    }
  ]

  public searchFormGroup = new FormGroup({
    search: new FormControl<string | undefined>(undefined),
    header: new FormControl<SelectBasic | undefined>(this.headerSearch[0]),
  })


  public setIsSearchMode(event:boolean){
    this.isSearchMode.emit(event)
  }

  public setOrderBy(order:string){
 
    this.orderBy = order
    this.orderByEmitter.emit({
      orderBy: this.orderBy,
      header: this.searchFormGroup.value.header?.value!
    })
  }

  public searchByHeader(){

    this.searchEmitter.emit({
      search: this.searchFormGroup.value.search!,
      header: this.searchFormGroup.value.header?.value!
    })

  }


}
