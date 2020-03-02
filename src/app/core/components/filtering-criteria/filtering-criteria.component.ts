import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FilteringService } from '../../services/filtering.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent implements OnInit {
  public filterIsActive: boolean = false;
  public userInput: string;
  public userInputUpdate: Subject<string> = new Subject<string>();

  constructor( private filteringService: FilteringService) {
    this.userInputUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.sortByWord(value);
      }),
    this.filteringService.filterClicked$.subscribe(
      () => {
        this.filterIsActive = !this.filterIsActive;
      }
    )
  }

  public sortByDate(): void {
    this.filteringService.sortBy('date');
  }

  public sortByViews(): void {
    this.filteringService.sortBy('views');
  }

  public sortByWord(queryWord: string): void {
    this.filteringService.sortBy('word', queryWord);
  }

  public ngOnInit(): void {
  }

}
