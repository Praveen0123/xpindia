import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-handp-history-of-patient-illness',
  templateUrl: './handp-history-of-patient-illness.component.html',
  styleUrls: ['./handp-history-of-patient-illness.component.scss']
})
export class HandpHistoryOfPatientIllnessComponent implements OnInit {

  locationOptions = [{id:1 , value:"Medial"},{id:2 , value:"Lateral"}];
  qualityOptions = [{id:1 , value:"Not Known"},{id:2 , value:"Aching"},{id:3 , value:"Acute"},{id:4 , value:"Burning"},{id:5 , value:"Chronic"},{id:6 , value:"Constant"},{id:7 , value:"Cramping"},{id:8 , value:"Crushing"},{id:9 , value:"Dull"},{id:10 , value:"Electrical"},{id:11 , value:"Radiating Pain"},{id:12 , value:"Sharp"},{id:13 , value:"Stabbing"}];
  severityOptions = [{id:1 , value:"1 out of 10"},{id:2 , value:"2 out of 10"},{id:3 , value:"3 out of 10"},{id:4 , value:"4 out of 10"},{id:5 , value:"5 out of 10"},{id:6 , value:"6 out of 10"},{id:7 , value:"7 out of 10"},{id:8 , value:"8 out of 10"},{id:9 , value:"9 out of 10"},{id:10 , value:"10 out of 10"},{id:11 , value:"acute distress"},{id:12 , value:"critical"},{id:13 , value:"LOC"},{id:14 , value:"mild"},{id:15 , value:"mild to moderate"},{id:16 , value:"moderate"}];
  durationOptions = [{id:1 , value:"symptoms are"},{id:2 , value:"getting better"},{id:3 , value:"steady"},{id:4 , value:" have been increasing since onset"},{id:5 , value:"% of time symptoms are experienced as in SOAP"},{id:6 , value:"has had same/similar condition in the past"},{id:7 , value:"most symptomatic in morning"},{id:8 , value:"most symptomatic in mid day"},{id:9 , value:"most symptomatic in evening"},{id:10 , value:"wakes up from sleep"}];
  onsetOptions = [{id:1 , value:"abrupt"},{id:2 , value:"after Meal"},{id:3 , value:"at rest"},{id:4 , value:"awakened from sleep"},{id:5 , value:"continuous"},{id:6 , value:"date of occurrence"},{id:7 , value:"episodes"},{id:8 , value:"gradual"},{id:9 , value:"intermittent"},{id:10 , value:"primarily nocturnal"},{id:11 , value:"time not known"},{id:12 , value:"1 day ago"},{id:13 , value:"days ago"},{id:14 , value:"1 week ago"},{id:15 , value:"week ago"}];
  contextOptions = [{id:1 , value:"at rest"},{id:2 , value:"during physical exertion"},{id:3 , value:"during mental exertion"},{id:4 , value:"during a sporting activity"},{id:5 , value:"at work"},{id:6 , value:"with familial stress"},{id:7 , value:"mechanism issues"},{id:8 , value:"post-hospital visit"},{id:9 , value:"pre-hospital visit"},{id:10 , value:"began after discharge from hospital"},{id:11 , value:" and he/she was recently treated by doctor"}];
  modifyOptions = [{id:1 , value:"abated on their own"},{id:2 , value:"abated when on medication(s)"},{id:3 , value:"increased with inspiration"},{id:4 , value:"exacerbate with movement"},{id:5 , value:"decrease with movement"},{id:6 , value:"have partially resolved seemingly on their own"}];
  associationOptions = [{id:1 , value:"numbness"},{id:2 , value:"tingling"},{id:3 , value:"weakness"},{id:4 , value:"headache"},{id:5 , value:"change in vision"},{id:6 , value:"dizziness"},{id:7 , value:"loss of bowel control"},{id:8 , value:"loss of bladder control"},{id:9 , value:"sexual dysfunction"}];

  constructor(public fb: FormBuilder) {
    this.createHistoryForm();
   }

  historyForm: FormGroup;

  ngOnInit() {
  }

  createHistoryForm() {
    this.historyForm = this.fb.group({
      location : new FormControl(''),
      loctaionComments : new FormControl(''),
      quality : new FormControl(''),
      qualityCommnets : new FormControl(''),
      severity : new FormControl(''),
      severityCommnets : new FormControl(''),
      duration : new FormControl(''),
      durationCommnets : new FormControl(''),
      timing : new FormControl(''),
      timingCommnets : new FormControl(''),
      context : new FormControl(''),
      contextComments : new FormControl(''),
      modifying : new FormControl(''),
      modifyingComments : new FormControl(''),
      associated : new FormControl(''),
      associatedComments : new FormControl(''),
      previous : new FormControl(''),
      notes : new FormControl(''),
    })
  }

  saveForm() {
    let finalObj = {};
    finalObj['location'] = this.historyForm.value.location;
    finalObj['loctaionComments'] = this.historyForm.value.loctaionComments;
    finalObj['quality'] = this.historyForm.value.quality;
    finalObj['qualityCommnets'] = this.historyForm.value.qualityCommnets;
    finalObj['severity'] = this.historyForm.value.severity;
    finalObj['severityCommnets'] = this.historyForm.value.severityCommnets;
    finalObj['duration'] = this.historyForm.value.duration;
    finalObj['durationCommnets'] = this.historyForm.value.durationCommnets;
    finalObj['timing'] = this.historyForm.value.timing;
    finalObj['timingCommnets'] = this.historyForm.value.timingCommnets;
    finalObj['context'] = this.historyForm.value.context;
    finalObj['contextComments'] = this.historyForm.value.contextComments;
    finalObj['modifying'] = this.historyForm.value.modifying;
    finalObj['modifyingComments'] = this.historyForm.value.modifyingComments;
    finalObj['associated'] = this.historyForm.value.associated;
    finalObj['associatedComments'] = this.historyForm.value.associatedComments;
    finalObj['previous'] = this.historyForm.value.previous;
    finalObj['notes'] = this.historyForm.value.notes;
  }

}
