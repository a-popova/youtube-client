import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public onSearch: EventEmitter<string> = new EventEmitter();
  @Output() public onSort: EventEmitter<string> = new EventEmitter();
  @Output() public onSortByWord: EventEmitter<string> = new EventEmitter();

  public filterIsActive: boolean = false;
  public input: string = '';

  constructor() { }

  public showResults(event: InputEvent, input: string): void {
    if (input) {
      event.preventDefault();
      this.onSearch.emit();
    } else {
      alert('Please, enter some text in search field');
    }
  }

  public showFilterPanel(): void {
    this.filterIsActive = !this.filterIsActive;
  }

  public sortByDate(): void {
    this.onSort.emit('date');
  }

  public sortByViews(): void {
    this.onSort.emit('views');
  }

  public sortByWord(inputValue: string): void {
    this.onSort.emit('word');
    this.input = inputValue;
    this.onSortByWord.emit(this.input);
  }

  public ngOnInit(): void {
  }

}
