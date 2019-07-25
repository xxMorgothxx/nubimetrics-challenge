import { Component, OnInit } from '@angular/core';

// External services
import { ToastrService } from 'ngx-toastr';

// Services
import { ProductsService } from '@products-nubimetrics/services/products.service';
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-search-product-view',
  templateUrl: './search-product-view.component.html',
  styles: []
})
export class SearchProductViewComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  /**
   * Busca el producto ingresado por el usuario
   * @param product Nombre del producto
   */
  searchProduct(product: string) {
    this.productService.searchProduct(product, 0, 20)
      .subscribe(products => this.products = products,
        err => this.toastrService.error('Ocurrió un error al obtener los productos de Mercado Libre', 'Error en el servidor'));
  }

}
