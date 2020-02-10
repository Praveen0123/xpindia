import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddRegionComponent>) { }



  close():void{
    this.dialogRef.close()
  }

  savecontract(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }


}



