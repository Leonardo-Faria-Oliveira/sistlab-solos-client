import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemMenu } from 'src/app/interfaces/item-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private router: Router
  ){}


  @Input({required:true}) role:string | undefined

  @Input({required:true}) name:string | undefined

  @Input({required:true}) activeItem:number | undefined

  @Output() nextIndex = new EventEmitter<number>();


  public isMenuActive:boolean = true


  adminItensMenu:ItemMenu[] = [
    {
      index:1,
      text:"Visão geral",
      icon:"../../../assets/overview.svg",
      activeIcon: "../../../assets/overview_active.svg",
      
    },
    {
      index:2,
      text:"Laboratórios",
      icon:"../../../assets/labs.svg",
      activeIcon: "../../../assets/labs_active.svg"
      
    },
    {
      index:3,
      text:"Laudos",
      icon:"../../../assets/reports.svg",
      activeIcon: "../../../assets/reports_active.svg",
      
    },
    {
      index:4,
      text:"Planos",
      icon:"../../../assets/pricings.svg",
      activeIcon: "../../../assets/pricings_active.svg",
      
    },
    {
      index:5,
      text:"Estatísticas",
      icon:"../../../assets/statics.svg",
      activeIcon: "../../../assets/statics_active.svg",
      
    },
  ]

  labAdminEmployeeItensMenu:ItemMenu[] = [
    {
      index:1,
      text:"Visão geral",
      icon:"../../../assets/overview.svg",
      activeIcon: "../../../assets/overview_active.svg",
      
    },
    {
      index:2,
      text:"Funcionários",
      icon:"../../../assets/employees.svg",
      activeIcon: "../../../assets/employees_active.svg",
      
    },
    {
      index:3,
      text:"Laudos",
      icon:"../../../assets/reports.svg",
      activeIcon: "../../../assets/reports_active.svg",
      
    },
    {
      index:4,
      text:"Clientes",
      icon:"../../../assets/clients.svg",
      activeIcon: "../../../assets/clients_active.svg",
      
    },
    {
      index:5,
      text:"Assinatura",
      icon:"../../../assets/pricings.svg",
      activeIcon: "../../../assets/pricings_active.svg",
      
    },
  ]

  employeeItensMenu:ItemMenu[] = [
    {
      index:1,
      text:"Visão geral",
      icon:"",
      activeIcon: "",
      
    },
    {
      index:2,
      text:"Funcionários",
      icon:"",
      activeIcon: "",
      
    },
    {
      index:3,
      text:"Laudos",
      icon:"",
      activeIcon: "",
      
    },
    {
      index:4,
      text:"Clientes",
      icon:"",
      activeIcon: "",
      
    },
    {
      index:5,
      text:"Assinatura",
      icon:"",
      activeIcon: "",
      
    },
  ]

  

  public setActive(index:number): void{

    console.log(this.role)
    this.activeItem = index
   
    this.nextIndex.emit(index);
  }

  public logOut(){
    const loginPath = localStorage.getItem("loginPath")
    localStorage.clear()
    this.router.navigateByUrl(loginPath!)
    
  }

}
