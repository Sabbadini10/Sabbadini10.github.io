import { Component, OnInit } from '@angular/core';
import { PaginadorService } from './services/paginador.service';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css'],
})
export class PaginadorComponent implements OnInit {
  imagenes: any[] = []; // Array para almacenar las imagenes
  _data: any[] = []; // Array para almacenar los productos consumidos de la api
  name: string = '';
  puntos: number[] = []; // Array para almacenar los puntos
  productosHighFiltrados: number[] = []; // Array para almacenar los productos caros
  productosLowFiltrados: number[] = []; // Array para almacenar los productos baratos
  productosFiltrados: any[] = [];
  allProducts: any[] = []; //
  visibleProducts: any[] = []; // Array para almacenar los productos visibles
  visibleProducts2: any[] = []; // Array para almacenar los productos visibles
  productsPerPage = 16; // Cantidad de productos que se mostrarán por página
  filteredProducts: any[] = [];
  filteredDataProducts: Array<Object> = [];
  filtroPrecioActivo: boolean = false;
  filtroPrecioBarato: boolean = false;
  filtroPrecioCaro: boolean = false;

  constructor(private paginadorService: PaginadorService) {}

  ngOnInit(): void {
    this.paginadorService.getData().subscribe((res: any) => {
      this._data = res;
      this.allProducts = this._data;
    });

    this.paginadorService.getData().subscribe((res: any) => {
      this._data = res;
      this.visibleProducts = this._data.slice(0, this.productsPerPage);
    });

    this.paginadorService.getData().subscribe((res: any) => {
      this._data = res;
      this.visibleProducts2 = this._data.slice(16, this.productsPerPage);
    });

    this.paginadorService.getData().subscribe((res: any) => {
      this.imagenes = res;
      console.log(this.imagenes);
    });
  }

  showHighestProducts() {
    const myDinero = 500;
    return this.allProducts.filter((producto) => producto.cost >= myDinero);
  }

  showLowestProducts() {
    const myDinero = 300;
    return this.allProducts.filter((producto) => producto.cost <= myDinero);
  }

  toggleFiltroPrecioBajo() {
    if (this.filtroPrecioBarato) {
      this.filtroPrecioActivo = false;
      this.filtroPrecioBarato = false;
      this.productosFiltrados = this.allProducts; // Restablecer la lista de productos filtrados
    } else {
      this.filtroPrecioActivo = true;
      this.filtroPrecioCaro = false;
      this.filtroPrecioBarato = true;
      this.productosFiltrados = this.showLowestProducts(); // Aplicar el filtrado por precio
    }
  }

  toggleFiltroPrecioCaro() {
    if (this.filtroPrecioCaro) {
      this.filtroPrecioActivo = false;
      this.filtroPrecioCaro = false;
      this.productosFiltrados = this.allProducts; // Restablecer la lista de productos filtrados
    } else {
      this.filtroPrecioActivo = true;
      this.filtroPrecioBarato = false;
      this.filtroPrecioCaro = true;
      this.productosFiltrados = this.showHighestProducts(); // Aplicar el filtrado por precio
    }
  }

  first1: number = 16;
  rows1: number = 16;
  first2: number = 32;
  rows2: number = 32;

  totalRecords: number = 32;

  options = [
    { label: 16, value: 16 },
    { label: 32, value: 32 },
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
