import { Component, Output, EventEmitter, Input } from '@angular/core';

// Services
import { ProductsService } from '@products-nubimetrics/services/products.service';
import { ToastrService } from 'ngx-toastr';

// Models
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-filters-product-view',
  templateUrl: './filters-product-view.component.html',
  styleUrls: ['./filters-product-view.component.scss']
})
export class FiltersProductViewComponent {

  @Output('pageSize') pageSizeEmit = new EventEmitter<number>();
  @Input() products: Product[] = [];
  @Input() productsShort: Product[] = [];
  @Output('resultProducts') productsEmit = new EventEmitter<Product[]>();
  pageSize: number = 20;
  min: number;
  max: number;

  constructor(
    private productService: ProductsService,
    private toastrService: ToastrService
  ) { }

  emitPageSize() {
    this.pageSizeEmit.emit(this.pageSize);
  }

  /**
   * Filtrar por condición
   * @param condition Condición
   */
  filterByCondition(condition: string) {
    if (condition == 'all') return this.productsEmit.emit([]);
    this.productService.getAllProductsByCondition(condition, this.products).subscribe(products => {
      if (products.length) {
        this.productsEmit.emit(products);
      } else {
        this.toastrService.info('No se encontraron productos que cumplan con la condición');
      }
    });
  }

  /**
   * Ordena los productos ascendente o descendentemente por el precio
   * @param order Tipo de ordenación
   */
  orderByPrice(order: string) {
    this.productService.orderProductsByPrice(order, this.productsShort).subscribe(products => {
      this.productsEmit.emit(products);
    });
  }

  /**
   * Ordena los productos ascendente o descendentemente por la cantidad de ventas
   * @param order Tipo de ordenación
   */
  orderBySoldQuantity(order: string) {
    this.productService.orderProductsBySoldQuantity('ascendente', this.productsShort).subscribe(products => {
      (order == 'ascendente') ?
        this.productsEmit.emit(products) :
        this.productsEmit.emit(products.reverse());
    });
  }

  /**
   * Filtra los productos entre un rango de precio
   */
  filterBetweenPrices() {
    this.productService.filterProductsBetweenPrices(this.min, this.max, this.products).subscribe(products => {
      this.productsEmit.emit(products);
    });
  }

}
