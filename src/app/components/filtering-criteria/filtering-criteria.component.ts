import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  clickByWord(input: HTMLInputElement) {
    this.sortByWord.emit(input.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
