import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { LandingComponent } from './landing/landing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { InterviewerProfileComponent } from './interviewer-profile/interviewer-profile.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { name: 'Dashboard' },
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard' }, title: 'Dashboard' },
      { path: 'interview', component: InterviewsComponent, data: { name: 'Interview' }, title: 'Interview' },
      { path: 'profile', component: MyProfileComponent, data: { name: 'Profile' }, title: 'Profile' },
      { path: 'interviewer', component: InterviewerProfileComponent, data: { name: 'Interviewer' }, title: 'Interviewer' },
      { path: 'select-plan', component: SelectPlanComponent, data: { name: 'Interview types' }, title: 'Interview type selection' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
