import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss']
})
export class AddZoneComponent implements OnInit {

 
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddZoneComponent>, private alertService: AlertService) { 
   
  }

  ngOnInit() {
  }
  // saveLane() {
  //   this.alertService.createAlert('Zones added successfully', 1);
   
  // }

  close(): void {
    this.dialogRef.close();
  }
}
