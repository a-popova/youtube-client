import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router){}

  public login(form: NgForm): void {
    let token = form.value.login + form.value.password;
    localStorage.setItem('accessToken', token);
    this.router.navigate(['/results']);
  }

}
