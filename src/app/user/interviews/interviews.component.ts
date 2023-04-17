import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss'],
})
export class InterviewsComponent implements OnInit {
  startTime = moment().startOf('day').hour(11);
  endTime = moment().endOf('day').hour(22);
  timeOptions: any[] = [];
  date = new Date();
  minDate = new Date();
  today = new Date();
  isToday = true;
  selectedSlot!: moment.Moment;
  showCourses = false;
  ngOnInit(): void {
    this.getTimeSlots();
  }
  getTimeSlots() {
    let time = moment(this.startTime);
    this.isToday = moment(this.today).isSame(this.date)
    // Looping to get all time slots for given range
    while (time <= this.endTime) {
      const timeSlot = { time: time.format('h:mm A'), class: '' };
      // Adding to disable slots which are lessthan an hour for current time
      if (time.isBefore(moment().add(1, 'hours'))) {
        timeSlot.class = 'expired';
      }
      this.timeOptions.push(timeSlot);
      // Adding 30 minutes difference for each slot
      time.add(30, 'minutes');
    }
  }
  getSelectedDate(event: any) {
    this.startTime = moment(event).startOf('day').hour(11);
    this.endTime = moment(event).endOf('day').hour(22);
    this.timeOptions = [];
    this.getTimeSlots();
  }
  getSelectedSlot(slot: string){
    this.selectedSlot = moment(slot);
  }
}
