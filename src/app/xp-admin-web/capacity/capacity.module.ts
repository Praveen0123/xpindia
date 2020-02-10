import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CapacityComponent } from './capacity.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {PieComponent} from './pie/pie.component'
import {PieeComponent} from './piee/piee.component'
import {PieeeComponent} from './pieee/pieee.component';
import { LanesComponent } from './lanes/lanes.component'


export const routes = [
  { path: '', component:CapacityComponent, pathMatch: 'full', data: { breadcrumb: 'Capacity'} },
  { path: 'lanes', component: LanesComponent, data : { breadcrumb : 'Lanes'} },
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  // { path: 'settings', component: SettingsComponent, pathMatch: 'full', data : { breadcrumb : 'Settings'} },
  // { path: 'testimonials', component: TestimonalsComponent, pathMatch: 'full', data : { breadcrumb : 'Testimonials'} },
  // { path: 'routemaster', component: RouteMasterComponent, pathMatch: 'full', data : { breadcrumb : 'Route Master'} },
  
];

@NgModule({
  declarations: [CapacityComponent,PieComponent,PieeComponent,PieeeComponent, LanesComponent],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,
    AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService]
})
export class CapacityModule { }
