import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {AlertService} from '../../shared/services/alert.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-dialog',
  templateUrl: './load-dialog.component.html',
  styleUrls: ['./load-dialog.component.scss']
})
export class LoadDialogComponent implements OnInit {
  addvehicleForm:FormGroup;

  constructor(public alertService:AlertService,public fb:FormBuilder ,public dialogRef:MatDialogRef<LoadDialogComponent>,@Inject(MAT_DIALOG_DATA) public load:any) {
    this.addleadDetailsForm();
    
   }
   get vehicle() {return this.addvehicleForm.get('vehicle');}
   get lane(){return this.addvehicleForm.get('lane');}
   get origin(){return this.addvehicleForm.get('origin');}
 
   get destination() {return this.addvehicleForm.get('destination');}
   get mt() {return this.addvehicleForm.get('mt');}
   get startdate(){return this.addvehicleForm.get('startdate');}
   
   get finishdate() {return this.addvehicleForm.get('finishdate');}
   get status() {return this.addvehicleForm.get('status');}

   addleadDetailsForm(){
    this.addvehicleForm =this.fb.group({
      vehicle:new FormControl('',[Validators.required]),
      lane:new FormControl('',[Validators.required]),
      origin:new FormControl('',[Validators.required]),
      destination:new FormControl('',[Validators.required]),
      mt: new FormControl('',[Validators.required, ]),
      startdate: new FormControl('',[Validators.required, ]),
      finishdate: new FormControl('',[Validators.required, ]),
      status: new FormControl('',[Validators.required, ]),
    
    })
}
  ngOnInit() {
  }
  close(){
    this.dialogRef.close()
  }

  saveload() {
    this.alertService.createAlert('Load added successfully.', 1);
    this.dialogRef.close();
  }


}
