import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/shared/landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewerProfileComponent } from './interviewer-profile/interviewer-profile.component';
import { InterviewsComponent } from './interviews/interviews.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard' }, title: 'Interviewer dashboard'},
      {path: 'profile', component: InterviewerProfileComponent, data: { name: 'Profile' }, title: 'Interviewer profile'},
      { path: 'interview', component: InterviewsComponent, data: { name: 'Interview' }, title: 'Interview' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
