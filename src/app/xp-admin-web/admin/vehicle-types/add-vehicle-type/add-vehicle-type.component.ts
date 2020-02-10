import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-vehicle-type',
  templateUrl: './add-vehicle-type.component.html',
  styleUrls: ['./add-vehicle-type.component.scss']
})
export class AddVehicleTypeComponent implements OnInit {
  addCustomerForm:FormGroup;
  capacityOfVehicle = "";
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddVehicleTypeComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
  }
  
  ngOnInit() {
    
  }

  get payload() { return this.addCustomerForm.get('payload'); }
  
  get axle() { return this.addCustomerForm.get('axle'); }
  
  get vehicleType() { return this.addCustomerForm.get('vehicleType'); }

  get cbm() { return this.addCustomerForm.get('cbm'); }

  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      vehicleType:new FormControl('',),
      axle:new FormControl('',),
      payload:new FormControl('',),
      cbm:new FormControl('',),
    })
  }
  
  // noWhiteSpaceValidator(control:FormControl) {
  //   let isWhiteSpace = (control.value || '').trim().length === 0;
  //   let isValid=!isWhiteSpace;
  //   return isValid ? null : {'whitespace':true};
  // }
  
  saveCustomer() {
    this.alertService.createAlert('Vehicle type added successfully', 1);
    this.dialogRef.close();
  }

  

}




