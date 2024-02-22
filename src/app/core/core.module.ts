import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, CoreRoutingModule, PrimeNgModule],
  exports: [HomePageComponent],
})
export class CoreModule {}
