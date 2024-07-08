import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'https://via.placeholder.com/800x400/ff7f7f/333333?text=Slide+1',
    'https://via.placeholder.com/800x400/7f7fff/333333?text=Slide+2',
    'https://via.placeholder.com/800x400/7fff7f/333333?text=Slide+3'
  ];
  currentSlide: number = 0;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.startSlide();
  }

  ngOnDestroy() {
    this.stopSlide();
  }

  startSlide() {
    // Configurar un intervalo para cambiar las diapositivas automáticamente cada 3 segundos
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambiar cada 3 segundos (3000 milisegundos)
  }

  stopSlide() {
    // Detener el intervalo cuando el componente se destruye o se cambia de ruta
    clearInterval(this.interval);
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.images.length - 1) ? this.currentSlide + 1 : 0;
  }
}
