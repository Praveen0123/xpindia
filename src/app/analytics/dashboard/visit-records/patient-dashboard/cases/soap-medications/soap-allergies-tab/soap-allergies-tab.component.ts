import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../../app.settings';
import { Settings } from '../../../../../../../app.settings.model';
import { AddSoapMedicationComponent } from '../add-soap-medication/add-soap-medication.component';
import { AddSoapAllergyComponent } from '../add-soap-allergy/add-soap-allergy.component';

@Component({
  selector: 'app-soap-allergies-tab',
  templateUrl: './soap-allergies-tab.component.html',
  styleUrls: ['./soap-allergies-tab.component.scss']
})
export class SoapAllergiesTabComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}
public dateTime2: Date;
public dateTime3: Date;
status = ["Active","Incative"];
stepsOptionSelected: any;
onStepsOptionsSelected(event){

}

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , allergyType:"Fabrice Vanegas" , severity:'Moderate' , description:'abcdegh' , status:true},
    {id:2 , allergyType:"Stephen McGill" , severity:'Mild' , description:'abcdegh' , status:true},
    {id:3 , allergyType:"Otto Rieder" , severity:'Unknown' , description:'abcdegh' , status:false},
    {id:4 , allergyType:"Joe Deu-Ngoc" , severity:'Moderate' , description:'abcdegh' , status:true},
    {id:5 , allergyType:"Chris Soles" , severity:'Moderate' , description:'abcdegh' , status:false}
    ]
}

public openMedicationDialog(id) {
let dialogRef = this.dialog.open(AddSoapAllergyComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteMedication(){
//this.alertService.createAlert('Successfully deleted.', 1);
}
}
