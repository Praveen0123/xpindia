import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddLocationComponent>) { }
  
  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
