import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeLoginFormComponent } from './login/employee-login-form/employee-login-form.component';
import { AdminLoginFormComponent } from './login/admin-login-form/admin-login-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { TokenInterceptor } from './interceptors/token.interceptor';
import { Access } from './models/access';
import { MenuComponent } from './dashboard/menu/menu.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { LabsComponent } from './dashboard/labs/labs.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { PricingsComponent } from './dashboard/pricings/pricings.component';
import { StaticsComponent } from './dashboard/statics/statics.component';

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
    FourthStepFormComponent,
    MenuComponent,
    FooterComponent,
    OverviewComponent,
    LabsComponent,
    ReportsComponent,
    PricingsComponent,
    StaticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
