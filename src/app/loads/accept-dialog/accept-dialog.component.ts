import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {AlertService} from '../../shared/services/alert.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.scss']
})
export class AcceptDialogComponent implements OnInit {
  
  addBasicDetails:FormGroup;


  constructor(public alertService:AlertService,public fb:FormBuilder ,public dialogRef:MatDialogRef<AcceptDialogComponent>,@Inject(MAT_DIALOG_DATA) public lead:any) {
    this.addloadDetailsForm();
    
   }

  get vehicletype() {return this.addBasicDetails.get('vehicletype');}
  get origin(){return this.addBasicDetails.get('origin');}
  get destination(){return this.addBasicDetails.get('destination');}

  get vehicle() {return this.addBasicDetails.get('vehicle');}
  get driver() {return this.addBasicDetails.get('driver');}
  get actualdate(){return this.addBasicDetails.get('actualdate');}


  addloadDetailsForm(){
    this.addBasicDetails =this.fb.group({
      vehicletype:new FormControl('',[Validators.required]),
      origin:new FormControl('',[Validators.required]),
      destination:new FormControl('',[Validators.required]),
      vehicle:new FormControl('',[Validators.required]),
      driver: new FormControl('',[Validators.required, ]),
      actualdate: new FormControl('',[Validators.required, ]),
    
    })
}


  ngOnInit() {
  }
  close(){
    this.dialogRef.close()
  }
  saveaccept() {
    this.alertService.createAlert('Load added successfully.', 1);
    this.dialogRef.close();
  }

}


