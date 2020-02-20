import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public searchIsLoaded: boolean = false;
  public criteria: string = '';
  public queryWord: string = '';

  public setCriteria(criteria: string): void {
    this.criteria = criteria;
  }

  public setQueryWord(query: string): void {
    this.queryWord = query;
  }

  public onSearch(): void {
    this.searchIsLoaded = true;
  }
}
