import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-model-destination',
  templateUrl: './add-model-destination.component.html',
  styleUrls: ['./add-model-destination.component.scss']
})
export class AddMOdelDestinationComponent implements OnInit {

  addCustomerForm:FormGroup;
  capacityOfVehicle = "";
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddMOdelDestinationComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
  }
  
  ngOnInit() {
    
  }

  get payload() { return this.addCustomerForm.get('payload'); }
  
  get axle() { return this.addCustomerForm.get('axle'); }
  
  get vehicleType() { return this.addCustomerForm.get('vehicleType'); }

  get cbm() { return this.addCustomerForm.get('cbm'); }

  get userName() { return this.addCustomerForm.get('userName'); }
  
  get uniqueId() { return this.addCustomerForm.get('uniqueId'); }

  get address() { return this.addCustomerForm.get('address'); }

  // get address2() { return this.addCustomerForm.get('address2'); }

  get State() { return this.addCustomerForm.get('State'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      vehicleType:new FormControl('',),
      axle:new FormControl('',),
      payload:new FormControl('',),
      cbm:new FormControl('',),
      userName:new FormControl('',),
      uniqueId:new FormControl('',),
      address:new FormControl('',),
      // address2:new FormControl('',),
      State:new FormControl('',),
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












