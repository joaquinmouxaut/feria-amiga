import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export default class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
