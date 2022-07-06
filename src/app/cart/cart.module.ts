import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BuyingDetailsComponent } from './buying-details/buying-details.component';
import { ProductsModule } from '../products/products.module';

const routes: Routes = [
  { path: 'cart', component: CartItemComponent },
  { path: 'buy/:id', component: BuyingDetailsComponent },
]

@NgModule({
  declarations: [
    CartItemComponent,
    BuyingDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    ProductsModule,
  ]
})
export class CartModule { }
