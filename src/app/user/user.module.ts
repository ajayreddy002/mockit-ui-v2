import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';

import { UserRoutingModule } from './user-routing.module';
import { InterviewsComponent } from './interviews/interviews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { InterviewerProfileComponent } from './interviewer-profile/interviewer-profile.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PlansComponent } from './plans/plans.component';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [InterviewsComponent, DashboardComponent, LandingComponent, MyProfileComponent, InterviewerProfileComponent, PlansComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    ToastModule,
    TabViewModule,
    SidebarModule,
    InputTextModule,
    PanelModule,
    ChipsModule
  ],
  providers: [],
})
export class UserModule { }
