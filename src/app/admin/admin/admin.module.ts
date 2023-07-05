import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PlansComponent } from 'src/app/user/plans/plans.component';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ChipsModule,
    FormsModule,
    CommonModule,
  ]
})
export class AdminModule { }
