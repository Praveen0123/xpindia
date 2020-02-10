import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-monthly-rate',
  templateUrl: './add-monthly-rate.component.html',
  styleUrls: ['./add-monthly-rate.component.scss']
})
export class AddMonthlyRateComponent implements OnInit {

  addCustomerForm:FormGroup;
  capacityOfVehicle = "";
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddMonthlyRateComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
  }
  
  ngOnInit() {
    
  }

  // get payload() { return this.addCustomerForm.get('payload'); }
  
  get distance() { return this.addCustomerForm.get('distance'); }
  
  get vehicleType() { return this.addCustomerForm.get('vehicleType'); }

  get dailyprice() { return this.addCustomerForm.get('dailyprice'); }

  get rate() { return this.addCustomerForm.get('rate'); }
  
  // get uniqueId() { return this.addCustomerForm.get('uniqueId'); }

  // get address() { return this.addCustomerForm.get('address'); }

  // get address2() { return this.addCustomerForm.get('address2'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      vehicleType:new FormControl('',),
      distance:new FormControl('',),
      // payload:new FormControl('',),
      dailyprice:new FormControl('',),
      rate:new FormControl('',),
      // uniqueId:new FormControl('',),
      // address:new FormControl('',),
      // address2:new FormControl('',),
    })
  }
  
  // noWhiteSpaceValidator(control:FormControl) {
  //   let isWhiteSpace = (control.value || '').trim().length === 0;
  //   let isValid=!isWhiteSpace;
  //   return isValid ? null : {'whitespace':true};
  // }
  
  saveCustomer() {
    this.alertService.createAlert('Rate added successfully', 1);
    this.dialogRef.close();
  }
}
