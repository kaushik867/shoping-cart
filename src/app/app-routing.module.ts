import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './shared/server-error/server-error.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./products/products.module').then(p => p.ProductsModule) },
  { path: 'usercart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  { path: 'server-error', component: ServerErrorComponent},
  { path: 'user', loadChildren: () => import('./users/users.module').then(u => u.UsersModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
