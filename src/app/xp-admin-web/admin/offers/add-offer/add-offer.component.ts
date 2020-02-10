import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {


  addZoneForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddOfferComponent>,@Inject(MAT_DIALOG_DATA) public lookupOption: any) {
    this.createLookupForm();
   }

  ngOnInit() {
  }

  get origin() {return this.addZoneForm.get('origin'); }

  get destination() {return this.addZoneForm.get('destination'); }

  get offerType() {return this.addZoneForm.get('offerType'); }

  get validFrom() {return this.addZoneForm.get('validFrom'); }

  get validthru() {return this.addZoneForm.get('validthru'); }

  get serviceType() {return this.addZoneForm.get('serviceType'); }

  get vehicleType() {return this.addZoneForm.get('vehicleType'); }

  get image() {return this.addZoneForm.get('image'); }

  createLookupForm() {
    this.addZoneForm = this.fb.group({
      origin : new FormControl('',[Validators.required]),
      destination : new FormControl('',[Validators.required]),
      offerType : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      validFrom : new FormControl('',[Validators.required]),
      validthru : new FormControl('',[Validators.required]),
      serviceType : new FormControl('',[Validators.required]),
      vehicleType : new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    this.alertService.createAlert('Offer added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }


}




