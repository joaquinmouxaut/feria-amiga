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
  imports: [HighlightsComponent, JoinUsComponent, FooterComponent, CardBusinessComponent]
})
export class CategorieComponent implements OnInit {
  protected categorie!: string;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected entrepreneurs: BusinessDataInterface[] = [
    { image: 'assets/svg/flor_cocina.svg', title: 'Flor Cocina' },
    { image: 'assets/svg/vik_makrame.svg', title: 'Vik Makrame' },
    { image: 'assets/svg/camelia.svg', title: 'Camelia' },
    { image: 'assets/svg/esto_tambien_es_arte.svg', title: 'Sarasa' },
  ];
  protected isModalOpen:boolean = false;
  protected selectedBusiness: BusinessDataInterface | null = null;

  constructor() { }

  ngOnInit() {
    this.getCategorie();
  }

  private getCategorie() {
    this.route.params.subscribe(params => {
      const categorie = params['categorie'];
      const validRoutes = CATEGORIES.map(category => category.route);

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

}
