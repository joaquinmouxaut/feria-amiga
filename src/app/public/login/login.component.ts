import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ RouterModule ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
