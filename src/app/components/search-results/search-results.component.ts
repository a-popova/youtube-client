import { Component, OnInit, Input } from '@angular/core';

import SearchResponse from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResponse: SearchResponse;
  @Input() searchIsLoaded: boolean;

  constructor() { }

  public ngOnInit(): void {
  }

}
