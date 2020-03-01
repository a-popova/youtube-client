import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('accessToken') === 'true';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }

  public login(form: NgForm): void {
    let token: string = form.value.login + form.value.password;
    localStorage.setItem('accessToken', token);
    this.router.navigate(['/results']);
    this.isLoggedIn$.next(true);
  }

  public logout(): void {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
      this.isLoggedIn$.next(false);
      this.router.navigate(['/login']);
    }
  }

}
