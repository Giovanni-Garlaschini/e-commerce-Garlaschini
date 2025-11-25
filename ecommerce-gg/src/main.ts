// Import necessari per l'avvio dell'applicazione Angular //
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Bootstrap dell'applicazione con configurazione e gestione errori //
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
