import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthService {

  isAuthenticated = false;
  loginSubject = new Subject<boolean>();

  constructor(
    private router: Router
  ) { }

  logIn(email: string, password: string): void {
    this.isAuthenticated = true;
    this.loginSubject.next(this.isAuthenticated);
    this.router.navigate(['/home']);
  }
}
