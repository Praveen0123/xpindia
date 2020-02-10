import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'primeng/primeng';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../../../shared/shared.module';
import { PipesModule } from '../../../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { ClinicalComponent } from './clinical/clinical.component';
import { BillingComponent } from './billing/billing.component';
import { MasterInCombinedNotesComponent } from './master-in-combined-notes/master-in-combined-notes.component';
import { AddScheduledNotesComponent } from './scheduled/add-scheduled-notes/add-scheduled-notes.component';
import { AddClinicalNotesComponent } from './clinical/add-clinical-notes/add-clinical-notes.component';
import { AddBillingNotesComponent } from './billing/add-billing-notes/add-billing-notes.component';

const route: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  { path: 'schedule', component: ScheduledComponent, data: { breadcrumb: 'Scheduling Notes' } },
  { path: 'clinical', component: ClinicalComponent, data: { breadcrumb: 'Clinical Notes' } },
  { path: 'billing', component: BillingComponent, data: { breadcrumb: 'Billing Notes' } },
]

@NgModule({
  declarations: [ScheduledComponent, ClinicalComponent, BillingComponent, MasterInCombinedNotesComponent, AddScheduledNotesComponent, AddClinicalNotesComponent, AddBillingNotesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddScheduledNotesComponent,AddClinicalNotesComponent,AddBillingNotesComponent],
  providers:[SharedModule]
})
export class CombinedNotesModule { }
