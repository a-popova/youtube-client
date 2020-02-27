import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {
  @Input() public searchItem: SearchItem;
  @Output() public goBack: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {

  }

  public clickBack(): void {
    this.goBack.emit();
  }

}
