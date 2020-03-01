import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router, Route } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {
  public isLoggedIn: boolean = false;

  constructor(private router: Router,
    private service: LoginService) {
      this.service.isLoggedIn$.subscribe(
        (isLoggedIn) => {
          if (isLoggedIn) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        }
      )
    }

  public canLoad(route: Route): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public isLoggedIn: boolean;

  constructor(private service: LoginService) {
    this.service.isLoggedIn$.subscribe(
      (isLoggedIn) => {
        if (isLoggedIn) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    )
  }

  public canActivate(): boolean {
    return this.isLoggedIn;
  }
}
