import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() public onFormSubmit: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  constructor() { }

  public onSubmit(f: NgForm): void {
    if (f.valid) {
      this.onFormSubmit.emit(f);
    }
  }

  public ngOnInit(): void {
  }

}
