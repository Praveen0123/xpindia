import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-clinical-note',
  templateUrl: './special-clinical-note.component.html',
  styleUrls: ['./special-clinical-note.component.scss']
})
export class SpecialClinicalNoteComponent implements OnInit {

  constructor(public router:Router,public dialogRef: MatDialogRef<SpecialClinicalNoteComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  dates = new Date(new Date().setHours(0,0,0,0));

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
    this.router.navigateByUrl("/sapphire/patients/managevisits/diagnosis/clinicalNote");
  }

}
