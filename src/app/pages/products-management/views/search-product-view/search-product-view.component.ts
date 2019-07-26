import { Component, OnInit } from '@angular/core';

// External services
import { ToastrService } from 'ngx-toastr';

// Services
import { ProductsService } from '@products-nubimetrics/services/products.service';

// Models
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-search-product-view',
  templateUrl: './search-product-view.component.html'
})
export class SearchProductViewComponent implements OnInit {

  products: Product[] = [];
  showNotResults = false;
  constructor(
    private productService: ProductsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    (sessionStorage.getItem('last_text')) ?
      this.searchProduct(sessionStorage.getItem('last_text')) :
      this.productService.searchProduct('gadgets geeks', 0, 50)
        .subscribe(response => this.products = response.results);

  }

  /**
   * Busca el producto ingresado por el usuario
   * @param product Nombre del producto
   */
  searchProduct(product: string) {
    this.productService.getAllProducts(product)
      .subscribe(products => {
        this.products = products;
        (this.products.length) ? this.showNotResults = false : this.showNotResults = true;
      },
        err => this.toastrService.error('Ocurrió un error al obtener los productos de Mercado Libre', 'Error en el servidor'));
  }

}
