import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import {AddClinicalNotesComponent} from "../clinical/add-clinical-notes/add-clinical-notes.component"
@Component({
  selector: 'app-clinical',
  templateUrl: './clinical.component.html',
  styleUrls: ['./clinical.component.scss']
})
export class ClinicalComponent implements OnInit {

  constructor(public fb:FormBuilder,public dialog: MatDialog) { }
  



  ngOnInit() {
    }



public openclinicalDialog(id) {
  let dialogRef = this.dialog.open(AddClinicalNotesComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
    