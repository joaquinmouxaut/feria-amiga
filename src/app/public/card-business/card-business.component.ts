import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  private canDetectOutsideClick = false;
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.canDetectOutsideClick) return;
    debugger;
    const target = event.target as HTMLElement;
    const cardElement = document.querySelector('.card-container');

    if (cardElement && !cardElement.contains(target)) {
      // Si el clic NO está dentro de la card, cerrar modal
      this.close();
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.businessData?.products?.length) {
      this.currentProduct = this.businessData.products[0];
    }
    setTimeout(() => {
      this.canDetectOutsideClick = true;
    }, 0);
  }
  
  selectProduct(product: { name: string; img: string }): void {
    this.currentProduct = product;
  }

  close() {
    this.closeModal.emit();
  }

}
