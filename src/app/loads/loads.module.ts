import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadsComponent } from "./loads.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DragulaService } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AlertService } from '../shared/services/alert.service';
// import { MastercampaignComponent } from './mastercampaign/mastercampaign.component';

import { QuillModule } from 'ngx-quill';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule } from 'angular-highcharts';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import {MapviewComponent} from './mapview/mapview.component';
// import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { LoadDialogComponent } from './load-dialog/load-dialog.component';

export const routes = [
  { path: '', component: LoadsComponent, pathMatch: 'full', data: { breadcrumb: 'Loads' } },
];

@NgModule({

  declarations: [LoadsComponent, AcceptDialogComponent, LoadDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule, AgmCoreModule,
    PipesModule, ConfirmationPopoverModule, QuillModule, 
  ],
  providers: [SharedModule, AlertService, DragulaService],
  entryComponents: [AcceptDialogComponent,LoadDialogComponent]



})
export class LoadsModule { }



