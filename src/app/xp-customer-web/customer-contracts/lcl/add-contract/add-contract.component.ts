import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {
  addUserForm: FormGroup;
  pickupPlus = [0];
  constructor(public fb: FormBuilder, public alertService: AlertService, public dialogRef: MatDialogRef<AddContractComponent>, @Inject(MAT_DIALOG_DATA) public contracts: any) {
    this.addcontractForm();

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

  addpickupLocation() {
    const length = this.pickupPlus.length ;
    this.pickupPlus.push(length);
  }

  subpickupLocation(index) {
    console.log(this.pickupPlus, 'this.pickupPlus');
    this.pickupPlus.splice(index, 1);
    console.log(this.pickupPlus, 'this.pickupPlus');
  }


}
