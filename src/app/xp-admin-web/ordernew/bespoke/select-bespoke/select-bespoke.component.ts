import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-bespoke',
  templateUrl: './select-bespoke.component.html',
  styleUrls: ['./select-bespoke.component.scss']
})
export class SelectBespokeComponent implements OnInit {

  checkbox:boolean=true;
  checkboxfalse:boolean=false;

  constructor(public alertService:AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<SelectBespokeComponent>) {
   
  }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
  save() {
    this.alertService.createAlert('Filter applied successfully', 1);
    this.dialogRef.close();
  }


}






