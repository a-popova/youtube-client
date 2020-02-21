import { Directive, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appGetBorderColor]'
})
export class GetBorderColorDirective {
  @Input() datePublished: moment.Moment;

  constructor(private el: ElementRef) {

  }
  
  ngOnInit() {
    let currentDate: moment.Moment = moment();
    let daysDiff: number = currentDate.diff(this.datePublished, 'days');
    let monthDiff: number = currentDate.diff(this.datePublished, 'months');
    if (daysDiff <= 7) {
      this.el.nativeElement.style.borderBottom = '5px solid blue';
    } else if (monthDiff <= 1) {
      this.el.nativeElement.style.borderBottom = '5px solid green';
    } else if (monthDiff > 1 && monthDiff < 6) {
      this.el.nativeElement.style.borderBottom = '5px solid yellow';
    } else {
      this.el.nativeElement.style.borderBottom = '5px solid red';
    }
 }

}