import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../../../../shared/services/alert.service';




@Component({
  selector: 'app-add-clinical-notes',
  templateUrl: './add-clinical-notes.component.html',
  styleUrls: ['./add-clinical-notes.component.scss']
})
export class AddClinicalNotesComponent implements OnInit {

  clinicalForm:FormGroup;

  constructor(public alertService:AlertService, public fb:FormBuilder, public dialogRef: MatDialogRef<AddClinicalNotesComponent>) {
    this.createclinicalForm();
  }
  get note() { return this.clinicalForm.get('note'); }


  createclinicalForm() {
    this.clinicalForm = this.fb.group({
      note : new FormControl('',[Validators.required,Validators.minLength(1)]),
    })
  }
  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  savesNote() {
    this.alertService.createAlert("Note recorded successfully",1);
    this.dialogRef.close();
  }



}

