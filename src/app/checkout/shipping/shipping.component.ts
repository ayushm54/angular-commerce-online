import { ShoppingCartItems } from './../../shared/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shoppingCartItems: ShoppingCartItems;

  constructor(
    private router: Router,
    private cart: ShoppingCartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.shoppingCartItems = JSON.parse(params['cartItems']);
        console.log(this.shoppingCartItems);
      }
    );
  }

  placeOrder(): void{
    this.cart.clearCart();
    this.router.navigate(['checkout-summary']);
  }
}
