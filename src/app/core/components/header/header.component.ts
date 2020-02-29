import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import { FilteringService } from '../../services/filtering.service';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filterIsActive: boolean = false;
  public input: string = '';
  public userInput: string;
  public userInputUpdate: Subject<string> = new Subject<string>();

  constructor(
    private filteringService: FilteringService,
    private loginService: LoginService
  ) {
    this.userInputUpdate.pipe(
      filter(text => text.length > 3),
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.showResults(value);
      });
  }

  public showResults(input: string): void {
    if (input) {
      this.filteringService.showResults(input);
    } 
  }

  public showFilterPanel(): void {
    this.filterIsActive = !this.filterIsActive;
  }

  public logout(): void {
    this.loginService.logout();
  }

  public ngOnInit(): void {
  }

}
