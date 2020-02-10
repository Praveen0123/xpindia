import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';
import { AddRemarksModalComponent } from '../../../../manage-visits/unscheduled/add-remarks-modal/add-remarks-modal.component';
import { PatientNotesInManageVisitsComponent } from '../../../../manage-visits/prescreening/patient-notes-in-manage-visits/patient-notes-in-manage-visits.component';
import { AddDocumentsInRecommendationsComponent } from './add-documents-in-recommendations/add-documents-in-recommendations.component';

@Component({
  selector: 'app-recommendations-of-all-visits',
  templateUrl: './recommendations-of-all-visits.component.html',
  styleUrls: ['./recommendations-of-all-visits.component.scss']
})
export class RecommendationsOfAllVisitsComponent implements OnInit {

  newGroups:any;
  selectedListItem:any;
  locationOptions = ["Medial","Lateral"];
  selectedFile: any = [];
  files = [];
  tableList: any;
  public settings: Settings;
  public item :any;
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

  constructor(public treeService: TreeService,public appSettings: AppSettings,public dialog: MatDialog,public router:Router) {
    this.settings = this.appSettings.settings;
   }

  ngOnInit() {
    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    this.newGroups = [
      {name:"Onpatient / Check-In"},
      {name:"CC / History of Patient Illness"},
      {name:"Med / Fam / Social History"},
      {name:"Medications & Allergies"},
      {name:"Review of Systems"},
      {name:"Physical Exam"},
      {name:"Assessment"},
      {name:"Plan"},
      {name:"ESI Images"}
    ];
    this.selectedListItem = this.newGroups[0];
    this.item = "Onpatient / Check-In";
    this.tableList = [  
      {id:1 , internalPhysician:"Jonny Bairstow" , caseNumber:"100235" , patient:"Kane Williamson" , notes:"Add" , normal:5 , appointmentDate:"08/30/2019" , confirmationDate:"08/22/2019" , docs:"3" , pharmacy:"CVS Pharmacy" , businessCenter:"Core Health" , actualRecommendationValue:"Crosin, combiflam" , selected:1 , lengthOfTreatment:4},
      {id:2 , internalPhysician:"Eion Morgan" , caseNumber:"102547" , patient:"Ben Fokes" , notes:"Add" , normal:6 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , docs:"5" , pharmacy:"Casa De Amigos Clinic Pharmacy" , businessCenter:"Prime Orthopedics" , actualRecommendationValue:"ibuprufin" , selected:0 , lengthOfTreatment:"5 days"},
      {id:3 , internalPhysician:"Jofra Archer" , caseNumber:"103647" , patient:"Martin Guptil" , notes:"View" , normal:5 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , docs:"1" , pharmacy:"Walgreens Pharmacy" , businessCenter:"Core Health" , actualRecommendationValue:"ibuprufin" , selected:0 , lengthOfTreatment:"5 days"},
      {id:4 , internalPhysician:"Chris Wokes" , caseNumber:"012487" , patient:"Tom Latham" , notes:"Add" , normal:5 , appointmentDate:"09/05/2019" , confirmationDate:"08/29/2019" , docs:"4" , pharmacy:"Canal Pharmacy " , businessCenter:"Prime Orthopedics" , actualRecommendationValue:"Crosin, combiflam" , selected:1 , lengthOfTreatment:4},
      ]
  }

  listNewClick(event, newValue) {

    this.selectedListItem = newValue;
    this.item = newValue.name;
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  nodeSelect(event) {
    if(event.node.label == "Recommendations")
    this.router.navigateByUrl("/sapphire/patients/patientdashboard/clinicalNote/recommendationsOfAllVisits")
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
    let dialogRef = this.dialog.open(AddDocumentsInRecommendationsComponent,{
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
