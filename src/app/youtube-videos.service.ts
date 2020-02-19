import { Injectable } from '@angular/core';
import SearchResponse from './models/search-response.model';
import { MockedSearchResponse } from './mock.response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {
  getVideos(): SearchResponse {
    return MockedSearchResponse;
  }

  constructor() { }
}
