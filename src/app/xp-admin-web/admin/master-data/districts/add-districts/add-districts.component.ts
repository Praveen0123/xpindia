import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-districts',
  templateUrl: './add-districts.component.html',
  styleUrls: ['./add-districts.component.scss']
})
export class AddDistrictsComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<AddDistrictsComponent>) { }

  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }
 

  ngOnInit() {
  }

}
