import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-soap-medication',
  templateUrl: './add-soap-medication.component.html',
  styleUrls: ['./add-soap-medication.component.scss']
})
export class AddSoapMedicationComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  addMedicationForm: FormGroup
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public fb:FormBuilder,public alertService:AlertService,public dialogRef: MatDialogRef<AddSoapMedicationComponent>,@Inject(MAT_DIALOG_DATA) public medication: any) {
    this.createMedicatioForm();
   }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  get drugName() {return this.addMedicationForm.get('drugName'); }
  
  get PRN() {return this.addMedicationForm.get('PRN'); }
  
  get sigNote() {return this.addMedicationForm.get('sigNote'); }
  
  get sig() {return this.addMedicationForm.get('sig'); }
  
  get indication() {return this.addMedicationForm.get('indication'); }
  
  get prescribedDate() {return this.addMedicationForm.get('prescribedDate'); }
  
  get startedDate() {return this.addMedicationForm.get('startedDate'); }
  
  get stoppedDate() {return this.addMedicationForm.get('stoppedDate'); }
  
  get dispenseQuantity() {return this.addMedicationForm.get('dispenseQuantity'); }
  
  get dispensePackage() {return this.addMedicationForm.get('dispensePackage'); }

  get pharmacyNote() {return this.addMedicationForm.get('pharmacyNote'); }

  get notes() {return this.addMedicationForm.get('notes'); }


  createMedicatioForm() {
    this.addMedicationForm = this.fb.group({
      drugName : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      PRN : new FormControl(''),
      sigNote : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      sig : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      indication : new FormControl(''),
      prescribedDate : new FormControl('',[Validators.required]),
      startedDate : new FormControl('',[Validators.required]),
      stoppedDate : new FormControl('',[Validators.required]),
      dispenseQuantity : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      dispensePackage : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      pharmacyNote : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
      notes : new FormControl('',[Validators.required, Validators.maxLength(250), this.noWhiteSpaceValidator ]),
    })
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  saveMedication() {
    this.alertService.createAlert('Medication added successfully', 1);
    this.dialogRef.close();
  }

}
