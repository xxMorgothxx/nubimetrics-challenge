import { Component, OnInit, Input } from '@angular/core';

// Modules
import { Product } from '@products-nubimetrics/models/product.model';

@Component({
  selector: 'nubimetrics-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product = new Product({});

  constructor() { }

  ngOnInit() {
  }

}
