import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LayoutPageComponent, NavBarComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule, PrimeNgModule, CoreModule],
})
export class SharedModule {}
