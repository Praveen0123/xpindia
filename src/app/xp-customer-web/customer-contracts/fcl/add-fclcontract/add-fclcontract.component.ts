import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-fclcontract',
  templateUrl: './add-fclcontract.component.html',
  styleUrls: ['./add-fclcontract.component.scss']
})
export class AddFCLContractComponent implements OnInit {
  addCustomerForm: FormGroup;

  destinationPlus = [0];
  pickupPlus = [0];
  vehiclePlus = [0];
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<AddFCLContractComponent>, @Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {
    this.createCustomerForm();
  }

  get NoofVehicles() { return this.addCustomerForm.get('NoofVehicles'); }

  get TypeofVehicle() { return this.addCustomerForm.get('TypeofVehicle'); }

  get payload() { return this.addCustomerForm.get('payload'); }

  get cbm() { return this.addCustomerForm.get('cbm'); }

  get tat() { return this.addCustomerForm.get('tat'); }

  get Rate() { return this.addCustomerForm.get('Rate'); }



  close(): void {
    this.dialogRef.close();
  }

  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      NoofVehicles: new FormControl(''),
      TypeofVehicle: new FormControl(''),
      payload: new FormControl(''),

      cbm: new FormControl(''),
      tat: new FormControl(''),
      Rate: new FormControl(''),
    });
  }
  ngOnInit() {
  }

  saveContract() {
    this.alertService.createAlert('Contract added successfully', 1);
    this.dialogRef.close();
  }

  addDestination() {
    const length = this.destinationPlus.length ;
    this.destinationPlus.push(length);
  }

  subDestination(index) {
    console.log(this.destinationPlus, 'this.destinationPlus');
    this.destinationPlus.splice(index, 1);
    console.log(this.destinationPlus, 'this.destinationPlus');
  }

  addpickupLocation() {
    const length = this.pickupPlus.length ;
    this.pickupPlus.push(length);
  }

  subpickupLocation(index) {
    console.log(this.pickupPlus, 'this.pickupPlus');
    this.pickupPlus.splice(index, 1);
    console.log(this.pickupPlus, 'this.pickupPlus');
  }

  addvhicle() {
    const length = this.vehiclePlus.length + 1;
    this.vehiclePlus.push(length)
  }

}
