import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private route: Router) {}
  public navigateContact() {
    this.route.navigateByUrl('/contact');
    console.log('por que no va');
  }
}
