import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginadorComponent } from './paginador.component';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [PaginadorComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    ButtonModule,
    SliderModule,
    MessagesModule,
  ],
  exports: [PaginadorComponent],
})
export class PaginadorModule {}
