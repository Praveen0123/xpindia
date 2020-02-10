import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss']
})
export class SoapComponent implements OnInit {

  newGroups:any;
  treeElement: any;
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
      {name:"Onpatient / Check-In"},
      {name:"Subjective"},
      {name:"Objective"},
      {name:"Assessment"},
      {name:"Plan"},
      {name:"Medications & Allergies"},
      {name:"ESI Images"},
      {name:"Symptoms"}
    ];
    this.selectedListItem = this.newGroups[0] ;
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
    if(event.node.label == "Recommendations") {
      this.treeElement = event.node.label;
    }
    else {
      this.treeElement = null;
    }
  }

}
