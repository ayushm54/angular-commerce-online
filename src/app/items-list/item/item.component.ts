import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../shared/item.model';
import { ItemService } from '../../shared/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  isLoading = false;
  items = [];
  itemsChangedSubscription: Subscription;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.itemService.getItems().subscribe(
      (items: Item[]) => {
        this.items = items;
        this.isLoading = false;
        this.itemService.setItems(this.items);
      }
    );

    this.itemService.itemsChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
  }

  addToCart(item: Item): void {
    this.itemService.addItemToCart(item);
  }

  ngOnDestroy(): void {
    if (this.itemsChangedSubscription) {
      this.itemsChangedSubscription.unsubscribe();
    }
  }

}
