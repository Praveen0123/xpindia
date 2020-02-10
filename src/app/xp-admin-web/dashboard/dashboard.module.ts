import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DashboardComponent } from './dashboard.component';
import { MasterComponent } from './master/master.component';
import { ManagementComponent } from './management/management.component';
import { OperationsComponent } from './operations/operations.component';
import { FinanceComponent } from './finance/finance.component';
import { HubComponent } from './hub/hub.component';
import { GatewayComponent } from './gateway/gateway.component';
import { ManagementAnalyticsComponent } from './management-analytics/management-analytics.component';
import { ManagementPieComponent } from './management-pie/management-pie.component';
import { ManagementPieeComponent } from './management-piee/management-piee.component';
import { ManagementPieeeComponent } from './management-pieee/management-pieee.component';
import { ManagementGoogleMapsComponent } from './management-google-maps/management-google-maps.component';
import { ManagementGoogleeMapsComponent } from './management-googlee-maps/management-googlee-maps.component';
import { OperationsAnalyticsComponent } from './operations-analytics/operations-analytics.component';
import { OperationsPieComponent } from './operations-pie/operations-pie.component';
import { OperationsPieeComponent } from './operations-piee/operations-piee.component';
import { OperationsPieeeComponent } from './operations-pieee/operations-pieee.component';
import { OperationsGoogleMapsComponent } from './operations-google-maps/operations-google-maps.component';
import { OperationsGoogleeMapsComponent } from './operations-googlee-maps/operations-googlee-maps.component';
import { OperationsGoogleeeMapsComponent } from './operations-googleee-maps/operations-googleee-maps.component';
import { FinanceAnalyticsComponent } from './finance-analytics/finance-analytics.component';
import { FinancePieComponent } from './finance-pie/finance-pie.component';
import { FinancePieeComponent } from './finance-piee/finance-piee.component';
import { HubPieComponent } from './hub-pie/hub-pie.component';
import { HubPieeComponent } from './hub-piee/hub-piee.component';
import { HubGoogleMapsComponent } from './hub-google-maps/hub-google-maps.component';
import { HubGoogleeMapsComponent } from './hub-googlee-maps/hub-googlee-maps.component';
import { HubAnalyticsComponent } from './hub-analytics/hub-analytics.component';
import { GatewayAnalyticsComponent } from './gateway-analytics/gateway-analytics.component';
import { GatewayPieComponent } from './gateway-pie/gateway-pie.component';
import { GatewayPieeComponent } from './gateway-piee/gateway-piee.component';
import { GatewayGoogleMapsComponent } from './gateway-google-maps/gateway-google-maps.component';
import { GatewayGoogleeMapsComponent } from './gateway-googlee-maps/gateway-googlee-maps.component';
import { OverviewComponent } from './overview/overview.component';
import { ZonesComponent } from './zones/zones.component';
import { ZonesAnalyticsComponent } from './zones-analytics/zones-analytics.component';
import { ZonesGoogleMapsComponent } from './zones-google-maps/zones-google-maps.component';
import { ZonesGoogleeMapsComponent } from './zones-googlee-maps/zones-googlee-maps.component';
import { ZonesPieComponent } from './zones-pie/zones-pie.component';
import { ZonesPieeComponent } from './zones-piee/zones-piee.component';

export const routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'overview',component:OverviewComponent, pathMatch: 'full', data : { breadcrumb : 'Overview'} },
  { path: 'management',component:ManagementComponent, pathMatch: 'full', data : { breadcrumb : 'Management'} },
  { path: 'operations', component: OperationsComponent, pathMatch: 'full', data : { breadcrumb : 'Operations'} },
  { path: 'finance', component:FinanceComponent, pathMatch: 'full', data: { breadcrumb: 'Finance'} },
  { path: 'hub', component: HubComponent, pathMatch: 'full', data : { breadcrumb : 'Hub'} },
  { path: 'gateway', component: GatewayComponent, pathMatch: 'full', data : { breadcrumb : 'Gateway'} },
  { path: 'zones', component: ZonesComponent, pathMatch: 'full', data : { breadcrumb : 'Zones'} },
];

@NgModule({
  declarations: [DashboardComponent, MasterComponent, ManagementComponent, OperationsComponent, FinanceComponent, HubComponent, GatewayComponent, ManagementAnalyticsComponent, ManagementPieComponent, ManagementPieeComponent, ManagementPieeeComponent, ManagementGoogleMapsComponent, ManagementGoogleeMapsComponent, OperationsAnalyticsComponent, OperationsPieComponent, OperationsPieeComponent, OperationsPieeeComponent, OperationsGoogleMapsComponent, OperationsGoogleeMapsComponent, OperationsGoogleeeMapsComponent, FinanceAnalyticsComponent, FinancePieComponent, FinancePieeComponent, HubPieComponent, HubPieeComponent, HubGoogleMapsComponent, HubGoogleeMapsComponent, HubAnalyticsComponent, GatewayAnalyticsComponent, GatewayPieComponent, GatewayPieeComponent, GatewayGoogleMapsComponent, GatewayGoogleeMapsComponent, OverviewComponent, ZonesComponent, ZonesAnalyticsComponent, ZonesGoogleMapsComponent, ZonesGoogleeMapsComponent, ZonesPieComponent, ZonesPieeComponent],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService],
  
})
export class DashboardModule { }
