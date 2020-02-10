
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
// import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-contracts',
  templateUrl: './add-contracts.component.html',
  styleUrls: ['./add-contracts.component.scss']
})
export class AddContractsComponent implements OnInit {

  addCustomerForm: FormGroup;
  capacityOfVehicle = "";

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<AddContractsComponent>, @Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {
    this.createCustomerForm();
  }

  ngOnInit() {

  }

  // get payload() { return this.addCustomerForm.get('payload'); }

  get axle() { return this.addCustomerForm.get('axle'); }

  get vehicleType() { return this.addCustomerForm.get('vehicleType'); }

  get startdate() { return this.addCustomerForm.get('startdate'); }

  get addEnd() { return this.addCustomerForm.get('addEnd'); }

  get lop() { return this.addCustomerForm.get('lop'); }

  // get address() { return this.addCustomerForm.get('address'); }

  // get address2() { return this.addCustomerForm.get('address2'); }

  close(): void {
    this.dialogRef.close();
  }

  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      vehicleType: new FormControl(''),
      axle: new FormControl(''),
      // payload:new FormControl('',),
      startdate: new FormControl(''),
      addEnd: new FormControl(''),
      lop: new FormControl(''),
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
    this.alertService.createAlert('Contract added successfully', 1);
    this.dialogRef.close();
  }


}












