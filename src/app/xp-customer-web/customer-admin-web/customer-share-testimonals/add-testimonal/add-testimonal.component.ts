import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-testimonal',
  templateUrl: './add-testimonal.component.html',
  styleUrls: ['./add-testimonal.component.scss']
})
export class AddTestimonalComponent implements OnInit {

  addCustomerForm:FormGroup;
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddTestimonalComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
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
  
  get customerName() { return this.addCustomerForm.get('customerName'); }

  // get customerlastName() { return this.addCustomerForm.get('customerlastName'); }
  
  get testimonial() { return this.addCustomerForm.get('testimonial'); }
  
  get phone() { return this.addCustomerForm.get('phone'); }
  
  get image() { return this.addCustomerForm.get('image'); }

  // get address() { return this.addCustomerForm.get('address'); }

  // get country() { return this.addCustomerForm.get('country'); }

  // get state() { return this.addCustomerForm.get('state'); }

  // get city() { return this.addCustomerForm.get('city'); }

  // get postalCode() { return this.addCustomerForm.get('postalCode'); }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      customerName:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      // customerlastName:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      testimonial:new FormControl('',[Validators.required,Validators.maxLength(700),this.noWhiteSpaceValidator]),
      phone:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      image:new FormControl('',[Validators.required]),
      // status:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      // address:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      // country:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      // state:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      // city:new FormControl('',[Validators.required,Validators.maxLength(30),this.noWhiteSpaceValidator]),
      // postalCode:new FormControl('',[Validators.required,Validators.maxLength(8),this.noWhiteSpaceValidator]),
    })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveCustomer() {
    this.alertService.createAlert('Testimonial added successfully', 1);
    this.dialogRef.close();
  }

}
