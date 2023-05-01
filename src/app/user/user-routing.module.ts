import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { LandingComponent } from './landing/landing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'interview', component: InterviewsComponent },
      { path: 'profile', component: MyProfileComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
