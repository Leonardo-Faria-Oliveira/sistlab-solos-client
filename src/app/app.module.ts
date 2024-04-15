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
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { ModalSignupEmployeeComponent } from './dashboard/employees/modal-signup-employee/modal-signup-employee.component';
import { FirstAccessComponent } from './first-access/first-access.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { ModalSignupClientComponent } from './dashboard/clients/modal-signup-client/modal-signup-client.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { SearchEmployeeComponent } from './dashboard/employees/search-employee/search-employee.component';
import { SearchClientComponent } from './dashboard/clients/search-client/search-client.component';
import { ListEmployeesComponent } from './dashboard/employees/list-employees/list-employees.component';
import { OverviewEmployeesComponent } from './dashboard/employees/overview-employees/overview-employees.component';
import { OverviewClientsComponent } from './dashboard/clients/overview-clients/overview-clients.component';
import { ListClientsComponent } from './dashboard/clients/list-clients/list-clients.component';
import { ListReportsComponent } from './dashboard/reports/list-reports/list-reports.component';
import { ReportConfigComponent } from './dashboard/reports/report-config/report-config.component';
import { HeaderReportComponent } from './dashboard/reports/report-config/header-report/header-report.component';
import { PhosphorValueConfigComponent } from './dashboard/reports/report-config/phosphor-value-config/phosphor-value-config.component';
import { GoogleChartsModule } from 'angular-google-charts';


// import Flow from 'flowjs/flow.js';

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
    EmployeesComponent,
    ModalSignupEmployeeComponent,
    FirstAccessComponent,
    ClientsComponent,
    ModalSignupClientComponent,
    SuccessModalComponent,
    SearchEmployeeComponent,
    SearchClientComponent,
    ListEmployeesComponent,
    OverviewEmployeesComponent,
    OverviewClientsComponent,
    ListClientsComponent,
    ListReportsComponent,
    ReportConfigComponent,
    HeaderReportComponent,
    PhosphorValueConfigComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
