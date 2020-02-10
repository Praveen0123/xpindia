import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {AlertService} from '../../../shared/services/alert.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-truck-dialog',
  templateUrl: './add-truck-dialog.component.html',
  styleUrls: ['./add-truck-dialog.component.scss']
})
export class AddTruckDialogComponent implements OnInit {
  addtruckForm:FormGroup;
  constructor( public fb:FormBuilder,public alertService:AlertService,public dialogRef:MatDialogRef<AddTruckDialogComponent>,@Inject(MAT_DIALOG_DATA) public truck:any) {
    this.addtrucksForm()
   }

   get truckid() {return this.addtruckForm.get('truckid');}
   get year() {return this.addtruckForm.get('year');}

   get make() {return this.addtruckForm.get('make');}
   get model(){return this.addtruckForm.get('model');}
   get registration(){return this.addtruckForm.get('registration');}
 
   get chassis() {return this.addtruckForm.get('chassis');}
   get engine() {return this.addtruckForm.get('engine');}
   get size() {return this.addtruckForm.get('size');}
  
  ngOnInit() {
  }

  addtrucksForm(){
    this.addtruckForm =this.fb.group({
      truckid:new FormControl('',[Validators.required]),
      year:new FormControl('',[Validators.required]),
      make:new FormControl('',[Validators.required]),
      model:new FormControl('',[Validators.required]),
      registration: new FormControl('',[Validators.required, ]),
      chassis: new FormControl('',[Validators.required, ]),
      engine: new FormControl('',[Validators.required, ]),
      size: new FormControl('',[Validators.required, ]),
    
    })
}
onlyNumber(event){
  var x;
  x=event.charCode;
  return (x>47 && x<58);

}
 
  close(){
    this.dialogRef.close()
  }
  savetruck() {
    this.alertService.createAlert('Truck Information added successfully.', 1);
    this.dialogRef.close();
  }


}