import { Component, OnInit } from '@angular/core';

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
    private youtubeVideoService: YoutubeVideosService) {
    this.filteringService.searchClicked$.subscribe(
      () => {
        this.searchIsLoaded = true;
        this.getVideos();
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
    )
  }

  public getVideos(): void {
    this.searchResponse = this.youtubeVideoService.getVideos();
  }

  ngOnInit(): void {
    this.getVideos();
  }

}
