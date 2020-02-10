
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  addCustomerForm:FormGroup;
  addBasicDetails: FormGroup;
  addActualDetails: FormGroup;
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddVendorComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createCustomerForm();
    this.addCampaignDetailForm();
    this.addActualexpectationForm();
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
  
  get email() { return this.addCustomerForm.get('email'); }
  
  get phone() { return this.addCustomerForm.get('phone'); }
  
  // get status() { return this.addCustomerForm.get('status'); }

  get address() { return this.addCustomerForm.get('address'); }

  get country() { return this.addCustomerForm.get('country'); }

  get state() { return this.addCustomerForm.get('state'); }

  get city() { return this.addCustomerForm.get('city'); }

  get postalCode() { return this.addCustomerForm.get('postalCode'); }





  
  get cmpName() { return this.addBasicDetails.get('cmpName'); }

  get cmptype() { return this.addBasicDetails.get('cmptype'); }

  get Product() { return this.addBasicDetails.get('Product'); }

  get Assigned() { return this.addBasicDetails.get('Assigned'); }

  get startdate() { return this.addBasicDetails.get('startdate'); }

  get addEnd() { return this.addBasicDetails.get('addEnd');}
  
  get selectStatus(){return this.addBasicDetails.get('selectStatus');}
  
  get gstnature(){return this.addBasicDetails.get('gstnature');}

  get BillPrinting(){return this.addBasicDetails.get('BillPrinting');}

  get contact(){return this.addBasicDetails.get('contact');}

  get lop(){return this.addBasicDetails.get('lop');}


  
  get bgcost() {return this.addActualDetails.get('bgcost');}

  get actualcost() {return this.addActualDetails.get('actualcost');}

  get expresponse() {return this.addActualDetails.get('expresponse');}

  get expRevenue() {return this.addActualDetails.get('expRevenue');}

  get expSales() {return this.addActualDetails.get('expSales');}

  get actualSales() {return this.addActualDetails.get('actualSales');}

  get addCity() {return this.addActualDetails.get('addCity');}

  // get actualROI() {return this.addActualDetails.get('actualROI');}

 

  addCampaignDetailForm() {
    this.addBasicDetails = this.fb.group({
      cmpName: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      cmptype: new FormControl('',[Validators.required, ]),
      Product: new FormControl('',[Validators.required,]),
      Assigned: new FormControl('',[Validators.required,  ]),
      startdate: new FormControl('',[Validators.required, ]),
      // addDob: new FormControl('',[Validators.maxLength(50)]),
      addEnd: new FormControl('',[Validators.required,]),
      selectStatus: new FormControl('',[Validators.required,]),
      gstnature: new FormControl('',[Validators.required,]),
      BillPrinting: new FormControl('',[Validators.required,]),
      contact: new FormControl('',[Validators.required,]),
      lop: new FormControl('',[Validators.required,]),
    
    })
  }

  addActualexpectationForm() {
    this.addActualDetails = this.fb.group({
      bgcost: new FormControl('',[Validators.required, ]),
      actualcost: new FormControl('',[Validators.required, ]),
      expresponse: new FormControl('',[Validators.required,]),
      expRevenue: new FormControl('',[Validators.required,  ]),
      expSales: new FormControl('',[Validators.required, ]),
      actualSales: new FormControl('',[Validators.required,]),
      addCity: new FormControl('',[Validators.required, ]),
      // actualROI: new FormControl('',[Validators.required, ]),
    })
  }

  
  
  
  createCustomerForm() {
    this.addCustomerForm = this.fb.group({
      customerName:new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator]),
      // customerlastName:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      email:new FormControl('',[Validators.required,Validators.maxLength(70),this.noWhiteSpaceValidator]),
      phone:new FormControl('',[Validators.required,Validators.maxLength(15),this.noWhiteSpaceValidator]),
      // status:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      country:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      city:new FormControl('',[Validators.required,Validators.maxLength(30),this.noWhiteSpaceValidator]),
      postalCode:new FormControl('',[Validators.required,Validators.maxLength(8),this.noWhiteSpaceValidator]),
    })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveCustomer() {
    this.alertService.createAlert('FFV added successfully', 1);
    this.dialogRef.close();
  }
  close(): void {
    this.dialogRef.close();
  }


}

