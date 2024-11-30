import { Component, inject, OnInit } from '@angular/core';
import { HighlightsComponent } from '../highlights/highlights.component';
import { CommonModule } from '@angular/common';
import { JoinUsComponent } from '../join-us/join-us.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { CategoryInterface } from '../../../interfaces/category.interface';
import { CATEGORIES } from '../../../shared/constants/categories.constant';

@Component({
  selector: 'app-virtual-fair',
  templateUrl: './virtual-fair.component.html',
  styleUrls: ['./virtual-fair.component.css'],
  standalone: true,
  imports: [HighlightsComponent, CommonModule, JoinUsComponent, FooterComponent]
})
export class VirtualFairComponent implements OnInit {
  private router = inject(Router);
  protected categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

  protected goCategory(category: CategoryInterface) {
    this.router.navigate([`/categoria/${category.route}`]);
  }

}
