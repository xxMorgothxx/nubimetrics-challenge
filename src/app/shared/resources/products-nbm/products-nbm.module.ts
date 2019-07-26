import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Pipes modules
import { PipesModule } from '@pipes-nubimetrics/pipes.module';

// Components
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';
import { FiltersProductViewComponent } from './views/filters-product-view/filters-product-view.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductModalComponent,
    FiltersProductViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    ProductCardComponent,
    ProductModalComponent,
    FiltersProductViewComponent
  ]
})
export class ProductsNbmModule { }
