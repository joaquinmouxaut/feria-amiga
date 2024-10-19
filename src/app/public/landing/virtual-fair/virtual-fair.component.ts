import { Component, OnInit } from '@angular/core';
import { HighlightsComponent } from '../highlights/highlights.component';
import { CommonModule } from '@angular/common';
import { JoinUsComponent } from '../join-us/join-us.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-virtual-fair',
  templateUrl: './virtual-fair.component.html',
  styleUrls: ['./virtual-fair.component.css'],
  standalone: true,
  imports: [HighlightsComponent, CommonModule, JoinUsComponent, FooterComponent]
})
export class VirtualFairComponent implements OnInit {
  categories = [
    { image: 'assets/svg/ring.svg', title: 'Accesorios', backgroundColor: '#F85217' },
    { image: 'assets/svg/button.svg', title: 'Indumentaria', backgroundColor: '#FF60FD' },
    { image: 'assets/svg/ball.svg', title: 'Juguetes', backgroundColor: '#B76BE0' },
    { image: 'assets/svg/strawberry.svg', title: 'Comida', backgroundColor: '#FFE838' },

    { image: 'assets/svg/ring.svg', title: 'Ceramica', backgroundColor: '#FF60FD' },
    { image: 'assets/svg/button.svg', title: 'Cosmetica', backgroundColor: '#B76BE0' },
    { image: 'assets/svg/ball.svg', title: 'Colecciones', backgroundColor: '#FFE838' },
    { image: 'assets/svg/strawberry.svg', title: 'Conservas y Embutidos', backgroundColor: '#F85217' },

    { image: 'assets/svg/ring.svg', title: 'Home & Deco', backgroundColor: '#B76BE0' },
    { image: 'assets/svg/button.svg', title: 'Pet - Shop', backgroundColor: '#FFE838' },
    { image: 'assets/svg/ball.svg', title: 'Juguetería', backgroundColor: '#F85217' },
    { image: 'assets/svg/strawberry.svg', title: 'Lencería', backgroundColor: '#FF60FD' },

    { image: 'assets/svg/ring.svg', title: 'Librería', backgroundColor: '#FFE838' },
    { image: 'assets/svg/button.svg', title: 'Marroquinería', backgroundColor: '#F85217' },
    { image: 'assets/svg/ball.svg', title: 'Pastelería', backgroundColor: '#F85217' },
    { image: 'assets/svg/strawberry.svg', title: 'Ropa Hombres', backgroundColor: '#B76BE0' },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
