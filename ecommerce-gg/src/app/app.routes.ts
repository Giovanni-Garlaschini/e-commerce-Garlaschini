// Import del tipo Routes da Angular Router //
import { Routes } from '@angular/router';

// Definizione delle rotte dell'applicazione //
export const routes: Routes = [
  {
    // Rotta di default: reindirizza a home //
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // Rotta per la pagina home con lazy loading //
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage)
  },
  {
    // Rotta per la pagina shop con lazy loading //
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then(m => m.ShopPage)
  },
  {
    // Rotta per la pagina contatti con lazy loading //
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti').then(m => m.ContattiPage)
  }
];