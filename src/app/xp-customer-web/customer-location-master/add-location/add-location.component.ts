import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  addZoneForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddLocationComponent>,@Inject(MAT_DIALOG_DATA) public lookupOption: any) {
    this.createLookupForm();
   }

  ngOnInit() {
  }

  get country() {return this.addZoneForm.get('country'); }

  get address() {return this.addZoneForm.get('address'); }

  get zone() {return this.addZoneForm.get('zone'); }

  get district() {return this.addZoneForm.get('district'); }

  get location() {return this.addZoneForm.get('location'); }

  get state() {return this.addZoneForm.get('state'); }

  get postalCode() {return this.addZoneForm.get('postalCode'); }

  createLookupForm() {
    this.addZoneForm = this.fb.group({
      state : new FormControl('',[Validators.required]),
      // status : new FormControl('',[Validators.required]),
      country : new FormControl('',[Validators.required]),
      zone : new FormControl('',[Validators.required]),
      district : new FormControl('',[Validators.required]),
      location : new FormControl('',[Validators.required]),
      postalCode : new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required,Validators.maxLength(300),this.noWhiteSpaceValidator]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    this.alertService.createAlert('Location added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }


}
