import { Routes } from '@angular/router';
import LandingComponent from './public/landing/landing.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

export const routes: Routes = [
   { path: '', redirectTo: 'landing', pathMatch: 'full' },
   { path: 'landing', component: LandingComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent }
];
