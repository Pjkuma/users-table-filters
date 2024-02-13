import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './list/users-list.component';
import { UserShowComponent } from './show/user-show.component';
import { UsersFormComponent } from './form/users-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'new',
    component: UsersFormComponent
  },
  {
    path: ':id',
    component: UserShowComponent
  },
  {
    path: ':id/edit',
    component: UsersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
