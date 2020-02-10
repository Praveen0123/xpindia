import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addxpcnmodal',
  templateUrl: './addxpcnmodal.component.html',
  styleUrls: ['./addxpcnmodal.component.scss']
})
export class AddxpcnmodalComponent implements OnInit {
  tableList:any;
  constructor(public alertService:AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddxpcnmodalComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
   
   }

  ngOnInit() {
    this.tableList = [
      {chargedWeight:'201Kg',actualWeight:'200Kg',packages:'5',pickup:"Delhi" ,deliverylocation:'Pune', Transactionref:'1021548785',paymentmode:"Cash",status:'Completed'},
      {chargedWeight:'252Kg',actualWeight:'250Kg',packages:'6',pickup:"Hyderabad" , deliverylocation:'Mumbai',Transactionref:'8454751025',paymentmode:"Cheque",status:'Pending'},
     
    ]
  }
  close(): void {
    this.dialogRef.close();
  }


}
