import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PaginadorService } from './services/paginador.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css'],
})
export class PaginadorComponent implements OnInit {
  imagenes: any[] = []; // Array para almacenar las imagenes
  _data: any[] = []; // Array para almacenar los productos consumidos de la api
  name: string = '';
  messageRedeem: string = '';
  mensajeRedeem: boolean = false;
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
  filtroPrecioRamdon: boolean = false;

  constructor(private paginadorService: PaginadorService, private cdRef: ChangeDetectorRef) {}

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
      /*  console.log(this.imagenes); */
    });

    this.paginadorService.getDataRedeem().subscribe((res: any) => {
      this.messageRedeem = res.message;
      console.log(this.messageRedeem);
      this.cdRef.detectChanges(); // Realiza la detección de cambios después de actualizar this.messageRedeem
    });
  }

  showHighestProducts() {
    const myDinero = 500; // declaro la constante myDinero con valor por default de 500
    return this.allProducts.filter((producto) => producto.cost >= myDinero); // filtro el array de todos los productos por el precio si es mayor a 500
  }

  showLowestProducts() {
    const myDinero = 500; // declaro la constante myDinero con valor por default de 500
    return this.allProducts.filter((producto) => producto.cost <= myDinero); // filtro el array de todos los productos por el precio si es menor a 500
  }

  showRandomProducts() {
    let productsCopy = [...this.allProducts]; // Hacemos una copia de los productos originales
    let randomProducts = productsCopy
      .sort(() => Math.random() - 0.5)
      .slice(0, this.productsPerPage); // Ordeno aleatoriamente los productos y divido el array de objetos en 16 productos
    console.log(randomProducts);
    return randomProducts.filter((producto) => producto); // Filtro los productos para eliminar elementos nulos o indefinidos
  }

  toggleFiltroPrecioBajo() {
    if (this.filtroPrecioBarato) {
      this.filtroPrecioActivo = false; // Desactiva la lista de productos Activo
      this.filtroPrecioBarato = false; // Desactiva la lista de productos Barato
      this.productosFiltrados = this.allProducts; // Restablecer la lista de productos filtrados
    } else {
      this.filtroPrecioActivo = true; // Activa la lista de productos Activo
      this.filtroPrecioCaro = false; // Desactiva la lista de productos Caro
      this.filtroPrecioRamdon = false; // Desactiva la lista de productos Random
      this.filtroPrecioBarato = true; // Activa la lista de productos Barato
      this.productosFiltrados = this.showLowestProducts(); // Aplicar el filtrado por precio
    }
  }

  toggleFiltroPrecioCaro() {
    if (this.filtroPrecioCaro) {
      this.filtroPrecioActivo = false; // Desactiva la lista de productos Activo
      this.filtroPrecioCaro = false; // Desactiva la lista de productos Caro
      this.productosFiltrados = this.allProducts; // Restablecer la lista de productos filtrados
    } else {
      this.filtroPrecioActivo = true; // Activa la lista de productos Activo
      this.filtroPrecioBarato = false; // Desactiva la lista de productos Baratos
      this.filtroPrecioRamdon = false; // Desactiva la lista de productos Random
      this.filtroPrecioCaro = true; // Activa la lista de productos Caro
      this.productosFiltrados = this.showHighestProducts(); // Aplicar el filtrado por precio
    }
  }

  toggleFiltroPrecioRamdon() {
    if (this.filtroPrecioRamdon) {
      this.filtroPrecioActivo = false; // Desactiva la lista de productos Activo
      this.filtroPrecioRamdon = false; // Desactiva la lista de productos Random
      this.productosFiltrados = this.allProducts; // Restablecer la lista de productos filtrados
    } else {
      this.filtroPrecioActivo = true; // Activa la lista de productos Activo
      this.filtroPrecioBarato = false; // Desactiva la lista de productos Baratos
      this.filtroPrecioCaro = false; // Desactiva la lista de productos Caros
      this.filtroPrecioRamdon = true; // Activa la lista de productos Random
      this.productosFiltrados = this.showRandomProducts(); // Aplicar el filtrado aleatorio por precio
    }
  }

  showRedeemProducts() {
  this.mensajeRedeem = !this.mensajeRedeem
      console.log('>>>><<<<' + this.messageRedeem);
      this.cdRef.detectChanges(); // Realiza la detección de cambios después de actualizar this.mensajeRedeem
      this.messageRedeem;
  }

  first: number = 0;
  rows: number = 16;
  totalRecords: number = 32;

  // Opciones para el dropdown de cantidad de elementos por página
  options: SelectItem[] = [
    { label: '16', value: 16 },
    { label: '32', value: 32 },
  ];

  // Método para manejar el cambio de página en el paginador 1
  onPageChange1(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updateFilteredProducts();
  }

  // Método para filtrar y actualizar los productos mostrados en el paginador
  updateFilteredProducts() {
    this.visibleProducts = this._data.slice(this.first, this.first + this.rows);
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
