import { HeaderComponent } from './shared/header/header.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('600ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'feria-amiga';
  animationState: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Escuchar el cambio de rutas para actualizar el estado de la animación
    this.router.events.subscribe(() => {
      const data = this.activatedRoute.firstChild?.snapshot.data;
      this.animationState = data ? data['animation'] : '';
    });
  }

  // Método para obtener el estado de la animación según la ruta activa
  getRouteAnimationState(outlet: RouterOutlet) {
    debugger;
    return outlet?.activatedRouteData?.['animation'] || '';
  }
}

