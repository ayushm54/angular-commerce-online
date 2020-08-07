import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ItemsComponent } from './items/items.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'home', component: ItemsComponent
  },
  {
    path: '', component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
