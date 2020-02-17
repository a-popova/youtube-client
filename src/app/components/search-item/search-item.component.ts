import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem: SearchItem;

  public getBorderColor() {
    let datePublished = moment(this.searchItem.snippet.publishedAt);
    let currentDate = moment();
    let daysDiff = currentDate.diff(datePublished, 'days');
    let monthDiff = currentDate.diff(datePublished, 'months');
    if (daysDiff <= 7) {
      return 'blue';
    } else if (monthDiff <= 1) {
      return 'green';
    } else if (monthDiff > 1 && monthDiff < 6) {
      return 'yellow'
    } else {
      return 'red';
    }
  }

  constructor() { 
  }

  public ngOnInit(): void {
  }

}
