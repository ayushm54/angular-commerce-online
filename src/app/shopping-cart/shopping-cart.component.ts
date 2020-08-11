import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../shared/item.model';
import { ShoppingCart } from '../shared/shopping-cart.model';
import { ShoppingCartService, ShoppingCartItems } from '../shared/shopping-cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  shoppingCartItems: ShoppingCartItems;
  cartItems: ShoppingCart[] = [];
  cartSubscription: Subscription;

  constructor(
    private cartService: ShoppingCartService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.shoppingCartItems = this.cartService.getCartItems();
    this.cartItems = this.shoppingCartItems.cartItems;
    this.cartSubscription = this.cartService.cartUpdated.subscribe(
      (cartItems: ShoppingCartItems) => {
        this.shoppingCartItems = cartItems;
        this.cartItems = this.shoppingCartItems.cartItems;
      }
    );

  }

  clearCart(): void{
    this.cartService.clearCart();
  }

  checkout(): void{

  }

  ngOnDestroy(): void{
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
