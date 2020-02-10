
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-billing-notes',
  templateUrl: './add-billing-notes.component.html',
  styleUrls: ['./add-billing-notes.component.scss']
})
export class AddBillingNotesComponent implements OnInit {

  billingForm:FormGroup;

  constructor(public alertService:AlertService, public fb:FormBuilder, public dialogRef: MatDialogRef<AddBillingNotesComponent>) {
    this.createbillingForm();

  }

  get Note() { return this.billingForm.get('Note'); }


  createbillingForm() {
    this.billingForm = this.fb.group({
      Note : new FormControl('',[Validators.required,Validators.minLength(1)]),
    })
  }
  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveNote() {
    this.alertService.createAlert("Note recorded successfully",1);
    this.dialogRef.close();
  }


}