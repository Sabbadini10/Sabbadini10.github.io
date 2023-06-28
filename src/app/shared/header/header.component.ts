import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { PaginadorService } from 'src/app/home/component/paginador/services/paginador.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: any;
  name: string = '';
  points: string = '';
  priceHeader: number = 0;

  constructor(
    private headerService: HeaderService,
    private priceService: PaginadorService
  ) {}

  ngOnInit(): any {
    this.headerService.getData().subscribe((res: any) => {
      this.name = res.name;
    });

    this.headerService.getData().subscribe((res: any) => {
      this.points = res.points;
    });

    this.priceService.priceHeader$.subscribe((priceHeader) => {
      this.priceHeader = priceHeader;
    });
  }
}
