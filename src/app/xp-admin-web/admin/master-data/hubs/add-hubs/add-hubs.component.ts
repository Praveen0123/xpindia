import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-hubs',
  templateUrl: './add-hubs.component.html',
  styleUrls: ['./add-hubs.component.scss']
})
export class AddHubsComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<AddHubsComponent>) { }

  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }
  ngOnInit() {
  }
  

  

}
