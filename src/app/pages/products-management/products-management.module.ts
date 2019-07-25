import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own modules
import { ProductsManagementRoutingModule } from './products-management.routing';
import { ProductsNbmModule } from 'src/app/shared/resources/products-nbm/products-nbm.module';
import { FormsNbmModule } from 'src/app/shared/components/forms-nbm/forms-nbm.module';

// Components
import { ProductsManagementComponent } from './products-management.component';
import { SearchProductViewComponent } from './views/search-product-view/search-product-view.component';
import { ProductsListComponent } from './components/lists/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsManagementComponent,
    SearchProductViewComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsManagementRoutingModule,
    ProductsNbmModule,
    FormsNbmModule
  ]
})
export class ProductsManagementModule { }
