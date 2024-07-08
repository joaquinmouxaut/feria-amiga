import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./public.component')
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.component')
  },
];

export default PUBLIC_ROUTES;