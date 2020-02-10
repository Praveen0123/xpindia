import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {AlertService} from '../../../shared/services/alert.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-driver-dialog',
  templateUrl: './add-driver-dialog.component.html',
  styleUrls: ['./add-driver-dialog.component.scss']
})
export class AddDriverDialogComponent implements OnInit {
  adddriverForm:FormGroup;
  constructor( public fb:FormBuilder,public alertService:AlertService,public dialogRef:MatDialogRef<AddDriverDialogComponent>,@Inject(MAT_DIALOG_DATA) public driver:any) {
    this.addDriverForm()
   }


   get driverName() {return this.adddriverForm.get('driverName');}
   get Phone() {return this.adddriverForm.get('Phone');}

   get dlNumber() {return this.adddriverForm.get('dlNumber');}
   get dlClass(){return this.adddriverForm.get('dlClass');}
   get address(){return this.adddriverForm.get('address');}
 
   get city() {return this.adddriverForm.get('city');}
   get state() {return this.adddriverForm.get('state');}
  //  get actualdate(){return this.adddriverForm.get('actualdate');}


   
   addDriverForm(){
    this.adddriverForm =this.fb.group({
      driverName:new FormControl('',[Validators.required]),
      Phone:new FormControl('',[Validators.required]),
      dlNumber:new FormControl('',[Validators.required]),
      dlClass:new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required, ]),
      city: new FormControl('',[Validators.required, ]),
      state: new FormControl('',[Validators.required, ]),
    
    
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
  savedriver() {
    this.alertService.createAlert('Driver added successfully.', 1);
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}



