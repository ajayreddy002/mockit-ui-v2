import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgZone } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateComparisonService {
  private buttonStateSubject = new BehaviorSubject<boolean>(false);

  buttonState$: Observable<boolean> = this.buttonStateSubject.asObservable();

  constructor(private zone: NgZone) { }

  checkDateDifference(receivedDate: Date) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        const currentDate = new Date();
        const timeDifference = moment(receivedDate).diff(currentDate, 'minutes');
        const isHalfHourOrMore = timeDifference >= 30;
        this.zone.run(() => {
          this.buttonStateSubject.next(isHalfHourOrMore);
        });
      }, 300000); // Check every second
    });
  }
}