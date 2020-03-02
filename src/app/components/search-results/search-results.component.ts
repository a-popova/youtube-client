import { Component, OnInit, Input } from '@angular/core';

import SearchResponse from '../../models/search-response.model';
import { YoutubeVideosService } from '../../youtube-videos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() public searchIsLoaded: boolean;
  @Input() public filterIsClicked: boolean = false;
  @Input() public criteria: string;
  @Input() public queryWord: string;

  public searchResponse: SearchResponse;

  constructor(private youtubeVideosService: YoutubeVideosService) { }

  public getVideos(): void {
    this.searchResponse = this.youtubeVideosService.getVideos();
  }

  public ngOnInit(): void {
    this.getVideos();
  }

}
