import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ManagementComponent} from './modules/management/management.component';
import {LoginComponent} from './auth/login/login.component';
import {OverviewComponent} from './modules/overview/overview.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'management',
    component: ManagementComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'overview',
    component: OverviewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
