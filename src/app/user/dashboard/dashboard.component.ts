import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cards';
import { DashBoardService } from 'src/app/service/dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showEmptyBlock = false;
  cardCountInfo: Card[] = [];
  constructor(
    private dashBoardService: DashBoardService
  ) { }
  ngOnInit(): void {
    this.getAllCounts();
  }
  getAllCounts() {
    this.dashBoardService.getCountInfo('users/count')
      .subscribe(data => {
        this.cardCountInfo.push(
          {
            title: 'Scheduled interviews',
            count: data.res[0]['newInterviews'],
            icon: 'bi-calendar-event-fill'
          },
          {
            title: 'Completed interviews',
            count: data.res[0]['completedInterviews'],
            icon: 'bi-calendar2-check'
          },
          {
            title: 'Cancelled interviews',
            count: data.res[0]['cancelledInterviews'],
            icon: 'bi-calendar-x-fill'
          },
          {
            title: 'Transactions',
            count: data.res[0]['newInterviews'] + data.res[0]['completedInterviews'] + data.res[0]['cancelledInterviews'],
            icon: 'bi-credit-card-2-back-fill'
          },
        )
      })
  }
}
