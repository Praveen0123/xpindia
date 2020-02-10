
import { OrdernewComponent } from './ordernew.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FclComponent } from './fcl/fcl.component';
import { ExpressComponent } from './express/express.component';
import { BespokeComponent } from './bespoke/bespoke.component';
import { MasterComponent } from './master/master.component';
import { AddxpcnmodalComponent } from './fcl/addxpcnmodal/addxpcnmodal.component';
import { AddManageGridComponent } from './fcl/add-manage-grid/add-manage-grid.component';
import { AddxpcnExpressComponent } from './express/addxpcn-express/addxpcn-express.component';
import { SelectColuneModalComponent } from './express/select-colune-modal/select-colune-modal.component';
import { AddxpcnBespokeComponent } from './bespoke/addxpcn-bespoke/addxpcn-bespoke.component';
import { SelectBespokeComponent } from './bespoke/select-bespoke/select-bespoke.component';
import { TrackingComponent } from './tracking/tracking.component';


export const routes = [
  { path: '', redirectTo: 'fcl', pathMatch: 'full' },
  { path: 'fcl', component:FclComponent, data : { breadcrumb : 'FCL'} },
  { path: 'express', component: ExpressComponent, data: { breadcrumb: 'Express' } },
  { path: 'bespoke', component: BespokeComponent, data: { breadcrumb: 'Bespoke' } },
  { path: 'tracking',component:TrackingComponent, data : { breadcrumb : 'Tracking'} },
  // { path: 'status',component:ByStatusComponent, data : { breadcrumb : 'Status'} }
];



@NgModule({
  declarations: [OrdernewComponent, FclComponent, ExpressComponent, BespokeComponent, MasterComponent, AddxpcnmodalComponent, AddManageGridComponent, AddxpcnExpressComponent, SelectColuneModalComponent, AddxpcnBespokeComponent, SelectBespokeComponent, TrackingComponent],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService],
  entryComponents:[AddxpcnmodalComponent,AddManageGridComponent,AddxpcnExpressComponent,SelectColuneModalComponent,AddxpcnBespokeComponent,SelectBespokeComponent]
})
export class OrdernewModule { }
