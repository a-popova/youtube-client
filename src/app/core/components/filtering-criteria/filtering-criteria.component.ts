import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { YoutubeVideosService } from 'src/app/youtube/services/youtube-videos.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent implements OnInit {
  @Input() public filterIsActive: boolean;
  public userInput: string;
  public userInputUpdate: Subject<string> = new Subject<string>();

  constructor( private youtubeVideosService: YoutubeVideosService) {
    this.userInputUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.sortByWord(value);
      });
  }

  public sortByDate(): void {
    this.youtubeVideosService.sortBy('date');
  }

  public sortByViews(): void {
    this.youtubeVideosService.sortBy('views');
  }

  public sortByWord(queryWord: string): void {
    this.youtubeVideosService.sortBy('word', queryWord);
  }

  public ngOnInit(): void {
  }

}
