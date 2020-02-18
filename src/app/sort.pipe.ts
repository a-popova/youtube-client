import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from './models/search-item.model';
import * as moment from 'moment';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: SearchItem[], criteria?: string): SearchItem[] {
    switch (criteria) {
      case 'date': {
        return items.sort((prev, next) => {
          if (moment(prev.snippet.publishedAt) > moment(next.snippet.publishedAt)) {
            return -1;
          } else {
            return 1;
          }
        })
      }

      case 'views': {
        return items.sort((prev, next) => {
          if (+prev.statistics.viewCount > +next.statistics.viewCount) {
            return -1;
          } else {
            return 1;
          }
        })
        
      }

      default: {
        return items.sort((prev, next) => {
          if (prev.id > next.id) {
            return 1;
          }
        })
      }
    }
  }

}
