import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {unloggedUserGuard} from './guards/unlogged-user.guard';
import {loggedUserGuard} from './guards/logged-user.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'signup', component: SignUpComponent, canActivate:[unloggedUserGuard]},
  {path:'login', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'admin/2212vfoq', component: LoginComponent, canActivate:[unloggedUserGuard]},
  {path:'dashboard/:email', 
  component: DashboardComponent, 
  canActivate:[loggedUserGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
