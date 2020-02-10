import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../../shared/shared.module';
import { PipesModule } from '../../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { GridViewComponent } from './grid-view/grid-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { SharedInManageVisitsModule } from '../shared-in-manage-visits/shared-in-manage-visits.module'

const route: Routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: GridViewComponent, data: { breadcrumb: 'Grid View' } },
  { path: 'calendarview', component: CalendarViewComponent, data: { breadcrumb: 'Calendar View' } },
  // { path: 'prescreening', component: PrescreeningComponent, data: { breadcrumb: 'Confirmed' } },
  // { path: 'diagnosis', component: DiagnosisComponent, data: { breadcrumb: 'Confirmed' } },
  // { path: 'billing', component: BillingComponent, data: { breadcrumb: 'Confirmed' } },
  // { path: 'prescreening/patientquestionnaire', pathMatch: 'full' , component:PatientQuestionnaireComponent, data:{ breadcrumb: 'Confirmed'} },
  // { path: 'diagnosis/patientquestionnaire', pathMatch: 'full' , component:PatientQuestionnaireComponent, data:{ breadcrumb: 'Confirmed'} },
  

]

@NgModule({
  declarations: [GridViewComponent, CalendarViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CalendarModule,
    FullCalendarModule,
    ModalModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule,SharedInManageVisitsModule
  ]
})
export class ScheduledVisitModule { }
