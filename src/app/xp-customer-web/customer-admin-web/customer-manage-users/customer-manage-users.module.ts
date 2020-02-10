import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { CustomerManageUsersComponent } from './customer-manage-users.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../../shared/services/alert.service';
import { AddUserComponent } from './add-user/add-user.component';
import { PermissionsComponent } from './permissions/permissions.component';

export const routes = [
  { path: '', component: CustomerManageUsersComponent, pathMatch: 'full', data: { breadcrumb: 'Users' }},
  { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [CustomerManageUsersComponent, AddUserComponent, PermissionsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddUserComponent],
  providers:[AlertService]
})
export class CustomerManageUsersModule { }
