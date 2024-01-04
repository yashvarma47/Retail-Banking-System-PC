// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ForgotUseridComponent } from './forgot-userid/forgot-userid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({ declarations: [
  AppComponent,
  LoginComponent,
  CustomerloginComponent,
  HomeComponent,
  AdminDashboardComponent,
  CustomerRegistrationComponent,
  ForgotComponent,
  ForgotPassComponent,
  ForgotUseridComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
