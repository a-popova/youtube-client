import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) {}

  public login(form: NgForm): void {
    let token: string = form.value.login + form.value.password;
    localStorage.setItem('accessToken', token);
    this.router.navigate(['/results']);
  }

  public logout(): void {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    }
  }

}
