import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonTableComponent } from './common-table/common-table.component';
import { LandingComponent } from '../user/landing/landing.component';
import { PanelModule } from 'primeng/panel';
import { ChipsModule } from 'primeng/chips';


@NgModule({
  declarations: [SidebarComponent, CommonTableComponent, LandingComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    AvatarModule,
    CalendarModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    PanelModule,
    ChipsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    SidebarComponent,
    CalendarModule,
    ToastModule,
    LandingComponent,
    ButtonModule,
    AvatarModule,
    ReactiveFormsModule,
    MessagesModule,
    PanelModule,
    ChipsModule,
    FormsModule,
    CommonModule
  ],
})
export class SharedModule { }
