import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PresenceFairComponent } from './presence-fair/presence-fair.component';
import { ExpectToFindComponent } from './expect-to-find/expect-to-find.component';
import { WelcomeVirtualFairComponent } from './welcome-virtual-fair/welcome-virtual-fair.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [
    WelcomeComponent,
    PresenceFairComponent,
    ExpectToFindComponent,
    WelcomeVirtualFairComponent,
  ],
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
