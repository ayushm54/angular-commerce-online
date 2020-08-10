import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart.model';
import { Subject } from 'rxjs';

export class ShoppingCartItems {
  cartItems: ShoppingCart[];
  cartTotal: number;
}

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  shoppingCartItems: ShoppingCartItems;
  cartUpdated = new Subject<ShoppingCartItems>();
  itemCountSubject = new Subject<number>();
  itemCount = 0;

  constructor() {
    this.shoppingCartItems = new ShoppingCartItems();
    this.shoppingCartItems.cartItems = [];
    this.shoppingCartItems.cartTotal = 0;
  }

  getCartItems(): ShoppingCartItems {
    return this.shoppingCartItems;
  }

  addItemToCart(item: Item): void {
    const cartItem = new ShoppingCart(item, 1, item.price);
    this.shoppingCartItems.cartItems.push(cartItem);
    this.itemCount++;
    this.shoppingCartItems.cartTotal = this.shoppingCartItems.cartTotal + +item.price;
    this.cartUpdated.next(this.shoppingCartItems);
    this.itemCountSubject.next(this.itemCount);
  }

  updateCart(): void {}

  clearCart(): void {
    this.shoppingCartItems.cartItems.splice(0, this.itemCount);
    this.shoppingCartItems.cartTotal = 0;
    this.cartUpdated.next(this.shoppingCartItems);
    this.itemCount = 0;
    this.itemCountSubject.next(this.itemCount);
  }
}
