import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-fair-highlights',
  templateUrl: './virtual-fair-highlights.component.html',
  styleUrls: ['./virtual-fair-highlights.component.css'],
  standalone: true
})
export class VirtualFairHighlightsComponent implements OnInit {
  categories = [
    { image: 'assets/svg/pasteleria.svg', title: 'Pasteleria' },
    { image: 'assets/svg/orfebreria.svg', title: 'Orfebreria' },
    { image: 'assets/svg/arte.svg', title: 'Arte' },
    { image: 'assets/svg/skinny.svg', title: 'Skinny' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
