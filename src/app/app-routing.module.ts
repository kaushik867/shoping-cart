import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from './logged-user.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './shared/server-error/server-error.component';
import { UserLoginGuard } from './shared/user-login.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./products/products.module').then(p => p.ProductsModule) },
  { path: 'usercart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule), canActivate: [LoggedUserGuard] },
  { path: 'server-error', component: ServerErrorComponent},
  { path: 'user', loadChildren: () => import('./users/users.module').then(u => u.UsersModule), canActivate: [LoggedUserGuard]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
