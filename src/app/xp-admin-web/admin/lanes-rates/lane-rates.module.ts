import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaneMasterComponent } from './lane-master/lane-master.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LanesRatesComponent } from './lanes-rates.component';
import { RouteMasterComponent } from './route-master/route-master.component';
import { FclCapacityComponent } from './fcl-capacity/fcl-capacity.component';
import { FfvFreightMasterComponent } from './ffv-freight-master/ffv-freight-master.component';
import { CustRateMasterComponent } from './cust-rate-master/cust-rate-master.component';
import { LclRateMasterComponent } from './lcl-rate-master/lcl-rate-master.component';

export const routes = [
  { path: '', redirectTo: 'lane-master', pathMatch: 'full' },
  { path: 'lane-master', component: LaneMasterComponent, data : { breadcrumb : 'Lane Master'}},
  { path: 'route-master', component: RouteMasterComponent, data : { breadcrumb : 'Route Master'}},
  { path: 'fcl-capacity', component: FclCapacityComponent, data : { breadcrumb : 'FCL Capacity'}},
  { path: 'ffv-freight-master', component: FfvFreightMasterComponent, data : { breadcrumb : 'FFV Freight Master'}},
  { path: 'cust-rate-master', component: CustRateMasterComponent, data : { breadcrumb : 'Customer Rate Master'}},
  { path: 'lcl-rate-master', component: LclRateMasterComponent, data : { breadcrumb : 'LCL Rate Master'}},
  
];
@NgModule({
  declarations: [LaneMasterComponent, RouteMasterComponent, FclCapacityComponent, FfvFreightMasterComponent, CustRateMasterComponent, LclRateMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, 
    FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService],
})
export class LaneRatesModule { }
