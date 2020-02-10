import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  
  labOptions = [{id:1 , value:" LABS (to be done at Quest)"} , {id:2 , value:"LABS (to be done at LabCorp)"},{id:3 , value:" LABS (to be done at Athena)"} , {id:4 , value:" Electrolyte panel"},{id:5 , value:"Hepatic function panel"} , {id:6 , value:"Basic metabolic panel"},{id:7 , value:"Carbamazepine level"} , {id:8 , value:"Comp metabolic panel"},{id:9 , value:" Lipid panel"} , {id:10 , value:"Hepatitis panel"},{id:11 , value:"Hypercoagulation Panel"} , {id:12 , value:" Protein S"},{id:13 , value:"Cardiolipin Ab"} , {id:14 , value:"Russel viper venom"},{id:15 , value:" Antithrombin III"} , {id:16 , value:"APCR"},{id:17 , value:"ANA"} , {id:18 , value:"Sed rate, Homocysteine, Autoimmune Panel: ANA"},{id:19 , value:"Anti SSA/SSB"} , {id:20 , value:" Actin Ab IgG"},{id:21 , value:" Scleroderma Ab"} , {id:22 , value:"Anti Jo-1 Ab"},{id:23 , value:"Anti DNA-DS"} , {id:24 , value:"Anti RNP, Immunologic Indicated Panel: ANA"},{id:25 , value:"Rheum Arth factor"} , {id:26 , value:"Complement C3"},{id:27 , value:" Immunofixation"} , {id:28 , value:"LABS (to be done at LabCorp)"},{id:29 , value:" LABS (to be done at Quest)"} , {id:30 , value:"LABS (to be done at LabCorp)"},{id:31 , value:" LABS (to be done at Quest)"} , {id:32 , value:"LABS (to be done at LabCorp)"},{id:33 , value:" LABS (to be done at Quest)"} , {id:34 , value:"LABS (to be done at LabCorp)"},{id:35 , value:" LABS (to be done at Quest)"} , {id:36 , value:"LABS (to be done at LabCorp)"},{id:37 , value:" LABS (to be done at Quest)"} , {id:38 , value:"LABS (to be done at LabCorp)"},{id:39 , value:" LABS (to be done at Quest)"} , {id:40 , value:"LABS (to be done at LabCorp)"},{id:41 , value:" LABS (to be done at Quest)"} , {id:42 , value:"LABS (to be done at LabCorp)"},{id:43 , value:" LABS (to be done at Quest)"} , {id:44 , value:"LABS (to be done at LabCorp)"},{id:45 , value:" LABS (to be done at Quest)"} , {id:46 , value:"LABS (to be done at LabCorp)"},{id:47 , value:" LABS (to be done at Quest)"} , {id:48 , value:"LABS (to be done at LabCorp)"},{id:49 , value:" LABS (to be done at Quest)"} , {id:50 , value:"LABS (to be done at LabCorp)"},{id:51 , value:" LABS (to be done at Quest)"} , {id:52 , value:"LABS (to be done at LabCorp)"},{id:53 , value:" LABS (to be done at Quest)"} , {id:54 , value:"LABS (to be done at LabCorp)"},{id:55 , value:" LABS (to be done at Quest)"} , {id:56 , value:"LABS (to be done at LabCorp)"},{id:57 , value:" LABS (to be done at Quest)"} , {id:58 , value:"LABS (to be done at LabCorp)"},{id:59 , value:" LABS (to be done at Quest)"} , {id:60 , value:"LABS (to be done at LabCorp)"},{id:61 , value:" LABS (to be done at Quest)"} , {id:62 , value:"LABS (to be done at LabCorp)"},{id:63 , value:" LABS (to be done at Quest)"} , {id:64 , value:"LABS (to be done at LabCorp)"},{id:65 , value:" LABS (to be done at Quest)"} , {id:66 , value:"LABS (to be done at LabCorp)"},{id:67 , value:" LABS (to be done at Quest)"} , {id:68 , value:"LABS (to be done at LabCorp)"},{id:69 , value:" LABS (to be done at Quest)"} , {id:70 , value:"LABS (to be done at LabCorp)"},{id:71 , value:" LABS (to be done at Quest)"} , {id:72 , value:"LABS (to be done at LabCorp)"},{id:73 , value:" LABS (to be done at Quest)"} , {id:74 , value:"LABS (to be done at LabCorp)"}];
  radiologyOptions = [{id:1 , value:"None"} , {id:2 , value:"Open MRI"},{id:3 , value:"Upright MRI"} , {id:4 , value:"MRI brain with and without contrast"},{id:5 , value:" MRI brain without contrast"} , {id:6 , value:"MRI brain 3.0 T with and without contrast"},{id:7 , value:" MRI brain 3.0 T without contrast"} , {id:8 , value:"MRA brain with and without contrast"},{id:9 , value:" - motor sequences"} , {id:10 , value:" - visual sequences"},{id:11 , value:" - auditory sequences"} , {id:12 , value:"Functional MRI"},{id:13 , value:" -MRI: Cisternography"} , {id:14 , value:" -MRI: Foramen Magnum (Chiari)"},{id:15 , value:"-MRI: NPH (Aqueduct)"} , {id:16 , value:" -LP"},{id:17 , value:"MRI 3T CSF flow / velocity:"} , {id:18 , value:"MRI: Head Trauma protocol"},{id:19 , value:"SPECT/CT brain"} , {id:20 , value:"MRI: MS protocol"},{id:21 , value:"CTA head and neck"} , {id:22 , value:"CT scan brain without contrast"},{id:23 , value:" CT scan brain with and without contrast"} , {id:24 , value:"MRA brain without contrast"}];
  homeHealthOptions = [{id:1 , value:"Skilled Nursing"} , {id:2 , value:" None"},{id:3 , value:" Eval & Instruct for"} , {id:4 , value:" Medication"},{id:5 , value:"Pain"} , {id:6 , value:"Cardiac"},{id:7 , value:"Respiratory"} , {id:8 , value:"Diabetic Management"},{id:9 , value:"Wound"} , {id:10 , value:"Physical Therapy"},{id:11 , value:"Weakness"} , {id:12 , value:"Ambulation/Gait, Balance"},{id:13 , value:"Transfers"} , {id:14 , value:"Bed Mobility"},{id:15 , value:"Range of Motion"} , {id:16 , value:"Fall Risk"},{id:17 , value:"Occupational Therapy"} , {id:18 , value:"ADLs,"},{id:19 , value:"Energy Conservation"} , {id:20 , value:"Sensory Dysfunction"},{id:21 , value:" Orthodics"} , {id:22 , value:"Speech Therapy:"},{id:23 , value:"Swallowing"} , {id:24 , value:"Voice Intelligibility"},{id:25 , value:" Hearing"} , {id:26 , value:" Language Processing"},{id:27 , value:"Cognition"} , {id:28 , value:"Medical Social Worker"},{id:29 , value:"Family support system"} , {id:30 , value:"Counseling referrals"},{id:31 , value:"Crisis intervention"} , {id:32 , value:"Unsafe environment"},{id:33 , value:"Stress / Coping / Grief"} , {id:34 , value:"Alternate living"},{id:35 , value:"In-home assistance"} , {id:36 , value:"Registered Dietician"},{id:37 , value:"Diet recommendation"} , {id:38 , value:"Diet teaching"}];
  educationOptions = [{id:1 , value:"Alternative treatments"} , {id:2 , value:"Drug Interactions"},{id:3 , value:"Handouts provided"} , {id:4 , value:"Medication side effects"},{id:5 , value:"Pain Management"} , {id:6 , value:"Potential adverse consequences if pregnant"},{id:7 , value:"Recognizing stroke-like symptoms"} , {id:8 , value:"Risks of declining treatment"},{id:9 , value:"Risks/benefits of treatment plan"} , {id:10 , value:"Signs of emergency"},{id:11 , value:"Symptom management"} , {id:12 , value:"Written instructions for tapering/titrating medications"},{id:13 , value:"Discussed managementand treatment options with another MD"} , {id:14 , value:"Discussed risks/benefits/side effectsof treatment"},{id:15 , value:"Discussed risk of future events"} , {id:16 , value:"Paperwork reviewed/completed"},{id:17 , value:"Patient agrees with treatment plan and instructions"} , {id:18 , value:"Patient refused treatment recommendations"},{id:19 , value:"Case and plan discussed with family member / members"} , {id:20 , value:"Patient understood and made informed decision"},{id:21 , value:"Patient was reassured"}];
  ptOptions = [{id:1 , value:"None"} , {id:2 , value:"Evaluate and Teat"},{id:3 , value:"Exercise"} , {id:4 , value:"Manual Therapy"},{id:5 , value:"Chronic Pain Program"} , {id:6 , value:"Posture/Position/Body Mechanics"},{id:7 , value:"AROM"} , {id:8 , value:"PROM"},{id:9 , value:"Back School"} , {id:10 , value:"Gait Training"},{id:11 , value:"Mckenzie Program"} , {id:12 , value:"Aquactic Therapy"},{id:13 , value:"Neuro Re - Education"} , {id:14 , value:"Home Program"},{id:15 , value:"Orthotics"} , {id:16 , value:"Cold Packs"},{id:17 , value:"Hot Packs"} , {id:18 , value:"Electrical Stimulation"},{id:19 , value:"Ultrasound"} , {id:20 , value:"Massage/Soft Tissue Mobilization"},{id:21 , value:"Traction"} , {id:22 , value:"Cryo Therapy"},{id:23 , value:"Paraffin"} , {id:24 , value:"Iontophoresis"},{id:25 , value:"IFC"} , {id:26 , value:"TENS"},{id:27 , value:"Phonophoresis"} , {id:28 , value:"Whirlpool"},{id:29 , value:"Functional Capacity Evaluation (FCE)"} , {id:30 , value:"Ergonomics Analysis"},{id:31 , value:"Work Stimulation"} , {id:32 , value:"Post Offer Employment Testing (POET)"},{id:33 , value:"Job Site Analysis"} , {id:34 , value:"Work Capacity Evaluation"},{id:35 , value:"Work COnditioning Program"} , {id:36 , value:"Work Hardening"},{id:37 , value:"3x/week/4 weeks"} , {id:38 , value:"3x/week/6 weeks"}];
  dietOptions = [{id:1 , value:"Diet plan discussed"} , {id:2 , value:"1800 cal ADA Diet"},{id:3 , value:"2000 cal ADA Diet"} , {id:4 , value:"1500 cal ADA Diet"},{id:5 , value:"Low fat diet"} , {id:6 , value:"Low sodium diet"},{id:7 , value:"Low Cholestrol diet"} , {id:8 , value:"Adequate nutritional diet"},{id:9 , value:"Vitamin supplementation"} , {id:10 , value:"Avoid Alcohol"},{id:11 , value:"Decrease alochol consumption"} , {id:12 , value:"Avoid caffeine"},{id:13 , value:"Decrease caffeine consumption"} , {id:14 , value:"Nutritional counseling"},{id:15 , value:"Avoid specific foods such as cheese / chocolates / spicy foods or Chinese foods / caffeinated beverages"}];
  generalOptions = [{id:1 , value:"Activity as tolerated"} , {id:2 , value:"Avoid crowds"},{id:3 , value:"Avoid driving"} , {id:4 , value:"Follow exercise program"},{id:5 , value:"Avoid high risk activity due to seizures/LOC"} , {id:6 , value:"Follow facial exercise program"},{id:7 , value:" Increase activity level,"} , {id:8 , value:" No heavy lifting"},{id:9 , value:"No heavy lifting more than 5 lbs"} , {id:10 , value:"No heavy lifting more than 10 lbs"},{id:11 , value:" No heavy lifting more than 20 lbs"} , {id:12 , value:"Avoid prolonged sitting"},{id:13 , value:"Avoid prolonged standing"} , {id:14 , value:"Avoid frequent bending / pulling / pushing"},{id:15 , value:" Increase rest"} , {id:16 , value:"Maintain diary"},{id:17 , value:"Notify DMV"} , {id:18 , value:"Protective activity"},{id:19 , value:"Seek help for addiction"} , {id:20 , value:"Wear wrist splint"},{id:21 , value:"Will write letter for work release"} , {id:22 , value:"no work for 3 days"},{id:23 , value:"no work for 7 days"} , {id:24 , value:"no work for 2 weeks"},{id:25 , value:"no work for 6 weeks"} , {id:26 , value:"no work for 1 month"},{id:27 , value:"no work for 2 months"} , {id:28 , value:"no work for 3 months"},{id:29 , value:"no work until further notice"} , {id:30 , value:"Will inform DMV"},{id:31 , value:"no driving for 3 months"} , {id:32 , value:" no driving until further notice"},{id:33 , value:"no driving until next follow-up"}];
  
  constructor(public fb:FormBuilder) {
    this.createPlanForm();
   }
  
  planGroupForm : FormGroup;
  
  ngOnInit() {
  }
  
  createPlanForm() {
    this.planGroupForm = this.fb.group({
      chiropractorToggle : new FormControl(''),
      chiroBodyParts : new FormControl(''),
      chiroDiagnosis : new FormControl(''),
      chiroNotes : new FormControl(''),
      chiroComments : new FormControl(''),
      orthopedicToggle : new FormControl(''),
      orthoBodyParts : new FormControl(''),
      orthoDiagnosis : new FormControl(''),
      orthoNotes : new FormControl(''),
      painManagementToggle : new FormControl(''),
      painBodyParts : new FormControl(''),
      painDiagnosis : new FormControl(''),
      painNotes : new FormControl(''),
      medicalRecordsToggle : new FormControl(''),
      medicalRecordsComments : new FormControl(''),
      imagingToggle : new FormControl(''),
      imagingComments : new FormControl(''),
      procedureToggle : new FormControl(''),
      procedureComments : new FormControl(''),
      specialistsToggle : new FormControl(''),
      specialistComments : new FormControl(''),
      followupToggle : new FormControl(''),
      followupComments : new FormControl(''),
      imagingDropdown : new FormControl(''),
      notes : new FormControl(''),
    })
  }
  
  saveForm() {
    let finalObj = {};
    finalObj['chiropractorToggle'] = this.planGroupForm.value.chiropractorToggle;
    finalObj['chiroBodyParts'] = this.planGroupForm.value.chiroBodyParts;
    finalObj['chiroDiagnosis'] = this.planGroupForm.value.chiroDiagnosis;
    finalObj['chiroNotes'] = this.planGroupForm.value.chiroNotes;
    finalObj['chiroComments'] = this.planGroupForm.value.chiroComments;
    finalObj['orthopedicToggle'] = this.planGroupForm.value.orthopedicToggle;
    finalObj['orthoBodyParts'] = this.planGroupForm.value.orthoBodyParts;
    finalObj['orthoDiagnosis'] = this.planGroupForm.value.orthoDiagnosis;
    finalObj['orthoNotes'] = this.planGroupForm.value.orthoNotes;
    finalObj['painManagementToggle'] = this.planGroupForm.value.painManagementToggle;
    finalObj['painBodyParts'] = this.planGroupForm.value.painBodyParts;
    finalObj['painDiagnosis'] = this.planGroupForm.value.painDiagnosis;
    finalObj['painNotes'] = this.planGroupForm.value.painNotes;
    finalObj['medicalRecordsToggle'] = this.planGroupForm.value.medicalRecordsToggle;
    finalObj['medicalRecordsComments'] = this.planGroupForm.value.medicalRecordsComments;
    finalObj['imagingToggle'] = this.planGroupForm.value.imagingToggle;
    finalObj['imagingComments'] = this.planGroupForm.value.imagingComments;
    finalObj['procedureToggle'] = this.planGroupForm.value.procedureToggle;
    finalObj['procedureComments'] = this.planGroupForm.value.procedureComments;
    finalObj['specialistsToggle'] = this.planGroupForm.value.specialistsToggle;
    finalObj['specialistComments'] = this.planGroupForm.value.specialistComments;
    finalObj['followupToggle'] = this.planGroupForm.value.followupToggle;
    finalObj['followupComments'] = this.planGroupForm.value.followupComments;
    finalObj['imagingDropdown'] = this.planGroupForm.value.imagingDropdown;
    finalObj['notes'] = this.planGroupForm.value.notes;
  }
  
}
