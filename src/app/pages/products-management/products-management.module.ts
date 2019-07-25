import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own modules
import { ProductsManagementRoutingModule } from './products-management.routing';
import { ProductsNbmModule } from 'src/app/shared/resources/products-nbm/products-nbm.module';

// Components
import { ProductsManagementComponent } from './products-management.component';
import { SearchProductViewComponent } from './views/search-product-view/search-product-view.component';

@NgModule({
  declarations: [
    ProductsManagementComponent,
    SearchProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductsManagementRoutingModule,
    ProductsNbmModule
  ]
})
export class ProductsManagementModule { }
