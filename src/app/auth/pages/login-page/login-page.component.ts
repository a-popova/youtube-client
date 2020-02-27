import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor( private loginService: LoginService) { }

  public login(form: NgForm): void {
    this.loginService.login(form);
  }

  public ngOnInit(): void {
  }

}
