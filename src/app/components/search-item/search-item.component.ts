import { Component, OnInit } from '@angular/core';

import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  public searchItem: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
