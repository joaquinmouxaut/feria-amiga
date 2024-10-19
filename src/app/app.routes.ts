import { Routes } from '@angular/router';
import LandingComponent from './public/landing/landing.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PrivateComponent } from './private/private.component';
import { authGuard } from './guards/auth.guard';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { FaqComponent } from './public/faq/faq.component';
import { FeriaVirtualComponent } from './public/feria-virtual/feria-virtual.component';
import { VirtualFairComponent } from './public/landing/virtual-fair/virtual-fair.component';

export const routes: Routes = [
   { path: '', redirectTo: 'landing', pathMatch: 'full' },
   { path: 'landing', component: LandingComponent },
   { path: 'feria-virtual', component: VirtualFairComponent},
   { path: 'quienes-somos', component: AboutUsComponent },
   { path: 'preguntas-frecuentes', component: FaqComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'private', component: PrivateComponent, canActivate: [authGuard] }
];
