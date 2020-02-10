import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-lane',
  templateUrl: './add-lane.component.html',
  styleUrls: ['./add-lane.component.scss']
})
export class AddLaneComponent implements OnInit {
  addCustomerForm:FormGroup;
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddLaneComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {
    this.createCustomerForm();
   }

  ngOnInit() {
  }

  omit_special_char(event) {
    var k;
    k=event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k > 47 && k < 58))
  }

  omit_all_char(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58) || k == 8 || k == 32)
  }
  
  get laneName() { return this.addCustomerForm.get('laneName'); }
  
  get originDistrict() { return this.addCustomerForm.get('originDistrict'); }
  
  // get destination() { return this.addCustomerForm.get('destination'); }

  get destinationDistrict() { return this.addCustomerForm.get('destinationDistrict'); }

  // get baseline() { return this.addCustomerForm.get('baseline'); }

  get countryname() { return this.addCustomerForm.get('countryname'); }

  // get fclcapacity() { return this.addCustomerForm.get('fclcapacity'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      laneName:new FormControl('',[Validators.required,]),
      originDistrict:new FormControl('',[Validators.required]),
      // destination:new FormControl('',[Validators.required]),
      destinationDistrict:new FormControl('',[Validators.required]),
      // baseline:new FormControl('',[Validators.required,]),
      countryname:new FormControl('',[Validators.required,]),
      // fclcapacity:new FormControl('',[Validators.required,]),
    })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveCustomer() {
    this.alertService.createAlert('Lane added successfully', 1);
    this.dialogRef.close();
  }

}






