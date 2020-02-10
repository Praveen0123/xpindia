import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-patient-questionnaire',
  templateUrl: './patient-questionnaire.component.html',
  styleUrls: ['./patient-questionnaire.component.scss']
})
export class PatientQuestionnaireComponent implements OnInit {
  showyes:boolean=false;
  showPregnentPain:boolean=false;
  showRadiatePain:boolean=false;

  tableList:any;
  constructor(public location :Location,  public fb: FormBuilder) {
    this.CreatequestionnaireForm();
   }
  questionnaireForm: FormGroup;

  CreatequestionnaireForm() {
    this.questionnaireForm = this.fb.group({
      aspirin : new FormControl(''),
      aspirinTime : new FormControl(''),
      pregnant : new FormControl(''),
      painLocation : new FormControl(''),
      side : new FormControl(''),
      describeInjury : new FormControl(''),
      symptomsTime : new FormControl(''),
      problems : new FormControl(''),
      radiatePain : new FormControl(''),
      backPain : new FormControl(''),
      neckPain : new FormControl(''),
      Headache : new FormControl(''),
      Numbness : new FormControl(''),
      Weakness : new FormControl(''),
      Tinnitus : new FormControl(''),
      Others : new FormControl(''),
      painBetter : new FormControl(''),
      painWorse : new FormControl(''),
      previousSurgeries : new FormControl(''),
      allMedications : new FormControl(''),
      anyprevious : new FormControl(''),
      treatmentsForPain : new FormControl(''),
      allergies : new FormControl(''),
      bloodPressure : new FormControl(''),
      heartProblems : new FormControl(''),
      ulcers : new FormControl(''),
      diabetes : new FormControl(''),
      liverProblems : new FormControl(''),
      kidney : new FormControl(''),
      cancer : new FormControl(''),
      tobacco : new FormControl(''),
      hepatitis : new FormControl(''),
      bloodClots : new FormControl(''),
    })
  }

  
  savePermissions() {
    let finalObj = {};
    finalObj['aspirin'] = this.questionnaireForm.value.aspirin;
    finalObj['aspirinTime'] = this.questionnaireForm.value.aspirinTime;
    finalObj['pregnant'] = this.questionnaireForm.value.pregnant;
    finalObj['painLocation'] = this.questionnaireForm.value.painLocation;
    finalObj['side'] = this.questionnaireForm.value.side;
    finalObj['describeInjury'] = this.questionnaireForm.value.describeInjury;
    finalObj['symptomsTime'] = this.questionnaireForm.value.symptomsTime;
    finalObj['problems'] = this.questionnaireForm.value.problems;
    finalObj['radiatePain'] = this.questionnaireForm.value.radiatePain;
    finalObj['backPain'] = this.questionnaireForm.value.backPain;
    finalObj['neckPain'] = this.questionnaireForm.value.neckPain;
    finalObj['Headache'] = this.questionnaireForm.value.Headache;
    finalObj['Numbness'] = this.questionnaireForm.value.Numbness;
    finalObj['Weakness'] = this.questionnaireForm.value.Weakness;
    finalObj['Tinnitus'] = this.questionnaireForm.value.Tinnitus;
    finalObj['Others'] = this.questionnaireForm.value.Others;
    finalObj['painBetter'] = this.questionnaireForm.value.painBetter;
    finalObj['painWorse'] = this.questionnaireForm.value.painWorse;
    finalObj['previousSurgeries'] = this.questionnaireForm.value.previousSurgeries;
    finalObj['allMedications'] = this.questionnaireForm.value.allMedications;
    finalObj['anyprevious'] = this.questionnaireForm.value.anyprevious;
    finalObj['treatmentsForPain'] = this.questionnaireForm.value.treatmentsForPain;
    finalObj['allergies'] = this.questionnaireForm.value.allergies;
    finalObj['bloodPressure'] = this.questionnaireForm.value.bloodPressure;
    finalObj['heartProblems'] = this.questionnaireForm.value.heartProblems;
    finalObj['ulcers'] = this.questionnaireForm.value.ulcers;
    finalObj['diabetes'] = this.questionnaireForm.value.diabetes;
    finalObj['liverProblems'] = this.questionnaireForm.value.liverProblems;
    finalObj['kidney'] = this.questionnaireForm.value.kidney;
    finalObj['cancer'] = this.questionnaireForm.value.cancer;
    finalObj['tobacco'] = this.questionnaireForm.value.tobacco;
    finalObj['hepatitis'] = this.questionnaireForm.value.hepatitis;
    finalObj['bloodClots'] = this.questionnaireForm.value.bloodClots;
    
    console.log(finalObj);
  }


  showfun(){
  this.showyes=!this.showyes
  }

  showfun2(){
    this.showPregnentPain=!this.showPregnentPain
    }

   showfun3(){
      this.showRadiatePain=!this.showRadiatePain
      }


  goBack() {
    this.location.back();
  }

  

  ngOnInit() {
    // this.tableList = [
    //   {sNo:1 , description:"Are you currently taking aspirin (or any medicines that contain aspirin) or any blood thinners?"},
    //   {sNo:2 , description:"Are you pregnant or possibly pregnant?"},
    //   {sNo:3 , description:"Do you have high blood pressure?"},
    //   {sNo:4 , description:"Do you have any heart problems?"},
    //   {sNo:5 , description:"Do you have ulcers or gastritis?"},
    //   {sNo:6 , description:"Do you have diabetes?"},
    //   {sNo:7 , description:"Do you have any liver problems/Hepatitis?"},
    //   {sNo:8 , description:"Do you have any kidney diseases?"},
    //   {sNo:9 , description:"Do you have cancer?"},
    //   {sNo:10 , description:"Do you smoke or chew tobacco?"},
    //   {sNo:11 , description:"Do you have HIV or Hepatitis C?"},
    //   {sNo:12 , description:"Do you have any blood clots or embolus?"}
    // ]
  }

}