import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<AddStateComponent>) { }



  close():void{
    this.dialogRef.close()
  }
  savecontract(){
    this.dialogRef.close()
  }
  

  ngOnInit() {
  }

}
