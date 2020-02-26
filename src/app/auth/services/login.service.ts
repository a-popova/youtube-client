import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router){}

  public login(form: NgForm): void {
    localStorage.setItem('accessToken', form.value);
    this.router.navigate(['/results']);
  }

}
