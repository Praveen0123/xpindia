
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrls: ['./add-payments.component.scss']
})
export class AddPaymentsComponent implements OnInit {
  tableList:any;
  vehicleForm: FormGroup;
  status = [{id:1 , value:"Cash"} , {id:2 , value:"DD"},{id:3, value:'Cheque'}];
  status2 = [{id:1 , value:"Completed"} , {id:2 , value:"Pending"},{id:3, value:'Failed'}];

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this vehicle?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public fb:FormBuilder,public alertService:AlertService,public dialogRef: MatDialogRef<AddPaymentsComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
    this.createVehicleForm();
   }

  ngOnInit() {
    this.tableList = [
      {paidamount:"3000" ,paidDate:'06-01-2020', Transactionref:'1021548785',paymentmode:"Cash",status:'Completed'},
      {paidamount:"2000" , paidDate:'	05-01-2020',Transactionref:'8454751025',paymentmode:"Cheque",status:'Pending'},
     
    ]
  }

  get Transaction() { return this.vehicleForm.get('Transaction'); }

  get Amount() { return this.vehicleForm.get('Amount'); }

  get PaymentDate(){return this.vehicleForm.get("PaymentDate"); }

  // get description() { return this.vehicleForm.get('description'); }

  get paymentmode() { return this.vehicleForm.get('paymentmode'); }

 

 


  createVehicleForm() {
    this.vehicleForm = this.fb.group({
      Transaction: new FormControl('',[Validators.required, ]),
      Amount: new FormControl('',),
      PaymentDate: new FormControl('',),
      // description: new FormControl('',),
      paymentmode: new FormControl('',),
    })
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  close(): void {
    this.dialogRef.close();
  }

  saveVehicle() {
    this.alertService.createAlert("Payment added successfully",1);
    this.dialogRef.close();
  }

  deleteVehicle() {
    this.alertService.createAlert("Vehicle deleted successfully",1);
  }

  closeDialog() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  saveAttorney() {
    
  }

  deleteVisit(){
    //this.alertService.createAlert('Successfully deleted.', 1);
    }

 

 

}
