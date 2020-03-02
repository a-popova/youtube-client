import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeVideosService } from 'src/app/youtube/services/youtube-videos.service';
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

  constructor(
    private filteringService: FilteringService,
    private loginService: LoginService
  ) { }

  public showResults(event: InputEvent, input: string): void {
    if (input) {
      event.preventDefault();
      this.filteringService.showResults(input);
    } else {
      alert('Please, enter some text in search field');
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
