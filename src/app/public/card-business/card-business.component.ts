import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusinessDataInterface } from '../../interfaces/business.interface';

@Component({
  selector: 'app-card-business',
  templateUrl: './card-business.component.html',
  styleUrls: ['./card-business.component.scss'],
  standalone: true
})
export class CardBusinessComponent implements OnInit {
  @Input() businessData!: BusinessDataInterface;
  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeModal.emit();
  }

}
