import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Interview } from 'src/app/models/Interview';
import { TableColumn } from 'src/app/models/common.model';
import { Plan } from 'src/app/models/plan.model';
import { UserService } from 'src/app/service/user.service';

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
  selectedSlot!: any;
  showInterviewForm = false;
  planDetails: Plan[] = [];
  selectedTimeSlot!: moment.Moment;
  tableColumns: TableColumn[] = [
    { field: 'date', header: 'Date' },
    { field: 'startTime', header: 'Start time' },
    { field: 'endTime', header: 'End time' },
    { field: 'status', header: 'Status' },
    { field: 'interviewActions', header: 'Actions' },
  ];
  userInterviews: Interview[] = []
  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.getTimeSlots();
    this.getInterviews();
  }
  getTimeSlots() {
    const time = moment(this.startTime);
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
  getSelectedSlot(slot: any) {
    this.selectedSlot = slot;
    localStorage.setItem('selectedDate', moment(this.date).format('YYYY-MM-DD'))
    localStorage.setItem('startTime', moment(slot.time, 'hh:mm A').format('hh:mm a'))
    localStorage.setItem('endTime', moment(slot.time, 'hh:mm A').add(30, 'minutes').format('hh:mm a'))
  }

  onContinue() {
    this.router.navigate(['user/select-plan']);
  }
  getInterviews() {
    this.userService.getInterviewsByUserId()
      .subscribe(
        interviewRes => {
          if (interviewRes.res && interviewRes.res.length > 0) {
            this.userInterviews = interviewRes.res.map((item: Interview) => {
              const combineDateTime = moment(`${item.date} ${item.startTime}`, 'YYYY-MM-DD hh:mm a').format('YYYY-MM-DD hh:mm a')
              const currentDate = moment(new Date(), 'YYYY-MM-DD hh:mm a').format('YYYY-MM-DD hh:mm a')
              const timeDifference = moment(combineDateTime).diff(currentDate, 'minutes');
              item.actions = item.actions === undefined ? [] : item.actions;
              console.log(timeDifference)
              if (moment(combineDateTime).isAfter(moment(currentDate)) && timeDifference >= 60) {
                if (timeDifference >= 30) {
                  item.actions?.push({ label: 'Reschedule', isEnabled: true, icon: 'pi-refresh' })
                }
                if (timeDifference >= 60) {
                  item.actions?.push({ label: 'Cancel', isEnabled: true, icon: 'pi-times' })
                }
                return item
              }
              item.actions?.push(
                { label: 'Reschedule', isEnabled: false, icon: 'pi-refresh' },
                { label: 'Cancel', isEnabled: false, icon: 'pi-times' }
              )
              return item
            })
          }
          console.log(this.userInterviews)
        }
      )
  }
}
