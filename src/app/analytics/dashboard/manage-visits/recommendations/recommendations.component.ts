import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { AddRemarksModalComponent } from '../unscheduled/add-remarks-modal/add-remarks-modal.component';
import { PatientNotesInManageVisitsComponent } from '../prescreening/patient-notes-in-manage-visits/patient-notes-in-manage-visits.component';
import { PatientDocsInManageVisitsComponent } from '../prescreening/patient-docs-in-manage-visits/patient-docs-in-manage-visits.component';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  tableList: any;
  physicianOptions = [{id:1 , value:"Fabrice Vanegas"} , {id:2 , value:"Stephen McGill"} , {id:3 , value:"Otto Rieder"} , {id:4 , value:"Joe Deu-Ngoc"} , {id:5 , value:"Chris Soles"}];
  businessOptions = [{id:1 , value:"Core Health"} , {id:2 , value:"Sapphire MD"} , {id:3 , value:"Pain Allieviation"} , {id:4 , value:"Centre for Pain Relief"} , {id:5 , value:"Prime Orthopedics"}];
  statusOptions = [{id:1 , value:"Incomplete"} , {id:2 , value:"Fax-out"} , {id:3 , value:"Confirmed"}];
  pharmacyOptions = [{id:1 , value:"CVS Pharmacy"} , {id:2 , value:"Casa De Amigos Clinic Pharmacy"} , {id:3 , value:"Walgreens Pharmacy"} , {id:4 , value:"Canal Pharmacy"} , {id:5 , value:"San Jose Clinic Pharmacy"}];
  imagingOptions = [{id:1 , value:"CVS Pharmacy"} , {id:2 , value:"Casa De Amigos Clinic Pharmacy"} , {id:3 , value:"Walgreens Pharmacy"} , {id:4 , value:"Canal Pharmacy"} , {id:5 , value:"San Jose Clinic Pharmacy"}];


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
    {id:1 , internalPhysician:"Jonny Bairstow" , caseNumber:"100235" , patient:"Kane Williamson" , notes:"Add" , normal:5 , appointmentDate:"08/30/2019" , confirmationDate:"08/22/2019" , docs:"3" , pharmacy:"CVS Pharmacy" , businessCenter:"Core Health	" , actualRecommendationValue:"Crosin, combiflam" , selected:1 , lengthOfTreatment:4},
    {id:2 , internalPhysician:"Eion Morgan" , caseNumber:"102547" , patient:"Ben Fokes" , notes:"Add" , normal:6 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , docs:"5" , pharmacy:"Casa De Amigos Clinic Pharmacy" , businessCenter:"Prime Orthopedics" , actualRecommendationValue:"ibuprufin" , selected:0 , lengthOfTreatment:"5 days"},
    {id:3 , internalPhysician:"Jofra Archer" , caseNumber:"103647" , patient:"Martin Guptil" , notes:"View" , normal:5 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , docs:"1" , pharmacy:"Walgreens Pharmacy" , businessCenter:"Core Health" , actualRecommendationValue:"paracetmol" , selected:1 , lengthOfTreatment:4},
    {id:4 , internalPhysician:"Chris Wokes" , caseNumber:"012487" , patient:"Tom Latham" , notes:"Add" , normal:5 , appointmentDate:"09/05/2019" , confirmationDate:"08/29/2019" , docs:"4" , pharmacy:"Canal Pharmacy " , businessCenter:"Prime Orthopedics" , actualRecommendationValue:"drugs" , selected:1 , lengthOfTreatment:4},
    {id:5 , internalPhysician:"Ben Stokes" , caseNumber:"961247" , patient:"Lukie Ferguson" , notes:"View" , normal:6 , appointmentDate:"09/10/2019" , confirmationDate:"08/30/2019", docs:"2" , pharmacy:"San Jose Clinic Pharmacy	" , businessCenter:"Pain Allieviation" , actualRecommendationValue:"NA" , selected:0 , lengthOfTreatment:"2 weeks"}
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
