import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import SearchResponse from '../models/search-response.model';
import SearchItem from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {
  public youtubeAPIkey: string = 'AIzaSyCDRrriE3EzHRktYXygswgM6jwF_XoTgDQ';
  public searchUrl = 'https://www.googleapis.com/youtube/v3/search?';
  public videosUrl = 'https://www.googleapis.com/youtube/v3/videos?';
  
  constructor(private http: HttpClient){}

  public getVideos(query?: string): Observable<SearchResponse> {
    if (query) {
      return this.http.get<SearchResponse>(`${this.searchUrl}part=snippet&q=${query}&key=${this.youtubeAPIkey}`);
    }
  }

  public renderVideos(itemsArray?: SearchItem[]): Observable<SearchResponse> {
    if (itemsArray){
      let idArr = [];
      itemsArray.forEach((item) => idArr.push(item.id.videoId || item.id.channelId ));
      let idStr = idArr.join();
      return this.http.get<SearchResponse>(`${this.videosUrl}part=snippet,contentDetails,statistics&id=${idStr}&key=${this.youtubeAPIkey}`);
    }
  }

  public getVideo()/*: Observable<SearchItem>*/ {
    // return of(mockedSearchResponse.items.find(video => video.id === id));
  }
}
