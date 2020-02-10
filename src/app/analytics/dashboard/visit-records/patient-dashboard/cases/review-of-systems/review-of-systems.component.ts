import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';

@Component({
  selector: 'app-review-of-systems',
  templateUrl: './review-of-systems.component.html',
  styleUrls: ['./review-of-systems.component.scss']
})
export class ReviewOfSystemsComponent implements OnInit {
  
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
  reviewOfSystemsForm: FormGroup
  
  constructor(public fb:FormBuilder) {
    this.createRevieeForm();
  }
  
  ngOnInit() {
  }
  
  createRevieeForm() {
    this.reviewOfSystemsForm = this.fb.group({
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
      psychiatricToggle : new FormControl('')
    })
  }
  
  triggerDisableEvent() {
    if(this.reviewOfSystemsForm.value.generalToggle) {
      this.reviewOfSystemsForm.controls['general'].disable();
    }
    if(this.reviewOfSystemsForm.value.generalToggle) {
      this.reviewOfSystemsForm.controls['generalComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.generalToggle) {
      this.reviewOfSystemsForm.controls['general'].enable();
    }
    if(!this.reviewOfSystemsForm.value.generalToggle) {
      this.reviewOfSystemsForm.controls['generalComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.skinToggle) {
      this.reviewOfSystemsForm.controls['skin'].disable();
    }
    if(this.reviewOfSystemsForm.value.skinToggle) {
      this.reviewOfSystemsForm.controls['skinComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.skinToggle) {
      this.reviewOfSystemsForm.controls['skin'].enable();
    }
    if(!this.reviewOfSystemsForm.value.skinToggle) {
      this.reviewOfSystemsForm.controls['skinComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.heentToggle) {
      this.reviewOfSystemsForm.controls['heent'].disable();
    }
    if(this.reviewOfSystemsForm.value.heentToggle) {
      this.reviewOfSystemsForm.controls['heentComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.heentToggle) {
      this.reviewOfSystemsForm.controls['heent'].enable();
    }
    if(!this.reviewOfSystemsForm.value.heentToggle) {
      this.reviewOfSystemsForm.controls['heentComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.neckToggle) {
      this.reviewOfSystemsForm.controls['neck'].disable();
    }
    if(this.reviewOfSystemsForm.value.neckToggle) {
      this.reviewOfSystemsForm.controls['neckComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.neckToggle) {
      this.reviewOfSystemsForm.controls['neck'].enable();
    }
    if(!this.reviewOfSystemsForm.value.neckToggle) {
      this.reviewOfSystemsForm.controls['neckComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.breastToggle) {
      this.reviewOfSystemsForm.controls['breast'].disable();
    }
    if(this.reviewOfSystemsForm.value.breastToggle) {
      this.reviewOfSystemsForm.controls['breastComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.breastToggle) {
      this.reviewOfSystemsForm.controls['breast'].enable();
    }
    if(!this.reviewOfSystemsForm.value.breastToggle) {
      this.reviewOfSystemsForm.controls['breastComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.cardiovascularToggle) {
      this.reviewOfSystemsForm.controls['cardiovascular'].disable();
    }
    if(this.reviewOfSystemsForm.value.cardiovascularToggle) {
      this.reviewOfSystemsForm.controls['cardiovascularComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.cardiovascularToggle) {
      this.reviewOfSystemsForm.controls['cardiovascular'].enable();
    }
    if(!this.reviewOfSystemsForm.value.cardiovascularToggle) {
      this.reviewOfSystemsForm.controls['cardiovascularComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.respiratoryToggle) {
      this.reviewOfSystemsForm.controls['respiratory'].disable();
    }
    if(this.reviewOfSystemsForm.value.respiratoryToggle) {
      this.reviewOfSystemsForm.controls['respiratoryComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.respiratoryToggle) {
      this.reviewOfSystemsForm.controls['respiratory'].enable();
    }
    if(!this.reviewOfSystemsForm.value.respiratoryToggle) {
      this.reviewOfSystemsForm.controls['respiratoryComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.giToggle) {
      this.reviewOfSystemsForm.controls['gi'].disable();
    }
    if(this.reviewOfSystemsForm.value.giToggle) {
      this.reviewOfSystemsForm.controls['giComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.giToggle) {
      this.reviewOfSystemsForm.controls['gi'].enable();
    }
    if(!this.reviewOfSystemsForm.value.giToggle) {
      this.reviewOfSystemsForm.controls['giComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.urinaryToggle) {
      this.reviewOfSystemsForm.controls['urinary'].disable();
    }
    if(this.reviewOfSystemsForm.value.urinaryToggle) {
      this.reviewOfSystemsForm.controls['urinaryComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.urinaryToggle) {
      this.reviewOfSystemsForm.controls['urinary'].enable();
    }
    if(!this.reviewOfSystemsForm.value.urinaryToggle) {
      this.reviewOfSystemsForm.controls['urinaryComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.genitalToggle) {
      this.reviewOfSystemsForm.controls['genital'].disable();
    }
    if(this.reviewOfSystemsForm.value.genitalToggle) {
      this.reviewOfSystemsForm.controls['genitalComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.genitalToggle) {
      this.reviewOfSystemsForm.controls['genital'].enable();
    }
    if(!this.reviewOfSystemsForm.value.genitalToggle) {
      this.reviewOfSystemsForm.controls['genitalComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.genitalFemaleToggle) {
      this.reviewOfSystemsForm.controls['genitalFemale'].disable();
    }
    if(this.reviewOfSystemsForm.value.genitalFemaleToggle) {
      this.reviewOfSystemsForm.controls['genitalFemaleComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.genitalFemaleToggle) {
      this.reviewOfSystemsForm.controls['genitalFemale'].enable();
    }
    if(!this.reviewOfSystemsForm.value.genitalFemaleToggle) {
      this.reviewOfSystemsForm.controls['genitalFemaleComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.periphToggle) {
      this.reviewOfSystemsForm.controls['periph'].disable();
    }
    if(this.reviewOfSystemsForm.value.periphToggle) {
      this.reviewOfSystemsForm.controls['periphComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.periphToggle) {
      this.reviewOfSystemsForm.controls['periph'].enable();
    }
    if(!this.reviewOfSystemsForm.value.periphToggle) {
      this.reviewOfSystemsForm.controls['periphComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.mskToggle) {
      this.reviewOfSystemsForm.controls['msk'].disable();
    }
    if(this.reviewOfSystemsForm.value.mskToggle) {
      this.reviewOfSystemsForm.controls['mskComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.mskToggle) {
      this.reviewOfSystemsForm.controls['msk'].enable();
    }
    if(!this.reviewOfSystemsForm.value.mskToggle) {
      this.reviewOfSystemsForm.controls['mskComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.neurologicalToggle) {
      this.reviewOfSystemsForm.controls['neurological'].disable();
    }
    if(this.reviewOfSystemsForm.value.neurologicalToggle) {
      this.reviewOfSystemsForm.controls['neurologicalComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.neurologicalToggle) {
      this.reviewOfSystemsForm.controls['neurological'].enable();
    }
    if(!this.reviewOfSystemsForm.value.neurologicalToggle) {
      this.reviewOfSystemsForm.controls['neurologicalComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.endocrineToggle) {
      this.reviewOfSystemsForm.controls['endocrine'].disable();
    }
    if(this.reviewOfSystemsForm.value.endocrineToggle) {
      this.reviewOfSystemsForm.controls['endocrineComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.endocrineToggle) {
      this.reviewOfSystemsForm.controls['endocrine'].enable();
    }
    if(!this.reviewOfSystemsForm.value.endocrineToggle) {
      this.reviewOfSystemsForm.controls['endocrineComments'].enable();
    }
    if(this.reviewOfSystemsForm.value.psychiatricToggle) {
      this.reviewOfSystemsForm.controls['psychiatric'].disable();
    }
    if(this.reviewOfSystemsForm.value.psychiatricToggle) {
      this.reviewOfSystemsForm.controls['psychiatricComments'].disable();
    }
    if(!this.reviewOfSystemsForm.value.psychiatricToggle) {
      this.reviewOfSystemsForm.controls['psychiatric'].enable();
    }
    if(!this.reviewOfSystemsForm.value.psychiatricToggle) {
      this.reviewOfSystemsForm.controls['psychiatricComments'].enable();
    }
  }
  
  saveForm() {
    let finalObj = {};
    if(this.reviewOfSystemsForm.value.general == undefined) {
      finalObj['general'] = null;
      finalObj['generalComments'] = null;
    }
    else {
      finalObj['general'] = this.reviewOfSystemsForm.value.general;
      finalObj['generalComments'] = this.reviewOfSystemsForm.value.generalComments;
    }
    if(this.reviewOfSystemsForm.value.skin == undefined) {
      finalObj['skin'] = null;
      finalObj['skinComments'] = null;
    }
    else {
      finalObj['skin'] = this.reviewOfSystemsForm.value.skin;
      finalObj['skinComments'] = this.reviewOfSystemsForm.value.skinComments;
    }
    if(this.reviewOfSystemsForm.value.heent == undefined) {
      finalObj['heent'] = null;
      finalObj['heentComments'] = null;
    }
    else {
      finalObj['heent'] = this.reviewOfSystemsForm.value.heent;
      finalObj['heentComments'] = this.reviewOfSystemsForm.value.heentComments;
    }
    if(this.reviewOfSystemsForm.value.neck == undefined) {
      finalObj['neck'] = null;
      finalObj['neckComments'] = null;
    }
    else {
      finalObj['neck'] = this.reviewOfSystemsForm.value.neck;
      finalObj['neckComments'] = this.reviewOfSystemsForm.value.neckComments;
    }
    if(this.reviewOfSystemsForm.value.breast == undefined) {
      finalObj['breast'] = null;
      finalObj['breastComments'] = null;
    }
    else {
      finalObj['breast'] = this.reviewOfSystemsForm.value.breast;
      finalObj['breastComments'] = this.reviewOfSystemsForm.value.breastComments;
    }
    if(this.reviewOfSystemsForm.value.cardiovascular == undefined) {
      finalObj['cardiovascular'] = null;
      finalObj['cardiovascularComments'] = null;
    }
    else {  
      finalObj['cardiovascular'] = this.reviewOfSystemsForm.value.cardiovascular;
      finalObj['cardiovascularComments'] = this.reviewOfSystemsForm.value.cardiovascularComments;
    }
    if(this.reviewOfSystemsForm.value.respiratory == undefined) {
      finalObj['respiratory'] = null;
      finalObj['respiratoryComments'] = null;
    }
    else {
      finalObj['respiratory'] = this.reviewOfSystemsForm.value.respiratory;
      finalObj['respiratoryComments'] = this.reviewOfSystemsForm.value.respiratoryComments;
    }
    if(this.reviewOfSystemsForm.value.gi == undefined) {
      finalObj['gi'] = null;
      finalObj['giComments'] = null;
    }
    else {
      finalObj['gi'] = this.reviewOfSystemsForm.value.gi;
      finalObj['giComments'] = this.reviewOfSystemsForm.value.giComments;
    }
    if(this.reviewOfSystemsForm.value.urinary == undefined) {
      finalObj['urinary'] = null;
      finalObj['urinaryComments'] = null;
    }
    else {
      finalObj['urinary'] = this.reviewOfSystemsForm.value.urinary;
      finalObj['urinaryComments'] = this.reviewOfSystemsForm.value.urinaryComments;
    }
    if(this.reviewOfSystemsForm.value.genital == undefined) {
      finalObj['genital'] = null;
      finalObj['genitalComments'] = null;
    }
    else {
      finalObj['genital'] = this.reviewOfSystemsForm.value.genital;
      finalObj['genitalComments'] = this.reviewOfSystemsForm.value.genitalComments;
    }
    if(this.reviewOfSystemsForm.value.genitalFemale == undefined) {
      finalObj['genitalFemale'] = null;
      finalObj['genitalFemaleComments'] = null;
    }
    else {
      finalObj['genitalFemale'] = this.reviewOfSystemsForm.value.genitalFemale;
      finalObj['genitalFemaleComments'] = this.reviewOfSystemsForm.value.genitalFemaleComments;
    }
    if(this.reviewOfSystemsForm.value.periph == undefined) {
      finalObj['periph'] = null;
      finalObj['periphComments'] = null;
    }
    else {
      finalObj['periph'] = this.reviewOfSystemsForm.value.periph;
      finalObj['periphComments'] = this.reviewOfSystemsForm.value.periphComments;
    }
    if(this.reviewOfSystemsForm.value.msk == undefined) {
      finalObj['msk'] = null;
      finalObj['mskComments'] = null;
    }
    else {
      finalObj['msk'] = this.reviewOfSystemsForm.value.msk;
      finalObj['mskComments'] = this.reviewOfSystemsForm.value.mskComments;
    }
    if(this.reviewOfSystemsForm.value.neurological == undefined) {
      finalObj['neurological'] = null;
      finalObj['neurologicalComments'] = null;
    }
    else {
      finalObj['neurological'] = this.reviewOfSystemsForm.value.neurological;
      finalObj['neurologicalComments'] = this.reviewOfSystemsForm.value.neurologicalComments;
    }
    if(this.reviewOfSystemsForm.value.endocrine == undefined) {
      finalObj['endocrine'] = null;
      finalObj['endocrineComments'] = null;
    }
    else {
      finalObj['endocrine'] = this.reviewOfSystemsForm.value.endocrine;
      finalObj['endocrineComments'] = this.reviewOfSystemsForm.value.endocrineComments;
    }
    if(this.reviewOfSystemsForm.value.psychiatric == undefined) {
      finalObj['psychiatric'] = null;
      finalObj['psychiatricComments'] = null;
    }
    else {
      finalObj['psychiatric'] = this.reviewOfSystemsForm.value.psychiatric;
      finalObj['psychiatricComments'] = this.reviewOfSystemsForm.value.psychiatricComments;
    }
    finalObj['notes'] = this.reviewOfSystemsForm.value.notes;
    if(this.reviewOfSystemsForm.value.generalToggle == "") {
      finalObj['generalToggle'] = 0;  
    }
    else {
      finalObj['generalToggle'] = this.reviewOfSystemsForm.value.generalToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.skinToggle == "") {
      finalObj['skinToggle'] = 0;  
    }
    else {
      finalObj['skinToggle'] = this.reviewOfSystemsForm.value.skinToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.heentToggle == "") {
      finalObj['heentToggle'] = 0;  
    }
    else {
      finalObj['heentToggle'] = this.reviewOfSystemsForm.value.heentToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.neckToggle == "") {
      finalObj['neckToggle'] = 0;  
    }
    else {
      finalObj['neckToggle'] = this.reviewOfSystemsForm.value.neckToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.breastToggle == "") {
      finalObj['breastToggle'] = 0;  
    }
    else {
      finalObj['breastToggle'] = this.reviewOfSystemsForm.value.breastToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.cardiovascularToggle == "") {
      finalObj['cardiovascularToggle'] = 0;  
    }
    else {
      finalObj['cardiovascularToggle'] = this.reviewOfSystemsForm.value.cardiovascularToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.respiratoryToggle == "") {
      finalObj['respiratoryToggle'] = 0;  
    }
    else {
      finalObj['respiratoryToggle'] = this.reviewOfSystemsForm.value.respiratoryToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.giToggle == "") {
      finalObj['giToggle'] = 0;  
    }
    else {
      finalObj['giToggle'] = this.reviewOfSystemsForm.value.giToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.urinaryToggle == "") {
      finalObj['urinaryToggle'] = 0;  
    }
    else {
      finalObj['urinaryToggle'] = this.reviewOfSystemsForm.value.urinaryToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.genitalToggle == "") {
      finalObj['genitalToggle'] = 0;  
    }
    else {
      finalObj['genitalToggle'] = this.reviewOfSystemsForm.value.genitalToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.genitalFemaleToggle == "") {
      finalObj['genitalFemaleToggle'] = 0;  
    }
    else {
      finalObj['genitalFemaleToggle'] = this.reviewOfSystemsForm.value.genitalFemaleToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.periphToggle == "") {
      finalObj['periphToggle'] = 0;  
    }
    else {
      finalObj['periphToggle'] = this.reviewOfSystemsForm.value.periphToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.mskToggle == "") {
      finalObj['mskToggle'] = 0;  
    }
    else {
      finalObj['mskToggle'] = this.reviewOfSystemsForm.value.mskToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.neurologicalToggle == "") {
      finalObj['neurologicalToggle'] = 0;
    }
    else {
      finalObj['neurologicalToggle'] = this.reviewOfSystemsForm.value.neurologicalToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.endocrineToggle == "") {
      finalObj['endocrineToggle'] = 0;  
    }
    else {
      finalObj['endocrineToggle'] = this.reviewOfSystemsForm.value.endocrineToggle == true ? 1 : 0;
    }
    if(this.reviewOfSystemsForm.value.psychiatricToggle == "") {
      finalObj['psychiatricToggle'] = 0;  
    }
    else {
      finalObj['psychiatricToggle'] = this.reviewOfSystemsForm.value.psychiatricToggle == true ? 1 : 0;
    }
  }
  
}
