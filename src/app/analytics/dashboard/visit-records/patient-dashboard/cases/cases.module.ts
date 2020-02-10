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
import { CasesPrescreeningComponent } from './cases-prescreening/cases-prescreening.component';
import { CasesNotesComponent } from './cases-notes/cases-notes.component';
import { CasesClinicalObservationsComponent } from './cases-clinical-observations/cases-clinical-observations.component';
import { CasesClaimsComponent } from './cases-claims/cases-claims.component';
import { AddNoteComponent } from './cases-notes/add-note/add-note.component';
import { MasterInVisitRecordsModule } from './master-in-visit-records/master-in-visit-records.module';
import { HandpComponent } from './handp/handp.component';
import { SoapComponent } from './soap/soap.component';
import { AdditionalComponent } from './additional/additional.component';
import { HandpHistoryOfPatientIllnessComponent } from './handp-history-of-patient-illness/handp-history-of-patient-illness.component';
import { HandpMedicationsComponent } from './handp-medications/handp-medications.component';
import { ReviewOfSystemsComponent } from './review-of-systems/review-of-systems.component';
import { PhysicalExamComponent } from './physical-exam/physical-exam.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { PlanComponent } from './plan/plan.component';
import { BillingComponent } from './billing/billing.component';
import { HandpSocialHistoryComponent } from './handp-social-history/handp-social-history.component';
import { AddMedicationComponent } from './handp-medications/add-medication/add-medication.component';
import { SoapSubjectiveComponent } from './soap-subjective/soap-subjective.component';
import { SoapObjectiveComponent } from './soap-objective/soap-objective.component';
import { SoapAssessmentComponent } from './soap-assessment/soap-assessment.component';
import { SoapPlanComponent } from './soap-plan/soap-plan.component';
import { SoapMedicationsComponent } from './soap-medications/soap-medications.component';
import { AddSoapMedicationComponent } from './soap-medications/add-soap-medication/add-soap-medication.component';
import { InPatientHandpComponent } from './in-patient-handp/in-patient-handp.component';
import { InPatientSoapComponent } from './in-patient-soap/in-patient-soap.component';
import { DrGoelComponent } from './dr-goel/dr-goel.component';
import { HistoryOfPatientIllnessHtmlToPdfComponent } from './history-of-patient-illness-html-to-pdf/history-of-patient-illness-html-to-pdf.component';
import { MedicalHistoryHAndPHtmlToPdfComponent } from './medical-history-hand-phtml-to-pdf/medical-history-hand-phtml-to-pdf.component';
import { ReviewOfSystemsHtmlToPdfComponent } from './review-of-systems-html-to-pdf/review-of-systems-html-to-pdf.component';
import { PhysicalExamHtmlToPdfComponent } from './physical-exam-html-to-pdf/physical-exam-html-to-pdf.component';
import { PlanHtmlToPdfComponent } from './plan-html-to-pdf/plan-html-to-pdf.component';
import { SoapObjectiveHtmlToPdfComponent } from './soap-objective-html-to-pdf/soap-objective-html-to-pdf.component';
import { SoapPlanHtmlToPdfComponent } from './soap-plan-html-to-pdf/soap-plan-html-to-pdf.component';
import { HAndPEsiImagesComponent } from './h-and-pesi-images/h-and-pesi-images.component';
import { SoapEsiImagesComponent } from './soap-esi-images/soap-esi-images.component';
import { HAndPAssessmentHtmlToPdfComponent } from './h-and-passessment-html-to-pdf/h-and-passessment-html-to-pdf.component';
import { SoapAssessmentHtmlToPdfComponent } from './soap-assessment-html-to-pdf/soap-assessment-html-to-pdf.component';
import { SoapSubjectiveHtmlToPdfComponent } from './soap-subjective-html-to-pdf/soap-subjective-html-to-pdf.component';
import { RecommendationsOfAllVisitsComponent } from './recommendations-of-all-visits/recommendations-of-all-visits.component';
import { MasterForCasesComponent } from './master-for-cases/master-for-cases.component';
import { AllergiesTabComponent } from './handp-medications/allergies-tab/allergies-tab.component';
import { MedicationsTabComponent } from './handp-medications/medications-tab/medications-tab.component';
import { AddAllergyComponent } from './handp-medications/add-allergy/add-allergy.component';
import { ProcedureNotesComponent } from './procedure-notes/procedure-notes.component';
import { SoapSymptomsComponent } from './soap-symptoms/soap-symptoms.component';
import { AddSymptomsComponent } from './soap-symptoms/add-symptoms/add-symptoms.component';
import { HAndPSymptomsComponent } from './h-and-psymptoms/h-and-psymptoms.component';
import { AddSoapAllergyComponent } from './soap-medications/add-soap-allergy/add-soap-allergy.component';
import { SoapMedicationsTabComponent } from './soap-medications/soap-medications-tab/soap-medications-tab.component';
import { SoapAllergiesTabComponent } from './soap-medications/soap-allergies-tab/soap-allergies-tab.component';
import { AddDocumentsInRecommendationsComponent } from './recommendations-of-all-visits/add-documents-in-recommendations/add-documents-in-recommendations.component';

const route: Routes = [
  { path: '', redirectTo: 'handp', pathMatch: 'full' },
  { path: 'handp', component: HandpComponent, data: { breadcrumb: 'H&P' } },
  { path: 'soap', component: SoapComponent, data: { breadcrumb: 'SOAP' } },
  { path: 'additional', component: AdditionalComponent, data: { breadcrumb: 'Scheduled' } },
  { path: 'prescreening', component: CasesPrescreeningComponent, data: { breadcrumb: 'Scheduled' } },
  { path: 'notes', component: CasesNotesComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'clinicalObservations', component: CasesClinicalObservationsComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'Claims', component: CasesClaimsComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'DrGoel', component: DrGoelComponent, data: { breadcrumb: 'Dr Goel Clinical Notes' } },
  { path: 'procedureNotes', component: ProcedureNotesComponent , data: { breadcrumb: 'Confirmed' } },
  { path: 'recommendationsOfAllVisits', component: RecommendationsOfAllVisitsComponent, data: { breadcrumb: 'Confirmed' } },
]

@NgModule({
  declarations: [CasesPrescreeningComponent, CasesNotesComponent, CasesClinicalObservationsComponent, CasesClaimsComponent, AddNoteComponent, HandpComponent, SoapComponent, AdditionalComponent, HandpHistoryOfPatientIllnessComponent, HandpMedicationsComponent, ReviewOfSystemsComponent, PhysicalExamComponent, AssessmentComponent, PlanComponent, BillingComponent, HandpSocialHistoryComponent, AddMedicationComponent, SoapSubjectiveComponent, SoapObjectiveComponent, SoapAssessmentComponent, SoapPlanComponent, SoapMedicationsComponent, AddSoapMedicationComponent, InPatientHandpComponent, InPatientSoapComponent, DrGoelComponent, HistoryOfPatientIllnessHtmlToPdfComponent, MedicalHistoryHAndPHtmlToPdfComponent, ReviewOfSystemsHtmlToPdfComponent, PhysicalExamHtmlToPdfComponent, PlanHtmlToPdfComponent, SoapObjectiveHtmlToPdfComponent, SoapPlanHtmlToPdfComponent, HAndPEsiImagesComponent, SoapEsiImagesComponent, HAndPAssessmentHtmlToPdfComponent, SoapAssessmentHtmlToPdfComponent, SoapSubjectiveHtmlToPdfComponent, RecommendationsOfAllVisitsComponent, MasterForCasesComponent, AllergiesTabComponent, MedicationsTabComponent, AddAllergyComponent, ProcedureNotesComponent, SoapSymptomsComponent, AddSymptomsComponent, HAndPSymptomsComponent, AddSoapAllergyComponent, SoapMedicationsTabComponent, SoapAllergiesTabComponent, AddDocumentsInRecommendationsComponent],
  imports: [
    CommonModule,
    MasterInVisitRecordsModule,
    HttpClientModule,
    ModalModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule,
  ],
  entryComponents:[AddDocumentsInRecommendationsComponent,AddNoteComponent,AddSoapAllergyComponent,AddMedicationComponent,AddSymptomsComponent,AddSoapMedicationComponent,AddAllergyComponent],
})
export class CasesModule { }
