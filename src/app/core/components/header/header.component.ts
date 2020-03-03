import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import { FilteringService } from '../../services/filtering.service';
import { LoginService } from 'src/app/auth/services/login.service';
import { Router } from '@angular/router';
import { YoutubeVideosService } from 'src/app/youtube/services/youtube-videos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public input: string = '';
  public userInput: string;
  public userInputUpdate: Subject<string> = new Subject<string>();

  constructor(
    public loginService: LoginService,
    private youtubeService: YoutubeVideosService,
    private filteringService: FilteringService,
    private router: Router
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

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public showFilterPanel(): void {
    this.filteringService.showFilters();
  }

  public ngOnInit(): void {
  }

}
