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
    { image: 'assets/svg/flor_cocina.svg', title: 'Flor Cocina' },
    { image: 'assets/svg/flor_cocina.svg', title: 'Flor Cocina' },
    { image: 'assets/svg/flor_cocina.svg', title: 'Flor Cocina' },
    { image: 'assets/svg/flor_cocina.svg', title: 'Flor Cocina' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
