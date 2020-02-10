import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-zones',
  templateUrl: './add-zones.component.html',
  styleUrls: ['./add-zones.component.scss']
})
export class AddZonesComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<AddZonesComponent>) { }



  close():void{
    this.dialogRef.close()
  }

  savecontract(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
