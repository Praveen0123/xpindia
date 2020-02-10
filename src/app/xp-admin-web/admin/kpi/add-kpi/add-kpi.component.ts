import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-kpi',
  templateUrl: './add-kpi.component.html',
  styleUrls: ['./add-kpi.component.scss']
})
export class AddKpiComponent implements OnInit {
  addKPIForm:FormGroup;
  'optionValue';
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddKpiComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
  }
  
  ngOnInit() {
    
  }

  omit_special_char(event) {
    var k;
    k=event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32)
  }

  omit_all_char(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58) || k == 8 || k == 32)
  }
  
  get KPIName() { return this.addKPIForm.get('KPIName'); }
  get group() { return this.addKPIForm.get('group'); }
  get module() { return this.addKPIForm.get('module'); }
  get type() { return this.addKPIForm.get('type'); }
  get target() { return this.addKPIForm.get('target'); }
  get minlimit() { return this.addKPIForm.get('minlimit'); }
  get maxlimit() { return this.addKPIForm.get('maxlimit'); }

  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addKPIForm = this.fb.group({
      KPIName:new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator]),
      group:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      module:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      type:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      target:new FormControl('',[Validators.required,Validators.maxLength(30),this.noWhiteSpaceValidator]),
    })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveCustomer() {
    this.alertService.createAlert('KPI added successfully', 1);
    this.dialogRef.close();
  }

}
