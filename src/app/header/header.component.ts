import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../authentication/user.model';

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

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.user.subscribe(
      (user: User) => {
        this.authenticatedUser = user;
        this.isAuthenticated = !user ? false : true;
      }
    );
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
