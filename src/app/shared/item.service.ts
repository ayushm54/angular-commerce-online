import { Injectable } from '@angular/core';
import { DatStorageService } from './data-storage-service';
import { Item } from './item.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ItemService {

  private items: Item[] = [];
  itemsChanged = new Subject<Item[]>();

  constructor(private dataService: DatStorageService) { }

  setItems(items: Item[]): void {
    this.items = items;
  }

  getItems(): Observable<any> {
     return this.dataService.fetchItems();
  }

  filterItems(category: string): void {
    if (category === 'All') {
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
}
