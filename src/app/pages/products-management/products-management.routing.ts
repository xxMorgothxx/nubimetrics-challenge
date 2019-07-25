import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProductsManagementComponent } from './products-management.component';
import { SearchProductViewComponent } from './views/search-product-view/search-product-view.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsManagementComponent,
        children: [
            { path: '', component: SearchProductViewComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsManagementRoutingModule { }