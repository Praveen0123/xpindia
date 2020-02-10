import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-physical-exam',
  templateUrl: './physical-exam.component.html',
  styleUrls: ['./physical-exam.component.scss']
})
export class PhysicalExamComponent implements OnInit {
  
  generalOptions = [{id:1 , value:"Patient in distress"},{id:2 , value:"Cachectic appearance"},{id:3 , value:"Obese"},{id:4 , value:"Altered mental status"},{id:5 , value:"sad today"}];
  heentOptions = [{id:1 , value:"traumatic lesion to head"},{id:2 , value:"coarse hair"},{id:3 , value:"thin hair"},{id:4 , value:"visual acuity not intact"},{id:5 , value:"conjunctivae pale"},{id:6 , value:"conjunctivae cyanotic"},{id:7 , value:"sclerae icteric"},{id:8 , value:"pinpoint pupils"},{id:9 , value:"enlarged pupils"},{id:10 , value:"extraocular movements not intact"},{id:11 , value:"TM erythematous/bulging"},{id:12 , value:"rhinorrhea"},{id:13 , value:"sinus tenderness"},{id:14 , value:"pharyngeal erythema"},{id:15 , value:"pharyngeal exudate"},{id:16 , value:"pharyngeal lesion"},{id:17 , value:"tonsillar erythema"},{id:18 , value:"tonsillar exudate"},{id:19 , value:"tonsillar enlargement"}];
  skinOptions = [];
  neckOptions = [{id:1 , value:"lymphadenopathy located-"},{id:2 , value:"goiter present"},{id:3 , value:"other mass located"},{id:4 , value:"carotid bruit"},{id:5 , value:"trachea deviation"}];
  breastOptions = [{id:1 , value:"nipple discharge-"},{id:2 , value:"mass palpated-location-"},{id:3 , value:"tenderness"},{id:4 , value:" lymphadenopathy-"}];
  cardiovascularOptions = [{id:1 , value:"JVP present-"},{id:2 , value:"carotid bruit present-"},{id:3 , value:"murmur present"},{id:4 , value:"rub present"},{id:5 , value:"gallop present-"},{id:6 , value:" S3 present"},{id:7 , value:"S4 present"}];
  lungOptions = [{id:1 , value:"respiratory distress"},{id:2 , value:"increased work of breathing"},{id:3 , value:"accessory muscle use"},{id:4 , value:"audible wheezing"},{id:5 , value:"wheezing in all lungs fields on auscultation"},{id:6 , value:"rhonchi in all lung fields on auscultation"},{id:7 , value:"rales in all lung fields on auscultation"},{id:8 , value:"decreased breath sounds"},{id:9 , value:"absent breath sounds"}];
  abdomenOptions = [{id:1 , value:"bowel sounds hypoactive"},{id:2 , value:"bowel sounds hyperactive"},{id:3 , value:"surgical scar"},{id:4 , value:"mass palpated RUQ"},{id:5 , value:"mass palpated RLQ"},{id:6 , value:"mass palpated LUQ-"},{id:7 , value:"mass palpated LLQ"},{id:8 , value:"tenderness RUQ"},{id:9 , value:"tenderness RLQ"},{id:10 , value:"tenderness LUQ-"},{id:11 , value:"tenderness LLQ"},{id:12 , value:"splenomegaly"},{id:13 , value:"hepatomegaly"},{id:14 , value:"distended abdomen"},{id:15 , value:"abdominal rigidity"},{id:16 , value:"rebound tenderness"},{id:17 , value:"voluntary guarding"},{id:18 , value:"involuntary guarding"}];
  mskOptions = [{id:1 , value:"abnormal bulk/tone"},{id:2 , value:"abnormal range of motion"},{id:3 , value:"scoliosis"},{id:4 , value:"joint deformities"},{id:5 , value:"joint tenderness"}];
  neuroOptions = [{id:1 , value:"cranial nerve(s) dysfunction"},{id:2 , value:"rapid alternating movements dysfunctional"},{id:3 , value:"point-to-point movements dysfunctional"},{id:4 , value:"pain/temperature/light touch/vibration /discrimination dysfunctional"},{id:5 , value:"DTR abnormal"}];
  exAbdomenOptions = [{id:1 , value:"varicose veins present"},{id:2 , value:"edema present"}];

  constructor(public fb:FormBuilder) {
    this.createPhysicalGroup();
  }
  
  physicalExamForm : FormGroup;
  
  ngOnInit() {
  }
  
  createPhysicalGroup() {
    this.physicalExamForm = this.fb.group({
      general : new FormControl(''),
      generalComments : new FormControl(''),
      skin : new FormControl(''),
      skinComments : new FormControl(''),
      heent : new FormControl(''),
      heentComments : new FormControl(''),
      neck : new FormControl(''),
      neckComments : new FormControl(''),
      breast : new FormControl(''),
      breastComments : new FormControl(''),
      cardiovascular : new FormControl(''),
      cardiovascularComments : new FormControl(''),
      lungs : new FormControl(''),
      lungsComments : new FormControl(''),
      abdomen : new FormControl(''),
      abdomenComments : new FormControl(''),
      msk : new FormControl(''),
      mskComments : new FormControl(''),
      neurological : new FormControl(''),
      neurologicalComments : new FormControl(''),
      extrem : new FormControl(''),
      extremComments : new FormControl(''),
      notes : new FormControl(''),
      generalToggle : new FormControl(''),
      skinToggle : new FormControl(''),
      heentToggle : new FormControl(''),
      neckToggle : new FormControl(''),
      breastToggle : new FormControl(''),
      cardiovascularToggle : new FormControl(''),
      lungsToggle : new FormControl(''),
      abdomenToggle : new FormControl(''),
      mskToggle : new FormControl(''),
      neurologicalToggle : new FormControl(''),
      extremeToggle : new FormControl('')
    })
  }
  
  saveForm() {
    let finalObj = {};
    finalObj['general'] = this.physicalExamForm.value.general;
    finalObj['generalComments'] = this.physicalExamForm.value.generalComments;
    finalObj['skin'] = this.physicalExamForm.value.skin;
    finalObj['skinComments'] = this.physicalExamForm.value.skinComments;
    finalObj['heent'] = this.physicalExamForm.value.heent;
    finalObj['heentComments'] = this.physicalExamForm.value.heentComments;
    finalObj['neck'] = this.physicalExamForm.value.neck;
    finalObj['neckComments'] = this.physicalExamForm.value.neckComments;
    finalObj['breast'] = this.physicalExamForm.value.breast;
    finalObj['breastComments'] = this.physicalExamForm.value.breastComments;
    finalObj['cardiovascular'] = this.physicalExamForm.value.cardiovascular;
    finalObj['cardiovascularComments'] = this.physicalExamForm.value.cardiovascularComments;
    finalObj['lungs'] = this.physicalExamForm.value.lungs;
    finalObj['lungsComments'] = this.physicalExamForm.value.lungsComments;
    finalObj['abdomen'] = this.physicalExamForm.value.abdomen;
    finalObj['abdomenComments'] = this.physicalExamForm.value.abdomenComments;
    finalObj['msk'] = this.physicalExamForm.value.msk;
    finalObj['mskComments'] = this.physicalExamForm.value.mskComments;
    finalObj['neurological'] = this.physicalExamForm.value.neurological;
    finalObj['neurologicalComments'] = this.physicalExamForm.value.neurologicalComments;
    finalObj['extrem'] = this.physicalExamForm.value.extrem;
    finalObj['extremComments'] = this.physicalExamForm.value.extremComments;
    finalObj['notes'] = this.physicalExamForm.value.notes;
    if(this.physicalExamForm.value.generalToggle == "") {
      finalObj['generalToggle'] = 0;  
    }
    else {
      finalObj['generalToggle'] = this.physicalExamForm.value.generalToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.skinToggle == "") {
      finalObj['skinToggle'] = 0;  
    }
    else {
      finalObj['skinToggle'] = this.physicalExamForm.value.skinToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.heentToggle == "") {
      finalObj['heentToggle'] = 0;  
    }
    else {
      finalObj['heentToggle'] = this.physicalExamForm.value.heentToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.neckToggle == "") {
      finalObj['neckToggle'] = 0;  
    }
    else {
      finalObj['neckToggle'] = this.physicalExamForm.value.neckToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.breastToggle == "") {
      finalObj['breastToggle'] = 0;  
    }
    else {
      finalObj['breastToggle'] = this.physicalExamForm.value.breastToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.cardiovascularToggle == "") {
      finalObj['cardiovascularToggle'] = 0;  
    }
    else {
      finalObj['cardiovascularToggle'] = this.physicalExamForm.value.cardiovascularToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.lungsToggle == "") {
      finalObj['lungsToggle'] = 0;  
    }
    else {
      finalObj['lungsToggle'] = this.physicalExamForm.value.lungsToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.abdomenToggle == "") {
      finalObj['abdomenToggle'] = 0;  
    }
    else {
      finalObj['abdomenToggle'] = this.physicalExamForm.value.abdomenToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.mskToggle == "") {
      finalObj['mskToggle'] = 0;  
    }
    else {
      finalObj['mskToggle'] = this.physicalExamForm.value.mskToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.neurologicalToggle == "") {
      finalObj['neurologicalToggle'] = 0;
    }
    else {
      finalObj['neurologicalToggle'] = this.physicalExamForm.value.neurologicalToggle == true ? 1 : 0;
    }
    if(this.physicalExamForm.value.extremeToggle == "") {
      finalObj['extremeToggle'] = 0;  
    }
    else {
      finalObj['extremeToggle'] = this.physicalExamForm.value.extremeToggle == true ? 1 : 0;
    }
  }
  
}
