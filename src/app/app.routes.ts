import { Routes } from '@angular/router';
import LandingComponent from './public/landing/landing.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PrivateComponent } from './private/private.component';
import { authGuard } from './guards/auth.guard';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { FaqComponent } from './public/faq/faq.component';
import { VirtualFairComponent } from './public/landing/virtual-fair/virtual-fair.component';
import { CategorieComponent } from './public/categorie/categorie.component';
import { PhysicalFairComponent } from './public/physical-fair/physical-fair.component';
import { FeriaVirtualComponent } from './public/feria-virtual/feria-virtual.component';

export const routes: Routes = [
   { path: '', redirectTo: 'landing', pathMatch: 'full' },
   { path: 'landing', component: LandingComponent, data: { animation: 'home' } },
   { path: 'feria-virtual', component: VirtualFairComponent, data: { animation: 'virtual-fair' } },
   { path: 'categoria/:categorie', component: CategorieComponent, data: { animation: 'categorie' } },
   { path: 'quienes-somos', component: AboutUsComponent, data: { animation: 'about-us' } },
   { path: 'presencial', component: PhysicalFairComponent, data: { animation: 'physical-fair' } },
   { path: 'virtual', component: FeriaVirtualComponent, data: { animation: 'feria-virtual' } },
   { path: 'preguntas-frecuentes', component: FaqComponent, data: { animation: 'faq' } },
   { path: 'login', component: LoginComponent, data: { animation: 'login' } },
   { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
   { path: 'private', component: PrivateComponent, canActivate: [authGuard], data: { animation: 'private' } },
];
