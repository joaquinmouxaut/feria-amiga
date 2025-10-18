import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-feria-virtual',
  templateUrl: './feria-virtual.component.html',
  styleUrls: ['./feria-virtual.component.scss'],
  standalone: true,
  imports: [FooterComponent]
})
export class FeriaVirtualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
