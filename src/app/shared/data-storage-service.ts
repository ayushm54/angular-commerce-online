import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Injectable({ providedIn: 'root' })
export class DatStorageService {
  constructor(
    private http: HttpClient
  ) { }

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
}
