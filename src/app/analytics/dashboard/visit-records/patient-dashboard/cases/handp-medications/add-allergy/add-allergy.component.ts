import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.scss']
})
export class AddAllergyComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  addAllergyForm: FormGroup;
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public fb:FormBuilder,public alertService:AlertService,public dialogRef: MatDialogRef<AddAllergyComponent>,@Inject(MAT_DIALOG_DATA) public allergy: any) {
    this.createAllergyForm();
   }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  get allergyType() {return this.addAllergyForm.get('allergyType'); }
  
  get severity() {return this.addAllergyForm.get('severity'); }
  
  get status() {return this.addAllergyForm.get('status'); }

  get notes() {return this.addAllergyForm.get('notes'); }

  createAllergyForm() {
    this.addAllergyForm = this.fb.group({
      allergyType : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      severity : new FormControl('',[Validators.required]),
      status : new FormControl('',[Validators.required]),
      notes : new FormControl('',[Validators.maxLength(250)]),
    })
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  saveAllergy() {
    this.alertService.createAlert('Allergy added successfully', 1);
    this.dialogRef.close();
  }

}
