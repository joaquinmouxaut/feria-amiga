import { Routes } from '@angular/router';
import LandingComponent from './public/landing/landing.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PrivateComponent } from './private/private.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
   { path: '', redirectTo: 'landing', pathMatch: 'full' },
   { path: 'landing', component: LandingComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'private', component: PrivateComponent, canActivate: [authGuard] }
];
