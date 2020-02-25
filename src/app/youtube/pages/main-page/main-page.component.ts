import { Component, OnInit } from '@angular/core';

import SearchResponse from '../../models/search-response.model';
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

  constructor(private youtubeVideosService: YoutubeVideosService) {
    youtubeVideosService.searchClicked$.subscribe(
      () => {
        this.searchIsLoaded = true;
        this.getVideos();
      }
    ),
    youtubeVideosService.sortCriteria$.subscribe(
      (criteria) => {
        this.criteria = criteria;
      }
    ),
    youtubeVideosService.sortWord$.subscribe(
      (sortWord) => {
        this.queryWord = sortWord;
      }
    )
  }

  public getVideos(): void {
    this.searchResponse = this.youtubeVideosService.getVideos();
  }

  ngOnInit(): void {

  }

}
