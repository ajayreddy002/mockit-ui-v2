import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { SuccessComponent } from './transactions/success/success.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule), canActivate: [AuthGuard], data: { role: 'user' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(adMod => adMod.AdminModule), canActivate: [AuthGuard], data: { role: 'admin' }
  },
  {
    path: 'interviewer',
    loadChildren: () => import('./interviewer/interviewer.module').then(intModule => intModule.InterviewerModule), canActivate: [AuthGuard], data: { role: 'interviewer' }
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
