import { Component, OnInit } from '@angular/core';

import SearchResponse from '../../models/search-response.model';
import { FilteringService } from 'src/app/core/services/filtering.service';
import { YoutubeVideosService } from '../../services/youtube-videos.service';
import SearchItem from '../../models/search-item.model';

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
    this.youtubeVideosService.getVideos(query)
      .subscribe(res => { 
        this.renderVideos(res.items);
      });
  }

  public renderVideos(itemsArray?: SearchItem[]): void {
    this.youtubeVideosService.renderVideos(itemsArray)
      .subscribe(videos => {
        this.searchResponse = videos;
      })
  }

  public ngOnInit(): void {
    this.getVideos();
    this.renderVideos();
  }

}
