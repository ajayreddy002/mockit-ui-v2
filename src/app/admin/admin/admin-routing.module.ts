import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/user/landing/landing.component';
import { PlansComponent } from 'src/app/user/plans/plans.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  { path: 'plans', component: PlansComponent, data: {name: 'Plans'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
