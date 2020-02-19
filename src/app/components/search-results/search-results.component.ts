import { Component, OnInit, Input } from '@angular/core';

import SearchResponse from '../../models/search-response.model';
import { YoutubeVideosService } from '../../youtube-videos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchIsLoaded: boolean;
  @Input() filterIsClicked: boolean = false;
  @Input() criteria: string;
  @Input() queryWord: string;

  public searchResponse: SearchResponse;
  public getVideos(): void {
    this.searchResponse = this.youtubeVideosService.getVideos();
  }

  constructor(private youtubeVideosService: YoutubeVideosService) { }

  public ngOnInit(): void {
    this.getVideos();
  }

}
