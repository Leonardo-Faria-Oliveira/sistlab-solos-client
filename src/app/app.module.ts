import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeLoginFormComponent } from './login/employee-login-form/employee-login-form.component';
import { AdminLoginFormComponent } from './login/admin-login-form/admin-login-form.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FirstStepComponent } from './sign-up/first-step/first-step.component';
import { SecondStepComponent } from './sign-up/second-step/second-step.component';
import { ThirdStepComponent } from './sign-up/third-step/third-step.component';
import { FourthStepComponent } from './sign-up/fourth-step/fourth-step.component';
import { FirstStepFormComponent } from './sign-up/first-step/first-step-form/first-step-form.component';
import { SecondStepFormComponent } from './sign-up/second-step/second-step-form/second-step-form.component';
import { ThirdStepFormComponent } from './sign-up/third-step/third-step-form/third-step-form.component';
import { FourthStepFormComponent } from './sign-up/fourth-step/fourth-step-form/fourth-step-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeLoginFormComponent,
    AdminLoginFormComponent,
    DashboardComponent,
    ErrorModalComponent,
    SignUpComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent,
    FirstStepFormComponent,
    SecondStepFormComponent,
    ThirdStepFormComponent,
    FourthStepFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
