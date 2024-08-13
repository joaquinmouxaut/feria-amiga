import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-fair-highlights',
  templateUrl: './virtual-fair-highlights.component.html',
  styleUrls: ['./virtual-fair-highlights.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VirtualFairHighlightsComponent implements OnInit {
  categories = [
    { image: 'assets/svg/ring.svg', title: 'Accesorios', backgroundColor: '#F85217' },
    { image: 'assets/svg/button.svg', title: 'Indumentaria', backgroundColor: '#FF60FD' },
    { image: 'assets/svg/ball.svg', title: 'Juguetes', backgroundColor: '#B76BE0' },
    { image: 'assets/svg/strawberry.svg', title: 'Comida', backgroundColor: '#FFE838' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
