import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { InterviewsComponent } from './interviews/interviews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

//material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [InterviewsComponent, DashboardComponent, LandingComponent, MyProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
  
    //material
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
})
export class UserModule { }
