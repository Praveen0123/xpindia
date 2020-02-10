import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material';
//import { AlertsTmComponent } from './taskmanager/alerts-tm/alerts-tm.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { VisitRecordsComponent } from './dashboard/visit-records/visit-records.component';
import { IncomingOrderQueueComponent } from './dashboard/incoming-order-queue/incoming-order-queue.component';
import { ManagePatientOrdersComponent } from './dashboard/manage-patient-orders/manage-patient-orders.component';
import { ManagePatientListComponent } from './dashboard/manage-patient-list/manage-patient-list.component';
import { TextLogComponent } from './dashboard/text-log/text-log.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TreeModule } from 'primeng/primeng';
import { PipesModule } from '../theme/pipes/pipes.module';
import { AddPatientDocumentsDashboardComponent } from './dashboard/visit-records/patient-dashboard/patient-docs/add-patient-documents-dashboard/add-patient-documents-dashboard.component';
import { ProfileAndInsuranceDialogComponent } from './dashboard/incoming-order-queue/profile-and-insurance-dialog/profile-and-insurance-dialog.component';
import { AddTextDialogComponent } from './dashboard/text-log/add-text-dialog/add-text-dialog.component';
import { ManageVisitsComponent } from './dashboard/manage-visits/manage-visits.component';
import { CasesComponent } from './dashboard/visit-records/patient-dashboard/cases/cases.component';
import { MailboxComponent } from './dashboard/visit-records/patient-dashboard/mailbox/mailbox.component';
import { AddNoteComponent } from './dashboard/visit-records/patient-dashboard/patient-notes/add-note/add-note.component';
import { AddPatientVisitDashboardDialogComponent } from './dashboard/visit-records/patient-dashboard/patient-clinical-notes/add-patient-visit-dashboard-dialog/add-patient-visit-dashboard-dialog.component';
import { PatientBillClaimsComponent } from './dashboard/visit-records/patient-dashboard/patient-bill-claims/patient-bill-claims.component';
import { PatientNotesComponent } from './dashboard/visit-records/patient-dashboard/patient-notes/patient-notes.component';
import { CombinedNotesComponent } from './dashboard/visit-records/patient-dashboard/combined-notes/combined-notes.component';
import { AddInsurancePatientDashboardComponent } from './dashboard/visit-records/patient-dashboard/patient-insurance/add-insurance-patient-dashboard/add-insurance-patient-dashboard.component';
import { PatientProfileComponent } from './dashboard/visit-records/patient-dashboard/patient-profile/patient-profile.component';
import { PatientInsuranceComponent } from './dashboard/visit-records/patient-dashboard/patient-insurance/patient-insurance.component';
import { PatientTestsComponent } from './dashboard/visit-records/patient-dashboard/patient-tests/patient-tests.component';
import { PatientDocsComponent } from './dashboard/visit-records/patient-dashboard/patient-docs/patient-docs.component';
import { PatientPrescreeningComponent } from './dashboard/visit-records/patient-dashboard/patient-prescreening/patient-prescreening.component';
import { PatientClinicalNotesComponent } from './dashboard/visit-records/patient-dashboard/patient-clinical-notes/patient-clinical-notes.component';
import { PatientTestNotesComponent } from './dashboard/visit-records/patient-dashboard/patient-test-notes/patient-test-notes.component';
import { PatientActivityLogComponent } from './dashboard/visit-records/patient-dashboard/patient-activity-log/patient-activity-log.component';
import { PatientScheduledAppointmentsComponent } from './dashboard/visit-records/patient-dashboard/patient-scheduled-appointments/patient-scheduled-appointments.component';
import { AddNewPatientOrdersComponent } from './dashboard/manage-patient-orders/add-new-patient-orders/add-new-patient-orders.component';
import { AddNewPatientOrderComponent } from './dashboard/manage-patient-list/add-new-patient-order/add-new-patient-order.component';
import { InsuranceDialogComponent } from './dashboard/manage-patient-list/insurance-dialog/insurance-dialog.component';
import { AddIncomingMessageDialogComponent } from './dashboard/text-log/add-incoming-message-dialog/add-incoming-message-dialog.component';
import { AddMessageDialogComponent } from './dashboard/text-log/add-message-dialog/add-message-dialog.component';
import { AddIncomingOrderComponent } from './dashboard/incoming-order-queue/add-incoming-order/add-incoming-order.component';
import { SpeechRecognizerService } from './dashboard/visit-records/patient-dashboard/shared/services/speech-recognizer.service';
import { SpeechSynthesizerService } from './dashboard/visit-records/patient-dashboard/shared/services/speech-synthesizer.service';
import { AlertPromise } from 'selenium-webdriver';
import { AlertService } from '../shared/services/alert.service';
import { TextMaskModule } from 'angular2-text-mask';
import { QuillModule } from 'ngx-quill';
import { DocumentsComponent } from './dashboard/visit-records/patient-dashboard/documents/documents.component';

//import { ReportsComponent } from './reports/reports.component';
export const routes = [
  { path: '', redirectTo: 'managevisits', pathMatch: 'full' },
  // { path: 'record', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full', data: { breadcrumb: 'Analytics' } },
  // { path: 'manageorders', component: ManageOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Orders'} },
  // { path: 'scheduling', component: SchedulingComponent,pathMatch: 'full', data : { breadcrumb : 'Schedule'} },
  { path: 'patientdashboard', component: VisitRecordsComponent,children :[
    {path: '', redirectTo: 'cases', pathMatch: 'full'},
    {path: 'patientchart', component:PatientProfileComponent, data: { breadcrumb : 'Patient Chart'}},
    // {path: 'cases', component:PatientInsuranceComponent, data: { breadcrumb : 'Patient Insurance'}},
    {path: 'test', component:PatientTestsComponent, data: { breadcrumb : 'Patient Tests'}},
    {path: 'docx', component:PatientDocsComponent, data: { breadcrumb : 'Patient Docs'}},
    {path: 'prescreening', component:PatientPrescreeningComponent, data: { breadcrumb : 'Patient Prescreening'}},
    {path: 'case', component:PatientClinicalNotesComponent, data: { breadcrumb : 'Clinical Notes'}},
    {path: 'mailbox', component:MailboxComponent, data: { breadcrumb : 'Patient Dashboard'}},
    {path: 'documents', component:DocumentsComponent, data: { breadcrumb : 'Documents'}},
    {path: 'testnotes', component:PatientTestNotesComponent, data: { breadcrumb : 'Test Notes'}},
    {path: 'clinicalNote', component: CasesComponent,loadChildren: './dashboard/visit-records/patient-dashboard/cases/cases.module#CasesModule', data : { breadcrumb : 'Clinical Notes'} },
    {path: 'combinedNotes', component: CombinedNotesComponent,loadChildren: './dashboard/visit-records/patient-dashboard/combined-notes/combined-notes.module#CombinedNotesModule', data : { breadcrumb : 'Combined Notes'} },
    {path: 'activitylog', component:PatientActivityLogComponent, data: { breadcrumb : 'Activity Log'}},
    {path: 'dashboardnotes', component:PatientNotesComponent, data: { breadcrumb : 'Activity Log'}},
    {path: 'dashboardclaims', component:PatientBillClaimsComponent, data: { breadcrumb : 'Activity Log'}},
    {path: 'scheduledappointments', component:PatientScheduledAppointmentsComponent, data: { breadcrumb : 'Scheduled Appointments'}},
  ], data : { breadcrumb : 'Patient Dashboard'} },
  // { path: 'incomingorders', component: IncomingOrderQueueComponent,pathMatch: 'full', data : { breadcrumb : 'Incoming Order Queue'} },
  { path: 'managecases', component: ManagePatientListComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Cases'} },
  // { path: 'managepatientrecords', component: ManagePatientOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Patients'} },
  // { path: 'textlog', component: TextLogComponent,loadChildren: './dashboard/text-log/text-log.module#TextLogModule', data : { breadcrumb : 'Text Log'} },
  { path: 'managevisits', component: ManageVisitsComponent,loadChildren: './dashboard/manage-visits/manage-visits.module#ManageVisitsModule', data : { breadcrumb : 'Manage Visits'} },
];

@NgModule({
  imports: [
    CommonModule,FormsModule,SharedModule,ConfirmationPopoverModule,OwlDateTimeModule, OwlNativeDateTimeModule,TextMaskModule,
    RouterModule.forChild(routes),ReactiveFormsModule,TreeModule,QuillModule,PipesModule
  ],
  declarations: [//TaskmanagerComponent,AlertsTmComponent//, ReportsComponentManageOrdersComponent,
    AddNewPatientOrdersComponent,
    CasesComponent,
    ProfileAndInsuranceDialogComponent,
    VisitRecordsComponent,IncomingOrderQueueComponent,
    ManagePatientOrdersComponent,
    ManagePatientListComponent,
    AddNoteComponent,
    TextLogComponent,
    AddIncomingOrderComponent,
    AddTextDialogComponent,
    AddMessageDialogComponent,
    AddIncomingMessageDialogComponent,
    InsuranceDialogComponent,
    AddNewPatientOrderComponent,
    PatientProfileComponent,
    PatientInsuranceComponent,
    PatientTestsComponent,
    PatientDocsComponent,
    PatientPrescreeningComponent,
    PatientClinicalNotesComponent,
    PatientTestNotesComponent,
    PatientActivityLogComponent,
    PatientScheduledAppointmentsComponent,
    AddInsurancePatientDashboardComponent,
    AddPatientDocumentsDashboardComponent,
    PatientBillClaimsComponent,
    PatientNotesComponent,
    AddPatientVisitDashboardDialogComponent,
    ManageVisitsComponent,
    CombinedNotesComponent,
    MailboxComponent,
    DocumentsComponent
  ],
  providers:[
    SpeechRecognizerService,
    SpeechSynthesizerService,AlertService,
     {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(),
        hasBackdrop: false,
      } as MatDialogConfig,
    }
  ],
  entryComponents : [AddIncomingOrderComponent,AddNoteComponent,AddPatientVisitDashboardDialogComponent,AddPatientDocumentsDashboardComponent,AddInsurancePatientDashboardComponent,ProfileAndInsuranceDialogComponent,AddNewPatientOrdersComponent,InsuranceDialogComponent,AddNewPatientOrderComponent,AddIncomingMessageDialogComponent,AddTextDialogComponent,AddMessageDialogComponent]
})
export class AnalyticsModule { }


