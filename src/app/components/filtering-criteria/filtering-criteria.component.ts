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

  clickSortByDate() {
    this.sortByDate.emit();
  }

  clickSortByViews() {
    this.sortByViews.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
