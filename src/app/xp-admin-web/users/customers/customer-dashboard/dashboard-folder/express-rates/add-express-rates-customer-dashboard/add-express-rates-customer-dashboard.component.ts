import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-express-rates-customer-dashboard',
  templateUrl: './add-express-rates-customer-dashboard.component.html',
  styleUrls: ['./add-express-rates-customer-dashboard.component.scss']
})
export class AddExpressRatesCustomerDashboardComponent implements OnInit {

  addCustomerForm: FormGroup;
  capacityOfVehicle = "";

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<AddExpressRatesCustomerDashboardComponent>, @Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {
    this.createCustomerForm();
  }

  ngOnInit() {

  }


  get axle() { return this.addCustomerForm.get('axle'); }

  get vehicleType() { return this.addCustomerForm.get('vehicleType'); }

  get VolumeConversion() { return this.addCustomerForm.get('VolumeConversion'); }

  get Fov() { return this.addCustomerForm.get('Fov'); }

  get FuelCharge() { return this.addCustomerForm.get('FuelCharge'); }

  get GNCCharge() { return this.addCustomerForm.get('GNCCharge'); }

  get HandlingCharges() { return this.addCustomerForm.get('HandlingCharges'); }

   get OthersCharges() { return this.addCustomerForm.get('OthersCharges'); }

  close(): void {
    this.dialogRef.close();
  }

  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      vehicleType: new FormControl(''),
      axle: new FormControl(''),
      VolumeConversion: new FormControl(''),
      Fov: new FormControl(''),
      FuelCharge: new FormControl(''),
      GNCCharge: new FormControl(''),
      HandlingCharges: new FormControl(''),
      OthersCharges: new FormControl(''),
    })
  }

  // noWhiteSpaceValidator(control:FormControl) {
  //   let isWhiteSpace = (control.value || '').trim().length === 0;
  //   let isValid=!isWhiteSpace;
  //   return isValid ? null : {'whitespace':true};
  // }

  saveCustomer() {
    this.alertService.createAlert('Express Rates added successfully', 1);
    this.dialogRef.close();
  }
}
