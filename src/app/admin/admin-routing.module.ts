import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/shared/landing/landing.component';
import { PlansComponent } from 'src/app/admin/plans/plans.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard' }, title: 'Admin dashboard'
      },
      { path: 'plans', component: PlansComponent, data: { name: 'Plans' }, title: 'Plans' },
      { path: 'user-list', component: UserListComponent, data: { name: 'User Management' }, title: 'User management' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
