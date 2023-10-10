import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewerRoutingModule } from './interviewer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterviewerProfileComponent } from './interviewer-profile/interviewer-profile.component';
import { InterviewsComponent } from './interviews/interviews.component';


@NgModule({
  declarations: [
    InterviewerProfileComponent,
    InterviewsComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    SharedModule
  ]
})
export class InterviewerModule { }
