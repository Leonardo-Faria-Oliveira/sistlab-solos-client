import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { catchError, throwError } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeesService : EmployeesService
  ){}


  public employees:Employee[] = new Array<Employee>();

  public modalSignUpEmployee:boolean = true

  public countOk: number = 0

  public countOff: number = 0



  public ngOnInit(): void {
    this.employeesService.getEmployees()
    .pipe(catchError(err => {
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      
      res.employees.map(employee =>{
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



}
