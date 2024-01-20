import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {unloggedAdminGuard} from './guards/unlogged-admin.guard';
import {loggedAdminGuard} from './guards/logged-admin.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'admin/2212vfoq', component: LoginComponent, canActivate:[unloggedAdminGuard]},
  {path:'dashboard/:email', component: DashboardComponent, canActivate:[loggedAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
