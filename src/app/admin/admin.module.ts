import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlansComponent } from 'src/app/admin/plans/plans.component';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PlansComponent,
    UserListComponent
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
