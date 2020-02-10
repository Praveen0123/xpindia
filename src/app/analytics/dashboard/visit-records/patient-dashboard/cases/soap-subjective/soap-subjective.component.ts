import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-soap-subjective',
  templateUrl: './soap-subjective.component.html',
  styleUrls: ['./soap-subjective.component.scss']
})
export class SoapSubjectiveComponent implements OnInit {
  
  generalOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"weakness"} , {id:4 , value:"fatigue/malaise/lethargy"} , {id:5 , value:"fever or chills"} , {id:6 , value:"trouble sleeping"} , {id:7 , value:"significant weight gain"} , {id:8 , value:"significant weight loss"} , {id:9 , value:"increased appetite"} , {id:10 , value:"decreased appetite"} , {id:11 , value:"itching/rashes"}];
  skinOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"rash present"} , {id:4 , value:"lump"} , {id:5 , value:"sore"} , {id:6 , value:"itching"} , {id:7 , value:"dryness"} , {id:8 , value:"color change"} , {id:9 , value:"changes in hair or nails"}];
  heentOptions = [{id:1 , value:"Positive"} , {id:3 , value:"Negative"} , {id:3 , value:"headache"} , {id:4 , value:"head injury"} , {id:5 , value:"dizziness"} , {id:6 , value:"lightheadedness"} , {id:7 , value:"vision changes"} , {id:8 , value:"excessive tearing"} , {id:9 , value:"hearing problems"} , {id:10 , value:"tinnitus"} , {id:11 , value:"vertigo"} , {id:12 , value:"nasal stuffiness"} , {id:13 , value:"nasal discharge"} , {id:14 , value:"nosebleeds"} , {id:15 , value:"sinus trouble"} , {id:16 , value:"dry mouth"} , {id:17 , value:"hoarseness"}];
  neckOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"lump"} , {id:4 , value:"lymphadenopathy"} , {id:5 , value:"goiter"} , {id:6 , value:"pain"} , {id:7 , value:"stiffness"}];
  breastOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"lump(s)"} , {id:4 , value:"pain or discomfort"} , {id:5 , value:"nipple discharge"}];
  cardiovascularOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"chest pain or discomfort"} , {id:4 , value:"palpitations"} , {id:5 , value:"dyspnea"} , {id:6 , value:"orthopnea"} , {id:7 , value:"paroxysmal nocturnal dyspnea"} , {id:8 , value:"edema"}];
  respiratoryOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"cough"} , {id:4 , value:"sputum"} , {id:5 , value:"hemoptysis"} , {id:6 , value:"dyspnea"} , {id:7 , value:"wheezing"}];
  giOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"trouble swallowing"} , {id:4 , value:"heartburn"} , {id:5 , value:"nausea"} , {id:6 , value:"rectal bleeding"} , {id:7 , value:"constipation"} , {id:8 , value:"diarrhea"} , {id:9 , value:"abdominal pain"} , {id:10 , value:"food intolerance"}];
  urinaryOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"polyuria"} , {id:4 , value:"nocturia"} , {id:5 , value:"urgency"} , {id:6 , value:"burning or pain on urination"} , {id:7 , value:"hematuria"} , {id:8 , value:"urinary infections"} , {id:9 , value:"kidney stones"} , {id:10 , value:"dribbling"} , {id:11 , value:"incontinence"}];
  genitalMaleOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"hernia"} , {id:4 , value:"discharge"} , {id:5 , value:"sores"} , {id:6 , value:"lesions"} , {id:7 , value:"testicular pain or mass"}];
  genitalFemaleOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"dysmenorrhea"} , {id:4 , value:"menopausal symptoms"} , {id:5 , value:"postmenopausal bleeding"} , {id:6 , value:"vaginal discharge"} , {id:7 , value:"vaginal itching"} , {id:8 , value:"vaginal sores"} , {id:9 , value:"vaginal lumps"} , {id:10 , value:"dyspareunia"}];
  periphOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:" intermittent claudication"} , {id:4 , value:"leg cramps"} , {id:5 , value:"varicose veins"}];
  mskOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"muscle pain"} , {id:4 , value:"joint pain"} , {id:5 , value:"stiffness"} , {id:6 , value:"backache"} , {id:7 , value:"swelling"} , {id:8 , value:"redness"} , {id:9 , value:"tenderness"} , {id:10 , value:"limitation of motion"}];
  neurologicalOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"fainting"} , {id:4 , value:"blackouts"} , {id:5 , value:"seizures"} , {id:6 , value:"weakness"} , {id:7 , value:"paralysis"} , {id:8 , value:"numbness or loss of sensation"} , {id:9 , value:"tingling"} , {id:10 , value:"tremors or other involuntary movements"}];
  endocrineOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"heat intolerance"} , {id:4 , value:"cold intolerance"} , {id:5 , value:"excessive sweating"} , {id:6 , value:"excessive thirst"} , {id:7 , value:"excessive hunger"} , {id:8 , value:"change in glove/hat/shoe size"}];
  PsychiatricOptions = [{id:1 , value:"Positive"} , {id:2 , value:"Negative"} , {id:3 , value:"nervousness"} , {id:4 , value:"depression"} , {id:5 , value:"memory change"}];
  soapSubjectiveForm: FormGroup
  
  constructor(public fb:FormBuilder) {
    this.createRevieeForm();
  }
  
  ngOnInit() {
  }
  
  createRevieeForm() {
    this.soapSubjectiveForm = this.fb.group({
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
      respiratory : new FormControl(''),
      respiratoryComments : new FormControl(''),
      gi : new FormControl(''),
      giComments : new FormControl(''),
      urinary : new FormControl(''),
      urinaryComments : new FormControl(''),
      genital : new FormControl(''),
      genitalComments : new FormControl(''),
      genitalFemale : new FormControl(''),
      genitalFemaleComments : new FormControl(''),
      periph : new FormControl(''),
      periphComments : new FormControl(''),
      msk : new FormControl(''),
      mskComments : new FormControl(''),
      neurological : new FormControl(''),
      neurologicalComments : new FormControl(''),
      endocrine : new FormControl(''),
      endocrineComments : new FormControl(''),
      psychiatric : new FormControl(''),
      psychiatricComments : new FormControl(''),
      hpiComments : new FormControl(''),
      socialHxComments : new FormControl(''),
      familyHxComments : new FormControl(''),
      pastMedicalHxComments : new FormControl(''),
      notes : new FormControl(''),
      generalToggle : new FormControl(''),
      skinToggle : new FormControl(''),
      heentToggle : new FormControl(''),
      neckToggle : new FormControl(''),
      breastToggle : new FormControl(''),
      cardiovascularToggle : new FormControl(''),
      respiratoryToggle : new FormControl(''),
      giToggle : new FormControl(''),
      urinaryToggle : new FormControl(''),
      genitalToggle : new FormControl(''),
      genitalFemaleToggle : new FormControl(''),
      periphToggle : new FormControl(''),
      mskToggle : new FormControl(''),
      neurologicalToggle : new FormControl(''),
      endocrineToggle : new FormControl(''),
      psychiatricToggle : new FormControl(''),
      hpiToggle : new FormControl(''),
      socialToggle : new FormControl(''),
      familyToggle : new FormControl(''),
      medicalToggle : new FormControl(''),
    })
  }
  
  triggerDisableEvent() {
    if(this.soapSubjectiveForm.value.generalToggle) {
      this.soapSubjectiveForm.controls['general'].disable();
    }
    if(this.soapSubjectiveForm.value.generalToggle) {
      this.soapSubjectiveForm.controls['generalComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.generalToggle) {
      this.soapSubjectiveForm.controls['general'].enable();
    }
    if(!this.soapSubjectiveForm.value.generalToggle) {
      this.soapSubjectiveForm.controls['generalComments'].enable();
    }
    if(this.soapSubjectiveForm.value.skinToggle) {
      this.soapSubjectiveForm.controls['skin'].disable();
    }
    if(this.soapSubjectiveForm.value.skinToggle) {
      this.soapSubjectiveForm.controls['skinComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.skinToggle) {
      this.soapSubjectiveForm.controls['skin'].enable();
    }
    if(!this.soapSubjectiveForm.value.skinToggle) {
      this.soapSubjectiveForm.controls['skinComments'].enable();
    }
    if(this.soapSubjectiveForm.value.heentToggle) {
      this.soapSubjectiveForm.controls['heent'].disable();
    }
    if(this.soapSubjectiveForm.value.heentToggle) {
      this.soapSubjectiveForm.controls['heentComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.heentToggle) {
      this.soapSubjectiveForm.controls['heent'].enable();
    }
    if(!this.soapSubjectiveForm.value.heentToggle) {
      this.soapSubjectiveForm.controls['heentComments'].enable();
    }
    if(this.soapSubjectiveForm.value.neckToggle) {
      this.soapSubjectiveForm.controls['neck'].disable();
    }
    if(this.soapSubjectiveForm.value.neckToggle) {
      this.soapSubjectiveForm.controls['neckComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.neckToggle) {
      this.soapSubjectiveForm.controls['neck'].enable();
    }
    if(!this.soapSubjectiveForm.value.neckToggle) {
      this.soapSubjectiveForm.controls['neckComments'].enable();
    }
    if(this.soapSubjectiveForm.value.breastToggle) {
      this.soapSubjectiveForm.controls['breast'].disable();
    }
    if(this.soapSubjectiveForm.value.breastToggle) {
      this.soapSubjectiveForm.controls['breastComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.breastToggle) {
      this.soapSubjectiveForm.controls['breast'].enable();
    }
    if(!this.soapSubjectiveForm.value.breastToggle) {
      this.soapSubjectiveForm.controls['breastComments'].enable();
    }
    if(this.soapSubjectiveForm.value.cardiovascularToggle) {
      this.soapSubjectiveForm.controls['cardiovascular'].disable();
    }
    if(this.soapSubjectiveForm.value.cardiovascularToggle) {
      this.soapSubjectiveForm.controls['cardiovascularComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.cardiovascularToggle) {
      this.soapSubjectiveForm.controls['cardiovascular'].enable();
    }
    if(!this.soapSubjectiveForm.value.cardiovascularToggle) {
      this.soapSubjectiveForm.controls['cardiovascularComments'].enable();
    }
    if(this.soapSubjectiveForm.value.respiratoryToggle) {
      this.soapSubjectiveForm.controls['respiratory'].disable();
    }
    if(this.soapSubjectiveForm.value.respiratoryToggle) {
      this.soapSubjectiveForm.controls['respiratoryComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.respiratoryToggle) {
      this.soapSubjectiveForm.controls['respiratory'].enable();
    }
    if(!this.soapSubjectiveForm.value.respiratoryToggle) {
      this.soapSubjectiveForm.controls['respiratoryComments'].enable();
    }
    if(this.soapSubjectiveForm.value.giToggle) {
      this.soapSubjectiveForm.controls['gi'].disable();
    }
    if(this.soapSubjectiveForm.value.giToggle) {
      this.soapSubjectiveForm.controls['giComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.giToggle) {
      this.soapSubjectiveForm.controls['gi'].enable();
    }
    if(!this.soapSubjectiveForm.value.giToggle) {
      this.soapSubjectiveForm.controls['giComments'].enable();
    }
    if(this.soapSubjectiveForm.value.urinaryToggle) {
      this.soapSubjectiveForm.controls['urinary'].disable();
    }
    if(this.soapSubjectiveForm.value.urinaryToggle) {
      this.soapSubjectiveForm.controls['urinaryComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.urinaryToggle) {
      this.soapSubjectiveForm.controls['urinary'].enable();
    }
    if(!this.soapSubjectiveForm.value.urinaryToggle) {
      this.soapSubjectiveForm.controls['urinaryComments'].enable();
    }
    if(this.soapSubjectiveForm.value.genitalToggle) {
      this.soapSubjectiveForm.controls['genital'].disable();
    }
    if(this.soapSubjectiveForm.value.genitalToggle) {
      this.soapSubjectiveForm.controls['genitalComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.genitalToggle) {
      this.soapSubjectiveForm.controls['genital'].enable();
    }
    if(!this.soapSubjectiveForm.value.genitalToggle) {
      this.soapSubjectiveForm.controls['genitalComments'].enable();
    }
    if(this.soapSubjectiveForm.value.genitalFemaleToggle) {
      this.soapSubjectiveForm.controls['genitalFemale'].disable();
    }
    if(this.soapSubjectiveForm.value.genitalFemaleToggle) {
      this.soapSubjectiveForm.controls['genitalFemaleComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.genitalFemaleToggle) {
      this.soapSubjectiveForm.controls['genitalFemale'].enable();
    }
    if(!this.soapSubjectiveForm.value.genitalFemaleToggle) {
      this.soapSubjectiveForm.controls['genitalFemaleComments'].enable();
    }
    if(this.soapSubjectiveForm.value.periphToggle) {
      this.soapSubjectiveForm.controls['periph'].disable();
    }
    if(this.soapSubjectiveForm.value.periphToggle) {
      this.soapSubjectiveForm.controls['periphComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.periphToggle) {
      this.soapSubjectiveForm.controls['periph'].enable();
    }
    if(!this.soapSubjectiveForm.value.periphToggle) {
      this.soapSubjectiveForm.controls['periphComments'].enable();
    }
    if(this.soapSubjectiveForm.value.mskToggle) {
      this.soapSubjectiveForm.controls['msk'].disable();
    }
    if(this.soapSubjectiveForm.value.mskToggle) {
      this.soapSubjectiveForm.controls['mskComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.mskToggle) {
      this.soapSubjectiveForm.controls['msk'].enable();
    }
    if(!this.soapSubjectiveForm.value.mskToggle) {
      this.soapSubjectiveForm.controls['mskComments'].enable();
    }
    if(this.soapSubjectiveForm.value.neurologicalToggle) {
      this.soapSubjectiveForm.controls['neurological'].disable();
    }
    if(this.soapSubjectiveForm.value.neurologicalToggle) {
      this.soapSubjectiveForm.controls['neurologicalComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.neurologicalToggle) {
      this.soapSubjectiveForm.controls['neurological'].enable();
    }
    if(!this.soapSubjectiveForm.value.neurologicalToggle) {
      this.soapSubjectiveForm.controls['neurologicalComments'].enable();
    }
    if(this.soapSubjectiveForm.value.endocrineToggle) {
      this.soapSubjectiveForm.controls['endocrine'].disable();
    }
    if(this.soapSubjectiveForm.value.endocrineToggle) {
      this.soapSubjectiveForm.controls['endocrineComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.endocrineToggle) {
      this.soapSubjectiveForm.controls['endocrine'].enable();
    }
    if(!this.soapSubjectiveForm.value.endocrineToggle) {
      this.soapSubjectiveForm.controls['endocrineComments'].enable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].disable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].enable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].enable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].disable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].enable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].enable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].disable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].enable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].enable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].disable();
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatric'].enable();
    }
    if(!this.soapSubjectiveForm.value.psychiatricToggle) {
      this.soapSubjectiveForm.controls['psychiatricComments'].enable();
    }
    if(this.soapSubjectiveForm.value.hpiToggle) {
      this.soapSubjectiveForm.controls['hpiComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.hpiToggle) {
      this.soapSubjectiveForm.controls['hpiComments'].enable();
    }
    if(this.soapSubjectiveForm.value.socialToggle) {
      this.soapSubjectiveForm.controls['socialHxComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.socialToggle) {
      this.soapSubjectiveForm.controls['socialHxComments'].enable();
    }
    if(this.soapSubjectiveForm.value.familyToggle) {
      this.soapSubjectiveForm.controls['familyHxComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.familyToggle) {
      this.soapSubjectiveForm.controls['familyHxComments'].enable();
    }
    if(this.soapSubjectiveForm.value.medicalToggle) {
      this.soapSubjectiveForm.controls['pastMedicalHxComments'].disable();
    }
    if(!this.soapSubjectiveForm.value.medicalToggle) {
      this.soapSubjectiveForm.controls['pastMedicalHxComments'].enable();
    }
  }
  
  saveForm() {
    let finalObj = {};
    if(this.soapSubjectiveForm.value.general == undefined) {
      finalObj['general'] = null;
      finalObj['generalComments'] = null;
    }
    else {
      finalObj['general'] = this.soapSubjectiveForm.value.general;
      finalObj['generalComments'] = this.soapSubjectiveForm.value.generalComments;
    }
    if(this.soapSubjectiveForm.value.hpiComments == undefined) {
      finalObj['hpiComments'] = null;
    }
    else {
      finalObj['hpiComments'] = this.soapSubjectiveForm.value.hpiComments;
    }
    if(this.soapSubjectiveForm.value.socialHxComments == undefined) {
      finalObj['socialHxComments'] = null;
    }
    else {
      finalObj['socialHxComments'] = this.soapSubjectiveForm.value.socialHxComments;
    }
    if(this.soapSubjectiveForm.value.familyHxComments == undefined) {
      finalObj['familyHxComments'] = null;
    }
    else {
      finalObj['familyHxComments'] = this.soapSubjectiveForm.value.familyHxComments;
    }
    if(this.soapSubjectiveForm.value.pastMedicalHxComments == undefined) {
      finalObj['pastMedicalHxComments'] = null;
    }
    else {
      finalObj['pastMedicalHxComments'] = this.soapSubjectiveForm.value.pastMedicalHxComments;
    }
    if(this.soapSubjectiveForm.value.skin == undefined) {
      finalObj['skin'] = null;
      finalObj['skinComments'] = null;
    }
    else {
      finalObj['skin'] = this.soapSubjectiveForm.value.skin;
      finalObj['skinComments'] = this.soapSubjectiveForm.value.skinComments;
    }
    if(this.soapSubjectiveForm.value.heent == undefined) {
      finalObj['heent'] = null;
      finalObj['heentComments'] = null;
    }
    else {
      finalObj['heent'] = this.soapSubjectiveForm.value.heent;
      finalObj['heentComments'] = this.soapSubjectiveForm.value.heentComments;
    }
    if(this.soapSubjectiveForm.value.neck == undefined) {
      finalObj['neck'] = null;
      finalObj['neckComments'] = null;
    }
    else {
      finalObj['neck'] = this.soapSubjectiveForm.value.neck;
      finalObj['neckComments'] = this.soapSubjectiveForm.value.neckComments;
    }
    if(this.soapSubjectiveForm.value.breast == undefined) {
      finalObj['breast'] = null;
      finalObj['breastComments'] = null;
    }
    else {
      finalObj['breast'] = this.soapSubjectiveForm.value.breast;
      finalObj['breastComments'] = this.soapSubjectiveForm.value.breastComments;
    }
    if(this.soapSubjectiveForm.value.cardiovascular == undefined) {
      finalObj['cardiovascular'] = null;
      finalObj['cardiovascularComments'] = null;
    }
    else {  
      finalObj['cardiovascular'] = this.soapSubjectiveForm.value.cardiovascular;
      finalObj['cardiovascularComments'] = this.soapSubjectiveForm.value.cardiovascularComments;
    }
    if(this.soapSubjectiveForm.value.respiratory == undefined) {
      finalObj['respiratory'] = null;
      finalObj['respiratoryComments'] = null;
    }
    else {
      finalObj['respiratory'] = this.soapSubjectiveForm.value.respiratory;
      finalObj['respiratoryComments'] = this.soapSubjectiveForm.value.respiratoryComments;
    }
    if(this.soapSubjectiveForm.value.gi == undefined) {
      finalObj['gi'] = null;
      finalObj['giComments'] = null;
    }
    else {
      finalObj['gi'] = this.soapSubjectiveForm.value.gi;
      finalObj['giComments'] = this.soapSubjectiveForm.value.giComments;
    }
    if(this.soapSubjectiveForm.value.urinary == undefined) {
      finalObj['urinary'] = null;
      finalObj['urinaryComments'] = null;
    }
    else {
      finalObj['urinary'] = this.soapSubjectiveForm.value.urinary;
      finalObj['urinaryComments'] = this.soapSubjectiveForm.value.urinaryComments;
    }
    if(this.soapSubjectiveForm.value.genital == undefined) {
      finalObj['genital'] = null;
      finalObj['genitalComments'] = null;
    }
    else {
      finalObj['genital'] = this.soapSubjectiveForm.value.genital;
      finalObj['genitalComments'] = this.soapSubjectiveForm.value.genitalComments;
    }
    if(this.soapSubjectiveForm.value.genitalFemale == undefined) {
      finalObj['genitalFemale'] = null;
      finalObj['genitalFemaleComments'] = null;
    }
    else {
      finalObj['genitalFemale'] = this.soapSubjectiveForm.value.genitalFemale;
      finalObj['genitalFemaleComments'] = this.soapSubjectiveForm.value.genitalFemaleComments;
    }
    if(this.soapSubjectiveForm.value.periph == undefined) {
      finalObj['periph'] = null;
      finalObj['periphComments'] = null;
    }
    else {
      finalObj['periph'] = this.soapSubjectiveForm.value.periph;
      finalObj['periphComments'] = this.soapSubjectiveForm.value.periphComments;
    }
    if(this.soapSubjectiveForm.value.msk == undefined) {
      finalObj['msk'] = null;
      finalObj['mskComments'] = null;
    }
    else {
      finalObj['msk'] = this.soapSubjectiveForm.value.msk;
      finalObj['mskComments'] = this.soapSubjectiveForm.value.mskComments;
    }
    if(this.soapSubjectiveForm.value.neurological == undefined) {
      finalObj['neurological'] = null;
      finalObj['neurologicalComments'] = null;
    }
    else {
      finalObj['neurological'] = this.soapSubjectiveForm.value.neurological;
      finalObj['neurologicalComments'] = this.soapSubjectiveForm.value.neurologicalComments;
    }
    if(this.soapSubjectiveForm.value.endocrine == undefined) {
      finalObj['endocrine'] = null;
      finalObj['endocrineComments'] = null;
    }
    else {
      finalObj['endocrine'] = this.soapSubjectiveForm.value.endocrine;
      finalObj['endocrineComments'] = this.soapSubjectiveForm.value.endocrineComments;
    }
    if(this.soapSubjectiveForm.value.psychiatric == undefined) {
      finalObj['psychiatric'] = null;
      finalObj['psychiatricComments'] = null;
    }
    else {
      finalObj['psychiatric'] = this.soapSubjectiveForm.value.psychiatric;
      finalObj['psychiatricComments'] = this.soapSubjectiveForm.value.psychiatricComments;
    }
    finalObj['notes'] = this.soapSubjectiveForm.value.notes;
    if(this.soapSubjectiveForm.value.generalToggle == "") {
      finalObj['generalToggle'] = 0;  
    }
    else {
      finalObj['generalToggle'] = this.soapSubjectiveForm.value.generalToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.hpiToggle == "") {
      finalObj['hpiToggle'] = 0;  
    }
    else {
      finalObj['hpiToggle'] = this.soapSubjectiveForm.value.hpiToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.socialToggle == "") {
      finalObj['socialToggle'] = 0;  
    }
    else {
      finalObj['socialToggle'] = this.soapSubjectiveForm.value.socialToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.familyToggle == "") {
      finalObj['familyToggle'] = 0;  
    }
    else {
      finalObj['familyToggle'] = this.soapSubjectiveForm.value.familyToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.medicalToggle == "") {
      finalObj['medicalToggle'] = 0;  
    }
    else {
      finalObj['medicalToggle'] = this.soapSubjectiveForm.value.medicalToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.skinToggle == "") {
      finalObj['skinToggle'] = 0;  
    }
    else {
      finalObj['skinToggle'] = this.soapSubjectiveForm.value.skinToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.heentToggle == "") {
      finalObj['heentToggle'] = 0;  
    }
    else {
      finalObj['heentToggle'] = this.soapSubjectiveForm.value.heentToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.neckToggle == "") {
      finalObj['neckToggle'] = 0;  
    }
    else {
      finalObj['neckToggle'] = this.soapSubjectiveForm.value.neckToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.breastToggle == "") {
      finalObj['breastToggle'] = 0;  
    }
    else {
      finalObj['breastToggle'] = this.soapSubjectiveForm.value.breastToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.cardiovascularToggle == "") {
      finalObj['cardiovascularToggle'] = 0;  
    }
    else {
      finalObj['cardiovascularToggle'] = this.soapSubjectiveForm.value.cardiovascularToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.respiratoryToggle == "") {
      finalObj['respiratoryToggle'] = 0;  
    }
    else {
      finalObj['respiratoryToggle'] = this.soapSubjectiveForm.value.respiratoryToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.giToggle == "") {
      finalObj['giToggle'] = 0;  
    }
    else {
      finalObj['giToggle'] = this.soapSubjectiveForm.value.giToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.urinaryToggle == "") {
      finalObj['urinaryToggle'] = 0;  
    }
    else {
      finalObj['urinaryToggle'] = this.soapSubjectiveForm.value.urinaryToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.genitalToggle == "") {
      finalObj['genitalToggle'] = 0;  
    }
    else {
      finalObj['genitalToggle'] = this.soapSubjectiveForm.value.genitalToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.genitalFemaleToggle == "") {
      finalObj['genitalFemaleToggle'] = 0;  
    }
    else {
      finalObj['genitalFemaleToggle'] = this.soapSubjectiveForm.value.genitalFemaleToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.periphToggle == "") {
      finalObj['periphToggle'] = 0;  
    }
    else {
      finalObj['periphToggle'] = this.soapSubjectiveForm.value.periphToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.mskToggle == "") {
      finalObj['mskToggle'] = 0;  
    }
    else {
      finalObj['mskToggle'] = this.soapSubjectiveForm.value.mskToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.neurologicalToggle == "") {
      finalObj['neurologicalToggle'] = 0;
    }
    else {
      finalObj['neurologicalToggle'] = this.soapSubjectiveForm.value.neurologicalToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.endocrineToggle == "") {
      finalObj['endocrineToggle'] = 0;  
    }
    else {
      finalObj['endocrineToggle'] = this.soapSubjectiveForm.value.endocrineToggle == true ? 1 : 0;
    }
    if(this.soapSubjectiveForm.value.psychiatricToggle == "") {
      finalObj['psychiatricToggle'] = 0;  
    }
    else {
      finalObj['psychiatricToggle'] = this.soapSubjectiveForm.value.psychiatricToggle == true ? 1 : 0;
    }
  }
  
}
