
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  addStaffForm:FormGroup;
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddStaffComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
  }
  
  ngOnInit() {
    
  }

  omit_special_char(event) {
    var k;
    k=event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32)
  }

  omit_all_char(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58) || k == 8 || k == 32)
  }
  
  get customerName() { return this.addStaffForm.get('customerName'); }

  get postalCode() { return this.addStaffForm.get('postalCode'); }
  
  get email() { return this.addStaffForm.get('email'); }
  
  get phone() { return this.addStaffForm.get('phone'); }
  
  get staffType() { return this.addStaffForm.get('staffType'); }

  get address() { return this.addStaffForm.get('address'); }

  get country() { return this.addStaffForm.get('country'); }

  get state() { return this.addStaffForm.get('state'); }

  get city() { return this.addStaffForm.get('city'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addStaffForm = this.fb.group({
      customerName:new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      // customerlastName:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      email:new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      phone:new FormControl('',[Validators.required,Validators.maxLength(15),this.noWhiteSpaceValidator]),
      staffType:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      country:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      city:new FormControl('',[Validators.required,Validators.maxLength(30),this.noWhiteSpaceValidator]),
      postalCode:new FormControl('',[Validators.required,Validators.maxLength(8),this.noWhiteSpaceValidator]),
    })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveCustomer() {
    this.alertService.createAlert('Staff added successfully', 1);
    this.dialogRef.close();
  }


}
