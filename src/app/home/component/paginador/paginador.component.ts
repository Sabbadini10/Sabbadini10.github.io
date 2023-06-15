import { Component,  OnInit } from '@angular/core';
import { PaginadorService } from './services/paginador.service';
import { json } from 'express';


@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  imagenes: any[] = [];
   _data: any[] = [];// Array para almacenar los productos
   message: number[] = [];
  name: string = '';
  cost:  any[] = [];
  productosHighFiltrados: any;
  productosLowFiltrados: any;
  constructor(private paginadorService: PaginadorService){}

  visibleProducts: any[] = []; // Array para almacenar los productos visibles
  productsPerPage = 16; // Cantidad de productos que se mostrarán por página
  nextProducts: any[] = []; // Array para almacenar los productos visibles
  nextPerPage = 32; // Cantidad de productos que se mostrarán por página
  
  filteredProducts: any[]= [];
  priceFilter: number = 250;

   ngOnInit(): void {

    this.paginadorService.getData().subscribe((res: any) => {
      this._data = res
      this.visibleProducts = this._data.slice(0, this.productsPerPage);
      })


    this.paginadorService.getData().subscribe((res: any) => {
      this.imagenes = res;
     console.log(this.imagenes)
      })


      this.paginadorService.getData().subscribe((res: any) => {
        const myDinero = 500;
        this.cost = res
        this.filteredProducts = this.cost.map(item => item.cost);
         this.productosHighFiltrados = this.filteredProducts.filter(producto => producto >= myDinero);
         this.productosLowFiltrados = this.filteredProducts.filter(producto => producto <= myDinero);
        console.log('>>><<<>>>'+ this.productosHighFiltrados)
        console.log('>>><<<>>>'+ this.productosLowFiltrados)
        })



   }


   showHighestProducts() {
    const myDinero = 1000;
    if(this.productosHighFiltrados >= myDinero){
      return this.productosHighFiltrados;
    }else {
      return "NO TE ALCANZA"
     
    }
  }

  showLowestProducts() {
    const myDinero = 500;
    if(this.productosLowFiltrados <= myDinero){
     return this.productosLowFiltrados;
    }else {
      return "NO TE ALCANZA"
    }
  }


   first1: number = 16;

    rows1: number = 16;

    first2: number = 32;

    rows2: number = 32;


    totalRecords: number = 32;

    options = [
        { label: 16, value: 16 },
        { label: 32, value:32 },
    ];

    onPageChange1(event: any) {
        this.first1 = event.first;
        this.rows1 = event.rows;
    }

    onPageChange2(event: any) {
        this.first2 = event.first;
        this.rows2 = event.rows;
    }

    isClicked1: boolean = false;
    isClicked2: boolean = false;
    isClicked3: boolean = false;

    changeColor1() {
      this.isClicked1 = !this.isClicked1;
    }

    changeColor2() {
      this.isClicked2 = !this.isClicked2;
    }

    changeColor3() {
      this.isClicked3 = !this.isClicked3;
    }

}
