import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router, private service: LoginService) {
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }

  public checkLogin(): boolean {
    if (localStorage.getItem('accessToken')) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}
