import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusinessDataInterface, ProductInterface } from '../../interfaces/business.interface';

@Component({
  selector: 'app-card-business',
  templateUrl: './card-business.component.html',
  styleUrls: ['./card-business.component.scss'],
  standalone: true
})
export class CardBusinessComponent implements OnInit {
  @Input() businessData!: BusinessDataInterface;
  @Output() closeModal = new EventEmitter<void>();
  currentProduct: ProductInterface | undefined;

  constructor() { }

  ngOnInit() {
    if (this.businessData?.products?.length) {
      this.currentProduct = this.businessData.products[0];
    }
  }
  
  selectProduct(product: { name: string; img: string }): void {
    this.currentProduct = product;
  }

  close() {
    this.closeModal.emit();
  }

}
