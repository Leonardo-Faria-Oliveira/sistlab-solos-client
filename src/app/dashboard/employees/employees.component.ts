import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { catchError, throwError } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { CreateEmployee } from 'src/app/interfaces/create-employee';
import { FormGroup } from '@angular/forms';
import { Roles } from 'src/app/interfaces/roles';
import { Router } from '@angular/router';

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

  public newEmployee:CreateEmployee  | null = null;

  public modalSignUpEmployee:boolean = false

  public role:string = ""

  public countOk: number = 0

  public countOff: number = 0



  public ngOnInit(): void {
    this.employeesService.getEmployees()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      
      res.employees.map(employee =>{
        let userEmail = localStorage.getItem("userEmail")
        if(!(userEmail === employee.email))
        this.employees.push(employee)
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
  

  public createEmployee(){
    // console.log(this.newEmployee)
    this.employeesService.createEmployee(this.newEmployee!)
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {

      window.location.reload()
      
    })

  }

}
