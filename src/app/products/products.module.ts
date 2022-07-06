import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductsListsComponent },
  { path: 'details/:id', component: DetailsComponent },
]

@NgModule({
  declarations: [
    ProductsListsComponent,
    ProductItemComponent,
    DetailsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
  ],
  exports: [
    ProductDetailsComponent,
  ]
})
export class ProductsModule { }
