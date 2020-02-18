import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  @Output() onSort = new EventEmitter();

  public filterIsActive: boolean = false;

  showResults(event: InputEvent, input: string) {
    if (input) {
      event.preventDefault();
      this.onSearch.emit();
    } else {
      alert('Please, enter some text in search field');
    }
  }

  showFilterPanel() {
    this.filterIsActive ? this.filterIsActive = false : this.filterIsActive = true;
  }

  public sortByDate() {
    this.onSort.emit('date');
  }

  public sortByViews() {
    this.onSort.emit('views');
  }

  constructor() { }

  public ngOnInit(): void {
  }

}
