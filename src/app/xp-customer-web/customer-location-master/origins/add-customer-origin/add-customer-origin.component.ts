
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-customer-origin',
  templateUrl: './add-customer-origin.component.html',
  styleUrls: ['./add-customer-origin.component.scss']
})
export class AddCustomerOriginComponent implements OnInit {

  addCustomerForm:FormGroup;
  capacityOfVehicle = "";
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddCustomerOriginComponent>,@Inject(MAT_DIALOG_DATA) public origin: number, private alertService: AlertService) { 
    this.createCustomerForm();
  }
  
  ngOnInit() {
    
  }

  get Country() { return this.addCustomerForm.get('Country'); }
  
  get Zone() { return this.addCustomerForm.get('Zone'); }
  
  get state() { return this.addCustomerForm.get('state'); }

  get District() { return this.addCustomerForm.get('District'); }

  get pincode() { return this.addCustomerForm.get('pincode'); }

  get address() { return this.addCustomerForm.get('address'); }

  get Latitude() { return this.addCustomerForm.get('Latitude'); }
  
  get longitude() { return this.addCustomerForm.get('longitude'); }

  get radius() { return this.addCustomerForm.get('radius'); }

  get locations() { return this.addCustomerForm.get('locations'); }

  
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      Country:new FormControl('',),
      Zone:new FormControl('',),
      state:new FormControl('',),
      pincode:new FormControl('',),
      District:new FormControl('',),
    
      address:new FormControl('',),
      Latitude:new FormControl('',),
      longitude:new FormControl('',),
      radius:new FormControl('',),
      locations:new FormControl('',),
    })
  }
  
  // noWhiteSpaceValidator(control:FormControl) {
  //   let isWhiteSpace = (control.value || '').trim().length === 0;
  //   let isValid=!isWhiteSpace;
  //   return isValid ? null : {'whitespace':true};
  // }
  
  saveCustomer() {
    this.alertService.createAlert('Origin added successfully', 1);
    this.dialogRef.close();
  }

  

}













