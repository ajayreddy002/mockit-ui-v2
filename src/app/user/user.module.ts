import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { InterviewsComponent } from './interviews/interviews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [InterviewsComponent, DashboardComponent, LandingComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule, FormsModule],
})
export class UserModule {}
