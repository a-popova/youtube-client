import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeVideosService } from 'src/app/youtube/services/youtube-videos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filterIsActive: boolean = false;
  public input: string = '';

  constructor( private youtubeVideosService: YoutubeVideosService) { }

  public showResults(event: InputEvent, input: string): void {
    if (input) {
      event.preventDefault();
      this.youtubeVideosService.showResults(input);
    } else {
      alert('Please, enter some text in search field');
    }
  }

  public showFilterPanel(): void {
    this.filterIsActive = !this.filterIsActive;
  }

  public ngOnInit(): void {
  }

}
