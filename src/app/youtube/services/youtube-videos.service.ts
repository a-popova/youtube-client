import { Injectable } from '@angular/core';
import SearchResponse from '../models/search-response.model';
import { mockedSearchResponse } from '../mock.response';

@Injectable()
export class YoutubeVideosService {
  constructor() { }

  public getVideos(): SearchResponse {
    return mockedSearchResponse;
  }
}