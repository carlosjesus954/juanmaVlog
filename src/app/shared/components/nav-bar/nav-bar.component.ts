import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public navBar = [
    {
      id: 0,
      title: 'Inicio',
      link: '',
    },
    {
      id: 1,
      title: 'Servicios',
      link: '',
    },
    {
      id: 2,
      title: 'Obras realizadas',
      link: '',
    },
  ];
}
