// Import delle configurazioni Angular //
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configurazione principale dell'applicazione //
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Gestione errori globali //
    provideZoneChangeDetection({ eventCoalescing: true }), // Ottimizzazione change detection //
    provideRouter(routes) // Configurazione routing //
  ]
};
