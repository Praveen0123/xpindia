import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {AlertService} from '../../../../shared/services/alert.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.scss']
})
export class AddRoutesComponent implements OnInit {
  addBasicDetails:FormGroup
  addDemographicDetails:FormGroup;

  constructor(public alertService:AlertService,public fb:FormBuilder ,public dialogRef:MatDialogRef<AddRoutesComponent>,@Inject(MAT_DIALOG_DATA) public routes:any) {
    this.addleadDetailsForm();
    this.addleadDemographicForm();
   }

  ngOnInit() {
  }


  
  get Origin() {return this.addBasicDetails.get('Origin'); }
  get Destination(){return this.addBasicDetails.get('Destination');}
  get District(){return this.addBasicDetails.get('District');}
  get Vendor() {return this.addBasicDetails.get('Vendor'); }
  get vehicleType() {return this.addBasicDetails.get('vehicleType');}
  get payload() {return this.addBasicDetails.get('payload');}
  get cbm(){return this.addBasicDetails.get('cbm');}
  get assets(){return this.addBasicDetails.get('assets');}

  get STD(){return this.addDemographicDetails.get('STD');}
  get ETA() {return this.addDemographicDetails.get('ETA');}
  get station() {return this.addDemographicDetails.get('station');}
  get VIAETA(){return this.addDemographicDetails.get('VIAETA');}
  get VIASTD(){return this.addDemographicDetails.get('VIASTD');}
  get ATD(){return this.addDemographicDetails.get('ATD');}
  get ATA() {return this.addDemographicDetails.get('ATA');}
  get Status() {return this.addDemographicDetails.get('Status');}


  
  addleadDetailsForm(){
    this.addBasicDetails =this.fb.group({
      Origin:new FormControl('',[Validators.required]),
      Destination:new FormControl('',[Validators.required]),
      District:new FormControl('',[Validators.required]),
      Vendor:new FormControl('',[Validators.required]),
      vehicleType: new FormControl('',[Validators.required, ]),
      payload: new FormControl('',[Validators.required, ]),
      cbm: new FormControl('',[Validators.required,]),
      assets: new FormControl('',[Validators.required,  ]),
     
    

    })
}

addleadDemographicForm(){
  this.addDemographicDetails = this.fb.group({
    station:new FormControl('',[Validators.required]),
    VIAETA:new FormControl('',[Validators.required]),
    VIASTD:new FormControl('',[Validators.required]),
    ATD:new FormControl('',[Validators.required]),
    ATA: new FormControl('',[Validators.required, ]),
    Status:new FormControl('',[Validators.required,]),
    STD: new FormControl('',[Validators.required]),
    ETA: new FormControl('',[Validators.required]),
   
  })
}

noWhiteSpaceValidator(control:FormControl) {
  let isWhiteSpace = (control.value || '').trim().length === 0;
  let isValid=!isWhiteSpace;
  return isValid ? null : {'whitespace':true};
}
savelead() {
  this.alertService.createAlert('Routes added successfully.', 1);
  this.dialogRef.close();
}

close():void{
  this.dialogRef.close()
}
}
