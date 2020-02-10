import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

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
    this.selectedFile = this.files[0]['children'][0];
    this.newGroups = [
      {name:"H&P Med / Fam / Social History"},
      {name:"New Clinical Form"},
      {name:"H&P CC / History of Present Illness (Pain model)"},
      {name:"Initial Pain Management Template"},
      {name:"Cervical Epidural Steroid Injection"},
      {name:"Lumbar Spine Examination"},
      {name:"Lumbar Epidural Steroid Injection"},
      {name:"New Patient Visit"},
      {name:"Epidural Steriod Injection Procedure"},
      {name:"Pain Management"},
    ];
    this.selectedListItem = this.newGroups[0] 
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
    
    if(event.node.label == "Prescreening") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/prescreening");
    }
    if(event.node.label == "Clinical Observations") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/clinicalObservations");
    }
    if(event.node.label == "Notes") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/notes");
    }
    if(event.node.label == "Claims") {
      this.router.navigateByUrl("/sapphire/patients/patientdashboard/cases/Claims");
    }
  }


}
