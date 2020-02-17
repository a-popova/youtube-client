import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onSearch = new EventEmitter();

  public filterIsActive: boolean = false;

  showResults(event: InputEvent) {
    event.preventDefault();
    this.onSearch.emit();
  }

  showFilterPannel() {
    this.filterIsActive ? this.filterIsActive = false : this.filterIsActive = true;
  }

  constructor() { }

  public ngOnInit(): void {
  }

}
