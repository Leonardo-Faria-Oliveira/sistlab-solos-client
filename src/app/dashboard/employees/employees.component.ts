import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { catchError, throwError } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { CreateEmployee } from 'src/app/interfaces/create-employee';
import { FormGroup } from '@angular/forms';
import { Roles } from 'src/app/interfaces/roles';
import { OrderBasic } from 'src/app/interfaces/order-basic';
import { SearchBasic } from 'src/app/interfaces/search-basic';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeesService : EmployeesService,
  ){}


  public employees:Employee[] = new Array<Employee>();

  public userEmail:string = localStorage.getItem("userEmail")!

  public newEmployee:CreateEmployee  | null = null;

  public modalSignUpEmployee:boolean = false

  public role:string = ""

  public countOk: number = 0

  public countOff: number = 0

  public hasSuccess:boolean = false

  public isSearchMode:boolean = false

  public orderBy:string = "asc"

  public ngOnInit(): void {
    this.employeesService.getEmployees()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      let count = 0
      res.employees.map(employee =>{
      
        if( count <= 5 ){
          if(!(this.userEmail === employee.email))
            this.employees.push(employee)
        }
        count++
        if(employee.active){
          this.countOk++
        }else{
          this.countOff++
        }

      })
      
    })

  }

  public setModalSignUpEmployee(event:boolean){

    this.modalSignUpEmployee = event

  }


  public setRole(event: Roles){

    if(event.labAdmin && event.technicalResponsible){
      this.role = "labAdminTechnical"
    }else if(event.labAdmin && !event.technicalResponsible){
      this.role = "labAdminEmployee"
    }else if(!event.labAdmin && event.technicalResponsible){
      this.role = "technicalResponsible"
    }else{
      this.role = "employee"
    }
    
  }

  public setEmployeeForm(form:FormGroup){
    
    const labName = localStorage.getItem("labName")

    this.newEmployee = {
      name: form.value.name,
      email: form.value.email,
      job: form.value.job,
      password: "1234567",
      contact: form.value.contact,
      labName: labName!,
      roleName:this.role,
      crea: this.role.includes("echnical") ? form.value.crea : null
    }

  }

  public setSearchMode(searchMode:boolean){
    this.isSearchMode = searchMode
  }
  

  public createEmployee(){
    // console.log(this.newEmployee)
    this.employeesService.createEmployee(this.newEmployee!)
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.setModalSignUpEmployee(false)
      this.hasSuccess = true
      setTimeout(() => this.hasSuccess =false , 2000)
      setTimeout(() => window.location.reload() , 2000)
      
    })

  }


  public orderEmployees(event: OrderBasic){

    this.employeesService.orderEmployees(event) 
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.employees.length = 0
      
      res.employees.map(employee =>{

        if(!(this.userEmail === employee.email))
          this.employees.push(employee)

      })
      
    })   

  }

  public searchEmployees(event:SearchBasic){

    this.employeesService.searchEmployees(event)   
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      this.employees.length = 0
      
      res.employees.map(employee =>{

        if(!(this.userEmail === employee.email))
          this.employees.push(employee)

      })
      
    })  

  }

}
