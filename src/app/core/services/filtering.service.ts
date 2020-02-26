import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  constructor() { }

  private isSearchLoaded = new Subject<string>();
  private criteria = new Subject<string>();
  private sortQueryWord = new Subject<string>();

  searchClicked$ = this.isSearchLoaded.asObservable();
  sortCriteria$ = this.criteria.asObservable();
  sortWord$ = this.sortQueryWord.asObservable();

  public sortBy(criteria: string, queryWord?: string) {
    switch (criteria) {
      case 'date': {
        this.criteria.next('date');
        break;
      }

      case 'views': {
        this.criteria.next('views');
        break;
      }

      case 'word': {
        this.criteria.next('word');
        this.sortQueryWord.next(queryWord);
      }
    }
  }

  public showResults(query: string) {
    this.isSearchLoaded.next(query);
  }

}
