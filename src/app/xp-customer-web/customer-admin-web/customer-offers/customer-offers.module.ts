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
import { CustomerOffersComponent } from './customer-offers.component';
import { LcloffersComponent } from './lcloffers/lcloffers.component';
import { FcloffersComponent } from './fcloffers/fcloffers.component';
import { BboffersComponent } from './bboffers/bboffers.component';
import { MasterComponent } from './master/master.component';

// export const routes = [
//   { path: '', component: CustomerOffersComponent, pathMatch: 'full', data: { breadcrumb: 'Offers' }},
//   { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
// ];
export const routes = [
  { path: '', redirectTo:'fcl', pathMatch: 'full'},
  { path: 'lcl', component:LcloffersComponent , data: { breadcrumb: 'FCL' }},
  { path: 'fcl', component: FcloffersComponent, data: { breadcrumb: 'LCL' }},
  { path: 'bb', component: BboffersComponent, data: { breadcrumb: 'BB' }},
  
];


@NgModule({
  declarations: [CustomerOffersComponent, LcloffersComponent, FcloffersComponent, BboffersComponent, MasterComponent], 
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
export class CustomerOffersModule { }
