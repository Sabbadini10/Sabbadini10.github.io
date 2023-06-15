import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginadorComponent } from './paginador.component';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';


@NgModule({
  declarations: [
    PaginadorComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    ButtonModule,
    SliderModule
  ],
  exports: [
    PaginadorComponent
  ]
})
export class PaginadorModule { }
