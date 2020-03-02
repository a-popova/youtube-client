import { Component, OnInit, Input } from '@angular/core';

import SearchResponse from '../../models/search-response.model';
import { YoutubeVideosService } from '../../services/youtube-videos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() public searchIsLoaded: boolean;
  @Input() public criteria: string;
  @Input() public queryWord: string;
  @Input() public searchResponse: SearchResponse;
  @Input() public filterIsClicked: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

}
