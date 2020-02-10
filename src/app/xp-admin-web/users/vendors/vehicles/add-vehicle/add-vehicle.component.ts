import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  allFields = [1];
  constructor(public dialogRef: MatDialogRef<AddVehicleComponent>, @Inject(MAT_DIALOG_DATA) public type: any) {

  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  saveCustomer(){
    this.dialogRef.close();
  }

}
