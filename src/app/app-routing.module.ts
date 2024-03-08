import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {unloggedUserGuard} from './guards/unlogged-user.guard';
import {loggedUserGuard} from './guards/logged-user.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { LabsComponent } from './dashboard/labs/labs.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { PricingsComponent } from './dashboard/pricings/pricings.component';
import { StaticsComponent } from './dashboard/statics/statics.component';

const routes: Routes = [
  {path:'', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'signup', component: SignUpComponent, canActivate:[unloggedUserGuard]},
  {path:'login', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'admin/2212vfoq', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'dashboard', 
    children:[
      {
        path: ':email',
        component: DashboardComponent, 
        canActivate:[loggedUserGuard],
        children:[
        
          {
            path:'overview',
            component: OverviewComponent, 
           
          },
          {
            path:'labs',
            component: LabsComponent, 
            
          },
          {
            path:'reports',
            component: ReportsComponent, 
            
          },
          {
            path:'pricings',
            component: PricingsComponent, 
         
          },
          {
            path:'statics',
            component: StaticsComponent, 
           
          }
      
        ]
      }
    ]

  
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
