import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Plan } from 'src/app/models/plan.model';
import { ApiService } from 'src/app/service/api.service';
import { LoaderService } from 'src/app/service/loader.service';

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
  showPlans = false;
  planDetails: Plan[] = [];

  constructor(private apiService: ApiService, private loaderService: LoaderService) { }
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
  getSelectedSlot(slot: string) {
    console.log(slot)
    // Need to add moment(slot) to get date string
    this.selectedSlot = slot;
  }

  onSchedule() {
    this.loaderService.showLoader();
    this.showPlans = true;
    this.apiService.get('common/plan').subscribe((res: any) => {
      console.log(res);
      res.map((item: Plan) => {
        item.isSelected = false
      });
      this.planDetails = res;
      this.loaderService.hideLoader();
    }, (error) => {
      console.log("Api Error: ", error);
      this.loaderService.hideLoader();
    })
  }
  onPlanSelect(plan: Plan) {
    this.planDetails = this.planDetails.map(item => {
      item._id === plan._id ? item.isSelected = true : item.isSelected = false
      return item;
    })
  }
}
