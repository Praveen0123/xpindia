import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.scss']
})
export class AddGatewayComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddGatewayComponent>) { }

  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }
  ngOnInit() {
  }

}
