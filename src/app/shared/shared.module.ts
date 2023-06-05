import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';





@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
