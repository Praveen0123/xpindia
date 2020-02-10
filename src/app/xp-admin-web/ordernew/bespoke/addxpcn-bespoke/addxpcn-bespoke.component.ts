
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addxpcn-bespoke',
  templateUrl: './addxpcn-bespoke.component.html',
  styleUrls: ['./addxpcn-bespoke.component.scss']
})
export class AddxpcnBespokeComponent implements OnInit {


  tableList:any;
  constructor(public alertService:AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddxpcnBespokeComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
   
   }

  ngOnInit() {
    this.tableList = [
      {package:'5',gateways:'Delhi-1',pickup:"Delhi" ,deliverylocation:'Pune', Transactionref:'1021548785',paymentmode:"Cash",status:'Completed'},
      {package:'7',gateways:'Mumbai-1',pickup:"Delhi" , deliverylocation:'Mumbai',Transactionref:'8454751025',paymentmode:"Cheque",status:'Pending'},
      {package:'9',gateways:'Shimla-1',pickup:"Delhi" , deliverylocation:'Shimla',Transactionref:'8454751025',paymentmode:"Cheque",status:'Pending'},
     
    ]
  }
  close(): void {
    this.dialogRef.close();
  }


}







