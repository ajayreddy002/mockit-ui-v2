import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as uuid from 'uuid';
import jwt_decode from "jwt-decode";
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';
import { Plan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  selectedPlan!: Plan;
  sessionId!: string;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.selectedPlan = JSON.parse(localStorage.getItem('selectedPlan') as string);
    if (this.activatedRoute.snapshot.queryParams['session_id']) {
      this.getSessionInfo(this.activatedRoute.snapshot.queryParams['session_id']);
    }
  }
  getSessionInfo(session_id: string) {
    this.apiService.get('interview/payment-status?session_id=' + session_id)
      .subscribe(
        (data: any) => {
          if (data.status === 'Success') {
            this.sessionId = session_id
            this.scheduleInterview(session_id)
          }
        }
      )
  }
  scheduleInterview(session_id: string) {
    const token = localStorage.getItem('token') as string;
    const decoded = jwt_decode(token) as any;
    const formData = {
      date: localStorage.getItem('selectedDate'),
      startTime: localStorage.getItem('startTime'),
      endTime: localStorage.getItem('endTime'),
      meetingId: uuid.v4(),
      participants: [decoded.user_id],
      userId: decoded.user_id,
      selectedPlan: this.selectedPlan._id,
      paymentSessionId: session_id
    }
    this.apiService.post('interview/schedule', formData)
      .subscribe(
        (data: any) => {
          if (data.status === 'Success') {
            this.messageService.add({ severity: 'success', detail: data.message });
            setTimeout(() => {
              this.router.navigate(['user/dashboard']);
            }, 3000)
            localStorage.removeItem('selectedPlan')
            localStorage.removeItem('selectedDate')
            localStorage.removeItem('startTime')
            localStorage.removeItem('endTime')
          }
        }
      )
  }
}

