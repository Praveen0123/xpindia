import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AddScheduledNotesComponent } from '../scheduled/add-scheduled-notes/add-scheduled-notes.component';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss']
})
export class ScheduledComponent implements OnInit {
  ScheduleForm:FormGroup;


  constructor(public fb:FormBuilder,public dialog: MatDialog) { 
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
  public openscheduledDialog(id) {
    let dialogRef = this.dialog.open(AddScheduledNotesComponent, {
      data: id,
      height: 'auto',
      width: '600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}