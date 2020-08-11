import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Item } from './item.model';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { ShoppingCartItems } from './shopping-cart.service';

@Injectable({ providedIn: 'root' })
export class DatStorageService {
  private loggedInUser = '';
  user: {
    email: string;
    id: string;
    _token: string;
    _tokenExpirationDate: string;
  };

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('userData'));
  }

  // storeRecipes(): void {
  //     const recipes = this.recipeService.getRecipes();

  //     // to overide all data firebase exposes the put request
  //     this.http.put(
  //         'https://angular-recipe-87935.firebaseio.com/recipes.json',
  //         recipes
  //     ).subscribe((response) => {
  //         console.log(response);
  //     });
  // }

  fetchItems(): Observable<any> {
    return this.http
      .get<Item[]>('https://angular-commerce-online.firebaseio.com/items.json')
      .pipe(
        map((responseData) => {
          return responseData.map((items) => {
            return {
              ...items,
            };
          });
        })
      );
  }

  saveCartSnapshot(shoppingCartItems: ShoppingCartItems): void {
    // this.http.put(
    //   'https://angular-recipe-87935.firebaseio.com/cart.json',
    //   {
    //     emailId: this.user.email,
    //     cart: shoppingCartItems
    //   }
    // ).subscribe((response) => {
    //   console.log(response);
    // });
  }
}
