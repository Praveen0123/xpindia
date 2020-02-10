import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-documents-of-vehicle',
  templateUrl: './documents-of-vehicle.component.html',
  styleUrls: ['./documents-of-vehicle.component.scss']
})
export class DocumentsOfVehicleComponent implements OnInit {

  tableList:any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialogRef: MatDialogRef<DocumentsOfVehicleComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  ngOnInit() {
    this.tableList = [
      {docuName:"RC" , docuType:"pdf"},
      {docuName:"Pollution Certificate" , docuType:"pdf"},
      {docuName:"Insurance" , docuType:"pdf"}
    ]
  }

  close(): void {
    this.dialogRef.close();
  }

  closeDocument() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  saveAttorney() {
    
  }

  deleteVisit(){
    //this.alertService.createAlert('Successfully deleted.', 1);
    }
}
