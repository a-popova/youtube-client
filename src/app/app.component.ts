import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public searchIsLoaded: boolean = false;
  public criteria: string = "";
  public queryWord: string = "";

  public setCriteria(criteria: string) {
    this.criteria = criteria;
  }

  public setQueryWord(query: string) {
    this.queryWord = query;
  }

  public onSearch() {
    this.searchIsLoaded = true;
  }
}
