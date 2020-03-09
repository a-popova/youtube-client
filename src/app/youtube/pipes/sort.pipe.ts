import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from '../models/search-item.model';
import * as moment from 'moment';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(items: SearchItem[], criteria?: string, queryWord?: string): SearchItem[] {
    switch (criteria) {
      case 'date': {
        return items.sort((prev, next) => {
          if (moment(prev.snippet.publishedAt) > moment(next.snippet.publishedAt)) {
            return -1;
          } else {
            return 1;
          }
        });
      }

      case 'views': {
        return items.sort((prev, next) => {
          if (+prev.statistics.viewCount > +next.statistics.viewCount) {
            return -1;
          } else {
            return 1;
          }
        });
      }

      case 'word': {
        let sortedArray: SearchItem[] = items.filter((item) =>
        item.snippet.title.toLowerCase().includes(queryWord.toLowerCase()));
        return sortedArray;
      }

      default: {
        return items.sort((prev, next) => {
          if (prev.id > next.id) {
            return 1;
          }
        });
      }
    }
  }

}
