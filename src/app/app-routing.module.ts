import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ForgotUseridComponent } from './forgot-userid/forgot-userid.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'customerlogin', component:CustomerloginComponent},
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'dashboard/customer-registration', component: CustomerRegistrationComponent }, // Add this route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'forgot', component: ForgotComponent}, // Add this line for NextComponent
  { path: '', redirectTo: '/forgot', pathMatch: 'full' } ,// Default route to NextComponent
  { path: 'forgot-pass', component: ForgotPassComponent },
  { path: '', redirectTo: '/forgot/forgot-pass', pathMatch: 'full' } ,
  { path: 'forgot-userid', component: ForgotUseridComponent },
  { path: '', redirectTo: '/forgot/forgot-userid', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
