import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent implements OnInit {
  @Input() filterIsActive: boolean;
  @Output() sortByDate = new EventEmitter();
  @Output() sortByViews = new EventEmitter();
  @Output() sortByWord = new EventEmitter();

  clickSortByDate() {
    this.sortByDate.emit();
  }

  clickSortByViews() {
    this.sortByViews.emit();
  }

  public userInput: string;
  userInputUpdate = new Subject<string>();

  constructor() {
    this.userInputUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.sortByWord.emit(value);;
      });
  }

  ngOnInit(): void {
  }

}
