import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import SearchResponse from '../models/search-response.model';
import { mockedSearchResponse } from '../mock.response';

@Injectable()
export class YoutubeVideosService {
  private isSearchLoaded = new Subject<string>();
  private criteria = new Subject<string>();
  private sortQueryWord = new Subject<string>();

  searchClicked$ = this.isSearchLoaded.asObservable();
  sortCriteria$ = this.criteria.asObservable();
  sortWord$ = this.sortQueryWord.asObservable();

  constructor() { }

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

  public getVideos(): SearchResponse {
    return mockedSearchResponse;
  }
}
