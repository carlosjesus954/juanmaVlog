import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { OfrecemosInfoComponent } from './components/ofrecemos-info/ofrecemos-info.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    InfoGeneralComponent,
    OfrecemosInfoComponent,
    ContactPageComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [HomePageComponent],
})
export class CoreModule {}
