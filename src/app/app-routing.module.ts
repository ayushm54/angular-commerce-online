import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ItemListComponent } from './items-list/items-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuard } from './shared/auth.guard.service';


const routes: Routes = [
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'home', component: ItemListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
