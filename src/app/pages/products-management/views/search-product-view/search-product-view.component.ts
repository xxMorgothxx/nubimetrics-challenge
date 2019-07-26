import { Component, OnInit } from '@angular/core';

// External services
import { ToastrService } from 'ngx-toastr';

// Services
import { ProductsService } from '@products-nubimetrics/services/products.service';

// Models
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-search-product-view',
  templateUrl: './search-product-view.component.html',
  styleUrls: ['.//search-product-view.component.scss']
})
export class SearchProductViewComponent implements OnInit {

  products: Product[] = [];
  productsShort: Product[] = [];
  showNotResults = false;
  searchText = sessionStorage.getItem('last_text') || 'Publicaciones geek';

  pageSize = 20;

  constructor(
    private productService: ProductsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    (sessionStorage.getItem('last_text')) ?
      this.searchProduct(sessionStorage.getItem('last_text')) :
      this.productService.searchProduct('gadgets geeks', 0, 50)
        .subscribe(response => {
          this.searchText = 'Publicaciones geek';
          this.products = response.results;
          this.productsShort = this.products;
        });

  }

  /**
   * Busca el producto ingresado por el usuario
   * @param product Nombre del producto
   */
  searchProduct(product: string) {
    this.searchText = product;
    this.productService.getAllProducts(product)
      .subscribe(products => {
        this.products = products;
        this.productsShort = this.products;
        (this.products.length) ? this.showNotResults = false : this.showNotResults = true;
      },
        err => this.toastrService.error('Ocurrió un error al obtener los productos de Mercado Libre', 'Error en el servidor'));
  }

  /**
   * Asigna los productos que cumplan con las ordenaciones y filtros elegidas
   * por el usuario
   * @param products productos
   */
  getProductsShort(products: Product[]) {
    if (products.length == this.products.length)
      this.products = products;
    if (products.length) {
      this.productsShort = products;
    } else {
      this.productsShort = this.products;
    }

  }

}
