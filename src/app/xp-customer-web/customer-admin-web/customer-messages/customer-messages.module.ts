import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../../shared/services/alert.service';
import { CustomerMessagesComponent } from './customer-messages.component';

export const routes = [
  { path: '', component: CustomerMessagesComponent, pathMatch: 'full', data: { breadcrumb: 'Messages' }},
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [CustomerMessagesComponent],
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
  providers:[AlertService]
})
export class CustomerMessagesModule { }
