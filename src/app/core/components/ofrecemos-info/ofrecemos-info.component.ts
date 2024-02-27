import { Component } from '@angular/core';

@Component({
  selector: 'app-ofrecemos-info',
  templateUrl: './ofrecemos-info.component.html',
  styleUrls: ['./ofrecemos-info.component.scss'],
})
export class OfrecemosInfoComponent {
  public info = [
    {
      id: 0,
      number: '01',
      title: 'Estudio previo de la obra',
    },
    {
      id: 1,
      number: '02',
      title: 'Redacción de proyectos',
    },
    {
      id: 2,
      number: '03',
      title: 'Medición y presupuesto',
    },
    {
      id: 3,
      number: '04',
      title: 'Lanzamiento de plano definitivo',
    },
  ];
}
