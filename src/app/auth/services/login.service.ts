import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn$: BehaviorSubject<string|null>;

  constructor(private router: Router) {
    const isLoggedIn: string | null = localStorage.getItem('accessToken');
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }

  public login(form: NgForm): void {
    let token: string = form.value.login + form.value.password;
    localStorage.setItem('accessToken', token);
    this.router.navigate(['/results']);
    this.isLoggedIn$.next(localStorage.getItem('accessToken'));
  }

  public logout(): void {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
      this.isLoggedIn$.next(null);
      this.router.navigate(['/login']);
    }
  }

}
