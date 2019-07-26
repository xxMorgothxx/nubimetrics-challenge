import { Component, Input } from '@angular/core';

// Models
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  page = 4;
  pageSize = 20;
  @Input() products: Product[] = [];

}
