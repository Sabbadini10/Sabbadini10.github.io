import { Component,  OnInit } from '@angular/core';
import { PaginadorService } from './services/paginador.service';
@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  imagenes: any[] = []; 
   _data: any;
  name: string = '';
  cost: string = '';

  constructor(private paginadorService: PaginadorService){}
  

   ngOnInit(): void {

    this.paginadorService.getData().subscribe((res: any) => {
      this._data = res
      })


    this.paginadorService.getData().subscribe((res: any) => {
      this.imagenes = res;
     console.log(this.imagenes)
      })
   }


}
