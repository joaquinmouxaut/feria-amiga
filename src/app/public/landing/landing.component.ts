import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [
    CarouselComponent,
    HighlightsComponent
  ]
})
export default class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
