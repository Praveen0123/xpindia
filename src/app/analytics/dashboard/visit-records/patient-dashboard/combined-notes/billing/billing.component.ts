import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AddBillingNotesComponent } from '../billing/add-billing-notes/add-billing-notes.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(public fb:FormBuilder,public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openbillingDialog(id) {
    let dialogRef = this.dialog.open(AddBillingNotesComponent, {
      data: id,
      height: 'auto',
      width: '600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
