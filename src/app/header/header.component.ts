import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../authentication/user.model';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authSubscription: Subscription;
  isAuthenticated = false;
  authenticatedUser: User;
  cartItemCount = 0;
  cartSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private cartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.user.subscribe(
      (user: User) => {
        this.authenticatedUser = user;
        this.isAuthenticated = !user ? false : true;
      }
    );
    this.cartSubscription = this.cartService.itemCountSubject.subscribe(
      (itemCount: number) => {
        this.cartItemCount = itemCount;
      }
    );
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
