import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-bbcontract',
  templateUrl: './add-bbcontract.component.html',
  styleUrls: ['./add-bbcontract.component.scss']
})
export class AddBBContractComponent implements OnInit {
  addUserForm: FormGroup;
  destinationPlus = [0];
  pickupPlus = [0];
  orderInfoForm: FormGroup;
  OrderTypeToggle: any; 
  constructor(public fb: FormBuilder, public alertService: AlertService, public dialogRef: MatDialogRef<AddBBContractComponent>, @Inject(MAT_DIALOG_DATA) public contracts: any) {
    this.addcontractForm();
    this.orderInfoForm = this.fb.group({
      OrderType: new FormControl('0')
    });
  }

  ngOnInit() {
  }

  get Origin() { return this.addUserForm.get('Origin'); }
  get Destination() { return this.addUserForm.get('Destination'); }
  get Axles() { return this.addUserForm.get('Axles'); }
  get vehicletype() { return this.addUserForm.get('vehicletype'); }
  get maxpayload() { return this.addUserForm.get('maxpayload'); }
  get maxcbm() { return this.addUserForm.get('maxcbm'); }
  get rate() { return this.addUserForm.get('rate'); }
  get tat() { return this.addUserForm.get('tat'); }


  addcontractForm() {
    this.addUserForm = this.fb.group({
      Origin: new FormControl('', [Validators.required,]),
      Destination: new FormControl(''),
      Axles: new FormControl(''),
      vehicletype: new FormControl(''),
      maxpayload: new FormControl(''),
      maxcbm: new FormControl(''),
      rate: new FormControl(''),
      tat: new FormControl(''),

    })
  }
  savecontract() {
    this.alertService.createAlert('Contract added successfully.', 1);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close()
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

  orderType(print) {
    this.OrderTypeToggle = this.orderInfoForm.value['OrderType']
    console.log(this.orderInfoForm.value, 'value');
    console.log(print);
  }


}
