import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [FooterComponent]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
