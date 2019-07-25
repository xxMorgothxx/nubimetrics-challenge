import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes modules
import { PipesModule } from '@pipes-nubimetrics/pipes.module';

// Components
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import { ProductCardListComponent } from './components/lists/product-card-list/product-card-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardListComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductsNbmModule { }
