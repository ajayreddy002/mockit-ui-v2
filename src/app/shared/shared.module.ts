import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonTableComponent } from './common-table/common-table.component';

@NgModule({
  declarations: [SidebarComponent, CommonTableComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonModule, AvatarModule, CalendarModule, ReactiveFormsModule, MessagesModule, ToastModule],
  exports: [SidebarComponent, CalendarModule, MessagesModule, ToastModule],
})
export class SharedModule { }
