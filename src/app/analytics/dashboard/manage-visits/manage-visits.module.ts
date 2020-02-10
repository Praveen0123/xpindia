import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UnscheduledComponent } from './unscheduled/unscheduled.component';
import { ScheduledVisitComponent } from './scheduled-visit/scheduled-visit.component';
import { PrescreeningComponent } from './prescreening/prescreening.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BillingComponent } from './billing/billing.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddUnscheduledVisitComponent } from './unscheduled/add-unscheduled-visit/add-unscheduled-visit.component';
import { AddScheduledVisitComponent } from './scheduled-visit/add-scheduled-visit/add-scheduled-visit.component';
import { AddRemarksModalComponent } from './unscheduled/add-remarks-modal/add-remarks-modal.component';
import { ScheduleAVisitComponent } from './unscheduled/schedule-a-visit/schedule-a-visit.component';
import { PatientQuestionnaireComponent } from './prescreening/patient-questionnaire/patient-questionnaire.component';
import { PatientNotesInManageVisitsComponent } from './prescreening/patient-notes-in-manage-visits/patient-notes-in-manage-visits.component';
import { PatientDocsInManageVisitsComponent } from './prescreening/patient-docs-in-manage-visits/patient-docs-in-manage-visits.component';
import { AddClaimDialogInManageVisitsComponent } from './billing/add-claim-dialog-in-manage-visits/add-claim-dialog-in-manage-visits.component';
import { CreateSinglePatientClaimComponent } from './billing/create-single-patient-claim/create-single-patient-claim.component';
import { AddClinicalObservationDialogComponent } from './diagnosis/add-clinical-observation-dialog/add-clinical-observation-dialog.component';
import { SpeechRecognizerService } from './diagnosis/shared/services/speech-recognizer.service';
import { SpeechSynthesizerService } from './diagnosis/shared/services/speech-synthesizer.service';
import { SpecialClinicalNoteComponent } from './diagnosis/special-clinical-note/special-clinical-note.component';
import { AddSpecialClinicalNoteComponent } from './diagnosis/add-special-clinical-note/add-special-clinical-note.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { QuillModule } from 'ngx-quill';
import { ChatComponent } from './chat/chat.component';
import { SharedInManageVisitsModule } from './shared-in-manage-visits/shared-in-manage-visits.module';
import { RecommendationsComponent } from './recommendations/recommendations.component';

const route: Routes = [
  { path: '', redirectTo: 'unscheduled', pathMatch: 'full' },
  { path: 'unscheduled', component: UnscheduledComponent, data: { breadcrumb: 'Unscheduled' } },
  { path: 'scheduled', component: ScheduledVisitComponent,loadChildren:'./scheduled-visit/scheduled-visit.module#ScheduledVisitModule', data: { breadcrumb: 'Scheduled' } },
  { path: 'emails', component: MailboxComponent, data: { breadcrumb: 'Email' } },
  { path: 'chats', component: ChatComponent, data: { breadcrumb: 'Chats' } },
  { path: 'prescreening', component: PrescreeningComponent, data: { breadcrumb: 'Prescreening' } },
  { path: 'diagnosis', component: DiagnosisComponent, data: { breadcrumb: 'Diagonsis' } },
  { path: 'recommendations', component: RecommendationsComponent, data: { breadcrumb: 'Recommendations' } },
  // { path: 'billing', component: BillingComponent, data: { breadcrumb: 'Billing' } }, 
  // { path: 'billing/createClaims', component: CreateSinglePatientClaimComponent, data: { breadcrumb: 'Create Claim' } },
  { path: 'prescreening/patientquestionnaire', pathMatch: 'full' , component:PatientQuestionnaireComponent, data:{ breadcrumb: 'Questionnaire'} },
  { path: 'diagnosis/patientquestionnaire', pathMatch: 'full' , component:PatientQuestionnaireComponent, data:{ breadcrumb: 'Questionnaire'} },
  { path: 'diagnosis/clinicalNote', pathMatch: 'full' , component:AddSpecialClinicalNoteComponent, data:{ breadcrumb: 'Confirmed'} },
  

]

@NgModule({
  declarations: [MailboxComponent,UnscheduledComponent, ScheduledVisitComponent, PrescreeningComponent, DiagnosisComponent, BillingComponent, AddUnscheduledVisitComponent, AddScheduledVisitComponent, AddRemarksModalComponent, ScheduleAVisitComponent, PatientQuestionnaireComponent, PatientNotesInManageVisitsComponent, PatientDocsInManageVisitsComponent, AddClaimDialogInManageVisitsComponent, CreateSinglePatientClaimComponent, AddClinicalObservationDialogComponent, SpecialClinicalNoteComponent, AddSpecialClinicalNoteComponent, ChatComponent, RecommendationsComponent],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    HttpClientModule,
    ModalModule,
    QuillModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule,SharedInManageVisitsModule
  ],
  providers:[SharedModule, SpeechRecognizerService,SpeechSynthesizerService],
  entryComponents:[SpecialClinicalNoteComponent,AddUnscheduledVisitComponent,AddScheduledVisitComponent,AddRemarksModalComponent,ScheduleAVisitComponent,PatientNotesInManageVisitsComponent,PatientDocsInManageVisitsComponent,AddClaimDialogInManageVisitsComponent,AddClinicalObservationDialogComponent]
})
export class ManageVisitsModule { }
