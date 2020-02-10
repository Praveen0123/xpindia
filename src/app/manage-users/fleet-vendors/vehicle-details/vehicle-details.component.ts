import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  tableList:any;
  vehicleForm: FormGroup;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this vehicle?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public fb:FormBuilder,public alertService:AlertService,public dialogRef: MatDialogRef<VehicleDetailsComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
    this.createVehicleForm();
   }

  ngOnInit() {
    this.tableList = [
      {vehicleType:"30 feet" , vehicleNumber:"AP29 AA 9636"},
      {vehicleType:"9 feet" , vehicleNumber:"TS22 GA 6321"},
      {vehicleType:"22 feet" , vehicleNumber:"TS41 TH 1474"}
    ]
  }

  get vehicleType() { return this.vehicleForm.get('vehicleNumber'); }

  get vehicleNumber() { return this.vehicleForm.get('vehicleNumber'); }

  createVehicleForm() {
    this.vehicleForm = this.fb.group({
      vehicleType:new FormControl('',[Validators.required, Validators.maxLength(8),this.noWhiteSpaceValidator]),
      vehicleNumber:new FormControl('',[Validators.required, Validators.maxLength(12),this.noWhiteSpaceValidator]),
    })
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  close(): void {
    this.dialogRef.close();
  }

  saveVehicle() {
    this.alertService.createAlert("Vehicle added successfully",1);
    this.dialogRef.close();
  }

  deleteVehicle() {
    this.alertService.createAlert("Vehicle deleted successfully",1);
  }

  closeDialog() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  saveAttorney() {
    
  }

  deleteVisit(){
    //this.alertService.createAlert('Successfully deleted.', 1);
    }

}
