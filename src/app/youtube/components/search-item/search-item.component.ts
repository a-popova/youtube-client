import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public searchItem: SearchItem;
  public datePublished: moment.Moment;

  constructor() {
  }

  public ngOnInit(): void {
    this.datePublished = moment(this.searchItem.snippet.publishedAt);
  }

}
