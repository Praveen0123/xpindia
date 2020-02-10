import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-dialog-in-main-screen',
  templateUrl: './user-dialog-in-main-screen.component.html',
  styleUrls: ['./user-dialog-in-main-screen.component.scss']
})
export class UserDialogInMainScreenComponent implements OnInit {

  myLabel:boolean = true;

  constructor(public dialogRef: MatDialogRef<UserDialogInMainScreenComponent>,@Inject(MAT_DIALOG_DATA) public unit: any,) { }

  close(): void {
    this.dialogRef.close();
  }

  saveUnits() {
   // this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
