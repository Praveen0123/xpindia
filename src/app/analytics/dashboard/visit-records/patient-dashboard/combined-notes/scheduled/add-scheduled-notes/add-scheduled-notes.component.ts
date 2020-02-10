import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-scheduled-notes',
  templateUrl: './add-scheduled-notes.component.html',
  styleUrls: ['./add-scheduled-notes.component.scss']
})
export class AddScheduledNotesComponent implements OnInit {
  ScheduleForm:FormGroup;

  constructor(public alertService:AlertService, public fb:FormBuilder, public dialogRef: MatDialogRef<AddScheduledNotesComponent>) {
    this.createscheduleForm();
  }
  get notes() { return this.ScheduleForm.get('notes'); }


  createscheduleForm() {
    this.ScheduleForm = this.fb.group({
      notes : new FormControl('',[Validators.required,Validators.minLength(1)]),
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