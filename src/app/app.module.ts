import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeLoginFormComponent } from './employee-login-form/employee-login-form.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeLoginFormComponent,
    ButtonComponent,
    InputComponent,
    AdminLoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
