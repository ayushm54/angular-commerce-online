import { Injectable } from '@angular/core';
import { DatStorageService } from './data-storage-service';
import { Item } from './item.model';
import { Observable, of, Subject } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({providedIn: 'root'})
export class ItemService {

  private items: Item[] = [];
  itemsChanged = new Subject<Item[]>();

  constructor(
    private dataService: DatStorageService,
    private cartService: ShoppingCartService
  ) { }

  setItems(items: Item[]): void {
    this.items = items;
  }

  getItems(): Observable<any> {
     return this.dataService.fetchItems();
  }

  filterItems(category: string): void {
    if (category.includes('All')) {
      this.itemsChanged.next(this.items.slice());
    } else {
      const filteredItems = this.items.filter(
        (item) => {
          return item.category === category;
        }
      );
      this.itemsChanged.next(filteredItems);
    }
  }

  addItemToCart(item: Item): void {
    this.cartService.addItemToCart(item);
  }
}
