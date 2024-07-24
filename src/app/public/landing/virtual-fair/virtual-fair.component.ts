import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-fair',
  templateUrl: './virtual-fair.component.html',
  styleUrls: ['./virtual-fair.component.css'],
  standalone: true
})
export class VirtualFairComponent implements OnInit {
  categories = [
    { image: 'assets/svg/flor_cocina.svg', title: 'Pastelería' },
    { image: 'assets/svg/vik_makrame.svg', title: 'Bijouterie' },
    { image: 'assets/svg/camelia.svg', title: 'Lencería' },
    { image: 'assets/svg/flor_cocina.svg', title: 'Pastelería' },
    { image: 'assets/svg/vik_makrame.svg', title: 'Bijouterie' },
    { image: 'assets/svg/camelia.svg', title: 'Lencería' },
    { image: 'assets/svg/flor_cocina.svg', title: 'Pastelería' },
    { image: 'assets/svg/vik_makrame.svg', title: 'Bijouterie' },
    { image: 'assets/svg/camelia.svg', title: 'Lencería' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
