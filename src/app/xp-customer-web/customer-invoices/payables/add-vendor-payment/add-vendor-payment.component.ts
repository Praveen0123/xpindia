import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vendor-payment',
  templateUrl: './add-vendor-payment.component.html',
  styleUrls: ['./add-vendor-payment.component.scss']
})
export class AddVendorPaymentComponent implements OnInit {
  addUserForm:FormGroup;
  constructor( public alertService:AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddVendorPaymentComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
    this.createUserForm();
  }


  get Vendor() { return this.addUserForm.get('Vendor'); }
  
  get amount() { return this.addUserForm.get('amount'); }
  
  get duetDate() { return this.addUserForm.get('duetDate'); }

  get invoicenumber() { return this.addUserForm.get('invoicenumber'); }
  
  get invoice() { return this.addUserForm.get('invoice'); }
  
  get remarks() { return this.addUserForm.get('remarks'); }
  
 


  createUserForm() {
    this.addUserForm = this.fb.group({
      Vendor: new FormControl('',[Validators.required, ]),
      amount: new FormControl('',),
      duetDate: new FormControl('',),
      invoicenumber: new FormControl('',),
      invoice: new FormControl('',),
      remarks: new FormControl('',),
    })
  }


  saveUser() {
    console.log(this.addUserForm.value.userType);
    this.alertService.createAlert('Vendor added successfully', 1);
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close()
  }
  ngOnInit() {
  }


 

}
