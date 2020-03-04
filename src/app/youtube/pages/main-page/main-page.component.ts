import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import SearchResponse from '../../models/search-response.model';
import { FilteringService } from 'src/app/core/services/filtering.service';
import { YoutubeVideosService } from '../../services/youtube-videos.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public searchIsLoaded: boolean = false;
  public criteria: string = '';
  public queryWord: string = '';
  public searchResponse: SearchResponse;

  constructor(
    private filteringService: FilteringService,
    private youtubeVideosService: YoutubeVideosService) {
    this.filteringService.searchClicked$.subscribe(
      (query) => {
        this.searchIsLoaded = true;
        this.getVideos(query);
      }
    ),
    this.filteringService.sortCriteria$.subscribe(
      (criteria) => {
        this.criteria = criteria;
      }
    ),
    this.filteringService.sortWord$.subscribe(
      (sortWord) => {
        this.queryWord = sortWord;
      }
    );
  }

  public getVideos(query?: string): void {
    this.youtubeVideosService.getVideos(query).pipe(
      switchMap(response => {
        return this.youtubeVideosService.renderVideos(response.items);
      })
    ).subscribe(res => {
      this.searchResponse = res;
    });
  }

  public ngOnInit(): void {
    this.getVideos();
  }

}
