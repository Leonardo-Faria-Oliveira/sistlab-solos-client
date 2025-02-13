import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { catchError, throwError } from 'rxjs';
import { Admin } from '../../models/admin';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { EmployeesComponent } from '../employee/employees.component';
import { FooterComponent } from './footer.component';
import { ClientsComponent } from '../clients/clients.component';
import { ReportsComponent } from "../reports/reports.component";

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [
    CommonModule,
    EmployeesComponent,
    ReactiveFormsModule,
    MenuComponent,
    FooterComponent,
    ClientsComponent,
    ReportsComponent
],
  templateUrl: '../../pages/dashboard/dashboard.component.html',
  styleUrls: ['../../pages/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(
    private activatedRoute : ActivatedRoute,
    private dashboardService : DashboardService,
    private router: Router
  ){}


  public email:string = this.activatedRoute.snapshot.paramMap.get("email")!

  public account:Admin | Employee | undefined

  public activeIndex: number = parseInt(localStorage.getItem("lastIndex")!) ?? 1

  public ngOnInit(): void {

    this.dashboardService.getAccountByEmail(this.email)
    .pipe(catchError(err => {
      let loginPath = localStorage.getItem("loginPath")
      localStorage.clear()
      this.router.navigate([loginPath])
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      console.log(res)
      localStorage.setItem("labName", res.labName)
      let role = this.dashboardService.getTypeRole()
      if(role === "admin"){

        this.account = new Admin(
        res.account?.name!,
        res.account?.email!,
        res.account?.password!,
        res.account?.role.name!,
        res.account?.institution?.name!
        )

      }else{
        this.account = new Employee(
          res.account?.name!,
          res.account?.email!,
          res.account?.password!,
          res.account?.job!,
          res.account?.role.name!,
          res.account?.contact!,
          res.account?.crea!,
          )
      }

      
    })

  }

  public setIndex(index:number){
    console.log(index)
    this.activeIndex = index
  }




}
