import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemMenu } from 'src/app/interfaces/item-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input({required:true}) role:string | undefined

  @Input({required:true}) name:string | undefined

  public isMenuActive:boolean = true



  public activeItem:number = 1

  adminItensMenu:ItemMenu[] = [
    {
      index:1,
      text:"Visão geral",
      icon:"",
      url: "",
      
    },
    {
      index:2,
      text:"Funcionários",
      icon:"",
      url: "",
      
    },
    {
      index:3,
      text:"Laudos",
      icon:"",
      url: "",
      
    },
    {
      index:4,
      text:"Clientes",
      icon:"",
      url: "",
      
    },
    {
      index:5,
      text:"Assinatura",
      icon:"",
      url: "",
      
    },
  ]
  labAdminEmployeeItensMenu:ItemMenu[] = [
    {
      index:1,
      text:"Visão geral",
      icon:"",
      url: "",
      
    },
    {
      index:2,
      text:"Funcionários",
      icon:"",
      url: "",
      
    },
    {
      index:3,
      text:"Laudos",
      icon:"",
      url: "",
      
    },
    {
      index:4,
      text:"Clientes",
      icon:"",
      url: "",
      
    },
    {
      index:5,
      text:"Assinatura",
      icon:"",
      url: "",
      
    },
  ]
  employeeItensMenu:ItemMenu[] = [
    {
      index:1,
      text:"Visão geral",
      icon:"",
      url: "",
      
    },
    {
      index:2,
      text:"Funcionários",
      icon:"",
      url: "",
      
    },
    {
      index:3,
      text:"Laudos",
      icon:"",
      url: "",
      
    },
    {
      index:4,
      text:"Clientes",
      icon:"",
      url: "",
      
    },
    {
      index:5,
      text:"Assinatura",
      icon:"",
      url: "",
      
    },
  ]

  setActive(index:number): void{
    this.activeItem = index
  }

}
