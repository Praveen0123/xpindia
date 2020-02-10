import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-report-cases',
  templateUrl: './add-report-cases.component.html',
  styleUrls: ['./add-report-cases.component.scss']
})
export class AddReportCasesComponent implements OnInit {

  addReportForm:FormGroup;
  capacityOfVehicle = "";
  Exception = [{id:1 , value:"ACCIDENT"} , {id:2 , value:"BREAK DOWN"}, {id:2 , value:"WEATHER"},{id:3 , value:'DRIVER HEALTH'},{id:4 , value:'JAM'}];
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddReportCasesComponent>,@Inject(MAT_DIALOG_DATA) public report: number, private alertService: AlertService) { 
    this.createReportCasesForm();
  }
  
  ngOnInit() {
    
  }

  get exception() { return this.addReportForm.get('exception'); }
  
  get time() { return this.addReportForm.get('time'); }
  
  get ExpectedTime() { return this.addReportForm.get('ExpectedTime'); }

  get remark() { return this.addReportForm.get('remark'); }

  get ReviseETA() { return this.addReportForm.get('ReviseETA'); }

  
  close(): void {
    this.dialogRef.close();
  }
  
  createReportCasesForm() {
    this.addReportForm = this.fb.group({
      exception:new FormControl('',),
      time:new FormControl('',),
      ExpectedTime:new FormControl('',),
      ReviseETA:new FormControl('',),
      remark:new FormControl('',),
    })
  }
  
  // noWhiteSpaceValidator(control:FormControl) {
  //   let isWhiteSpace = (control.value || '').trim().length === 0;
  //   let isValid=!isWhiteSpace;
  //   return isValid ? null : {'whitespace':true};
  // }
  
  saveCustomer() {
    this.alertService.createAlert('Report Case added successfully', 1);
    this.dialogRef.close();
  }

  

}









