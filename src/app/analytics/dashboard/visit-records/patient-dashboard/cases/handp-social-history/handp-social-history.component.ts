import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handp-social-history',
  templateUrl: './handp-social-history.component.html',
  styleUrls: ['./handp-social-history.component.scss']
})
export class HandpSocialHistoryComponent implements OnInit {

  locationOptions = ["Medial","Lateral"];
  medicalOptions = ["MI","CHF","ANGINA","HTN","DN"];
  surgicalOptions = ["Appendectomy","CABG","Angioplasty"];
  childOptions = ["Chickenpox","tetanus","scarlet fever","CMV"];
  immuzinations = ["Hepatitis B","DTP - DTaP"];
  father = ["High blood pressure","Diabetes","obesity","stroke"];
  marriage = ["Married","Single","Divorced","Widow"];
  living = ["In an appartment","In a house"];
  sex = ["Less than once a week","Once a week","3-5 times a week","More than 3-5 times a week"];
  caffeine = ["Yes","No","Coffee","Tea"];
  alcohol = ["Less than 2 drinks","More than two drinks","Weekly","Rarely"]


  constructor() { }

  ngOnInit() {
  }

}
