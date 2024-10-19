import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],  
  standalone: true,
  imports: [NgClass, RouterModule]
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  public routes = [
    { path: '/landing', label: 'Inicio' },
    { path: '/quienes-somos', label: '¿Quienes somos?' },
    { path: '/feria-virtual', label: 'Feria Virtual' },
    { path: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
