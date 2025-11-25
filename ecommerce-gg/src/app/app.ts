// Import dei moduli Angular e componenti necessari
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

// Componente radice dell'applicazione
@Component({
  selector: 'app-root', // Selettore HTML del componente
  imports: [RouterOutlet, NavbarComponent, Footer], // Componenti utilizzati
  templateUrl: './app.html', // Template HTML
  styleUrl: './app.css' // Stili CSS
})
export class App {
  // Titolo dell'applicazione come signal (reattivo)
  protected readonly title = signal('ecommerce-gg');
}