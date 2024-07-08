import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CarouselComponent]
})
export default class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
