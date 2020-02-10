import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-rates',
  templateUrl: './add-rates.component.html',
  styleUrls: ['./add-rates.component.scss']
})
export class AddRatesComponent implements OnInit {
  tableList:any;
  vehicleForm: FormGroup;
  status = [{id:1 , value:"Cash"} , {id:2 , value:"DD"},{id:3, value:'Cheque'}];
  status2 = [{id:1 , value:"Completed"} , {id:2 , value:"Pending"},{id:3, value:'Failed'}];

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this ?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(private alertService: AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddRatesComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
    this.createVehicleForm();
   }

  ngOnInit() {
    this.tableList = [
      {paidamount:"30 feet" ,paidDate:'20,000', Transactionref:'25,000',paymentmode:"10,000",status:'Completed'},
      {paidamount:"50 feet" , paidDate:'30,000',Transactionref:'35,000',paymentmode:"20,000",status:'Pending'},
     
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
    this.alertService.createAlert("Rates added successfully",1);
    this.dialogRef.close();
  }

  // deleteVehicle() {
  //   this.alertService.createAlert("Vehicle deleted successfully",1);
  // }

  closeDialog() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

 

 

}



