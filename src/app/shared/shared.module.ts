import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonModule, AvatarModule, CalendarModule, ReactiveFormsModule],
  exports: [SidebarComponent, CalendarModule],
})
export class SharedModule {}
