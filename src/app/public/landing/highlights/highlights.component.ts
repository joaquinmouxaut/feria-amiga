import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HighlightsComponent implements OnInit {
  highlights = [
    { image: 'assets/svg/flor_cocina.webp', title: 'Flor Cocina' },
    { image: 'assets/svg/vic_macrame.webp', title: 'Vik Makrame' },
    { image: 'assets/svg/camelia.webp', title: 'Camelia' },
    { image: 'assets/svg/esto_tambien_es_arte.webp', title: 'Sarasa' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
