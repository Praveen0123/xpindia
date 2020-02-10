import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips.component';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Pie1Component } from './pie1/pie1.component';
import { Pie2Component } from './pie2/pie2.component';
import { Pie3Component } from './pie3/pie3.component';
import { Pie4Component } from './pie4/pie4.component';
import { Pie5Component } from './pie5/pie5.component';
import { Pie6Component } from './pie6/pie6.component';
import { Pie7Component } from './pie7/pie7.component';
import { Pie8Component } from './pie8/pie8.component';
import { Pie9Component } from './pie9/pie9.component';
import { PackageComponent } from './package/package.component';
import { ManageCasesComponent } from './manage-cases/manage-cases.component';
import { AddReportCasesComponent } from './manage-cases/add-report-cases/add-report-cases.component';

export const routes = [
  // { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '', component: TripsComponent, data : { breadcrumb : ''} },
  { path: 'package',component:PackageComponent, data : { breadcrumb : 'Packages'} },
  { path: 'report',component:ManageCasesComponent, data : { breadcrumb : 'Report Case'} },
  
  
];


@NgModule({
  declarations: [TripsComponent, Pie1Component, Pie2Component, Pie3Component, Pie4Component, Pie5Component, Pie6Component, Pie7Component, Pie8Component, Pie9Component, PackageComponent, ManageCasesComponent, AddReportCasesComponent],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule,
  ],
  providers:[AlertService],
  entryComponents:[AddReportCasesComponent],

})
export class TripsModule { }
