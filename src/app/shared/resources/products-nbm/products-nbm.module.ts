import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes modules
import { PipesModule } from '@pipes-nubimetrics/pipes.module';

// Components
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductModalComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ProductCardComponent,
    ProductModalComponent
  ]
})
export class ProductsNbmModule { }
