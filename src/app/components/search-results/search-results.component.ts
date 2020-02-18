import { Component, OnInit, Input } from '@angular/core';

import SearchResponse from '../../models/search-response.model';
//import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResponse: SearchResponse;
  @Input() searchIsLoaded: boolean;
  @Input() filterIsClicked: boolean = false;
  @Input() criteria: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
