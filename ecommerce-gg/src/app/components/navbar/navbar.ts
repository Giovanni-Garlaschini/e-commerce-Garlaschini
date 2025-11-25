// Import dei moduli Angular necessari per la navbar //
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Componente della barra di navigazione //
@Component({
  selector: 'app-navbar', // Selettore html //
  standalone: true, // Componente standalone //
  imports: [RouterLink, RouterLinkActive], // Direttive per il routing //
  templateUrl: './navbar.html', // Template html //
  styleUrls: ['./navbar.css'] // Stili CSS //
})
export class NavbarComponent {}
