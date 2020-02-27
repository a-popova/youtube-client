import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {
  private isSearchLoaded: Subject<string> = new Subject<string>();
  private criteria: Subject<string> = new Subject<string>();
  private sortQueryWord: Subject<string> = new Subject<string>();

  public searchClicked$: Observable<string> = this.isSearchLoaded.asObservable();
  public sortCriteria$: Observable<string> = this.criteria.asObservable();
  public sortWord$: Observable<string> = this.sortQueryWord.asObservable();

  public sortBy(criteria: string, queryWord?: string): void {
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

      default: {
        this.criteria.next('word');
      }
    }
  }

  public showResults(query: string): void {
    this.isSearchLoaded.next(query);
  }

}
