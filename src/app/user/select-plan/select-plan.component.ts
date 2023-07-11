import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Plan } from 'src/app/models/plan.model';
import { ApiService } from 'src/app/service/api.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit {
  planDetails: Plan[] = [];
  selectedPlan!: Plan;
  showConfirmDialog = false;
  startTime!: string | null;
  endTime!: string | null;
  selectedDate!: string | null;
  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.showLoader();
    this.apiService.get('common/plan').subscribe((res: any) => {
      console.log(res);
      res.map((item: Plan) => {
        item.isSelected = false
      });
      this.planDetails = res;
      this.loaderService.hideLoader();
    })
    if (localStorage.getItem('startTime') !== null && localStorage.getItem('selectedDate') &&
      localStorage.getItem('endTime') !== null) {
      this.startTime = localStorage.getItem('startTime')
      this.endTime = localStorage.getItem('endTime')
      this.selectedDate = moment(localStorage.getItem('selectedDate') as string).format('DD-MM-YYYY')
    }
  }
  onPlanSelect(plan: Plan) {
    this.selectedPlan = plan;
    this.planDetails = this.planDetails.map(item => {
      item._id === plan._id ? item.isSelected = true : item.isSelected = false
      return item;
    })
  }
  createCheckoutSession() {
    localStorage.setItem('selectedPlan', JSON.stringify(this.selectedPlan));
    this.loaderService.showLoader();
    this.apiService.post('interview/checkout', { priceId: this.selectedPlan.priceId })
      .subscribe((data: any) => {
        // This will return the stripe checkout url
        window.open(data, '_self');
        this.loaderService.hideLoader();
      });
  }
}
