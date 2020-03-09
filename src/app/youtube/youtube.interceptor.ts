import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  private youtubeAPIkey: string = '&key=AIzaSyCDRrriE3EzHRktYXygswgM6jwF_XoTgDQ';

  constructor() {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req.clone({
      url: `${environment.API_url}${req.url}${this.youtubeAPIkey}`
    }));
  }
}
