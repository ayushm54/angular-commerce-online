import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private loginSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginSubscription = this.authService.loginSubject.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
