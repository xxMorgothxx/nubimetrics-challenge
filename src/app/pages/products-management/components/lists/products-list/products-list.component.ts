import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}
