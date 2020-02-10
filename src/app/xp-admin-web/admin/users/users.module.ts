import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {UserComponent} from './user/user.component';
import {RolesComponent} from './roles/roles.component';
import {MasterComponent} from './master/master.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { HubsComponent } from './user/hubs/hubs.component'

export const routes = [
  { path: '', redirectTo:'user', pathMatch: 'full'},
  { path: 'user', component: UserComponent, data: { breadcrumb: 'Users' }},
  { path: 'roles', component: RolesComponent,  data: { breadcrumb: 'Roles' }},
  { path: 'permissions', component: PermissionsComponent,  data: { breadcrumb: 'Permissions' }},
  { path: 'hubs', component: HubsComponent, data: { breadcrumb: 'Hubs' }},
];
@NgModule({
  declarations: [UsersComponent,UserComponent,RolesComponent,MasterComponent, PermissionsComponent, HubsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService],
  entryComponents:[]
})
export class UsersModule { }
