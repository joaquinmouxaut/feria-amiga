import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightsComponent } from '../landing/highlights/highlights.component';
import { CATEGORIES } from '../../shared/constants/categories.constant';
import { JoinUsComponent } from '../landing/join-us/join-us.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { BusinessDataInterface } from '../../interfaces/business.interface';
import { CardBusinessComponent } from '../card-business/card-business.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
  standalone: true,
  imports: [
    HighlightsComponent,
    JoinUsComponent,
    FooterComponent,
    CardBusinessComponent,
  ],
})
export class CategorieComponent implements OnInit {
  protected categorie!: string;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected entrepreneurs: BusinessDataInterface[] = [
    {
      image: 'assets/svg/flor_cocina.webp',
      title: 'Flor Cocina',
      products: [
        { name: 'Producto 1', img: 'assets/svg/flor_cocina.webp' },
        { name: 'Producto 2', img: 'assets/svg/vic_macrame.webp' },
        { name: 'Producto 3', img: 'assets/svg/camelia.webp' },
        { name: 'Producto 4', img: 'assets/svg/esto_tambien_es_arte.webp' },
      ],
      facebook: '/florcocina',
      instagram: '/florcocina',
      whatsapp: '+5491131234567',
    },
    {
      image: 'assets/svg/vic_macrame.webp',
      title: 'Vik Makrame',
      products: [
        { name: 'Producto 1', img: 'assets/svg/flor_cocina.webp' },
        { name: 'Producto 2', img: 'assets/svg/vic_macrame.webp' },
        { name: 'Producto 3', img: 'assets/svg/camelia.webp' },
        { name: 'Producto 4', img: 'assets/svg/esto_tambien_es_arte.webp' },
      ],
    },
    {
      image: 'assets/svg/camelia.webp',
      title: 'Camelia',
      products: [
        { name: 'Producto 1', img: 'assets/svg/flor_cocina.webp' },
        { name: 'Producto 2', img: 'assets/svg/vic_macrame.webp' },
        { name: 'Producto 3', img: 'assets/svg/camelia.webp' },
        { name: 'Producto 4', img: 'assets/svg/esto_tambien_es_arte.webp' },
      ],
    },
    {
      image: 'assets/svg/esto_tambien_es_arte.webp',
      title: 'Sarasa',
      products: [
        { name: 'Producto 1', img: 'assets/svg/flor_cocina.webp' },
        { name: 'Producto 2', img: 'assets/svg/vic_macrame.webp' },
        { name: 'Producto 3', img: 'assets/svg/camelia.webp' },
        { name: 'Producto 4', img: 'assets/svg/esto_tambien_es_arte.webp' },
      ],
    },
  ];
  protected isModalOpen: boolean = false;
  protected selectedBusiness: BusinessDataInterface | null = null;

  constructor() {}

  ngOnInit() {
    this.getCategorie();
  }

  private getCategorie() {
    this.route.params.subscribe((params) => {
      const categorie = params['categorie'];
      const validRoutes = CATEGORIES.map((category) => category.route);

      if (validRoutes.includes(categorie)) {
        this.categorie = categorie;
      } else {
        this.router.navigate(['/feria-virtual']); // Cambia '/ruta-especifica' por la ruta a la que deseas redirigir.
      }
    });
  }

  openModal(business: BusinessDataInterface) {
    this.selectedBusiness = business;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedBusiness = null;
  }

  goToPreviousCategory() {
    const currentIndex = CATEGORIES.findIndex(
      (cat) => cat.route === this.categorie
    );
    if (currentIndex > 0) {
      const prevCategory = CATEGORIES[currentIndex - 1];
      this.router.navigate([`/categoria/${prevCategory.route}`]);
    }
  }

  goToNextCategory() {
    const currentIndex = CATEGORIES.findIndex(
      (cat) => cat.route === this.categorie
    );
    if (currentIndex < CATEGORIES.length - 1) {
      const nextCategory = CATEGORIES[currentIndex + 1];
      this.router.navigate([`/categoria/${nextCategory.route}`]);
    }
  }
}
