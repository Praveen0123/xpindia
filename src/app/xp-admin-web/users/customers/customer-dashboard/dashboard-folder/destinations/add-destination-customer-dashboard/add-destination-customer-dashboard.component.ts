import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-destination-customer-dashboard',
  templateUrl: './add-destination-customer-dashboard.component.html',
  styleUrls: ['./add-destination-customer-dashboard.component.scss']
})
export class AddDestinationCustomerDashboardComponent implements OnInit {

  addCustomerForm:FormGroup;
  addLocationForm:FormGroup;
  capacityOfVehicle = "";
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddDestinationCustomerDashboardComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
    this.createLocationForm();
  }
  
  ngOnInit() {
    
  }

 

  get destination() { return this.addCustomerForm.get('destination'); }

  get city() { return this.addCustomerForm.get('city'); }

  get pincode() { return this.addCustomerForm.get('pincode'); }

  get State() { return this.addCustomerForm.get('State'); }

  get latitude() { return this.addLocationForm.get('latitude'); }

  get longitude() { return this.addLocationForm.get('longitude'); }

  get radius() { return this.addLocationForm.get('radius'); }

  get address() { return this.addLocationForm.get('address'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      destination:new FormControl('',),
      city:new FormControl('',),
      pincode:new FormControl('',),
      State:new FormControl('',),
    })
  }

  createLocationForm() {
    this.addLocationForm = this.fb.group({
      latitude:new FormControl('',),
      longitude:new FormControl('',),
      radius:new FormControl('',),
      address:new FormControl('',),
    })
  }
  
  // noWhiteSpaceValidator(control:FormControl) {
  //   let isWhiteSpace = (control.value || '').trim().length === 0;
  //   let isValid=!isWhiteSpace;
  //   return isValid ? null : {'whitespace':true};
  // }
  
  saveCustomer() {
    this.alertService.createAlert('Destination added successfully', 1);
    this.dialogRef.close();
  }


}
