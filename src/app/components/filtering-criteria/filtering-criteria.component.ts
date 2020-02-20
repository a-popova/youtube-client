import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent implements OnInit {
  @Input() public filterIsActive: boolean;
  @Output() public sortByDate: EventEmitter<string> = new EventEmitter();
  @Output() public sortByViews: EventEmitter<string> = new EventEmitter();
  @Output() public sortByWord: EventEmitter<string> = new EventEmitter();
  public userInput: string;
  public userInputUpdate: Subject<string> = new Subject<string>();

  constructor() {
    this.userInputUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.sortByWord.emit(value);
      });
  }

  public clickSortByDate(): void {
    this.sortByDate.emit();
  }

  public clickSortByViews(): void {
    this.sortByViews.emit();
  }

  public ngOnInit(): void {
  }

}
