import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import SearchResponse from '../models/search-response.model';
import { mockedSearchResponse } from '../mock.response';
import SearchItem from '../models/search-item.model';

@Injectable()
export class YoutubeVideosService {
  public getVideos(): Observable<SearchResponse> {
    return of(mockedSearchResponse);
  }

  public getVideo(id: string): Observable<SearchItem> {
    return of(mockedSearchResponse.items.find(video => video.id === id));
  }
}
