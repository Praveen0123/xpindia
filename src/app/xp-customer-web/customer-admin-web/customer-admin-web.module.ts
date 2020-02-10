import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { Route } from '@angular/compiler/src/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CustomerAdminWebComponent } from './customer-admin-web.component';


export const routes = [
  { path: '', redirectTo: 'manageUsers', pathMatch: 'full' },
  { path: 'manageUsers', loadChildren: './customer-manage-users/customer-manage-users.module#CustomerManageUsersModule', data: { breadcrumb: 'Users' }},
  { path: 'messages', loadChildren: './customer-messages/customer-messages.module#CustomerMessagesModule', data: { breadcrumb: 'Messages' }},
  { path: 'offers', loadChildren: './customer-offers/customer-offers.module#CustomerOffersModule', data: { breadcrumb: 'Offers' }},
  { path: 'preferences', loadChildren: './customer-preferences/customer-preferences.module#CustomerPreferencesModule', data: { breadcrumb: 'Preferences' }},
  { path: 'testimonials', loadChildren: './customer-share-testimonals/customer-share-testimonals.module#CustomerShareTestimonalsModule', data: { breadcrumb: 'Testimonials' }},
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  // { path: 'ageingAnalysis', component: AgeinganalysisComponent, data: { breadcrumb: 'Ageing Analysis' } },
  // { path: 'payables', component: PayablesComponent, data: { breadcrumb: 'Payables' } },
  // { path: 'paymentsLog', component: PaymentsLogComponent ,data: { breadcrumb: 'Payments Log' } },
]
@NgModule({
  declarations: [CustomerAdminWebComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[],
  providers:[AlertService]
})
export class CustomerAdminWebModule { }
