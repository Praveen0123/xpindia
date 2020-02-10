import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { AddRemarksModalComponent } from '../unscheduled/add-remarks-modal/add-remarks-modal.component';
import { Settings } from '../../../../app.settings.model';
import { PatientNotesInManageVisitsComponent } from '../prescreening/patient-notes-in-manage-visits/patient-notes-in-manage-visits.component';
import { PatientDocsInManageVisitsComponent } from '../prescreening/patient-docs-in-manage-visits/patient-docs-in-manage-visits.component';
import { AddClaimDialogInManageVisitsComponent } from './add-claim-dialog-in-manage-visits/add-claim-dialog-in-manage-visits.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

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
    {id:1 , internalPhysician:"Jonny Bairstow" , caseNumber:"100235" , patient:"Kane Williamson" , notes:"Add" , normal:5 , appointmentDate:"08/30/2019" , confirmationDate:"08/22/2019" , time:"03:30 PM" , selected:0 , select:1 , selecte:4 , questionnaire:"0/12" , docs:"3" , claims:"create" , appointmentCode:"ESI CERVICAL"},
    {id:2 , internalPhysician:"Eion Morgan" , caseNumber:"102547" , patient:"Ben Fokes" , notes:"Add" , normal:6 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , time:"09:30 AM" , selected:0 , select:2 , selecte:4 , questionnaire:"0/12" , docs:"5" , claims:"create" , appointmentCode:"ESI LUMBAR 2"},
    {id:3 , internalPhysician:"Jofra Archer" , caseNumber:"103647" , patient:"Martin Guptil" , notes:"View" , normal:5 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , time:"10:00 AM" , selected:4 , select:0 , selecte:4 , questionnaire:"0/12" , docs:"1" , claims:"create" , appointmentCode:"STEROID JOINT INJECTION WRIST"},
    {id:4 , internalPhysician:"Chris Wokes" , caseNumber:"012487" , patient:"Tom Latham" , notes:"Add" , normal:5 , appointmentDate:"09/05/2019" , confirmationDate:"08/29/2019" , time:"04:15 PM" , selected:0 , select:2 , selecte:4 , questionnaire:"0/12" , docs:"4" , claims:"create" , appointmentCode:"OFFICE OUTPATIENT NEW"},
    {id:5 , internalPhysician:"Ben Stokes" , caseNumber:"961247" , patient:"Lukie Ferguson" , notes:"View" , normal:6 , appointmentDate:"09/10/2019" , confirmationDate:"08/30/2019" , time:"08:20 AM" , selected:1 , select:1 , selecte:4 , questionnaire:"0/12" , docs:"2" , claims:"create" , appointmentCode:"FOLLOW-UP"}
    ]
}

openNotesDialog(item) {
  let dialogRef = this.dialog.open(PatientNotesInManageVisitsComponent,{
    data:item,
    height:'auto',
    width:'600px',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {

  });
}

openClaimsDialog(item) {
  let dialogRef = this.dialog.open(AddClaimDialogInManageVisitsComponent,{
    data:item,
    height:'auto',
    width:'auto',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {

  });
}

openRemarksModal(item) {
  let dialogRef = this.dialog.open(AddRemarksModalComponent,{
    data:item,
    height:'auto',
    width:'600px',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {

  });
}

openDocsDialog(item) {
  let dialogRef = this.dialog.open(PatientDocsInManageVisitsComponent,{
    data:item,
    height:'auto',
    width:'600px',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {
    
  })
}



deleteVisit(){
//this.alertService.createAlert('Successfully deleted.', 1);
}
}
