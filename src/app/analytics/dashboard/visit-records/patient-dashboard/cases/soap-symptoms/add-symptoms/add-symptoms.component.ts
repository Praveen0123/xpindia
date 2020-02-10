import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-symptoms',
  templateUrl: './add-symptoms.component.html',
  styleUrls: ['./add-symptoms.component.scss']
})
export class AddSymptomsComponent implements OnInit {

  addSymptomForm:any;

  constructor(public alertService:AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddSymptomsComponent>,@Inject(MAT_DIALOG_DATA) public symptom: any) {
    this.createSymptomsForm();
   }

  ngOnInit() {
  }

  get painType() { return this.addSymptomForm.get('painType'); }

  get location() { return this.addSymptomForm.get('location'); }

  get quality() { return this.addSymptomForm.get('quality'); }

  get severity() { return this.addSymptomForm.get('severity'); }

  get onset() { return this.addSymptomForm.get('onset'); }

  get context() { return this.addSymptomForm.get('context'); }

  get duration() { return this.addSymptomForm.get('duration'); }

  get modifyingFactors() { return this.addSymptomForm.get('modifyingFactors'); }

  get associatedSymptoms() { return this.addSymptomForm.get('associatedSymptoms'); }

  createSymptomsForm() {
    this.addSymptomForm = this.fb.group({
      painType : new FormControl('',[Validators.required,Validators.maxLength(300),this.noWhiteSpaceValidator]),
      location : new FormControl('',[Validators.required]),
      quality : new FormControl('',[Validators.required]),
      severity : new FormControl('',[Validators.required]),
      onset : new FormControl(''),
      context : new FormControl(''),
      duration : new FormControl(''),
      modifyingFactors : new FormControl(''),
      associatedSymptoms : new FormControl(''),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveSymptom() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
