import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { OfrecemosInfoComponent } from './components/ofrecemos-info/ofrecemos-info.component';

@NgModule({
  declarations: [HomePageComponent, InfoGeneralComponent, OfrecemosInfoComponent],
  imports: [CommonModule, CoreRoutingModule, PrimeNgModule],
  exports: [HomePageComponent],
})
export class CoreModule {}
