import { Component, Input } from '@angular/core';

// Models
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  page = 1;
  @Input() pageSize = 20;
  @Input() products: Product[] = [];

}
