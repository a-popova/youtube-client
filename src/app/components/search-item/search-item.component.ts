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

  constructor() {
  }

  public getBorderColor(): string {
    let datePublished: moment.Moment = moment(this.searchItem.snippet.publishedAt);
    let currentDate: moment.Moment = moment();
    let daysDiff: number = currentDate.diff(datePublished, 'days');
    let monthDiff: number = currentDate.diff(datePublished, 'months');
    if (daysDiff <= 7) {
      return 'blue';
    } else if (monthDiff <= 1) {
      return 'green';
    } else if (monthDiff > 1 && monthDiff < 6) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  public ngOnInit(): void {
  }

}
