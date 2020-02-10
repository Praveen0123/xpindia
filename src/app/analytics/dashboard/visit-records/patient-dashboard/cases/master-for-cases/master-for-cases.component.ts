import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-for-cases',
  templateUrl: './master-for-cases.component.html',
  styleUrls: ['./master-for-cases.component.scss']
})
export class MasterForCasesComponent implements OnInit {

  newGroups:any;
  selectedListItem:any;
  locationOptions = ["Medial","Lateral"];
  selectedFile: any = [];
  files = [];
  public settings: Settings;
  public item :any;

  constructor(public treeService: TreeService,public appSettings: AppSettings,public dialog: MatDialog,public router:Router) {
    this.settings = this.appSettings.settings;
   }

  ngOnInit() {
    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    // this.selectedFile = this.files[0]['children'][0];
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

}
