import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import SearchResponse from '../models/search-response.model';
import SearchItem from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {

  constructor(private http: HttpClient) {}

  public getVideos(query?: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`search?part=snippet&q=${query}`);
  }

  public renderVideos(itemsArray?: SearchItem[]): Observable<SearchResponse> {
    let idArr: string[] = [];
    itemsArray.forEach((item) => idArr.push(item.id.videoId || item.id.channelId ));
    let idStr: string = idArr.join();
    return this.http.get<SearchResponse>(`videos?part=snippet,contentDetails,statistics&id=${idStr}`);
  }

  public getVideo(id: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`videos?part=snippet,contentDetails,statistics&id=${id}`);
  }
}
