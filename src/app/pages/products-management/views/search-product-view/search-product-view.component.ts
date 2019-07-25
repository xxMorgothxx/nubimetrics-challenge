import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nubimetrics-search-product-view',
  templateUrl: './search-product-view.component.html',
  styles: []
})
export class SearchProductViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchProduct(product: string){
    console.log(product);
  }
  
}
