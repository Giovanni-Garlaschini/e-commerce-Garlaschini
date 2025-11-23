import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then(m => m.ShopPage)
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti').then(m => m.ContattiPage)
  }
];
