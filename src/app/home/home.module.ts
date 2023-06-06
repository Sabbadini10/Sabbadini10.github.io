import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerModule } from './component/banner/banner.module';
import { PaginadorModule } from './component/paginador/paginador.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    PaginadorModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
