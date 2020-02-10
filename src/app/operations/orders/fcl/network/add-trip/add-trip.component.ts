import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {
  addTripForm:FormGroup;
  isOneLetter = false;
  isOneCapitalLetter = false;
  isOneNumber = false;
  isOneSpecialCaharacter = false;
  isMinLength = false;
  isValidate = false;
  currDate = new Date();
  public finishDateToSet:any;
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddTripComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createUserForm();
  }
  
  ngOnInit() {
    
  }

  public setStartDate(date) {
    let dateToSet = new Date(date);
    this.finishDateToSet = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), dateToSet.getDate());
  }
  
  get source() { return this.addTripForm.get('source'); }
  
  get destination() { return this.addTripForm.get('destination'); }
  
  get type() { return this.addTripForm.get('type'); }
  
  get startDate() { return this.addTripForm.get('startDate'); }
  
  get finishDate() { return this.addTripForm.get('finishDate'); }

  get vendor() { return this.addTripForm.get('vendor'); }

  get vehicleNumber() { return this.addTripForm.get('vehicleNumber'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createUserForm() {
    this.addTripForm = this.fb.group({
      source:new FormControl('',[Validators.required]),
      destination:new FormControl('',[Validators.required]),
      type:new FormControl('',[Validators.required]),
      startDate:new FormControl(''),
      finishDate:new FormControl(''),
      vendor:new FormControl('',[Validators.maxLength(150)]),
      vehicleNumber:new FormControl('',[Validators.maxLength(20)])

    })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveUser() {
    this.alertService.createAlert('Trip added successfully', 1);
    this.dialogRef.close();
  }

}
