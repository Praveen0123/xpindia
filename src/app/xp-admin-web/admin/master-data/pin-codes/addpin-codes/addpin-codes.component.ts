import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addpin-codes',
  templateUrl: './addpin-codes.component.html',
  styleUrls: ['./addpin-codes.component.scss']
})
export class AddpinCodesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddpinCodesComponent>) { }



  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
