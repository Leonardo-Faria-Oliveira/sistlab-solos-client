import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { catchError, throwError } from 'rxjs';
import { Admin } from '../models/admin';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(
    private activatedRoute : ActivatedRoute,
    private dashboardService : DashboardService,
    private router: Router
  ){}


  public email:string = this.activatedRoute.snapshot.paramMap.get("email")!

  public account:Admin | Employee | undefined

  public ngOnInit(): void {

    this.dashboardService.getAccountByEmail(this.email)
    .pipe(catchError(err => {
      let loginPath = localStorage.getItem("loginPath")
      localStorage.clear()
      this.router.navigate([loginPath])
      return throwError(() => new Error(err));
    }))
    .subscribe(res => {
      this.account = new Admin(
        res.account?.name!,
        res.account?.email!,
        res.account?.password!,
        res.account?.role.name!,
        res.account?.institution?.name!
        )
      
    })

  }


  

}
