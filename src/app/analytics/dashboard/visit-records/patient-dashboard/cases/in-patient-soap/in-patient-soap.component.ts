import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-in-patient-soap',
  templateUrl: './in-patient-soap.component.html',
  styleUrls: ['./in-patient-soap.component.scss']
})
export class InPatientSoapComponent implements OnInit {

  constructor(public fb:FormBuilder) {
    this.createReasonForm();
   }
   array = [{id:1 , value:"allergies"},{id:2 , value:"annualPhysicalExam"},{id:3 , value:"anxious"},{id:4 , value:"asthma"},{id:5 , value:"attentionProblems"},{id:6 , value:"backProblems"},{id:7 , value:"brokenBones"},{id:8 , value:"cold"},{id:9 , value:"cough"},{id:10 , value:"depression"},{id:11 , value:"dizzy"},{id:12 , value:"earache"},{id:13 , value:"diabetes"},{id:14 , value:"diarrhea"},{id:15 , value:"facialQuestions"},{id:16 , value:"heartBurn"},{id:17 , value:"headAche"},{id:18 , value:"WeaklyExam"},{id:19 , value:"shoulderPain"},{id:20 , value:"difficultyBreathing"},{id:21 , value:"neckPain"},{id:22 , value:"difficultySwallowing"},{id:24 , value:"wristPain"},{id:25 , value:"difficultyUrinating"},{id:26 , value:"eyeDrainage"},{id:27 , value:"facialPain"},{id:28 , value:"fever"},{id:29 , value:"highBlood"}];
   array2 = ["allergies", "annualPhysicalExam", "anxious", "asthma", "attentionProblems", "backProblems", "brokenBones", "cold", "cough", "depression", "dizzy", "earache", "diabetes", "diarrhea", "facialQuestions", "heartBurn", "headAche", "WeaklyExam", "shoulderPain", "difficultyBreathing", "neckPain", "difficultySwallowing", "wristPain", "difficultyUrinating", "eyeDrainage", "facialPain", "fever", "highBlood" ];

  reasonForVisitForm: FormGroup;

  ngOnInit() {
  }

  createReasonForm() {
    this.reasonForVisitForm = this.fb.group({
      allergies : new FormControl(''),
      annualPhysicalExam : new FormControl(''),
      anxious : new FormControl(''),
      asthma : new FormControl(''),
      attentionProblems : new FormControl(''),
      backProblems : new FormControl(''),
      brokenBones : new FormControl(''),
      cold : new FormControl(''),
      cough : new FormControl(''),
      depression : new FormControl(''),
      dizzy : new FormControl(''),
      earache : new FormControl(''),
      diabetes : new FormControl(''),
      diarrhea : new FormControl(''),
      facialQuestions : new FormControl(''),
      heartBurn : new FormControl(''),
      headAche : new FormControl(''),
      WeaklyExam : new FormControl(''),
      shoulderPain : new FormControl(''),
      difficultyBreathing : new FormControl(''),
      neckPain : new FormControl(''),
      difficultySwallowing : new FormControl(''),
      wristPain : new FormControl(''),
      difficultyUrinating : new FormControl(''),
      eyeDrainage : new FormControl(''),
      facialPain : new FormControl(''),
      fever : new FormControl(''),
      highBlood : new FormControl('')
    })
  }

  saveForm() {
    let finalObj = {};
    for(let i = 0 ; i < this.array2.length ; i++) {
      if(this.reasonForVisitForm.value[this.array2[i]] == "") {
        finalObj[this.array2[i]] = 0;  
      }
      else {
        finalObj[this.array2[i]] = this.reasonForVisitForm.value[this.array2[i]] == true ? 1 : 0;
      }
    }
  }

}
