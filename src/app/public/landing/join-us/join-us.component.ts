import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css'],
  standalone: true
})
export class JoinUsComponent implements OnInit {
  image: string = 'assets/svg/join-us.png';

  constructor() { }

  ngOnInit() {
  }

}
