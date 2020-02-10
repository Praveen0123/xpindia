import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddCountryComponent>) { }

  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }
 
  ngOnInit() {
  }

}
