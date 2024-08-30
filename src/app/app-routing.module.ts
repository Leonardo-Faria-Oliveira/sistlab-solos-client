import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {unloggedUserGuard} from './guards/unlogged-user.guard';
import {loggedUserGuard} from './guards/logged-user.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LabsComponent } from './components/labs/labs.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PricingsComponent } from './components/pricing/pricings.component';
import { StaticsComponent } from './components/statics/statics.component';
import { FirstAccessComponent } from './components/first-access/first-access.component';

const routes: Routes = [
  {path:'', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'signup', component: SignUpComponent, canActivate:[unloggedUserGuard]},
  {path:'login', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path: 'first-access', component: FirstAccessComponent, canActivate:[unloggedUserGuard]},
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
