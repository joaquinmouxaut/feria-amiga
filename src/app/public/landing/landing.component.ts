import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { VirtualFairHighlightsComponent } from './virtual-fair-highlights/virtual-fair-highlights.component';
import { VirtualFairComponent } from './virtual-fair/virtual-fair.component';
import { JoinUsComponent } from './join-us/join-us.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [
    CarouselComponent,
    HighlightsComponent,
    VirtualFairHighlightsComponent,
    VirtualFairComponent,
    JoinUsComponent
  ]
})
export default class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
