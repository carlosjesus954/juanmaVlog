import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  private navBar = new BehaviorSubject<boolean>(false);
  navBar$ = this.navBar.asObservable();
  public navBarState: boolean = false;
  ngOnInit() {
    this.navBar.subscribe((value) => {
      this.navBarState = value;
    });
  }
  public navBarElements = [
    {
      id: 0,
      title: 'Inicio',
      link: '',
    },
    {
      id: 1,
      title: 'Obras realizadas',
      link: '',
    },
  ];

  public changeStateOfNavBar() {
    this.navBar.next(!this.navBar.getValue());
    console.log('estado navbar');
  }
}
