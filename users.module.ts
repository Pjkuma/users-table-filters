import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './list/users-list.component';
import { UserFiltersComponent } from './filters/user-filters.component';
import { UserShowComponent } from './show/user-show.component';
import { UsersFormComponent } from './form/users-form.component';
import { RouterModule } from '@angular/router';
import { MyFilterPipe } from '../search.pipe';



@NgModule({
  declarations: [
    UsersListComponent,
    UserFiltersComponent,
    UserShowComponent,
    UsersFormComponent,
    MyFilterPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class UsersModule { }
